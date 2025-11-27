import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen lg:h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pattern-bg opacity-5 animate-pattern-bg"></div>
      
      {/* Left Half - Light Pink Background */}
      <div className="w-full lg:w-1/2 diagonal-crosshatch flex items-center justify-center p-6 sm:p-8 lg:p-16 relative z-10 order-2 lg:order-1 lg:min-h-screen mx-auto lg:mx-0 w-[320px] h-[450px] lg:w-full lg:h-full">
        {/* Hero Content */}
        <div className="max-w-lg w-full">
          <h1 className="animate-fadeInUp font-black mb-6 opacity-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(48px, 8vw, 110px)', lineHeight: '0.9', animationDelay: '0.2s' }}>
            <span className="relative">
              <span className="bg-yellow-400 px-2 -mx-2 animate-text-reveal">Digital</span>
            </span>
            <br />
            <span className="animate-glitch">agency</span>
          </h1>
          <p className="animate-fadeInUp text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 opacity-0" style={{ animationDelay: '0.4s' }}>
            We create world-class digital products materials that communicate clearly.
          </p>
        </div>
      </div>
      
      {/* Right Half - Professional Woman Image */}
      <div className="w-full lg:w-1/2 bg-gray-300 relative order-1 lg:order-2 min-h-[50vh] lg:min-h-screen">
        <div className="w-full h-full flex items-center justify-center lg:block">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Professional woman in office"
            className="animate-slideInRight w-full h-full object-cover opacity-0 lg:w-full lg:h-full w-[320px] h-[450px]"
            style={{ 
              animationDelay: '0.3s',
              objectPosition: 'center'
            }}
          />
        </div>
        
        {/* Floating Design Card - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block absolute bottom-0 left-0 z-20">
          <div className="animate-fadeInUp bg-white shadow-2xl flex flex-col justify-center items-center" style={{ 
            width: '360px', 
            height: '372px',
            padding: '65px'
          }}>
            {/* Arrow icon in top-right */}
            <div className="absolute top-4 right-4">
              <ArrowUpRight className="w-5 h-5 text-gray-400" />
            </div>
            
            {/* "hey!" handwritten-style SVG */}
            <div className="mb-4">
              <svg 
                width="102" 
                height="62" 
                viewBox="0 0 102 62" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <text 
                  x="50" 
                  y="50" 
                  fontFamily="cursive" 
                  fontSize="30" 
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
              <div className="text-3xl font-black text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>World-class</div>
              <div className="text-3xl font-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                <span className="text-black">digital</span>
                <span className="text-gray-500"> media</span>
              </div>
              <div className="text-3xl font-black text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>agency.</div>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="particle" style={{ top: "20%", left: "30%" }}></div>
          <div className="particle" style={{ top: "60%", left: "70%" }}></div>
          <div className="particle" style={{ top: "40%", left: "50%" }}></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-indicator z-30">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-0.5 h-2 sm:h-3 bg-gray-400 rounded-full mt-1.5 sm:mt-2"></div>
        </div>
      </div>
    </section>
  );
}
