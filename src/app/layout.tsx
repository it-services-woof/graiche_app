import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { SectionVideoHero } from "@/components/SectionVideoHero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Graiche",
	description: "Graiche App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased bg-[#080808]`}>
				<SectionVideoHero />
				{children}
			</body>
		</html>
	);
}
