import AboutHeroSection from '@/components/sections/AboutHeroSection';
import AboutTwoColumnSection from '@/components/sections/AboutTwoColumnSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import TeamSection from '@/components/sections/TeamSection';
import KeywordsSection from '@/components/sections/KeywordsSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Digital Agency Team | The Perfect Click',
  description: 'Meet our award-winning digital agency team. Learn about our expertise, values, and the passionate professionals behind your digital success.',
  keywords: ['about digital agency', 'digital agency team', 'web design company', 'agency values', 'meet the team'],
  openGraph: {
    title: 'About The Perfect Click',
    description: 'Meet our award-winning team and learn about our digital agency expertise',
    type: 'website',
    url: 'https://theperfectclick.com/agency',
    images: [
      {
        url: 'https://digital-agency.takkar.ooo/images/pro.png',
        width: 1200,
        height: 630,
        alt: 'The Perfect Click - About Our Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Perfect Click',
    description: 'Meet our award-winning team and learn about our digital agency expertise',
    images: ['https://digital-agency.takkar.ooo/images/pro.png'],
  },
  alternates: {
    canonical: 'https://theperfectclick.com/agency',
  },
};

const agencyPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About Us | Digital Agency Team | The Perfect Click',
  description: 'Meet our award-winning digital agency team. Learn about our expertise, values, and the passionate professionals behind your digital success.',
  url: 'https://theperfectclick.com/agency',
  identifier: 'https://theperfectclick.com/agency',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'The Perfect Click',
    url: 'https://theperfectclick.com'
  },
  about: {
    '@type': 'Thing',
    name: 'Digital Agency Team',
    description: 'Award-winning digital agency team specializing in web design, development, and digital marketing'
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
    ],
    knowsAbout: [
      'Web Design',
      'Web Development',
      'Digital Marketing',
      'Branding',
      'SEO Services',
      'Content Strategy',
      'User Experience Design',
      'Mobile Development'
    ]
  },
  keywords: ['about digital agency', 'digital agency team', 'web design company', 'agency values', 'meet the team'],
  dateModified: '2024-12-01',
  image: 'https://digital-agency.takkar.ooo/images/pro.png'
};

export default function AgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(agencyPageSchema)
        }}
      />
      <div className="min-h-screen bg-white">
      <AboutHeroSection />
      <AboutTwoColumnSection />
      <WhyUsSection />
      <TeamSection />
      {/* <KeywordsSection /> */}
      <MarqueeSection />
      <Footer />
    </div>
    </>
  );
}
