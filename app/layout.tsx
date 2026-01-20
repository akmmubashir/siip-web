import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIIPs - The Participation Infrastructure Layer",
  description:
    "SIIPs is building the participation infrastructure layer - converting verified transactions into participation identity, merchant retention strength, and long-term circulation, without touching settlement or tax",
  keywords: [
    "SIIPs",
    "Participation Infrastructure",
    "Bitcoin",
    "Merchant Retention",
    "Economic Identity",
    "Transaction Verification",
    "Decentralized Finance",
    "Crypto Payments",
    "Blockchain Technology",
    "Digital Currency",
    "Financial Inclusion",
    "Merchant Solutions",
    "Economic Participation",
    "Bitcoin Adoption",
    "Crypto Infrastructure",
    "Decentralized Applications",
  ],
  alternates: {
    canonical: "https://siip-web.vercel.app",
  },
  openGraph: {
    title: "SIIPs - The Participation Infrastructure Layer",
    description:
      "SIIPs is building the participation infrastructure layer - converting verified transactions into participation identity, merchant retention strength, and long-term circulation, without touching settlement or tax",
    url: "https://siip-web.vercel.app",
    siteName: "SIIPs",
    images: "/siip.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIIPs - The Participation Infrastructure Layer",
    description:
      "SIIPs is building the participation infrastructure layer - converting verified transactions into participation identity, merchant retention strength, and long-term circulation, without touching settlement or tax",
    images: ["/siip.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
