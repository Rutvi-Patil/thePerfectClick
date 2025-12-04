"use client";
import React, { useState } from "react";

type RecentWorkItem = {
  title: string;
  category: string;
  image: string;
};

const recentWork: RecentWorkItem[] = [
  {
    title: "Ron Basra – Instagram Funnel",
    category: "Real Estate",
    image: "/images/ron-basra-cover-1.jpg",
  },
  {
    title: "Ron Basra – Listing Videos",
    category: "Real Estate",
    image: "/images/ron-basra-cover-2.jpg",
  },
  {
    title: "Ron Basra – Brand Refresh",
    category: "Branding",
    image: "/images/ron-basra-cover-3.jpg",
  },
  {
    title: "Local Broker – Lead Gen",
    category: "Real Estate",
    image: "/images/real-estate-cover-1.jpg",
  },
];

const RonBasraCaseStudy: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % recentWork.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? recentWork.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <main>
        <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:pt-20">
            {/* tags */}
            <div className="mb-5 flex flex-wrap gap-2 text-[11px]">
              {["Real Estate", "Social Media Marketing", "Content Strategy", "Instagram Growth"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* title + subtitle */}
            <div className="space-y-4 md:flex md:flex-row md:items-end md:justify-between md:space-y-0">
              <div className="max-w-3xl">
                <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Ron Basra Real Estate:
                  <span className="block text-emerald-300">
                    1 year of social media–driven growth
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                  A case study on how consistent Instagram strategy, production,
                  and scheduling helped a Vancouver real estate brand close more
                  deals and stay top-of-mind with buyers and sellers.
                </p>
              </div>

              <div className="mt-4 text-xs text-slate-400 md:mt-0 md:text-right">
                <div className="font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Client
                </div>
                <div className="text-sm text-slate-100">
                  Ron Basra Real Estate Group
                </div>
                <div className="mt-3 font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Duration
                </div>
                <div className="text-sm text-slate-100">12 months</div>
              </div>
            </div>

            {/* hero image */}
            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_0_60px_-30px_rgba(16,185,129,0.8)]">
              <div className="aspect-[16/9] w-full bg-[url('/images/ron-basra-hero.jpg')] bg-cover bg-center">
                {/* fallback overlay */}
                <div className="flex h-full w-full items-end bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent p-6">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                      Case Study
                    </p>
                    <p className="text-sm text-slate-100 md:text-base">
                      Instagram-first storytelling for listings, neighbourhoods,
                      and the Ron Basra brand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section
          id="overview"
          className="border-b border-slate-800 bg-slate-950/60"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:py-20">
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold md:text-2xl">
                Turning a strong offline brand into a scroll-stopping
                Instagram presence.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                Ron Basra already had a reputation in Vancouver real estate, but
                the digital experience was split across an{" "}
                <a
                  href="https://old.ronbasra.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-emerald-400/60 underline-offset-4 hover:text-emerald-300"
                >
                  outdated website
                </a>{" "}
                and inconsistent social content. The goal was simple:
                centralize the story, modernize the visuals, and use Instagram
                as a primary channel to drive interest, property views, and
                conversations.
              </p>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                We directed, planned, scheduled, and shot video content for
                Instagram—working across listings, behind-the-scenes, and
                educational posts—so that the team could focus on what they do
                best: closing deals.
              </p>
            </div>

            <div className="w-full max-w-xs space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200 md:w-80">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
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
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Channels
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    Instagram –{" "}
                    <a
                      href="https://www.instagram.com/ronbasra/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-300 underline underline-offset-4"
                    >
                      @ronbasra
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
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              • The Challenge
            </p>
            <h2 className="mt-3 max-w-2xl text-xl font-semibold md:text-2xl">
              Busy team, fragmented presence, and no clear content system.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
              The Ron Basra team juggles listings, showings, negotiations, and
              client relationships. Social media often became a “when we have
              time” activity. Content went out irregularly, visuals didn&apos;t
              fully reflect the quality of the brand, and there was no
              consistent narrative connecting listings, testimonials, and local
              expertise.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section
          id="approach"
          className="border-b border-slate-800 bg-slate-950/80"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              • Our Approach
            </p>
            <h2 className="mt-3 max-w-2xl text-xl font-semibold md:text-2xl">
              A done-for-you content engine built around the way the team
              already works.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
              Instead of adding more tools and complexity, we designed a simple
              loop: plan content around real listings and real client wins,
              shoot in batches, schedule everything, and review performance
              monthly. That turned Instagram into a predictable, repeatable
              growth channel—without requiring the team to live in their DMs.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-slate-100">
                  1. Direct & plan
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  We built monthly content calendars mapped to listings, open
                  houses, and seasonal market topics. Each piece had a clear
                  purpose: awareness, trust, or conversion.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-slate-100">
                  2. Shoot & produce
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  We handled video direction and shooting—capturing listing
                  tours, neighborhood highlights, and personal brand moments
                  that felt real, not scripted.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-slate-100">
                  3. Schedule & optimize
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  Content was scheduled in advance at optimal times, with hooks
                  and captions designed to stop the scroll and push viewers into
                  DMs or website visits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXECUTION – IMAGE GRID */}
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              • Execution
            </p>
            <h2 className="mt-3 max-w-2xl text-xl font-semibold md:text-2xl">
              From raw footage to a consistent, polished Instagram grid.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
                <div className="aspect-[4/5] bg-[url('/images/ron-basra-feed-1.jpg')] bg-cover bg-center" />
                <div className="p-4 text-sm text-slate-200">
                  Listing-first visuals: short reels showcasing interiors,
                  exteriors, and key selling points.
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
                <div className="aspect-[4/5] bg-[url('/images/ron-basra-feed-2.jpg')] bg-cover bg-center" />
                <div className="p-4 text-sm text-slate-200">
                  Story-driven content: client moments, behind-the-scenes, and
                  educational tips that build trust.
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
                <div className="aspect-[4/5] bg-[url('/images/ron-basra-feed-3.jpg')] bg-cover bg-center" />
                <div className="p-4 text-sm text-slate-200">
                  Brand consistency: typography, color, and framing aligned with
                  the new website direction.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section
          id="results"
          className="border-b border-slate-800 bg-slate-950/80"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              • The Result
            </p>
            <h2 className="mt-3 max-w-2xl text-xl font-semibold md:text-2xl">
              A channel that actually supports sales, not just vanity metrics.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
              Over the course of one year, the Ron Basra team saw a steady
              increase in qualified inquiries coming directly from Instagram:
              more DMs, more website visits, and more conversations that turned
              into showings.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
              Most importantly, the content supported what already worked offline:
              referrals and reputation. Social media became a proof point that
              matched how clients already talked about the brand—and helped the
              team close more deals.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  Outcome
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  More closed deals supported by Instagram as first-touch or
                  validation touchpoint.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Brand
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  A more premium, modern perception that aligns with the new
                  website.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Ops
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  A repeatable content system the team can keep using and
                  scaling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT WORK CAROUSEL */}
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Recent work
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-emerald-500 hover:text-emerald-300"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-emerald-500 hover:text-emerald-300"
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
                    className={`w-64 flex-shrink-0 rounded-3xl border bg-slate-900/60 shadow-lg transition-all duration-300 ${
                      index === currentSlide
                        ? "border-emerald-500/60 shadow-[0_0_45px_-25px_rgba(16,185,129,0.9)]"
                        : "border-slate-800 opacity-60"
                    }`}
                  >
                    <div
                      className="aspect-[3/4] rounded-3xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="space-y-1 p-4">
                      <h3 className="text-sm font-semibold text-slate-100">
                        {item.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        {item.category}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="bg-gradient-to-b from-slate-950 to-slate-900"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:justify-between md:py-20">
            <div className="max-w-xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                • Let&apos;s build your next launch
              </p>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Want your next listing or brand launch to feel this intentional?
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                I help real estate brands and founders turn scattered content
                into clear, consistent stories that actually move people to
                reach out. From content strategy to full production, I can plug
                in where your team needs support most.
              </p>
            </div>

            <div className="w-full max-w-sm rounded-3xl border border-emerald-500/40 bg-slate-950/80 p-6">
              <p className="text-sm font-medium text-slate-100">
                Share a bit about your project and timeline—I&apos;ll get back
                to you with ideas and next steps.
              </p>
              <form className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-500"
                />
                <textarea
                  placeholder="Tell me about your project..."
                  rows={3}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="mt-1 w-full rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Your Name — Portfolio Case Study.</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/ronbasra/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-300"
            >
              Instagram
            </a>
            <a href="mailto:you@example.com" className="hover:text-emerald-300">
              Email
            </a>
            <a href="/" className="hover:text-emerald-300">
              Back to home
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RonBasraCaseStudy;
