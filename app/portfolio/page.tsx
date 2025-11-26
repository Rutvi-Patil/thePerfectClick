import Footer from '@/components/sections/Footer';
import PortfolioHeroSection from '@/components/sections/PortfolioHeroSection';
import PortfolioGallerySection from '@/components/sections/PortfolioGallerySection';
import MarqueeSection from '@/components/sections/MarqueeSection';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <PortfolioHeroSection />
      <PortfolioGallerySection />
      <MarqueeSection />
      <Footer />
    </div>
  );
}
