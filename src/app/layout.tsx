import type { Metadata } from "next";
import { Geist, Geist_Mono, Yellowtail, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const yellowtail = Yellowtail({
	weight: "400",
	variable: "--font-yellowtail",
	subsets: ["latin"],
});

const openSans = Open_Sans({
	weight: "variable",
	variable: "--font-opensans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "UofT Baja",
	description: "UofT Baja Team",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`antialiased ${openSans.className} ${yellowtail.variable} ${openSans.variable}`}
		>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</head>
			<body suppressHydrationWarning className="overflow-x-hidden">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
