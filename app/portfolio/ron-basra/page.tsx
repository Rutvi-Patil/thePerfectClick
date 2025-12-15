"use client";

import React, { useState } from "react";
import Footer from "@/components/sections/Footer";
import InstagramEmbed from "@/components/InstagramEmbed";
import AnimatedSection from "@/components/AnimatedSection";

type RecentWorkItem = {
  title: string;
  category: string;
  image: string;
};

const recentWork: RecentWorkItem[] = [
  {
    title: "Ron Basra – Instagram Funnel",
    category: "Real Estate",
    image: "/images/funnel.png",
  },
  {
    title: "Ron Basra – Listing Videos",
    category: "Real Estate",
    image:
      "https://i.pinimg.com/736x/40/81/a5/4081a521980faf09cab317aed496fa77.jpg",
  },
  {
    title: "Ron Basra – Brand Refresh",
    category: "Branding",
    image: "/images/BR.png",
  },
  {
    title: "Local Broker – Lead Gen",
    category: "Real Estate",
    image: "/images/brd.jpg",
  },
];

const RonBasraCaseStudy: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % recentWork.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? recentWork.length - 1 : prev - 1));
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-800"
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      {/* HERO */}
      <main>
        <section className="border-b border-gray-100 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:pt-20">
            {/* tags */}
            <div className="mb-5 flex flex-wrap gap-2 text-[11px]">
              {[
                "Real Estate",
                "Social Media Marketing",
                "Content Strategy",
                "Instagram Growth",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* title + subtitle */}
            <div className="space-y-4 md:flex md:flex-row md:items-end md:justify-between md:space-y-0">
              <div className="max-w-3xl">
                <h1
                  className="text-3xl font-black leading-tight tracking-tight md:text-5xl"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Ron Basra Real Estate:
                  <span className="block" style={{ color: "var(--accent)" }}>
                    1 year of social media–driven growth
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
                  A case study on how consistent Instagram strategy, production,
                  and scheduling helped a Vancouver real estate brand close
                  more deals and stay top-of-mind with buyers and sellers.
                </p>
              </div>

              <div className="mt-4 text-xs text-gray-500 md:mt-0 md:text-right">
                <div className="font-semibold uppercase tracking-[0.16em] text-gray-700">
                  Client
                </div>
                <div className="text-sm text-gray-800">
                  Ron Basra Real Estate Group
                </div>
                <div className="mt-3 font-semibold uppercase tracking-[0.16em] text-gray-700">
                  Duration
                </div>
                <div className="text-sm text-gray-800">12 months</div>
              </div>
            </div>

            {/* hero image */}
            <div className="relative mt-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 bg-gray-50/80 shadow-[0_0_60px_-30px_rgba(251,146,60,0.3)]">
              {/* Aspect-ratio wrapper */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
                {/* Video background */}
                <video
                  src="https://digital-agency.takkar.ooo/RBF.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-white/30 via-white/10 to-transparent p-6">
                  <div className="space-y-1">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--accent)" }}
                    >
                      {/* Case Study */}
                    </p>
                    <p className="text-sm text-gray-800 md:text-base">
                      {/* Instagram-first storytelling for listings, neighbourhoods,
                      and Ron Basra brand. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="border-b border-gray-100 bg-gray-50/60">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:py-20">
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold md:text-2xl">
                Turning a strong offline brand into a scroll-stopping
                Instagram presence.
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                Ron Basra already had a reputation in Vancouver real estate, but
                digital experience was split across an{" "}
                <a
                  href="https://old.ronbasra.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-yellow-400/60 underline-offset-4"
                  style={{ color: "var(--accent)" }}
                >
                  outdated website
                </a>{" "}
                and inconsistent social content. The goal was simple:
                centralize story, modernize visuals, and use Instagram
                as a primary channel to drive interest, property views, and
                conversations.
              </p>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                We directed, planned, scheduled, and shot video content for
                Instagram—working across listings, behind-the-scenes, and
                educational posts—so that team could focus on what they do
                best: closing deals.
              </p>
            </div>

            <div className="w-full max-w-xs space-y-4 rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 md:w-80">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Services
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Content strategy & calendar</li>
                  <li>Instagram Reels & video direction</li>
                  <li>On-site shoots & production</li>
                  <li>Copywriting & caption frameworks</li>
                  <li>Basic editing & motion graphics</li>
                  <li>Analytics review & iteration</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Channels
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    Instagram –{" "}
                    <a
                      href="https://old.ronbasra.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-yellow-400/60 underline-offset-4"
                      style={{ color: "var(--accent)" }}
                    >
                      outdated website
                    </a>
                  </li>
                  <li>Website refresh</li>
                  <li>Email & WhatsApp follow-ups</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent)" }}
            >
              • The Challenge
            </p>
            <h2
              className="mt-3 max-w-2xl text-xl font-semibold md:text-2xl"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Busy team, fragmented presence, and no clear content system.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
              The Ron Basra team juggles listings, showings, negotiations, and
              client relationships. Social media often became a "when we have
              time" activity. Content went out irregularly, visuals didn't
              fully reflect quality of the brand, and there was no
              consistent narrative connecting listings, testimonials, and local
              expertise.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="border-b border-gray-100 bg-gray-50/80">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent)" }}
            >
              • Our Approach
            </p>
            <h2
              className="mt-3 max-w-2xl text-xl font-semibold md:text-2xl"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              A done-for-you content engine built around the way team already
              works.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
              Instead of adding more tools and complexity, we designed a simple
              loop: plan content around real listings and real client wins,
              shoot in batches, schedule everything, and review performance
              monthly. That turned Instagram into a predictable, repeatable
              growth channel—without requiring the team to live in their DMs.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-gray-800">
                  1. Direct & plan
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  We built monthly content calendars mapped to listings, open
                  houses, and seasonal market topics. Each piece had a clear
                  purpose: awareness, trust, or conversion.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-gray-800">
                  2. Shoot & produce
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  We handled video direction and shooting—capturing listing
                  tours, neighborhood highlights, and personal brand moments
                  that felt real, not scripted.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-gray-800">
                  3. Schedule & optimize
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  Content was scheduled in advance at optimal times, with hooks
                  and captions designed to stop the scroll and push viewers into
                  DMs or website visits.
                </p>
              </div>
            </div>

            {/* INSTAGRAM VIDEO EXAMPLE */}
            <div className="mt-12">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Example: Instagram Content in Action
                </h3>
                <p className="text-sm text-gray-600">See how our content strategy comes to life in this featured reel</p>
              </div>

              <div className="max-w-2xl mx-auto">
                <InstagramEmbed url="https://www.instagram.com/reel/DP2n9SqEcuC/" />
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="border-b border-gray-100 bg-gray-50/80">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent)" }}
            >
              • The Result
            </p>
            <h2
              className="mt-3 max-w-2xl text-xl font-semibold md:text-2xl"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              A channel that actually supports sales, not just vanity metrics.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
              Over the course of one year, the Ron Basra team saw a steady
              increase in qualified inquiries coming directly from
              Instagram: more DMs, more website visits, and more conversations
              that turned into showings.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
              Most importantly, content supported what already worked
              offline: referrals and reputation. Social media became a proof
              point that matched how clients already talked about the brand—and
              helped the team close more deals.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-2xl border border-yellow-600/40 bg-yellow-600/5 p-4">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "var(--accent)" }}
                >
                  Outcome
                </p>
                <p className="mt-2 text-sm text-gray-800">
                  More closed deals supported by Instagram as first-touch or
                  validation touchpoint.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Brand
                </p>
                <p className="mt-2 text-sm text-gray-800">
                  A more premium, modern perception that aligns with the new
                  website.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Ops
                </p>
                <p className="mt-2 text-sm text-gray-800">
                  A repeatable content system the team can keep using and
                  scaling.
                </p>
              </div>
            </div>

            {/* RESULTS VISUALS - 2 SIDE BY SIDE */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Results in Action</h3>
                <p className="text-sm text-gray-600">See transformation and growth metrics from our social media strategy</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                <AnimatedSection
                  delay={0.2}
                  className="overflow-hidden rounded-xl md:rounded-2xl border border-black/10 shadow-lg md:shadow-xl bg-white group"
                >
                  <img
                    src="/images/B1.png"
                    alt="Instagram Growth Funnel"
                    className="w-full h-auto object-cover"
                  />
                </AnimatedSection>
                <AnimatedSection
                  delay={0.4}
                  className="overflow-hidden rounded-xl md:rounded-2xl border border-black/10 shadow-lg md:shadow-xl bg-white group"
                >
                  <img
                    src="/images/B2.png"
                    alt="Brand Refresh Results"
                    className="w-full h-auto object-cover"
                  />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT WORK CAROUSEL */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Recent work
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600"
                  style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600"
                  style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                >
                  →
                </button>
              </div>
            </div>

            <div className="mt-8 overflow-hidden">
              <div className="flex gap-6 transition-transform duration-500">
                {recentWork.map((item, index) => (
                  <article
                    key={item.title}
                    className={`w-64 flex-shrink-0 rounded-3xl border bg-white shadow-lg transition-all duration-300 ${
                      index === currentSlide
                        ? "border-yellow-600/60 shadow-[0_0_45px_-25px_rgba(250,204,21,0.3)]"
                        : "border-gray-200 opacity-60"
                    }`}
                  >
                    <div
                      className="aspect-[3/4] rounded-3xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="space-y-1 p-4">
                      <h3 className="text-sm font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                        {item.category}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIGITAL ASSETS - 3 SIDE BY SIDE */}
        <section className="bg-[#fef3c7] py-12 md:py-24">
          <div className="w-full px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-black uppercase">
                OUR WEBSITE
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-neutral-600 px-2">
                Full-page captures of our real estate marketing platform designed for property showcase
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
              {[
                {
                  label: "Marketing Platform",
                  src: "/images/ML.png",
                },
                {
                  label: "Homepage Design",
                  src: "/images/homepage.png",
                },
                {
                  label: "Office Platform",
                  src: "/images/office.png",
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

        {/* CTA */}
        <section id="contact" className="bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:justify-between md:py-20">
            <div className="max-w-xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>
                • Let's build your next launch
              </p>
              <h2 className="text-2xl font-semibold md:text-3xl" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Want your next listing or brand launch to feel this intentional?
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                I help real estate brands and founders turn scattered content
                into clear, consistent stories that actually move people to
                reach out. From content strategy to full production, I can plug
                in where your team needs support most.
              </p>
            </div>

            <div className="w-full max-w-sm rounded-3xl border border-yellow-600/40 bg-white p-6">
              <p className="text-sm font-medium text-gray-800">
                Share a bit about your project and timeline—I'll get back
                to you with ideas and next steps.
              </p>
              <form className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-500"
                  style={{ borderColor: 'var(--accent)' }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-500"
                  style={{ borderColor: 'var(--accent)' }}
                />
                <textarea
                  placeholder="Tell me about your project..."
                  rows={3}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-500"
                  style={{ borderColor: 'var(--accent)' }}
                />
                <button
                  type="submit"
                  className="mt-1 w-full rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RonBasraCaseStudy;
