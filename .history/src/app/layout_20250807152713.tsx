// src/app/layout.tsx
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OUTIS | Community & Content Strategist",
  description: "Helping projects connect with their audience by turning complex ideas into clear stories and building communities where people feel they belong.",
  icons: {
    icon: "/assets/favicon.png",
  },
  openGraph: {
    title: "Outis",
    description: "Helping projects connect with their audience by turning complex ideas into clear stories and building communities where people feel they belong.",
    url: "https://outis.id", // Your real URL
    siteName: "OUTIS | Community & Content Strategist",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Outis Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OUTIS | Community & Content Strategist",
    description: "Helping projects connect with their audience by turning complex ideas into clear stories and building communities where people feel they belong.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
