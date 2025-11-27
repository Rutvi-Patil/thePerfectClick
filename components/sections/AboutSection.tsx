export default function AboutSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. CLIENT LOGOS ROW */}
        <div className="py-8 sm:py-12 lg:py-16">
          {/* Mobile: Scrollable horizontal logos */}
          <div className="flex overflow-x-auto gap-8 sm:gap-12 lg:gap-16 pb-4 sm:pb-0 lg:overflow-x-visible lg:justify-between lg:items-center scrollbar-hide">
            <div className="text-xl sm:text-2xl font-bold text-black whitespace-nowrap flex-shrink-0">Walmart</div>
            <div className="text-xl sm:text-2xl font-bold text-black whitespace-nowrap flex-shrink-0">InVision</div>
            <div className="text-xl sm:text-2xl font-bold text-black whitespace-nowrap flex-shrink-0">Netflix</div>
            <div className="text-xl sm:text-2xl font-bold text-black whitespace-nowrap flex-shrink-0">Logitech</div>
            <div className="text-xl sm:text-2xl font-bold text-black whitespace-nowrap flex-shrink-0">Amazon</div>
          </div>
        </div>

        {/* 2. MAIN TWO-COLUMN AGENCY INTRO BLOCK */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center py-12 sm:py-16 lg:py-20">
          {/* Left Column - Main Heading */}
          <div>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              style={{ 
                color: '#111111',
                lineHeight: '1.1',
                fontFamily: 'var(--font-space-grotesk)'
              }}
            >
              We are a creative<br/>
              bold digital agency<br/>
              <span className="relative inline-block">
                based in london.
                {/* Yellow underline paint stroke */}
                <svg 
                  className="absolute -bottom-1 sm:-bottom-2 -left-1 w-24 sm:w-32 h-4 sm:h-6 text-yellow-400"
                  viewBox="0 0 120 25"
                  fill="currentColor"
                  style={{ transform: 'rotate(-2deg)' }}
                >
                  <path d="M5,12 Q30,3 60,12 T115,12 Q110,20 60,16 T10,16 Q5,14 5,12" />
                </svg>
              </span>
            </h1>
          </div>

          {/* Right Column - Experience Circle + Copy */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Big Black Circle Badge - Responsive */}
            <div 
              className="flex-shrink-0 rounded-full flex items-center justify-center"
              style={{ 
                width: 'clamp(160px, 40vw, 240px)',
                height: 'clamp(160px, 40vw, 240px)',
                backgroundColor: '#1A1A1A',
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'
              }}
            >
              <span 
                className="text-white font-bold"
                style={{ fontSize: 'clamp(40px, 10vw, 70px)' }}
              >
                20+
              </span>
            </div>

            {/* Experience Text Block */}
            <div className="text-center sm:text-left">
              <h2 
                className="text-sm sm:text-base lg:text-lg font-bold tracking-wider mb-3 sm:mb-4"
                style={{ 
                  color: '#111111',
                  letterSpacing: '0.1em'
                }}
              >
                20+ YEARS OF EXPERIENCE
              </h2>
              <p 
                className="text-sm sm:text-base leading-relaxed"
                style={{ 
                  color: '#666666',
                  lineHeight: '1.7'
                }}
              >
                We are dedicated to providing<br/>
                outstanding digital and design<br/>
                services meet the functional<br/>
                and aesthetic.
              </p>
            </div>
          </div>
        </div>

        {/* 3. THREE STAT ITEMS */}
        <div className="border-t border-gray-200 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* First Stat */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
              <span 
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: '#111111' }}
              >
                350+
              </span>
              <div className="flex-1">
                <span 
                  className="text-base sm:text-lg block"
                  style={{ color: '#666666' }}
                >
                  very satisfied clients around the worldwide.
                </span>
                {/* Smile face icon */}
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto sm:mx-0 mt-2 sm:mt-0"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  style={{ color: '#666666' }}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
            </div>

            {/* Second Stat */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
              <span 
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: '#111111' }}
              >
                200+
              </span>
              <div className="flex-1">
                <span 
                  className="text-base sm:text-lg block"
                  style={{ color: '#666666' }}
                >
                  good award winning digital media agency.
                </span>
                {/* Megaphone icon */}
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto sm:mx-0 mt-2 sm:mt-0"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  style={{ color: '#666666' }}
                >
                  <path d="M3 12l6-6v12l-6-6z"></path>
                  <path d="M9 12h12"></path>
                  <path d="M21 8v8"></path>
                </svg>
              </div>
            </div>

            {/* Third Stat */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
              <span 
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: '#111111' }}
              >
                750+
              </span>
              <div className="flex-1">
                <span 
                  className="text-base sm:text-lg block"
                  style={{ color: '#666666' }}
                >
                  successfully project completed in one year.
                </span>
                {/* Briefcase icon */}
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto sm:mx-0 mt-2 sm:mt-0"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  style={{ color: '#666666' }}
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
