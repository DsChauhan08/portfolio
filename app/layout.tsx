import type { Metadata } from "next";
import { inter } from "@/lib/fonts";

import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
	title: "Dhananjay Singh Chauhan",
	description: "Security Engineer, Software Developer & Open Source Contributor",
	icons: [
		{
			url: "/api/icon",
			rel: "icon",
			sizes: "144x144",
		},
		{
			url: "/api/apple-touch-icon",
			rel: "apple-touch-icon",
			sizes: "180x180",
		}
	],
	openGraph: {
		type: "website",
		images: {
			url: "/api/og",
			alt: "Dhananjay Singh Chauhan",
			width: 1200,
			height: 630,
			type: "image/png",
		},
		title: "Dhananjay Singh Chauhan",
		description: "Security Engineer, Software Developer & Open Source Contributor",
		url: "https://dschauhan08.dev",
	},
	twitter: {
		images: {
			url: "/api/og",
			alt: "Dhananjay Singh Chauhan",
			width: 1200,
			height: 630,
			type: "image/png",
		},
		card: "summary_large_image",
		title: "Dhananjay Singh Chauhan",
		description: "Security Engineer, Software Developer & Open Source Contributor",
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased dark bg-background text-foreground w-screen h-screen`}>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
