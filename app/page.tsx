import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import StrategySection from '@/components/sections/StrategySection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Agency | Web Design & Development Services | The Perfect Click',
  description: 'Award-winning digital agency specializing in custom web development, branding, and digital marketing. Transform your business with our proven digital solutions.',
  keywords: ['digital agency', 'web design', 'custom development', 'branding services', 'digital marketing', 'SEO services'],
  openGraph: {
    title: 'The Perfect Click',
    description: 'Transform your business with our award-winning digital services including web design, development, and digital marketing.',
    type: 'website',
    url: 'https://theperfectclick.com',
    images: [
      {
        url: 'https://digital-agency.takkar.ooo/images/homepage.png',
        width: 1200,
        height: 630,
        alt: 'The Perfect Click - Digital Agency Homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Perfect Click - Digital Agency',
    description: 'Transform your business with our award-winning digital services',
    images: ['https://digital-agency.takkar.ooo/images/homepage.png'],
  },
  alternates: {
    canonical: 'https://theperfectclick.com',
  },
};

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The Perfect Click | Web Design & Development Services',
  description: 'Award-winning digital agency specializing in custom web development, branding, and digital marketing. Transform your business with our proven digital solutions.',
  url: 'https://theperfectclick.com',
  identifier: 'https://theperfectclick.com',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'The Perfect Click',
    url: 'https://theperfectclick.com'
  },
  about: {
    '@type': 'Thing',
    name: 'Digital Agency Services',
    description: 'Web design, development, branding, and digital marketing services'
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'The Perfect Click',
    url: 'https://theperfectclick.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://digital-agency.takkar.ooo/images/logo-yellow.png'
    },
    description: 'Award-winning digital agency specializing in web design, development, branding, and digital marketing services.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Canada',
      addressRegion: 'BC',
      addressLocality: 'Vancouver',
      streetAddress: '123 Granville Street'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.instagram.com/crafto.digital',
      'https://www.linkedin.com/company/crafto-digital',
      'https://twitter.com/crafto_digital'
    ]
  },
  keywords: ['digital agency', 'web design', 'custom development', 'branding services', 'digital marketing', 'SEO services'],
  dateModified: '2024-12-01',
  image: 'https://digital-agency.takkar.ooo/images/homepage.png'
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema)
        }}
      />
      <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <StrategySection />
      <BlogSection />
      {/* <ContactSection /> */}
      <MarqueeSection />
      <Footer />
    </div>
    </>
  );
}
