"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

type BeforeAfterSliderProps = {
  beforeVideo: string;
  afterVideo: string;
  beforeLabel?: string;
  afterLabel?: string;
};

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeVideo,
  afterVideo,
  beforeLabel = "Before",
  afterLabel = "After",
}) => {
  const [value, setValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updatePositionFromClientX = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const percent = (x / rect.width) * 100;
    setValue(percent);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePositionFromClientX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePositionFromClientX(e.clientX);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePositionFromClientX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePositionFromClientX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="bg-[#f4f6f8] text-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase">
            Website walkthrough – before / after
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
            Drag the handle to compare the old Northwest website with the new
            experience in motion.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full overflow-hidden rounded-2xl bg-black aspect-[16/9] cursor-col-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* BEFORE (full) */}
          <video
            src={beforeVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* AFTER (clipped by slider) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${value}%` }}
          >
            <video
              src={afterVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Divider line */}
          <div
            className="pointer-events-none absolute inset-y-0"
            style={{ left: `${value}%`, transform: "translateX(-50%)" }}
          >
            <div className="h-full w-px bg-white/70" />
          </div>

          {/* Slider handle (this is what you drag) */}
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${value}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className="w-10 h-10 rounded-full bg-white text-[#0f1011] flex items-center justify-center text-xs font-bold shadow-lg">
              ↔
            </div>
          </div>

          {/* Labels */}
          <div className="pointer-events-none absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-xs font-semibold uppercase tracking-wide">
            {beforeLabel}
          </div>
          <div className="pointer-events-none absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 text-xs font-semibold uppercase tracking-wide">
            {afterLabel}
          </div>
        </div>
      </div>
    </section>
  );
};


const NorthwestCaseStudy: React.FC = () => {
  const highlights = [
    {
      label: "01",
      title: "Website redesign",
      description:
        "Re-architected the site with clear navigation by project type, strong hero storytelling, and a responsive layout that works across devices.",
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
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between gap-6">
    {/* Left: logo + nav */}
          <div className="flex items-center gap-8">
      {/* Logo block */}
      <a
        href="/"
        className="inline-flex h-10 w-10 items-center justify-center bg-black text-white text-xs font-semibold tracking-[0.2em] uppercase"
      >
        TP
      </a>

      {/* Main nav */}
      <nav className="hidden md:flex items-center gap-8 text-sm">
        <a href="/" className="hover:text-neutral-500">
          Home
        </a>
        <a href="/agency" className="hover:text-neutral-500">
          Agency
        </a>
        <a href="/expertise" className="hover:text-neutral-500">
          Expertise
        </a>
        <a href="/portfolio" className="hover:text-neutral-500">
          Portfolio
        </a>
        <a href="/#contact" className="hover:text-neutral-500">
          Contact
        </a>
      </nav>
    </div>

    {/* Right: CTA */}
    <a
      href="/#contact"
      className="hidden sm:inline-flex px-5 py-2 bg-black text-white text-sm font-medium"
    >
      Send a message
    </a>
  </div>
</header>


      {/* MAIN */}
      <main className="pt-24 md:pt-28">
        {/* HERO TEXT */}
        <section
          id="work"
          className="relative flex justify-center items-center pt-16 pb-10 md:pb-14"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center gap-10 md:gap-12 relative z-10">
            {/* hint bar */}
            <div className="w-full text-[11px] uppercase tracking-[0.3em] text-neutral-400 overflow-hidden">
              <div className="flex gap-8 whitespace-nowrap animate-[marquee_32s_linear_infinite]">
                <span>
                  Northwest Constructions Ltd • Vancouver BC • Real-estate
                  development • Brand &amp; digital transformation
                </span>
                <span>
                  Northwest Constructions Ltd • Vancouver BC • Real-estate
                  development • Brand &amp; digital transformation
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="uppercase font-medium text-[11px] tracking-[0.25em] text-amber-600 mb-4">
                Case study
              </span>
              <h1 className="font-black text-[30px] md:text-[40px] leading-tight uppercase max-w-3xl">
                Northwest Constructions Ltd &bull; <br />
                {/* Website redesign &amp; SEO */}
              </h1>
            </div>

            {/* mobile meta bar */}
            <div className="w-full text-[11px] uppercase tracking-[0.3em] text-neutral-400 md:hidden overflow-hidden">
              <div className="flex gap-8 whitespace-nowrap animate-[marquee_32s_linear_infinite]">
                <span>Website redesign • SEO • Rebranding</span>
                <span>Website redesign • SEO • Rebranding</span>
              </div>
            </div>
          </div>
        </section>

        {/* HERO VIDEO */}
        <section className="relative w-full">
          <div className="relative aspect-[16/9] md:aspect-[1411/551] w-full">
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
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col gap-16 md:gap-20">
            {/* Brand problem */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 leading-relaxed">
              <div className="md:w-1/3 font-bold flex md:justify-end md:pr-5">
                <div className="w-full md:max-w-xs uppercase text-[11px] tracking-[0.25em] text-amber-600">
                  Brand issue
                </div>
              </div>
              <div className="md:w-2/3 text-sm md:text-base text-neutral-700">
                <p className="max-w-2xl">
                  Northwest Constructions Ltd had a strong portfolio, but the
                  old website felt generic and disconnected from the scale of
                  their projects. The brand looked like “just another
                  contractor”, visuals were inconsistent, and the site was hard
                  to use on mobile. SEO wasn’t structured, project content was
                  scattered, and there was no clear narrative about Northwest’s
                  position in the Lower Mainland market.
                </p>
              </div>
            </div>

            {/* Brand strategy */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 leading-relaxed">
              <div className="md:w-1/3 font-bold flex md:justify-end md:pr-5">
                <div className="w-full md:max-w-xs uppercase text-[11px] tracking-[0.25em] text-amber-600">
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
          <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 md:pb-14">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black uppercase">
                From confusing brochure-ware<br className="hidden md:block" />{" "}
                to a clear, focused brand platform
              </h2>
              <p className="mt-4 text-sm md:text-base text-neutral-600">
                Strategy, design, content and SEO brought together into a
                single, conversion-ready website for Northwest Constructions
                Ltd.
              </p>
            </div>
          </div>

          {/* VIDEO BEFORE / AFTER SLIDER */}
          <BeforeAfterSlider
            beforeVideo="/videos/oldvideo.mp4"
            afterVideo="/videos/newvideo.mp4"
            beforeLabel="Old site"
            afterLabel="New site"
          />

          {/* FOUR HIGHLIGHT CARDS */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 pb-24">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent mb-12" />
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-4"
                >
                  <div className="text-[32px] font-black text-amber-600 leading-none transition-transform duration-300 group-hover:translate-x-1">
                    {item.label}
                  </div>
                  <h3 className="text-base md:text-lg font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FULL-PAGE SCREENSHOTS */}
<section className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 md:px-10">
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-black uppercase">
        Old vs new — full-page views
      </h2>
      <p className="mt-4 text-sm md:text-base text-neutral-600">
        Static full-page captures of the previous and redesigned website to
        complement the before/after walkthrough.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">

      {[
        {
          label: "Old homepage",
          src: "/images/oldH.png", // 👈 change to your real old screenshot
        },
        {
          label: "New homepage",
          src: "/images/newH.png", // 👈 new full-page screenshot
        },
      ].map((shot, i) => (
        <div
          key={shot.label}
          className="overflow-hidden rounded-2xl border border-black/10 shadow-xl bg-white"
        >
          {/* simple “browser chrome” bar */}
          <div className="h-9 bg-neutral-900/90 border-b border-black/40 flex items-center px-4 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-4 text-[11px] uppercase tracking-[0.18em] text-neutral-400">
              {shot.label}
            </span>
          </div>

          <img
            src={shot.src}
            alt={shot.label}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>



        {/* OTHER PROJECTS */}
        <section className="bg-[#0f1011] border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase">
              More projects
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <article className="group relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-900">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/21364/SM1113665.jpg?date=Thu%20Dec%2004%202025%2021:19:34%20GMT+0530%20(India%20Standard%20Time)"
                    alt="Another project"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="mt-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em]">
                      Digital
                    </p>
                    <h3 className="mt-1 text-lg font-black uppercase">
                      Real estate
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black text-xs font-bold translate-x-2">
                    →
                  </div>
                </div>
              </article>

              <article className="group relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-900">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/18251/ES794681.jpg?date=Thu%20Dec%2004%202025%2021:18:47%20GMT+0530%20(India%20Standard%20Time)"
                    alt="Another project"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="mt-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em]">
                      Social &amp; video
                    </p>
                    <h3 className="mt-1 text-lg font-black uppercase">
                      Construction employer 
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black text-xs font-bold translate-x-2">
                    →
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-[#0f1011] text-white border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-xl font-black uppercase">Let’s build yours</h3>
            <p className="mt-3 text-sm text-white/70 max-w-sm">
              Want a similar case-study page for your next project? This layout
              is fully reusable across your portfolio.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a
              href="mailto:you@yourstudio.com"
              className="px-4 py-2 border border-white text-sm font-medium uppercase tracking-[0.18em]"
            >
              Email me
            </a>
            <span className="text-xs text-white/60">
              © {new Date().getFullYear()} Your Name — Portfolio
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NorthwestCaseStudy;
