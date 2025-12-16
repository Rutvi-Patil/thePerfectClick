import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | The Perfect Click',
  description: 'Read our Terms of Service to understand the rules and guidelines for using The Perfect Click website and services.',
  keywords: ['terms of service', 'terms and conditions', 'legal terms', 'service agreement', 'user agreement'],
  openGraph: {
    title: 'Terms of Service | The Perfect Click',
    description: 'Terms and conditions for using our digital agency services.',
    type: 'website',
    url: 'https://theperfectclick.com/terms-of-service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | The Perfect Click',
    description: 'Terms and conditions for using our digital agency services.',
  },
  alternates: {
    canonical: 'https://theperfectclick.com/terms-of-service',
  },
};

const TermsOfService: React.FC = () => {
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These terms and conditions govern your use of The Perfect Click website and services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>By accessing and using The Perfect Click website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Description of Service</h2>
              <div className="space-y-4 text-gray-700">
                <p>The Perfect Click provides digital agency services including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Web design and development</li>
                  <li>Digital marketing services</li>
                  <li>Branding and identity design</li>
                  <li>Content creation and strategy</li>
                  <li>Social media management</li>
                  <li>Consulting services</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. User Responsibilities</h2>
              <div className="space-y-4 text-gray-700">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Use our services for lawful purposes only</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Respect intellectual property rights</li>
                  <li>Communicate professionally with our team</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Payment Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>For paid services, the following terms apply:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Pricing:</strong> All prices are quoted in USD and are exclusive of taxes unless otherwise stated</li>
                  <li><strong>Payment Schedule:</strong> Payment terms will be outlined in project proposals and agreements</li>
                  <li><strong>Late Payments:</strong> Late payments may incur interest charges and service suspension</li>
                  <li><strong>Refunds:</strong> Refunds are handled on a case-by-case basis as outlined in project agreements</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Intellectual Property</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Our Intellectual Property:</strong> All content, trademarks, service marks, logos, and other intellectual property on our website remain the property of The Perfect Click.</p>
                <p><strong>Client Work:</strong> Upon full payment, rights to deliverables are transferred to the client as outlined in project agreements. We reserve the right to display completed work in our portfolio.</p>
                <p><strong>Third-Party Content:</strong> Some content may be licensed from third parties and is subject to their terms and conditions.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Confidentiality</h2>
              <div className="space-y-4 text-gray-700">
                <p>Both parties agree to maintain confidentiality of proprietary information shared during the course of business. This includes but is not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Business strategies and plans</li>
                  <li>Customer information</li>
                  <li>Technical specifications</li>
                  <li>Financial information</li>
                  <li>Trade secrets</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700">
                <p>To the fullest extent permitted by law, The Perfect Click shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or other intangible losses.</p>
                <p>Our total liability for any claims arising out of or relating to these terms or our services shall not exceed the amount paid by you for the services giving rise to the claim.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Service Availability</h2>
              <div className="space-y-4 text-gray-700">
                <p>We strive to maintain high availability of our services but do not guarantee uninterrupted access. We may temporarily suspend services for maintenance, updates, or other operational reasons.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Termination</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>By You:</strong> You may terminate your use of our services at any time by providing written notice.</p>
                <p><strong>By Us:</strong> We reserve the right to terminate or suspend access to our services for violations of these terms or for any other reason at our discretion.</p>
                <p>Upon termination, you remain obligated to pay for any services rendered prior to termination.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Dispute Resolution</h2>
              <div className="space-y-4 text-gray-700">
                <p>Any disputes arising from these terms or our services shall be resolved through good faith negotiations. If disputes cannot be resolved, they shall be subject to binding arbitration in accordance with applicable laws.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Governing Law</h2>
              <div className="space-y-4 text-gray-700">
                <p>These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which The Perfect Click operates, without regard to its conflict of law provisions.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Changes to Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any modified terms.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">13. Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Email:</strong> legal@theperfectclick.com</p>
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

export default TermsOfService;
