import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Chetan Singh | Team Leader – MIS Operations & Business Intelligence",
  description:
    "Official portfolio of Chetan Singh. 5+ years in MIS Operations, Google Data Studio, Google AppSheet, process automation, Python scripting, and AI-driven business analytics.",
  keywords: [
    "Chetan Singh",
    "MIS Operations",
    "Team Leader",
    "Quess Corp",
    "Business Intelligence",
    "Google Data Studio",
    "Google AppSheet",
    "Advanced Excel",
    "Process Automation",
    "Jaipur",
  ],
  authors: [{ name: "Chetan Singh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-blue-500/20 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
