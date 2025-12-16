import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | The Perfect Click',
  description: 'Learn about how The Perfect Click uses cookies and similar technologies to enhance your website experience and protect your privacy.',
  keywords: ['cookie policy', 'cookies', 'tracking technologies', 'privacy', 'data protection', 'GDPR compliance'],
  openGraph: {
    title: 'Cookie Policy | The Perfect Click',
    description: 'How we use cookies to improve your website experience.',
    type: 'website',
    url: 'https://theperfectclick.com/cookie-policy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | The Perfect Click',
    description: 'How we use cookies to improve your website experience.',
  },
  alternates: {
    canonical: 'https://theperfectclick.com/cookie-policy',
  },
};

const CookiePolicy: React.FC = () => {
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
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This policy explains how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. What Are Cookies?</h2>
              <div className="space-y-4 text-gray-700">
                <p>Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They allow the website to remember your actions and preferences over a period of time.</p>
                <p>There are several types of cookies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
                  <li><strong>First-Party Cookies:</strong> Set by the website you're visiting</li>
                  <li><strong>Third-Party Cookies:</strong> Set by external services on our website</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. How We Use Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use cookies for various purposes to enhance your experience:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and content</li>
                  <li><strong>Analytics Cookies:</strong> Help us analyze website traffic and usage patterns</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Specific Cookies We Use</h2>
              <div className="space-y-4 text-gray-700">
                <p>Here are the specific types of cookies we use on our website:</p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Essential Cookies</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Session Management:</strong> Maintains your session while you navigate the site</li>
                    <li><strong>Security:</strong> Helps protect against security threats</li>
                    <li><strong>Load Balancing:</strong> Distributes website traffic evenly</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <h3 className="font-semibold mb-3">Analytics Cookies</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Google Analytics:</strong> Tracks website usage and performance</li>
                    <li><strong>Hotjar:</strong> Provides heatmaps and user behavior analysis</li>
                    <li><strong>Crazy Egg:</strong> Records user interactions and click patterns</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <h3 className="font-semibold mb-3">Marketing Cookies</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Facebook Pixel:</strong> Tracks conversions from Facebook ads</li>
                    <li><strong>Google Ads:</strong> Measures ad campaign effectiveness</li>
                    <li><strong>LinkedIn Insight Tag:</strong> Tracks website conversions from LinkedIn</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use third-party services that may set their own cookies on your device. These include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and reporting</li>
                  <li><strong>Google Ads:</strong> For advertising and conversion tracking</li>
                  <li><strong>Meta (Facebook/Instagram):</strong> For social media advertising</li>
                  <li><strong>LinkedIn:</strong> For professional networking and advertising</li>
                  <li><strong>YouTube/Vimeo:</strong> For video embedding and playback</li>
                </ul>
                <p>These third-party services have their own privacy policies and cookie policies. We recommend reviewing their policies for more information.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-gray-700">
                <p>You have several options to manage cookies:</p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Browser Settings</h3>
                  <p>You can configure your browser to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Accept or reject all cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Notify you when cookies are set</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <h3 className="font-semibold mb-3">Cookie Consent Banner</h3>
                  <p>When you first visit our website, you'll see a cookie consent banner where you can:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your cookie preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Cookie Duration</h2>
              <div className="space-y-4 text-gray-700">
                <p>Different cookies have different lifespans:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Session Cookies:</strong> Expire when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Typically expire after 30 days to 2 years</li>
                  <li><strong>Authentication Cookies:</strong> Usually expire after 24 hours</li>
                  <li><strong>Analytics Cookies:</strong> Typically expire after 2 years</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Your Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>Under data protection laws, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Know what cookies are being used</li>
                  <li>Accept or reject cookies</li>
                  <li>Withdraw consent at any time</li>
                  <li>Access information about cookies stored on your device</li>
                  <li>Request deletion of your data</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Impact of Disabling Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you choose to disable cookies, some features of our website may not function properly:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may need to log in repeatedly</li>
                  <li>Personalized content may not display correctly</li>
                  <li>Some interactive features may not work</li>
                  <li>Website performance may be affected</li>
                  <li>Targeted advertising will be reduced</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. International Data Transfers</h2>
              <div className="space-y-4 text-gray-700">
                <p>Some cookies may transfer data to countries outside your own. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable data protection laws.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Updates to This Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any significant changes by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last updated" date</li>
                  <li>Displaying a notice on our website</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about this Cookie Policy or our use of cookies, please contact us:</p>
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

export default CookiePolicy;
