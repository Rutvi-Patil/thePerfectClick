import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import StrategySection from '@/components/sections/StrategySection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
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
  );
}
