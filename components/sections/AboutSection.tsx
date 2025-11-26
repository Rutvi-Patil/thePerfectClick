export default function AboutSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. CLIENT LOGOS ROW */}
        <div className="py-16">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black">Walmart</div>
            <div className="text-2xl font-bold text-black">InVision</div>
            <div className="text-2xl font-bold text-black">Netflix</div>
            <div className="text-2xl font-bold text-black">Logitech</div>
            <div className="text-2xl font-bold text-black">Amazon</div>
          </div>
        </div>

        {/* 2. MAIN TWO-COLUMN AGENCY INTRO BLOCK */}
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left Column - Main Heading */}
          <div>
            <h1 
              className="text-5xl lg:text-6xl font-bold leading-tight"
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
                  className="absolute -bottom-2 -left-1 w-32 h-6 text-yellow-400"
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
          <div className="flex items-center gap-8">
            {/* Big Black Circle Badge */}
            <div 
              className="flex-shrink-0 rounded-full flex items-center justify-center"
              style={{ 
                width: '240px',
                height: '240px',
                backgroundColor: '#1A1A1A',
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'
              }}
            >
              <span 
                className="text-white font-bold"
                style={{ fontSize: '70px' }}
              >
                20+
              </span>
            </div>

            {/* Experience Text Block */}
            <div>
              <h2 
                className="text-lg font-bold tracking-wider mb-4"
                style={{ 
                  color: '#111111',
                  letterSpacing: '0.1em'
                }}
              >
                20+ YEARS OF EXPERIENCE
              </h2>
              <p 
                className="leading-relaxed"
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
        <div className="border-t border-gray-200 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Stat */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span 
                  className="text-4xl font-bold"
                  style={{ color: '#111111' }}
                >
                  350+
                </span>
                <span 
                  className="text-lg"
                  style={{ color: '#666666' }}
                >
                  very satisfied clients around the worldwide.
                </span>
              </div>
              {/* Smile face icon */}
              <svg 
                className="w-8 h-8 flex-shrink-0"
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

            {/* Second Stat */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span 
                  className="text-4xl font-bold"
                  style={{ color: '#111111' }}
                >
                  200+
                </span>
                <span 
                  className="text-lg"
                  style={{ color: '#666666' }}
                >
                  good award winning digital media agency.
                </span>
              </div>
              {/* Megaphone icon */}
              <svg 
                className="w-8 h-8 flex-shrink-0"
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

            {/* Third Stat */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span 
                  className="text-4xl font-bold"
                  style={{ color: '#111111' }}
                >
                  750+
                </span>
                <span 
                  className="text-lg"
                  style={{ color: '#666666' }}
                >
                  successfully project completed in one year.
                </span>
              </div>
              {/* Briefcase icon */}
              <svg 
                className="w-8 h-8 flex-shrink-0"
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
    </section>
  );
}
