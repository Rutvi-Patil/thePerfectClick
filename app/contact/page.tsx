import ContactHeroSection from '@/components/sections/ContactHeroSection';
import ContactSection from '@/components/sections/ContactSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import Footer from '@/components/sections/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeroSection />
      <ContactSection />
      <MarqueeSection />
      <Footer />
    </div>
  );
}
