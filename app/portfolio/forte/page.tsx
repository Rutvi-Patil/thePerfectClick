import React from "react";
import { Activity, Bone, Hospital, Heart, Target, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import InteractiveServiceCard from "@/components/InteractiveServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Forte Physiotherapy Case Study | Healthcare Website Success | The Perfect Click',
  description: 'How we helped Forte Sports & Orthopaedic Physiotherapy achieve 92% customer satisfaction through digital transformation and healthcare platform development.',
  keywords: ['Forte Physiotherapy', 'healthcare website', 'physiotherapy booking', 'patient portal', 'healthcare UX'],
  openGraph: {
    title: 'Forte Physiotherapy Case Study',
    description: 'Digital transformation for sports and orthopaedic physiotherapy clinic',
    type: 'article',
    url: 'https://theperfectclick.com/portfolio/forte',
    images: [
      {
        url: 'https://digital-agency.takkar.ooo/images/hg.png',
        width: 1200,
        height: 630,
        alt: 'Forte Physiotherapy - Healthcare Website Case Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forte Physiotherapy Case Study',
    description: 'How digital transformation drove healthcare success',
    images: ['https://digital-agency.takkar.ooo/images/hg.png'],
  },
  alternates: {
    canonical: 'https://theperfectclick.com/portfolio/forte',
  },
};

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

type TeamMember = {
  name: string;
  role: string;
  expertise: string;
  image: string;
};

type Testimonial = {
  name: string;
  condition: string;
  rating: number;
  text: string;
  result: string;
};

const services: Service[] = [
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Sports Physiotherapy",
    description: "Specialized treatment for sports injuries and performance optimization",
    features: ["Injury Rehabilitation", "Performance Enhancement", "Prevention Programs", "Return to Sport Training"]
  },
  {
    icon: <Bone className="w-8 h-8" />,
    title: "Orthopaedic Physiotherapy",
    description: "Comprehensive care for musculoskeletal conditions and post-surgical recovery",
    features: ["Post-Surgical Rehab", "Joint Mobilization", "Manual Therapy", "Exercise Prescription"]
  },
  {
    icon: <Hospital className="w-8 h-8" />,
    title: "Pelvic Health",
    description: "Specialized physiotherapy for pelvic floor dysfunction and women's health",
    features: ["Pelvic Floor Rehab", "Prenatal/Postnatal Care", "Core Strengthening", "Bladder Health"]
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Pain Management",
    description: "Evidence-based approaches to chronic and acute pain conditions",
    features: ["Manual Therapy", "Acupuncture", "Exercise Therapy", "Education & Self-Management"]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Vestibular Rehab",
    description: "Specialized treatment for dizziness, balance disorders, and vertigo",
    features: ["Balance Training", "Gaze Stabilization", "Habituation Exercises", "Fall Prevention"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Concussion Management",
    description: "Comprehensive assessment and treatment for concussion and head injuries",
    features: ["Baseline Testing", "Gradual Return Protocol", "Symptom Management", "Cognitive Rehab"]
  }
];

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Kevin Schalk",
    role: "Lead Physiotherapist",
    expertise: "Sports & Orthopaedic Specialist",
    image: "https://www.fortephysiotherapy.com/headshots/KEVIN%20SCHALK.jpg?w=384&q=75"
  },
  {
    name: "Dr. Dayna Fiorini",
    role: "Pelvic Health Specialist",
    expertise: "Women's Health & Pelvic Floor",
    image: "https://www.fortephysiotherapy.com/headshots/DAYNA%20FIORINI.jpg?w=384&q=75"
  },
  {
    name: "Dr. Matthew Harriman",
    role: "Vestibular Specialist",
    expertise: "Balance & Concussion Management",
    image: "https://www.fortephysiotherapy.com/headshots/MATTHEW%20HARRIMAN.png?w=384&q=75"
  }
];

const testimonials: Testimonial[] = [
  {
    name: "James Mitchell",
    condition: "ACL Reconstruction",
    rating: 5,
    text: "After my ACL surgery, team at Forte got me back on the soccer field stronger than ever. Their personalized rehab program was incredible.",
    result: "Returned to competitive sport in 6 months"
  },
  {
    name: "Maria Thompson",
    condition: "Chronic Back Pain",
    rating: 5,
    text: "I had suffered from back pain for years. The comprehensive approach at Forte not only eliminated my pain but gave me tools to prevent recurrence.",
    result: "Pain-free after 8 weeks of treatment"
  },
  {
    name: "David Park",
    condition: "Vestibular Disorder",
    rating: 5,
    text: "The vestibular rehabilitation completely changed my life. I went from constant dizziness to full balance and confidence.",
    result: "Full symptom resolution in 12 weeks"
  }
];

const forteCaseStudySchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Forte Sports & Orthopaedic Physiotherapy Case Study',
  description: 'How we helped Forte Sports & Orthopaedic Physiotherapy achieve 92% customer satisfaction through digital transformation and healthcare platform development.',
  author: {
    '@type': 'Organization',
    name: 'The Perfect Click',
    url: 'https://theperfectclick.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Perfect Click',
    logo: {
      '@type': 'ImageObject',
      url: 'https://digital-agency.takkar.ooo/images/logo-yellow.png'
    }
  },
  datePublished: '2024-01-01',
  dateModified: '2024-12-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://theperfectclick.com/portfolio/forte'
  },
  image: [
    'https://digital-agency.takkar.ooo/images/hg.png',
    'https://digital-agency.takkar.ooo/images/d.png',
    'https://digital-agency.takkar.ooo/images/s.png'
  ],
  about: {
    '@type': 'Thing',
    name: 'Forte Sports & Orthopaedic Physiotherapy',
    description: 'Healthcare physiotherapy clinic digital transformation'
  }
};

const ForteCaseStudy: React.FC = () => {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(forteCaseStudySchema)
        }}
      />
      <div className="min-h-screen w-full bg-white text-[#0f1011]" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <Navigation />
      
      {/* MAIN */}
      <main className="pt-16 md:pt-20">
        {/* FULL HERO VIDEO WITH TITLE OVERLAY */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              playsInline
              loop
              muted
              className="w-full h-full object-cover"
              poster="https://r2-northwest.takkar.ooo/forte-hero.mp4"
            >
              <source
                src="https://r2-northwest.takkar.ooo/forte-hero.mp4"
                type="video/mp4"
              />
            </video>
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 max-w-6xl mx-auto">
            {/* Top Marquee */}
            <div className="w-full text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/80 overflow-hidden mb-8 md:mb-12">
              <div className="flex gap-6 md:gap-8 whitespace-nowrap animate-[marquee_32s_linear_infinite]">
                <span className="text-center">
                  Forte Sports & Orthopaedic Physiotherapy • Healthcare • Physiotherapy • 
                  Sports Medicine • Brand & digital transformation
                </span>
                <span className="text-center">
                  Forte Sports & Orthopaedic Physiotherapy • Healthcare • Physiotherapy • 
                  Sports Medicine • Brand & digital transformation
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="flex flex-col items-center text-center px-4 mb-8 md:mb-12">
              <span className="uppercase font-medium text-[10px] md:text-[11px] tracking-[0.25em] text-teal-400 mb-3 md:mb-4 animate-fadeInUp">
                Case study
              </span>
            <h1 className="font-black text-[20px] xs:text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-tight uppercase max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl text-white animate-fadeInUp" 
                style={{ fontFamily: 'var(--font-space-grotesk)', animationDelay: '0.2s' }}>
              Forte Sports & <br className="block xs:hidden" />
              Orthopaedic <br className="block sm:hidden" />
              Physiotherapy
            </h1>
            </div>

            {/* Bottom Marquee (Mobile) */}
            <div className="w-full text-[10px] uppercase tracking-[0.3em] text-white/80 md:hidden overflow-hidden">
              <div className="flex gap-6 whitespace-nowrap animate-[marquee_32s_linear_infinite]">
                <span>Website redesign • Healthcare UX • Patient booking</span>
                <span>Website redesign • Healthcare UX • Patient booking</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                <div className="w-0.5 h-3 bg-white/60 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SHOWCASE */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Our Specialized Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive physiotherapy care tailored to your specific needs and goals
              </p>
            </div>

            <InteractiveServiceCard services={services} />
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4">
    
    <div className="text-center mb-16">
      <h2
        className="text-3xl font-bold text-gray-900 md:text-4xl mb-4"
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        Meet Our Expert Team
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Highly trained physiotherapists dedicated to your recovery and wellness
      </p>
    </div>

    <div className="grid gap-8 sm:gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {teamMembers.map((member, index) => (
        <div key={index} className="text-center group flex flex-col items-center max-w-xs mx-auto">

          {/* Image container - portrait-friendly circle */}
          <div className="mb-4 sm:mb-6 relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-blue-600 opacity-20 group-hover:opacity-30 transition-opacity"></div>

            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl w-full h-full">
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover bg-gray-200"
              />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-teal-600 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{member.role}</p>
          <p className="text-gray-600 text-xs sm:text-sm">{member.expertise}</p>
        </div>
      ))}
    </div>

  </div>
</section>


        {/* PATIENT RESULTS */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Patient Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real patients who got back to living their best lives
              </p>
            </div>

            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* TREATMENT PROCESS */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Your Path to Recovery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven 4-step process ensures optimal results and lasting recovery
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
              {[
                { step: "01", title: "Assessment", description: "Comprehensive evaluation of your condition and goals" },
                { step: "02", title: "Diagnosis", description: "Clear explanation of your condition and treatment options" },
                { step: "03", title: "Treatment", description: "Personalized therapy plan with hands-on care" },
                { step: "04", title: "Prevention", description: "Education and exercises to prevent future issues" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 mx-auto items-center justify-center rounded-full bg-teal-600 text-white text-lg sm:text-2xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AGENCY SHOWCASE */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-white">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Digital Transformation by Our Agency
                  </h2>
                  <p className="text-lg mb-8 text-teal-50">
                    We transformed Forte's digital presence from a basic website into this modern, 
                    patient-centric platform that drives bookings and builds trust.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <span>Complete website redesign with modern healthcare UX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <span>Integrated online booking system</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <span>Mobile-first responsive design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <span>SEO optimization for local search</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
                    <div className="text-3xl font-bold mb-2">92%</div>
                    <div className="text-teal-100">Patient Satisfaction</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
                    <div className="text-3xl font-bold mb-2">45%</div>
                    <div className="text-teal-100">Increase in Online Bookings</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
                    <div className="text-3xl font-bold mb-2">3.2x</div>
                    <div className="text-teal-100">ROI in First Year</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-teal-100">Booking Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WEBSITE PLATFORM SCREENSHOTS - 3 SIDE BY SIDE */}
        <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-12 md:py-24">
          <div className="w-full px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-black uppercase text-gray-900">
                Digital Platform Showcase
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 px-2">
                Full-page captures of our healthcare platform designed for patient booking and care
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
              {[
                {
                  label: "Patient Portal",
                  src: "https://digital-agency.takkar.ooo/images/hg.png",
                },
                {
                  label: "Booking System",
                  src: "https://digital-agency.takkar.ooo/images/d.png",
                },
                {
                  label: "Care Dashboard",
                  src: "https://digital-agency.takkar.ooo/images/s.png",
                },
              ].map((shot, i) => (
                <AnimatedSection
                  key={i}
                  delay={i * 0.2}
                  className="overflow-hidden rounded-xl md:rounded-2xl border border-black/10 shadow-lg md:shadow-xl bg-white group"
                >
                  <img
                    src={shot.src}
                    alt={shot.label}
                    className="w-full h-auto object-cover"
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
    </>
  );
};

export default ForteCaseStudy;
