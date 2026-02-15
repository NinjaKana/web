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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://ninjakana-web.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "NinjaKana - Apprends les kana japonais en 30 jours",
  description: "Maîtrise les 92 caractères hiragana et katakana avec notre méthode basée sur la répétition espacée. Quiz gratuit pour tester ton niveau.",
  keywords: [
    "apprendre hiragana",
    "apprendre katakana",
    "hiragana",
    "katakana",
    "apprendre japonais",
    "kana japonais",
    "alphabet japonais",
    "learn japanese",
    "learn hiragana",
    "japanese app",
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NinjaKana - Apprends les kana japonais en 30 jours",
    description: "Maîtrise les 92 caractères hiragana et katakana avec notre méthode basée sur la répétition espacée.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NinjaKana",
  description: "App pour apprendre les hiragana et katakana japonais en 30 jours avec répétition espacée.",
  applicationCategory: "EducationalApplication",
  operatingSystem: ["iOS", "Android"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Gratuit avec options premium",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "23",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
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
