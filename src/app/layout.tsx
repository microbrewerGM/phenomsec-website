import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Phenom Security - Enterprise Cybersecurity Excellence",
    template: "%s | Phenom Security"
  },
  description: "Diverse US-based cybersecurity expertise delivering cutting-edge security solutions for Fortune 500 enterprises. Research-driven. Compliance-focused. Future-ready.",
  keywords: [
    "cybersecurity",
    "enterprise security",
    "security consulting",
    "compliance",
    "SOC 2",
    "HIPAA",
    "PCI DSS",
    "ISO 27001",
    "risk assessment",
    "incident response",
    "security architecture",
    "zero trust",
    "application security",
    "DevSecOps",
    "security frameworks",
    "threat monitoring",
    "vulnerability assessment",
    "security audit"
  ],
  authors: [{ name: "Phenom Security Group" }],
  creator: "Phenom Security Phoenix",
  publisher: "Phenom Security Group",
  category: "Cybersecurity Services",
  metadataBase: new URL("https://phenomsec.com"),
  alternates: {
    canonical: "https://phenomsec.com"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phenomsec.com",
    siteName: "Phenom Security",
    title: "Phenom Security - Enterprise Cybersecurity Excellence",
    description: "Diverse US-based cybersecurity expertise delivering cutting-edge security solutions for Fortune 500 enterprises. Research-driven. Compliance-focused. Future-ready.",
    images: [
      {
        url: "/img/phenom-security-policy-pyramid.svg",
        width: 700,
        height: 500,
        alt: "Phenom Security Enterprise Cybersecurity Framework"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-token-placeholder"
  }
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
        {children}
      </body>
    </html>
  );
}
