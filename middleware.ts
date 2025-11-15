import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// IP whitelist - add your home IP and Cloudflare IPs
const ALLOWED_IPS = process.env.ALLOWED_IPS?.split(',') || [];

// Cloudflare IP ranges (these are examples, add current ones from https://www.cloudflare.com/ips/)
const CLOUDFLARE_IP_RANGES = [
	'173.245.48.0/20',
	'103.21.244.0/22',
	'103.22.200.0/22',
	'103.31.4.0/22',
	'141.101.64.0/18',
	'108.162.192.0/18',
	'190.93.240.0/20',
	'188.114.96.0/20',
	'197.234.240.0/22',
	'198.41.128.0/17',
	'162.158.0.0/15',
	'104.16.0.0/13',
	'104.24.0.0/14',
	'172.64.0.0/13',
	'131.0.72.0/22',
];

function isIPInRange(ip: string, range: string): boolean {
	if (range.includes('/')) {
		// CIDR notation
		const [rangeIP, prefixLength] = range.split('/');
		const ipNum = ipToNumber(ip);
		const rangeIPNum = ipToNumber(rangeIP);
		const mask = ~((1 << (32 - parseInt(prefixLength))) - 1);
		return (ipNum & mask) === (rangeIPNum & mask);
	}
	return ip === range;
}

function ipToNumber(ip: string): number {
	return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0);
}

function isIPAllowed(ip: string | null): boolean {
	if (!ip) return false;
	
	// Check explicit whitelist
	if (ALLOWED_IPS.some(allowedIP => isIPInRange(ip, allowedIP))) {
		return true;
	}
	
	// Check Cloudflare ranges
	if (CLOUDFLARE_IP_RANGES.some(range => isIPInRange(ip, range))) {
		return true;
	}
	
	// Allow localhost in development
	if (process.env.NODE_ENV === 'development' && (ip === '127.0.0.1' || ip === '::1')) {
		return true;
	}
	
	return false;
}

export default auth(async function middleware(req: NextRequest) {
	const pathname = req.nextUrl.pathname;

	// Apply IP restriction only to /admin routes
	if (pathname.startsWith('/admin')) {
		// Get client IP (check Cloudflare headers first, then X-Forwarded-For, then remote address)
		const clientIP = 
			req.headers.get('cf-connecting-ip') ||
			req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
			req.headers.get('x-real-ip') ||
			req.ip ||
			'unknown';

		if (!isIPAllowed(clientIP)) {
			console.warn(`Blocked admin access from IP: ${clientIP}`);
			return new NextResponse('Access Denied', { status: 403 });
		}
	}

	return NextResponse.next();
});

export const config = {
	// Match all admin routes except API routes and static files
	matcher: ['/admin/:path*'],
};
