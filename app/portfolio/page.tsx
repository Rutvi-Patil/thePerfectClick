import Footer from '@/components/sections/Footer';
import Link from 'next/link';
import MarqueeSection from '@/components/sections/MarqueeSection';
import React from 'react';

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-800 leading-relaxed py-20 lg:py-20 py-10">
      <div className="max-w-7xl mx-auto lg:px-6 px-4">
        {/* PROJECT 1: NORTHWEST */}
        <section className="lg:py-16 py-12 border-b border-gray-100 last:border-b-0">
          <h1 className="lg:text-5xl text-3xl font-bold lg:mb-8 mb-6 tracking-tight">Northwest Constructions Ltd.</h1>

          <div className="lg:flex gap-20 items-end lg:flex-row flex-col lg:gap-20 gap-10">
            <div className="flex-1 lg:max-w-md max-w-full lg:pt-10 pt-0 lg:flex flex-col justify-between lg:min-h-96 min-h-auto block">
              <p className="lg:text-2xl text-xl leading-snug lg:mb-8 mb-6 lg:max-w-sm max-w-full text-gray-600">
                Northwest Constructions is committed to building spaces that
                stand the test of time, with thoughtful planning and structural
                innovation at every stage.
              </p>

              <div className="lg:mt-10 mt-8">
                <div className="lg:text-6xl text-5xl font-bold mb-2 leading-none text-green-600">
                  58%
                </div>
                <div className="lg:text-lg text-base text-gray-600 lg:max-w-72 max-w-full">
                  Share price increase in the 12 months after launch.
                </div>
                <Link 
                  href="/portfolio/northwest" 
                  className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold no-underline mt-6 transition-colors duration-200 hover:bg-yellow-300"
                >
                  View Full Case Study →
                </Link>
              </div>
            </div>

            <div className="flex-2 relative lg:min-w-[800px] w-full lg:h-[500px] h-64 lg:rounded-xl rounded-lg overflow-hidden shadow-lg lg:flex items-end block">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                controls
                className="w-full lg:h-[500px] h-64 object-cover block"
              >
                <source
                  src="https://r2-northwest.takkar.ooo/surrey_city_centre_Drone_May7_compressed.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* PROJECT 2: RON BASRA */}
        <section className="lg:py-16 py-12 border-b border-gray-100 last:border-b-0">
          <h1 className="lg:text-5xl text-3xl font-bold lg:mb-8 mb-6 tracking-tight">Ron Basra Real Estate Group</h1>

          <div className="lg:flex gap-20 items-end lg:flex-row flex-col lg:gap-20 gap-10">
            <div className="flex-1 lg:max-w-md max-w-full lg:pt-10 pt-0 lg:flex flex-col justify-between lg:min-h-96 min-h-auto block">
              <p className="lg:text-2xl text-xl leading-snug lg:mb-8 mb-6 lg:max-w-sm max-w-full text-gray-600">
                Ron Basra and his team bring nearly three decades of
                award-winning real estate service to Vancouver, combining deep
                local insight with client-first guidance on every transaction.
              </p>

              <div className="lg:mt-10 mt-8">
                <div className="lg:text-6xl text-5xl font-bold mb-2 leading-none text-purple-600">
                  28+
                </div>
                <div className="lg:text-lg text-base text-gray-600 lg:max-w-72 max-w-full">
                  Years of award-winning real estate service in Vancouver.
                </div>
                <Link 
                  href="/portfolio/ron-basra" 
                  className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold no-underline mt-6 transition-colors duration-200 hover:bg-yellow-300"
                >
                  View Full Case Study →
                </Link>
              </div>
            </div>

            <div className="flex-2 relative lg:min-w-[800px] w-full lg:h-[500px] h-64 lg:rounded-xl rounded-lg overflow-hidden shadow-lg lg:flex items-end block">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                controls
                className="w-full lg:h-[500px] h-64 object-cover block"
              >
                <source
                  src="https://digital-agency.takkar.ooo/RBF.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* PROJECT 3: FORTE PHYSIO */}
        <section className="lg:py-16 py-12 border-b border-gray-100 last:border-b-0">
          <h1 className="lg:text-5xl text-3xl font-bold lg:mb-8 mb-6 tracking-tight">
            Forte Sports & Orthopaedic Physiotherapy
          </h1>

          <div className="lg:flex gap-20 items-end lg:flex-row flex-col lg:gap-20 gap-10">
            <div className="flex-1 lg:max-w-md max-w-full lg:pt-10 pt-0 lg:flex flex-col justify-between lg:min-h-96 min-h-auto block">
              <p className="lg:text-2xl text-xl leading-snug lg:mb-8 mb-6 lg:max-w-sm max-w-full text-gray-600">
                Forte Physiotherapy helps people move better and feel stronger
                with evidence-based care for sports injuries, pain, pelvic
                health and post-surgical recovery.
              </p>

              <div className="lg:mt-10 mt-8">
                <div className="lg:text-6xl text-5xl font-bold mb-2 leading-none text-cyan-500">
                  92%
                </div>
                <div className="lg:text-lg text-base text-gray-600 lg:max-w-72 max-w-full">
                  Customer satisfaction rating within the first 6 months of
                  launch, exceeding targets.
                </div>
                <Link 
                  href="/portfolio/forte" 
                  className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold no-underline mt-6 transition-colors duration-200 hover:bg-yellow-300"
                >
                  View Full Case Study →
                </Link>
              </div>
            </div>

            <div className="flex-2 relative lg:min-w-[800px] w-full lg:h-[500px] h-64 lg:rounded-xl rounded-lg overflow-hidden shadow-lg lg:flex items-end block">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                controls
                className="w-full lg:h-[500px] h-64 object-cover block"
              >
                <source
                  src="https://r2-northwest.takkar.ooo/forte-hero.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* PROJECT 4: MEDALLION */}
        <section className="lg:py-16 py-12 border-b border-gray-100 last:border-b-0">
          <h1 className="lg:text-5xl text-3xl font-bold lg:mb-8 mb-6 tracking-tight">Medallion Homes</h1>

          <div className="lg:flex gap-20 items-end lg:flex-row flex-col lg:gap-20 gap-10">
            <div className="flex-1 lg:max-w-md max-w-full lg:pt-10 pt-0 lg:flex flex-col justify-between lg:min-h-96 min-h-auto block">
              <p className="lg:text-2xl text-xl leading-snug lg:mb-8 mb-6 lg:max-w-sm max-w-full text-gray-600">
                Medallion Homes crafts residences that balance modern design
                with enduring quality, creating homes across Metro Vancouver
                that are beautiful, functional and built to last.
              </p>

              <div className="lg:mt-10 mt-8">
                <div className="lg:text-6xl text-5xl font-bold mb-2 leading-none text-orange-400">
                  450k
                </div>
                <div className="lg:text-lg text-base text-gray-600 lg:max-w-72 max-w-full">
                  Sample listing value in recent Medallion-built communities.
                </div>
                <Link 
                  href="/portfolio/medallion-homes" 
                  className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold no-underline mt-6 transition-colors duration-200 hover:bg-yellow-300"
                >
                  View Full Case Study →
                </Link>
              </div>
            </div>

            <div className="flex-2 relative lg:min-w-[800px] w-full lg:h-[500px] h-64 lg:rounded-xl rounded-lg overflow-hidden shadow-lg lg:flex items-end block">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                controls
                className="w-full lg:h-[500px] h-64 object-cover block"
              >
                <source
                  src="https://r2-medallion.takkar.ooo/compressed_3118.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* PROJECT 5: ARMAAN SANDHU */}
        <section className="lg:py-16 py-12 border-b border-gray-100 last:border-b-0">
          <h1 className="lg:text-5xl text-3xl font-bold lg:mb-8 mb-6 tracking-tight">Armaan Sandhu Real Estate</h1>

          <div className="lg:flex gap-20 items-end lg:flex-row flex-col lg:gap-20 gap-10">
            <div className="flex-1 lg:max-w-md max-w-full lg:pt-10 pt-0 lg:flex flex-col justify-between lg:min-h-96 min-h-auto block">
              <p className="lg:text-2xl text-xl leading-snug lg:mb-8 mb-6 lg:max-w-sm max-w-full text-gray-600">
                Armaan Sandhu focuses on helping buyers and sellers navigate
                BC's residential market with clear advice, thoughtful
                marketing and a focus on long-term relationships.
              </p>

              <div className="lg:mt-10 mt-8">
                <div className="lg:text-6xl text-5xl font-bold mb-2 leading-none text-gray-800">
                  $15M
                </div>
                <div className="lg:text-lg text-base text-gray-600 lg:max-w-72 max-w-full">
                  Residential specialist serving Surrey, Vancouver and
                  surrounding areas.
                </div>
                <Link 
                  href="/portfolio/armaan-sandhu" 
                  className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold no-underline mt-6 transition-colors duration-200 hover:bg-yellow-300"
                >
                  View Full Case Study →
                </Link>
              </div>
            </div>

            <div className="flex-2 relative lg:min-w-[800px] w-full lg:h-[500px] h-64 lg:rounded-xl rounded-lg overflow-hidden shadow-lg lg:flex items-end block">
              <img
                src="https://placehold.co/800x530/1e1e1e/888888?text=Chronos+Desktop+View"
                alt="Dark, minimalist computer desktop interface."
                className="w-full lg:h-[500px] h-64 object-cover block"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-4 rounded-xl gap-2.5 shadow-2xl flex items-center lg:w-auto w-[280px]">
                <span className="lg:text-2xl text-xl text-red-400">★</span>
                <span className="text-white lg:text-base text-sm font-medium">
                  New Feature Alert: Dark Mode v2
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <MarqueeSection />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
