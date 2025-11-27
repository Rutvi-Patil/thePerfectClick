export default function ExpertiseHeroSection() {
  return (
    <section className="relative w-full diagonal-crosshatch" style={{ backgroundColor: '#F7D2CA' }}>
      
      {/* Main Content - Two Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:pl-8 text-center lg:text-left">
            {/* Yellow Brush Underline */}
            <div className="relative inline-block">
              <svg 
                className="absolute -bottom-2 -left-2 w-24 h-6 sm:w-32 h-8 text-yellow-400 opacity-80"
                viewBox="0 0 120 30"
                fill="currentColor"
                style={{ filter: 'blur(1px)' }}
              >
                <path d="M5,15 Q30,5 60,15 T115,15 Q110,25 60,20 T10,20 Q5,18 5,15" />
              </svg>
              
              {/* Expertise Heading */}
              <h1 
                className="relative text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-none"
                style={{ fontFamily: 'var(--font-space-grotesk)', color: '#0A0A0A' }}
              >
                Expertise
              </h1>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:pl-8 text-center lg:text-left">
            <p 
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 max-w-lg mx-auto lg:mx-0"
              style={{ color: '#6A6A6A', lineHeight: '1.6' }}
            >
              We specialize in delivering cutting-edge digital solutions that drive growth and innovation for your business.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
}
