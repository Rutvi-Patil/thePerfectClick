import ContactHeroSection from '@/components/sections/ContactHeroSection';
import ContactSection from '@/components/sections/ContactSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Digital Agency | The Perfect Click',
  description: 'Get in touch with our award-winning digital agency. Let\'s discuss your web design, development, and digital marketing needs.',
  keywords: ['contact digital agency', 'web design inquiry', 'digital marketing consultation', 'get in touch'],
  openGraph: {
    title: 'Contact The Perfect Click',
    description: 'Ready to transform your digital presence? Get in touch with our team today.',
    type: 'website',
    url: 'https://theperfectclick.com/contact',
    images: [
      {
        url: '/images/office.png',
        width: 1200,
        height: 630,
        alt: 'The Perfect Click - Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact The Perfect Click',
    description: 'Ready to transform your digital presence? Get in touch with our team today.',
    images: ['/images/office.png'],
  },
  alternates: {
    canonical: 'https://theperfectclick.com/contact',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Perfect Click',
  description: 'Award-winning digital agency specializing in web design, development, branding, and digital marketing services.',
  url: 'https://theperfectclick.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://theperfectclick.com/images/logo-yellow.png'
  },
  image: 'https://theperfectclick.com/images/office.png',
  telephone: '+1-555-0123',
  email: 'hello@theperfectclick.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Canada',
    addressRegion: 'BC',
    addressLocality: 'Vancouver',
    streetAddress: '123 Granville Street'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.2827,
    longitude: -123.1207
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: [
    'https://www.instagram.com/crafto.digital',
    'https://www.linkedin.com/company/crafto-digital',
    'https://twitter.com/crafto_digital'
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 49.2827,
      longitude: -123.1207
    },
    geoRadius: '100000'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Agency Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design',
          description: 'Custom website design services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Professional web development services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing',
          description: 'Comprehensive digital marketing services'
        }
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <div className="min-h-screen bg-white">
      <ContactHeroSection />
      <ContactSection />
      <MarqueeSection />
      <Footer />
    </div>
    </>
  );
}
