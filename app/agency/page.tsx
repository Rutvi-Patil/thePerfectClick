import AboutHeroSection from '@/components/sections/AboutHeroSection';
import AboutTwoColumnSection from '@/components/sections/AboutTwoColumnSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import TeamSection from '@/components/sections/TeamSection';
import KeywordsSection from '@/components/sections/KeywordsSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import Footer from '@/components/sections/Footer';

export default function AgencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeroSection />
      <AboutTwoColumnSection />
      <WhyUsSection />
      <TeamSection />
      {/* <KeywordsSection /> */}
      <MarqueeSection />
      <Footer />
    </div>
  );
}
