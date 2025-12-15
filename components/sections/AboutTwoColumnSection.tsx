export default function AboutTwoColumnSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-32" style={{ 
      backgroundColor: '#ffffff',
      backgroundImage: 'none',
      background: '#ffffff'
    }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN - MAIN IMAGE BLOCK */}
          <div className="relative">
            {/* Decorative Dot */}
            {/* <div className="absolute -top-2 -left-2 w-3 h-3 bg-black rounded-full z-20"></div>
             */}
            {/* Main Image Container */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face" 
                alt="Professional portrait"
                className="w-full h-auto rounded-none"
                style={{ aspectRatio: '3/4' }}
              />
              
              {/* Experience Badge */}
              <div className="absolute bottom-0 left-0 px-6 py-16 rounded-none z-10" style={{ backgroundColor: '#ffffff' }}>
                <div className="text-center">
                  <div 
                    className="text-6xl lg:text-7xl font-bold"
                    style={{ color: '#111111' }}
                  >
                    28+
                  </div>
                  <div 
                    className="text-xs uppercase tracking-wider mt-2"
                    style={{ color: '#111111' }}
                  >
                    YEARS WORKING EXPERIENCE
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN - TEXT BLOCK */}
          <div className="lg:pl-8">
            {/* Main Heading */}
            <h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none mb-8"
              style={{ 
                color: '#1A1A1A',
                lineHeight: '1.1'
              }}
            >
              We're a creative<br />
              digital agency.
            </h2>
            
            {/* Paragraph 1 */}
            <p 
              className="text-base lg:text-lg mb-6 leading-relaxed"
              style={{ 
                color: '#666666',
                fontSize: '17-18px',
                lineHeight: '1.7',
                maxWidth: '500px'
              }}
            >
              We are excited for our work and how it positively impacts clients. With over 28 years of experience we have been constantly providing excellent web solutions is best in-class experience.
            </p>
            
            {/* Paragraph 2 */}
            <p 
              className="text-base lg:text-lg mb-8 leading-relaxed"
              style={{ 
                color: '#666666',
                fontSize: '17-18px',
                lineHeight: '1.7',
                maxWidth: '500px'
              }}
            >
              We are excited for our work and how it positively impacts clients. We constantly providing excellent web solutions is best in-class experience.
            </p>
            
            {/* CTA + CONTACT INFO */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* CTA Button */}
              <button 
                className="inline-flex items-center justify-between px-7 py-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
                style={{ 
                  backgroundColor: '#111111',
                  borderRadius: '4-6px'
                }}
              >
                <span className="text-white font-medium mr-3">
                  LET'S TALK NOW
                </span>
                <svg 
                  className="w-5 h-5 text-white transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </button>
              
              {/* Phone Number Block */}
              <div className="flex items-center gap-3">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: '#222222' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <span 
                  className="text-lg font-medium"
                  style={{ color: '#222222' }}
                >
                  1 800 222 000
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Clients/Brands Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap justify-between items-center gap-8 lg:gap-0">
            <div className="text-2xl font-bold text-black">Walmart</div>
            <div className="text-2xl font-bold text-black">InVision</div>
            <div className="text-2xl font-bold text-black">Netflix</div>
            <div className="text-2xl font-bold text-black">Logitech</div>
            <div className="text-2xl font-bold text-black">Amazon</div>
          </div>
        </div>
      </div>
    </section>
  );
}
