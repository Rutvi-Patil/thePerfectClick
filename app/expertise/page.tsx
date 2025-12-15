import Footer from '@/components/sections/Footer';
import MarqueeSection from '@/components/sections/MarqueeSection';
import ExpertiseHeroSection from '@/components/sections/ExpertiseHeroSection';
import ExpertiseDetailSection from '@/components/sections/ExpertiseDetailSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Expertise | Digital Agency Services | The Perfect Click',
  description: 'Discover our digital agency expertise in web design, development, branding, and digital marketing. Professional services tailored to grow your business.',
  keywords: ['digital agency services', 'web design expertise', 'development services', 'digital marketing', 'branding expertise'],
  openGraph: {
    title: 'Our Digital Agency Expertise',
    description: 'Professional web design, development, and digital marketing services',
    type: 'website',
    url: 'https://theperfectclick.com/expertise',
    images: [
      {
        url: '/images/newH.png',
        width: 1200,
        height: 630,
        alt: 'The Perfect Click - Our Services and Expertise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Perfect Click - Our Expertise',
    description: 'Professional digital agency services to grow your business',
    images: ['/images/newH.png'],
  },
  alternates: {
    canonical: 'https://theperfectclick.com/expertise',
  },
};

const expertiseServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Agency Services',
  description: 'Professional digital agency services including web design, development, branding, and digital marketing tailored to grow your business.',
  provider: {
    '@type': 'Organization',
    name: 'The Perfect Click',
    url: 'https://theperfectclick.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://theperfectclick.com/images/logo-yellow.png'
    }
  },
  serviceType: ['Web Design', 'Web Development', 'Branding', 'Digital Marketing', 'SEO', 'Content Strategy'],
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Agency Services Catalog',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design',
          description: 'Custom website design services tailored to your brand'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Professional web development using modern technologies'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Branding',
          description: 'Complete branding solutions for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing',
          description: 'Comprehensive digital marketing strategies'
        }
      }
    ]
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://theperfectclick.com/expertise'
  }
};

export default function ExpertisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(expertiseServiceSchema)
        }}
      />
      <div className="min-h-screen bg-white">
      <main>
        <ExpertiseHeroSection />
        <ExpertiseDetailSection />
      </main>
      
      <MarqueeSection />
      <Footer />
    </div>
    </>
  );
}
