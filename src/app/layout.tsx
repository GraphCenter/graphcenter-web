import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GraphCenter | Architecting Autonomous Intelligence",
  description: "Architecting the Next Generation of Autonomous Enterprise Ecosystems. Built for the scale of thought.",
};

// Without this, mobile browsers fall back to a ~980px virtual viewport and
// zoom out instead of laying out at the device's actual width — every
// component-level responsive fix is moot without it.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NetworkBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
