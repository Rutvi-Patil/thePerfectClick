import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AnimatedSection from "@/components/AnimatedSection";

const NorthwestCaseStudy: React.FC = () => {
    // Gallery images data for easy maintenance
    const galleryImages = [
      {
        src: "/images/img1 (2).jpeg",
        alt: "Homepage hero section",
        // title: "Homepage Hero"
      },
      {
        src: "/images/img4.jpeg",
        alt: "Project showcase layout",
        // title: "Project Gallery"
      },
      {
        src: "/images/img3.jpeg",
        alt: "Before redesign comparison",
        // title: "Before Design"
      },
      {
        src: "/images/img2.jpeg",
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
          <div className="relative aspect-[2/3] sm:aspect-[3/4] md:aspect-[16/9] lg:aspect-[1411/551] w-full">
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
            beforeImage="/images/oldH.png"
            afterImage="/images/NewF.png"
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
          src: "/images/oldF.png", // 👈 change to your real old screenshot
        },
        {
          label: "New homepage",
          src: "/images/oldP.png", // 👈 new full-page screenshot
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
                  src: "/images/NewWeb.png",
                },
                {
                  label: "Mobile projects view",
                  src: "/images/projects.png",
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
                  src: "/images/spera.png",
                },
                {
                  label: "About us page", 
                  src: "/images/avlon.png",
                },
                {
                  label: "Contact page",
                  src: "/images/plaza.png",
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

        <section className="bg-[#0f1011] border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <h2 className="text-xl md:text-3xl font-black text-white uppercase">
              More projects
            </h2>
            <div className="mt-8 md:mt-10 grid gap-8 md:gap-10 sm:grid-cols-1 md:grid-cols-2">
              <article className="group relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl md:rounded-2xl bg-neutral-900">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/21364/SM1113665.jpg?date=Thu%20Dec%2004%202025%2021:19:34%20GMT+0530%20(India%20Standard%20Time)"
                    alt="Another project"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="mt-3 md:mt-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em]">
                      Digital
                    </p>
                    <h3 className="mt-1 text-base md:text-lg font-black uppercase">
                      Real estate
                    </h3>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500 flex items-center justify-center text-black text-xs font-bold translate-x-2">
                    →
                  </div>
                </div>
              </article>


              <article className="group relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl md:rounded-2xl bg-neutral-900">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/18251/ES794681.jpg?date=Thu%20Dec%2004%202025%2021:18:47%20GMT+0530%20(India%20Standard%20Time)"
                    alt="Another project"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="mt-3 md:mt-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em]">
                      Social & video
                    </p>
                    <h3 className="mt-1 text-base md:text-lg font-black uppercase">
                      Construction employer 
                    </h3>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500 flex items-center justify-center text-black text-xs font-bold translate-x-2">
                    →
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>


      </main>


      <Footer />
    </div>
  );
};


export default NorthwestCaseStudy;
