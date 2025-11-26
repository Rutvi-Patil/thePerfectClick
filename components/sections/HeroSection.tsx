import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="h-screen flex relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pattern-bg opacity-5 animate-pattern-bg"></div>
      
      {/* Navbar - Single Horizontal Line */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent font-space-grotesk text-[19px]" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '19px' }}>
        <div className="flex justify-between items-center h-16 px-[10px] lg:px-[16px]">
          {/* Left Side - DA Logo and Nav Links (Centered in Left Split) */}
          <div className="flex items-center space-x-8 pl-8 lg:pl-16">
            {/* Black square logo with "DA" */}
            <div className="w-10 h-10 bg-black flex items-center justify-center hover-scale" style={{ width: 'auto', height: '40px', aspectRatio: '1' }}>
              <span className="text-white font-bold text-sm">DA</span>
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link text-gray-700 hover:text-black">Home</a>
              <a href="#agency" className="nav-link text-gray-700 hover:text-black">Agency</a>
              <a href="#expertise" className="nav-link text-gray-700 hover:text-black">Expertise</a>
              <a href="#portfolio" className="nav-link text-gray-700 hover:text-black">Portfolio</a>
              <a href="#contact" className="nav-link text-gray-700 hover:text-black">Contact</a>
            </nav>
          </div>
          
          {/* Right Side - Send Message Button */}
          <div className="pr-8 lg:pr-16">
            <button className="btn-hover-slide border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors" suppressHydrationWarning>
              Send a message
            </button>
          </div>
        </div>
      </header>
      
      {/* Left Half - Light Pink Background */}
      <div className="w-full lg:w-1/2 diagonal-crosshatch flex items-center justify-center p-8 lg:p-16 relative z-10">
        {/* Hero Content */}
        <div className="max-w-lg">
          <h1 className="animate-fadeInUp font-black mb-6 opacity-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '110px', lineHeight: '0.9', animationDelay: '0.2s' }}>
            <span className="relative">
              <span className="bg-yellow-400 px-2 -mx-2 animate-text-reveal">Digital</span>
            </span>
            <br />
            <span className="animate-glitch">agency</span>
          </h1>
          <p className="animate-fadeInUp text-xl lg:text-2xl text-gray-700 mb-8 opacity-0" style={{ animationDelay: '0.4s' }}>
            We create world-class digital products materials that communicate clearly.
          </p>
          <button className="animate-fadeInUp magnetic-btn btn-hover-slide bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 flex items-center gap-3 opacity-0" style={{ animationDelay: '0.6s' }} suppressHydrationWarning>
            Discover crafto
            <ArrowRight className="w-5 h-5 animate-wave" />
          </button>
        </div>
      </div>
      
      {/* Right Half - Professional Woman Image */}
      <div className="w-full lg:w-1/2 bg-gray-300 relative">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Professional woman in office"
          className="animate-slideInRight w-full h-full object-cover opacity-0"
          style={{ animationDelay: '0.3s' }}
        />
        
        {/* Floating Design Card */}
        <div className="absolute bottom-0 left-0 z-20">
          <div className="animate-fadeInUp bg-white shadow-2xl flex flex-col justify-center items-center" style={{ width: '360px', height: '372px', padding: '65px' }}>
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
                style={{ width: '102px', height: '62px' }}
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
              <div className="text-2xl lg:text-3xl font-black text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>World-class</div>
              <div className="text-2xl lg:text-3xl font-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                <span className="text-black">digital</span>
                <span className="text-gray-500"> media</span>
              </div>
              <div className="text-2xl lg:text-3xl font-black text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>agency.</div>
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-indicator">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
