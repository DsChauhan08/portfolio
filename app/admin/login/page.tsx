'use client';

import { signIn } from 'next-auth/react';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { jetbrainsMono } from '@/lib/fonts';

export default function AdminLogin() {
	const [password, setPassword] = useState('');
	const [token, setToken] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		try {
			const result = await signIn('credentials', {
				password,
				token,
				redirect: false,
			});

			if (result?.error) {
				setError('Invalid password or 2FA code');
				setToken(''); // Clear token on error
			} else {
				router.push('/admin/dashboard');
				router.refresh();
			}
		} catch {
			setError('An error occurred. Please try again.');
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				<div className="bg-slate-900 border-2 border-slate-700 rounded-2xl p-8 shadow-2xl">
					<div className="mb-8 text-center">
						<h1 className={`${jetbrainsMono.className} text-3xl font-bold text-sky-400 mb-2`}>
							Admin Login
						</h1>
						<p className="text-slate-400 text-sm">
							Secure access to blog management
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label htmlFor="password" className={`${jetbrainsMono.className} block text-sm font-semibold text-slate-300 mb-2`}>
								Password
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								minLength={12}
								className={`${jetbrainsMono.className} w-full px-4 py-3 bg-slate-800 border-2 border-slate-600 rounded-xl text-slate-200 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all`}
								placeholder="Enter your password"
								disabled={isLoading}
							/>
						</div>

						<div>
							<label htmlFor="token" className={`${jetbrainsMono.className} block text-sm font-semibold text-slate-300 mb-2`}>
								2FA Code
							</label>
							<input
								type="text"
								id="token"
								value={token}
								onChange={(e) => setToken(e.target.value.replace(/\D/g, '').slice(0, 6))}
								required
								maxLength={6}
								pattern="[0-9]{6}"
								className={`${jetbrainsMono.className} w-full px-4 py-3 bg-slate-800 border-2 border-slate-600 rounded-xl text-slate-200 text-center text-2xl tracking-widest focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all`}
								placeholder="000000"
								disabled={isLoading}
							/>
							<p className="text-xs text-slate-500 mt-1 text-center">
								Enter code from Google Authenticator or Authy
							</p>
						</div>

						{error && (
							<div className="bg-red-900/20 border-2 border-red-500/50 rounded-xl p-3">
								<p className={`${jetbrainsMono.className} text-red-400 text-sm text-center`}>
									{error}
								</p>
							</div>
						)}

						<button
							type="submit"
							disabled={isLoading}
							className={`${jetbrainsMono.className} w-full bg-sky-500 hover:bg-sky-400 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none`}
						>
							{isLoading ? 'Verifying...' : 'Login'}
						</button>
					</form>

					<div className="mt-6 pt-6 border-t border-slate-700">
						<div className={`${jetbrainsMono.className} text-xs text-slate-500 space-y-1`}>
							<p>🔒 Password protected</p>
							<p>🔐 Two-factor authentication</p>
							<p>🌐 IP whitelist enforced</p>
						</div>
					</div>
				</div>

				<p className={`${jetbrainsMono.className} text-center text-slate-600 text-xs mt-4`}>
					Security Engineer Grade Protection
				</p>
			</div>
		</div>
	);
}
