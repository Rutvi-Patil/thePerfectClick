export default function AboutSection() {
  return (
    <>
      {/* Mobile Full-Width Card */}
      <div className="lg:hidden bg-white py-8 px-4">
        <div className="bg-white shadow-xl p-6 mx-auto max-w-sm animate-fadeInUp hover:-translate-y-0.5 transition-transform duration-300">
          {/* Arrow icon in top-right */}
          <div className="absolute top-4 right-4">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
          
          {/* "hey!" handwritten-style SVG */}
          <div className="mb-4">
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
            >
              <text 
                x="24" 
                y="28" 
                fontFamily="cursive" 
                fontSize="16" 
                fontWeight="bold" 
                fill="#FACC15" 
                textAnchor="middle"
                style={{ fontStyle: 'italic', fontWeight: 700 }}
              >
                hey!
              </text>
            </svg>
          </div>
          
          {/* Large headline (Crafto style) */}
          <div className="text-center space-y-1">
            <div className="text-2xl lg:text-3xl font-black text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>World-class</div>
            <div className="text-2xl lg:text-3xl font-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              <span className="text-black">digital</span>
              <span className="text-gray-500"> media</span>
            </div>
            <div className="text-2xl lg:text-3xl font-black text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>agency.</div>
          </div>
        </div>
      </div>

      {/* Client Logo Bar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <div className="logo-item text-2xl font-bold animate-delay-100">Walmart</div>
            <div className="logo-item text-2xl font-bold animate-delay-200">Invision</div>
            <div className="logo-item text-2xl font-bold animate-delay-300">NETFLIX</div>
            <div className="logo-item text-2xl font-bold animate-delay-400">logitech</div>
            <div className="logo-item text-2xl font-bold animate-delay-500">amazon</div>
          </div>
        </div>
      </section>

      {/* About & Stats Section */}
      <section id="agency" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Part - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-4xl lg:text-5xl font-bold">
                We are a creative bold digital agency based in{" "}
                <span className="bg-yellow-400 px-2 -mx-2">london.</span>
              </h2>
            </div>
            <div className="animate-fadeInUp flex items-center gap-6 opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center hover-scale">
                <span className="text-white text-2xl font-bold">20+</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">20+ YEARS OF EXPERIENCE</h3>
                <p className="text-gray-600">Trusted by leading brands worldwide</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Part - 3 Column Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-scaleIn text-center opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="counter text-4xl font-bold mb-2">350+</div>
              <div className="text-gray-600">very satisfied clients</div>
            </div>
            <div className="animate-scaleIn text-center opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="counter text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-600">good award winning</div>
            </div>
            <div className="animate-scaleIn text-center opacity-0" style={{ animationDelay: '0.5s' }}>
              <div className="counter text-4xl font-bold mb-2">750+</div>
              <div className="text-gray-600">successfully project completed</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
