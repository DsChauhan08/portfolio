import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
	// This endpoint generates a password hash
	// Only use this ONCE during initial setup
	
	const { password } = await request.json();

	if (!password || password.length < 12) {
		return NextResponse.json(
			{ error: 'Password must be at least 12 characters' },
			{ status: 400 }
		);
	}

	const hash = await bcrypt.hash(password, 12);

	return NextResponse.json({
		hash,
		message: 'Save this hash in your .env.local as ADMIN_PASSWORD_HASH',
	});
}
