import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Perfect Click',
  description: 'Learn how The Perfect Click collects, uses, and protects your personal information in accordance with privacy laws and regulations.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'GDPR', 'privacy compliance'],
  openGraph: {
    title: 'Privacy Policy | The Perfect Click',
    description: 'Our commitment to protecting your privacy and personal data.',
    type: 'website',
    url: 'https://theperfectclick.com/privacy-policy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | The Perfect Click',
    description: 'Our commitment to protecting your privacy and personal data.',
  },
  alternates: {
    canonical: 'https://theperfectclick.com/privacy-policy',
  },
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 
              className="text-4xl font-black leading-tight tracking-tight mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company name when you contact us or use our services</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and actions taken</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and other technical details</li>
                  <li><strong>Cookies and Tracking:</strong> Data collected through cookies and similar technologies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about your inquiries and projects</li>
                  <li>To improve our website and services</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Information Sharing</h2>
              <div className="space-y-4 text-gray-700">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Your Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. For more information, please refer to our Cookie Policy.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Changes to This Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Email:</strong> privacy@theperfectclick.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Business Ave, Suite 100, City, State 12345</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
