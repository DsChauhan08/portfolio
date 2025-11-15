import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import bcrypt from 'bcryptjs';
import speakeasy from 'speakeasy';

export const { auth, signIn, signOut, handlers } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const { password, token } = credentials;

				// Verify password
				const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH!;
				const isPasswordValid = await bcrypt.compare(
					password as string,
					ADMIN_PASSWORD_HASH
				);

				if (!isPasswordValid) {
					return null;
				}

				// Verify 2FA token
				const TOTP_SECRET = process.env.TOTP_SECRET!;
				const isTOTPValid = speakeasy.totp.verify({
					secret: TOTP_SECRET,
					encoding: 'base32',
					token: token as string,
					window: 2, // Allow 2 time steps (60 seconds) of drift
				});

				if (!isTOTPValid) {
					return null;
				}

				// Return user object if authentication successful
				return {
					id: '1',
					name: 'Admin',
					email: 'admin@portfolio.local',
				};
			},
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 2, // 2 hours
	},
	secret: process.env.NEXTAUTH_SECRET!,
});
