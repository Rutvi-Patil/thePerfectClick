import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Northwest Constructions Case Study | Website Redesign Success | The Perfect Click',
  description: 'How we helped Northwest Constructions achieve 58% share price increase through strategic website redesign and digital transformation.',
  keywords: ['Northwest Constructions', 'website redesign', 'digital transformation', 'construction website', 'Vancouver real estate'],
  openGraph: {
    title: 'Northwest Constructions Case Study',
    description: 'Digital transformation for Vancouver construction company with 58% share price increase',
    type: 'article',
    url: 'https://theperfectclick.com/portfolio/northwest',
    images: [
      {
        url: 'https://digital-agency.takkar.ooo/images/newF.png',
        width: 1200,
        height: 630,
        alt: 'Northwest Constructions - Website Redesign Case Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northwest Constructions Case Study',
    description: 'How website redesign drove construction business success',
    images: ['https://digital-agency.takkar.ooo/images/newF.png'],
  },
  alternates: {
    canonical: 'https://theperfectclick.com/portfolio/northwest',
  },
};

const breadcrumbListSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://theperfectclick.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Portfolio',
      item: 'https://theperfectclick.com/portfolio'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Northwest Constructions',
      item: 'https://theperfectclick.com/portfolio/northwest'
    }
  ]
};

const northwestCaseStudySchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Northwest Constructions Case Study | Website Redesign Success',
  description: 'How we helped Northwest Constructions achieve 58% share price increase through strategic website redesign and digital transformation.',
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
    '@id': 'https://theperfectclick.com/portfolio/northwest'
  },
  image: [
    'https://digital-agency.takkar.ooo/images/newF.png',
    'https://digital-agency.takkar.ooo/images/oldF.png',
    'https://digital-agency.takkar.ooo/images/NewWeb.png'
  ],
  about: {
    '@type': 'Thing',
    name: 'Northwest Constructions Ltd',
    description: 'Vancouver construction company digital transformation and website redesign'
  },
  keywords: ['Northwest Constructions', 'website redesign', 'digital transformation', 'construction website', 'Vancouver real estate']
};

const NorthwestCaseStudy: React.FC = () => {
    // Gallery images data for easy maintenance
    const galleryImages = [
      {
        src: "https://digital-agency.takkar.ooo/images/img1%20(2).jpeg",
        alt: "Homepage hero section",
        // title: "Homepage Hero"
      },
      {
        src: "https://digital-agency.takkar.ooo/images/img4.jpeg",
        alt: "Project showcase layout",
        // title: "Project Gallery"
      },
      {
        src: "https://digital-agency.takkar.ooo/images/img3.jpeg",
        alt: "Before redesign comparison",
        // title: "Before Design"
      },
      {
        src: "https://digital-agency.takkar.ooo/images/img2.jpeg",
        alt: "Project portfolio view",
        // title: "Portfolio View"
      }
    ];

    const highlights = [
    {
      label: "01",
      title: "Website redesign",
      description:
        "Re-architected site with clear navigation by project type, strong hero storytelling, and a responsive layout that works across devices.",
    },
    {
      label: "02",
      title: "Re-vamped branding & visuals",
      description:
        "Tightened logo usage, defined a focused color system, and moved to a photography direction centered on structure, light and people.",
    },
    {
      label: "03",
      title: "SEO & content structure",
      description:
        "Built a content model around location, asset type, size, timeline and role, so projects are easier to discover and compare in search.",
    },
    {
      label: "04",
      title: "Full-page screens for decks",
      description:
        "Captured full-page screens of key pages to use in presentations and your portfolio, from homepage to individual project pages.",
    },
  ];



  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbListSchema, northwestCaseStudySchema])
        }}
      />
      <div className="min-h-screen w-full bg-white text-[#0f1011]">
        <Navigation />
      
      {/* MAIN */}
      <main className="pt-16 md:pt-20">
        {/* HERO TEXT */}
        <section
          id="work"
          className="relative flex justify-center items-center pt-12 pb-8 md:pb-14"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center gap-8 md:gap-12 relative z-10">
            {/* hint bar */}
            <div className="w-full text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-neutral-400 overflow-hidden">
              <div className="flex gap-6 md:gap-8 whitespace-nowrap animate-[marquee_32s_linear_infinite]">
                <span className="text-center">
                  Northwest Constructions Ltd • Vancouver BC • Real-estate
                  development • Brand & digital transformation
                </span>
                <span className="text-center">
                  Northwest Constructions Ltd • Vancouver BC • Real-estate
                  development • Brand & digital transformation
                </span>
              </div>
            </div>


            <div className="flex flex-col items-center text-center px-4">
              <span className="uppercase font-medium text-[10px] md:text-[11px] tracking-[0.25em] text-amber-600 mb-3 md:mb-4">
                Case study
              </span>
              <h1 className="font-black text-[18px] sm:text-[22px] md:text-[28px] lg:text-[40px] leading-tight uppercase max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl">
                Northwest Constructions Ltd <br className="block sm:hidden" />
                <span className="hidden sm:inline">&bull;</span> <br className="block sm:hidden" />
                <span className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px]"></span>
              </h1>
            </div>


            {/* mobile meta bar */}
            <div className="w-full text-[10px] uppercase tracking-[0.3em] text-neutral-400 md:hidden overflow-hidden">
              <div className="flex gap-6 whitespace-nowrap animate-[marquee_32s_linear_infinite]">
                <span>Website redesign • SEO • Rebranding</span>
                <span>Website redesign • SEO • Rebranding</span>
              </div>
            </div>
          </div>
        </section>


        {/* HERO VIDEO */}
        <section className="relative w-full">
          <div className="relative aspect-[4/3] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[1411/551] w-full">
            <video
              autoPlay
              playsInline
              loop
              muted
              className="w-full h-full object-cover"
              poster="https://r2-northwest.takkar.ooo/surrey_city_centre_Drone_May7_compressed.jpg"
            >
              <source
                src="https://r2-northwest.takkar.ooo/surrey_city_centre_Drone_May7_compressed.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>


        {/* BRAND PROBLEM / STRATEGY */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col gap-12 md:gap-20">
            {/* Brand problem */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 leading-relaxed">
              <div className="md:w-1/3 font-bold flex md:justify-end md:pr-5">
                <div className="w-full md:max-w-xs uppercase text-[10px] md:text-[11px] tracking-[0.25em] text-amber-600">
                  Brand issue
                </div>
              </div>
              <div className="md:w-2/3 text-sm md:text-base text-neutral-700">
                <p className="max-w-2xl">
                  Northwest Constructions Ltd had a strong portfolio, but the
                  old website felt generic and disconnected from the scale of
                  their projects. The brand looked like "just another
                  contractor", visuals were inconsistent, and the site was hard
                  to use on mobile. SEO wasn't structured, project content was
                  scattered, and there was no clear narrative about Northwest's
                  position in the Lower Mainland market.
                </p>
              </div>
            </div>


            {/* Brand strategy */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 leading-relaxed">
              <div className="md:w-1/3 font-bold flex md:justify-end md:pr-5">
                <div className="w-full md:max-w-xs uppercase text-[10px] md:text-[11px] tracking-[0.25em] text-amber-600">
                  Brand strategy
                </div>
              </div>
              <div className="md:w-2/3 text-sm md:text-base text-neutral-700">
                <p className="max-w-2xl">
                  We flipped the story: instead of a purely technical,
                  project-list website, we built a brand-first experience. We
                  positioned Northwest as a confident, future-ready construction
                  partner — combining skyline-level storytelling with grounded
                  project details, human-focused photography, and a sharp
                  content structure built for search and discovery.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* BIG BLOCK WITH BEFORE/AFTER + HIGHLIGHTS */}
        <section className="bg-[#f4f6f8] text-black">
          {/* Heading */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-24 pb-8 md:pb-14">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-black uppercase leading-tight">
                From confusing brochure-ware<br className="md:hidden" />{" "}
                to a clear, focused brand platform
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-neutral-600 px-2">
                Strategy, design, content and SEO brought together into a
                single, conversion-ready website for Northwest Constructions
                Ltd.
              </p>
            </div>
          </div>


          {/* VIDEO BEFORE / AFTER SLIDER */}
          <BeforeAfterSlider
            beforeImage="https://digital-agency.takkar.ooo/images/oldH.png"
            afterImage="https://digital-agency.takkar.ooo/images/newF.png"
            beforeLabel="Old site"
            afterLabel="New site"
          />

          {/* PROJECT GALLERY - 2x2 GRID */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-black uppercase">
                {/* Design Highlights */}
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-neutral-600 px-2">
                {/* Key features and visual elements from redesigned website */}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-[3/4] sm:aspect-[2/3] md:aspect-[736/1051] overflow-hidden rounded-xl md:rounded-2xl group">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.title}</p>
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* FOUR HIGHLIGHT CARDS */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent mb-8 md:mb-12" />
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-xl md:rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-300 p-4 md:p-6 flex flex-col gap-3 md:gap-4"
                >
                  <div className="text-[24px] md:text-[32px] font-black text-amber-600 leading-none transition-transform duration-300 group-hover:translate-x-1">
                    {item.label}
                  </div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* FULL-PAGE SCREENSHOTS */}
<section className="bg-white py-12 md:py-24">
  <div className="max-w-7xl mx-auto px-4 md:px-10">
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-xl md:text-3xl font-black uppercase">
        Old website
      </h2>
      <p className="mt-3 md:mt-4 text-sm md:text-base text-neutral-600 px-2">
        {/* Static full-page captures of previous and redesigned website to
        complement the before/after walkthrough. */}
      </p>
    </div>


    <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">



      {[
        {
          label: "Old homepage",
          src: "https://digital-agency.takkar.ooo/images/oldF.png", // 👈 change to your real old screenshot
        },
        {
          label: "New homepage",
          src: "https://digital-agency.takkar.ooo/images/oldP.png", // 👈 new full-page screenshot
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

        {/* ADDITIONAL FULL-SCREEN SCREENSHOTS - 2 SIDE BY SIDE */}
        <section className="bg-white py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-black uppercase">
                New Web designs
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-neutral-600 px-2">
                {/* Optimized layouts for mobile and tablet devices */}
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {[
                {
                  label: "Mobile homepage",
                  src: "https://digital-agency.takkar.ooo/images/NewWeb.png",
                },
                {
                  label: "Mobile projects view",
                  src: "https://digital-agency.takkar.ooo/images/projects.png",
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

        {/* ADDITIONAL FULL-SCREEN SCREENSHOTS - 3 SIDE BY SIDE */}
        <section className="bg-[#f4f6f8] py-12 md:py-24">
          <div className="w-full px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-black uppercase">
                Key page designs
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-neutral-600 px-2">
                Full-page captures of essential pages from redesigned website
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
              {[
                {
                  label: "Projects page",
                  src: "https://digital-agency.takkar.ooo/images/spera.png",
                },
                {
                  label: "About us page", 
                  src: "https://digital-agency.takkar.ooo/images/avlon.png",
                },
                {
                  label: "Contact page",
                  src: "https://digital-agency.takkar.ooo/images/plaza.png",
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

        {/* OTHER PROJECTS */}

        


      </main>


      <Footer />
    </div>
    </>
  );
};


export default NorthwestCaseStudy;
