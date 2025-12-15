import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Perfect Click",
  description: "Award-winning digital agency creating exceptional digital experiences",
  metadataBase: new URL('https://theperfectclick.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theperfectclick.com',
    siteName: 'The Perfect Click',
    images: [
      {
        url: 'https://digital-agency.takkar.ooo/images/logo-yellow.png',
        width: 1200,
        height: 630,
        alt: 'The Perfect Click - Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Perfect Click',
    description: 'Award-winning digital agency creating exceptional digital experiences',
    images: ['https://digital-agency.takkar.ooo/images/logo-yellow.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Perfect Click',
  url: 'https://theperfectclick.com',
  logo: 'https://digital-agency.takkar.ooo/images/logo-yellow.png',
  description: 'Award-winning digital agency creating exceptional digital experiences',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://twitter.com/crafto',
    'https://linkedin.com/company/crafto',
    'https://instagram.com/crafto'
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navigation />
        {children}
        <script src="/scroll-animations.js" async></script>
      </body>
    </html>
  );
}
