import type { Metadata } from "next";
import { Geist, Geist_Mono, Yellowtail, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const yellowtail = Yellowtail({
  weight: "400",
  variable: "--font-yellowtail",
});

const openSans = Open_Sans({
  weight: "variable",
  variable: "--font-opensans",
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
      className={`${openSans.className} ${yellowtail.variable} ${openSans.variable}`}
    >
      <body suppressHydrationWarning className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
