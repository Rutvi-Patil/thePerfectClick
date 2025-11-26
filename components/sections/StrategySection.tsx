import { Mail } from 'lucide-react';

export default function StrategySection() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-4">
            {/* Main Heading with Highlight */}
            <h2 className="text-2xl lg:text-3xl font-bold text-[#111111] leading-tight mb-8 text-left">
              Intuition and strategy integrate<br />
              the research methodology that we<br />
              also apply to{' '}
              <span className="relative">
                traditional
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#F7D747] opacity-80 -z-10 transform -rotate-1"></span>
              </span>
              {' '}media.
            </h2>
            
            {/* Supporting Text */}
            <p className="text-lg lg:text-xl text-[#666666] mb-8 leading-relaxed">
              We combine human empathy and intelligent data to provide the{' '}
              <span className="underline decoration-black decoration-1 underline-offset-4">
                highest level of satisfaction.
              </span>
            </p>
            
            {/* CTA Button */}
            <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-sm hover:bg-[#333333] transition-colors flex items-center gap-3 shadow-lg">
              LET'S TALK NOW
              <Mail className="w-5 h-5" />
            </button>
          </div>
          
          {/* Right Column - Metrics Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-0 border border-[#EDEDED]">
              
              {/* Row 1, Cell 1 */}
              <div className="p-8 lg:p-12 border-r border-b border-[#EDEDED]">
                <p className="text-sm lg:text-base text-[#666666] mb-4">
                  Users on marketplaces we've created in 2023.
                </p>
                <div className="text-4xl lg:text-5xl font-bold text-[#111111]">
                  ↑8500+
                </div>
              </div>
              
              {/* Row 1, Cell 2 */}
              <div className="p-8 lg:p-12 border-b border-[#EDEDED]">
                <p className="text-sm lg:text-base text-[#666666] mb-4">
                  Successfully finished projects with creativity.
                </p>
                <div className="text-4xl lg:text-5xl font-bold text-[#111111]">
                  ↑660+
                </div>
              </div>
              
              {/* Row 2, Cell 1 */}
              <div className="p-8 lg:p-12 border-r border-[#EDEDED]">
                <p className="text-sm lg:text-base text-[#666666] mb-4">
                  Monthly visitors on our e-Commerce platform.
                </p>
                <div className="text-4xl lg:text-5xl font-bold text-[#111111]">
                  ↑6834+
                </div>
              </div>
              
              {/* Row 2, Cell 2 */}
              <div className="p-8 lg:p-12">
                <p className="text-sm lg:text-base text-[#666666] mb-4">
                  Onboarding conversions growth increased.
                </p>
                <div className="text-4xl lg:text-5xl font-bold text-[#111111]">
                  ↑300%
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
