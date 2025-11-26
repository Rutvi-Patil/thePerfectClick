import Footer from '@/components/sections/Footer';
import MarqueeSection from '@/components/sections/MarqueeSection';
import ExpertiseHeroSection from '@/components/sections/ExpertiseHeroSection';
import ExpertiseDetailSection from '@/components/sections/ExpertiseDetailSection';

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <ExpertiseHeroSection />
        <ExpertiseDetailSection />
      </main>
      
      <MarqueeSection />
      <Footer />
    </div>
  );
}
