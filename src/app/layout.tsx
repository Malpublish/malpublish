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
  title: "Malpublish - Definition & Etymology",
  description: "Malpublish: To publish in a manner that constitutes malpractice. A term coined in 2023 to address the root causes of misinformation.",
  keywords: ["malpublish", "malpublishing", "publishing ethics", "misinformation", "media ethics"],
  authors: [{ name: "Roarke Clinton" }],
  openGraph: {
    title: "Malpublish - Definition & Etymology",
    description: "Malpublish: To publish in a manner that constitutes malpractice.",
    url: "https://malpublish.org",
    siteName: "Malpublish",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malpublish - Definition & Etymology",
    description: "Malpublish: To publish in a manner that constitutes malpractice.",
  },
  metadataBase: new URL("https://malpublish.org"),
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
