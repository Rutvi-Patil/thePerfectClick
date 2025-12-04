import Footer from '@/components/sections/Footer';
import VideoPlayer from '@/components/VideoPlayer';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Northwest Constructions Ltd. */}
      <section className="pt-24 md:pt-32 pb-32 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col justify-between h-[464.99px]">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Northwest Constructions Ltd.</h2>
                <p className="text-lg leading-relaxed text-gray-700 max-w-md">
                  Northwest Constructions is committed to building spaces that stand the test of time, with thoughtful planning and structural innovation at every stage.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-bold text-slate-600">58%</div>
                <div className="text-gray-600 text-base">Share price increase in the 12 months after launch.</div>
              </div>
            </div>
            <VideoPlayer 
              src="https://r2-northwest.takkar.ooo/surrey_city_centre_Drone_May7_compressed.mp4"
              className="w-[826.66px] h-[464.99px] rounded-2xl"
              mobileRatio="1080 / 1350"
              desktopRatio="2560 / 1440"
              controls={true}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Ron Basra Real Estate Group */}
      <section className="pt-24 md:pt-32 pb-32 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col justify-between h-[464.99px]">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Ron Basra Real Estate Group</h2>
                <p className="text-lg leading-relaxed text-gray-700 max-w-md">
                  Ron Basra and his team bring nearly three decades of award-winning real estate service to Vancouver, combining deep local insight with client-first guidance on every transaction.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-bold text-indigo-600">28+</div>
                <div className="text-gray-600 text-base">Years of award-winning real estate service in Vancouver.</div>
              </div>
            </div>
            <div className="w-[826.66px] h-[464.99px] bg-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl">
              Video Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Forte Sports & Orthopaedic Physiotherapy */}
      <section className="pt-24 md:pt-32 pb-32 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col justify-between h-[464.99px]">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Forte Sports & Orthopaedic Physiotherapy</h2>
                <p className="text-lg leading-relaxed text-gray-700 max-w-md">
                  Forte Physiotherapy helps people move better and feel stronger with evidence-based care for sports injuries, pain, pelvic health and post-surgical recovery.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-bold text-cyan-600">92%</div>
                <div className="text-gray-600 text-base">Customer satisfaction rating within the first 6 months of launch, exceeding targets.</div>
              </div>
            </div>
            <div className="w-[826.66px] h-[464.99px] bg-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl">
              Video Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Medallion Homes */}
      <section className="pt-24 md:pt-32 pb-32 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col justify-between h-[464.99px]">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Medallion Homes</h2>
                <p className="text-lg leading-relaxed text-gray-700 max-w-md">
                  Medallion Homes crafts residences that balance modern design with enduring quality, creating homes across Metro Vancouver that are beautiful, functional and built to last.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-bold text-slate-700">450k</div>
                <div className="text-gray-600 text-base">Sample listing value in recent Medallion-built communities.</div>
              </div>
            </div>
            <VideoPlayer 
              src="https://r2-medallion.takkar.ooo/compressed_3118.mp4"
              className="w-[826.66px] h-[464.99px] rounded-2xl"
              mobileRatio="1080 / 1350"
              desktopRatio="2560 / 1440"
              controls={true}
            />
          </div>
        </div>
      </section>

      {/* Section 5: Armaan Sandhu Real Estate */}
      <section className="pt-24 md:pt-32 pb-32 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col justify-between h-[464.99px]">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Armaan Sandhu Real Estate</h2>
                <p className="text-lg leading-relaxed text-gray-700 max-w-md">
                  Armaan Sandhu focuses on helping buyers and sellers navigate BC's residential market with clear advice, thoughtful marketing and a focus on long-term relationships.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-bold text-neutral-800">$15M</div>
                <div className="text-gray-600 text-base">Residential specialist serving Surrey, Vancouver and surrounding areas.</div>
              </div>
            </div>
            <div className="w-[826.66px] h-[464.99px] bg-neutral-900 rounded-2xl flex items-center justify-center text-white text-2xl">
              Video Placeholder
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
