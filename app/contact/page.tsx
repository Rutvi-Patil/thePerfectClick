import Footer from '@/components/sections/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex items-center justify-center min-h-[calc(100vh-128px)]">
        <div className="text-center px-4">
          <h1 className="text-6xl font-black mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Contact
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Coming Soon
          </p>
          <p className="text-lg text-gray-500 max-w-md mx-auto">
            We're working on something amazing. Check back soon for our contact page.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
