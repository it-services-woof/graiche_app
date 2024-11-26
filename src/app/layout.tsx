import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SectionHero } from "@/components/section-hero";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ID Pet Woof para Graiche",
	description: "A Identidade Pet mais inteligente",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} flex flex-col items-center antialiased bg-[#080808]`}
			>
				<SectionHero />
				{children}
				<SpeedInsights />
				<Toaster />
			</body>
		</html>
	);
}
