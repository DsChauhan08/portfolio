import { NextResponse } from 'next/server';
import speakeasy from 'speakeasy';
import QRCode from 'qrcode';

export async function GET() {
	// This endpoint generates a new 2FA secret and QR code
	// Only call this ONCE during initial setup
	
	const secret = speakeasy.generateSecret({
		name: 'Portfolio Admin',
		issuer: 'DsChauhan08',
	});

	const qrCode = await QRCode.toDataURL(secret.otpauth_url!);

	return NextResponse.json({
		secret: secret.base32,
		qrCode,
		message: 'Save the secret in your .env.local as TOTP_SECRET and scan the QR code with Google Authenticator or Authy',
	});
}
