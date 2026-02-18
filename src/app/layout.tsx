import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICSEMII 2027 | IEEE International Conference on Smart Energy, Mobility, and Intelligent Infrastructure",
  description: "Join ICSEMII 2027, the premier IEEE conference on Smart Energy, Mobility, and Intelligent Infrastructure at Carmel College of Engineering and Technology, Alappuzha, Kerala.",
  keywords: ["IEEE", "Conference", "Smart Energy", "Mobility", "Intelligent Infrastructure", "ICSEMII", "Kerala", "Engineering", "Technology", "Research"],
  openGraph: {
    title: "ICSEMII 2027 | IEEE International Conference",
    description: "Join leading researchers and practitioners to explore the future of smart computing technologies and their applications.",
    type: "website",
    locale: "en_US",
    siteName: "ICSEMII 2027",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICSEMII 2027 | IEEE International Conference",
    description: "Join leading researchers and practitioners to explore the future of smart computing technologies and their applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
