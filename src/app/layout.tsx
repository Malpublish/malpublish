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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Malpublish - To publish in a manner that constitutes malpractice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malpublish - Definition & Etymology",
    description: "Malpublish: To publish in a manner that constitutes malpractice.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://malpublish.org"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://malpublish.org/#organization",
      "name": "Malpublish",
      "url": "https://malpublish.org",
      "description": "Defining malpublishing and promoting ethical publishing standards",
      "founder": {
        "@type": "Person",
        "name": "Roarke Clinton"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://malpublish.org/#webpage",
      "url": "https://malpublish.org",
      "name": "Malpublish - Definition & Etymology",
      "description": "Malpublish: To publish in a manner that constitutes malpractice. A term coined in 2023 to address the root causes of misinformation.",
      "isPartOf": { "@id": "https://malpublish.org/#organization" },
      "dateCreated": "2023-03-01",
      "dateModified": "2025-01-08"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
