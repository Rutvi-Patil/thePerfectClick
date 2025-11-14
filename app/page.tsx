import { ChevronRight, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 w-full bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Black square logo with "DA" */}
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="text-white font-bold text-sm">DA</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-black transition-colors">Home</a>
              <a href="#agency" className="text-gray-700 hover:text-black transition-colors">Agency</a>
              <a href="#expertise" className="text-gray-700 hover:text-black transition-colors">Expertise</a>
              <a href="#portfolio" className="text-gray-700 hover:text-black transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a>
            </nav>
            
            <button className="bg-gray-200 text-black px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              Send a message
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Split Screen */}
      <section id="home" className="min-h-screen flex">
        {/* Left Half - Light Pink Background */}
        <div className="w-full lg:w-1/2 bg-pink-100 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg">
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              <span className="relative">
                <span className="bg-yellow-400 px-2 -mx-2">Digital</span>
              </span>
              <br />
              agency
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8">
              We create world-class digital products materials that communicate clearly.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-3">
              Discover crafto
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Right Half - Professional Woman Image */}
        <div className="w-full lg:w-1/2 bg-gray-300 relative">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Professional woman in office"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Client Logo Bar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60">
            <div className="text-2xl font-bold">Walmart</div>
            <div className="text-2xl font-bold">Invision</div>
            <div className="text-2xl font-bold">NETFLIX</div>
            <div className="text-2xl font-bold">logitech</div>
            <div className="text-2xl font-bold">amazon</div>
          </div>
        </div>
      </section>

      {/* About & Stats Section */}
      <section id="agency" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Part - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold">
                We are a creative bold digital agency based in{" "}
                <span className="bg-yellow-400 px-2 -mx-2">london.</span>
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
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
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">350+</div>
              <div className="text-gray-600">very satisfied clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-600">good award winning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">750+</div>
              <div className="text-gray-600">successfully project completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="expertise" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            It's so challenging to find a good team to do great things. But we can provide you the best one.
          </h2>
          
          {/* Services List */}
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="text-3xl font-bold text-gray-500">01</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Design</h3>
                <p className="text-gray-400">Creating beautiful and functional designs that capture your brand essence.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="text-3xl font-bold text-gray-500">02</div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-bold">Development</h3>
                  <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">POPULAR</span>
                </div>
                <p className="text-gray-400">Building robust and scalable digital solutions with cutting-edge technology.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="text-3xl font-bold text-gray-500">03</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Marketing</h3>
                <p className="text-gray-400">Strategic marketing campaigns that drive results and grow your business.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="text-3xl font-bold text-gray-500">04</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Content writing</h3>
                <p className="text-gray-400">Compelling content that tells your story and engages your audience.</p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <p className="text-lg">
            Save your precious time and effort spent for finding a solution.{" "}
            <a href="#" className="underline hover:no-underline">Contact us now</a>
          </p>
        </div>
      </section>

      {/* Portfolio (Case Studies) Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">Case studies</h2>
            
            {/* Filter Menu */}
            <div className="flex gap-6">
              <button className="hover:text-yellow-400 transition-colors">All</button>
              <button className="hover:text-yellow-400 transition-colors">Selected</button>
              <button className="hover:text-yellow-400 transition-colors">Digital</button>
              <button className="hover:text-yellow-400 transition-colors">Branding</button>
              <button className="hover:text-yellow-400 transition-colors">Web</button>
            </div>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
              <div className="h-80 bg-gray-200"></div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">Gardner</h3>
                  <p className="text-gray-300">Branding</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
              <div className="h-80 bg-gray-300"></div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">TechFlow</h3>
                  <p className="text-gray-300">Digital</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
              <div className="h-80 bg-gray-400"></div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">WebPlatform</h3>
                  <p className="text-gray-300">Web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Intuition and strategy integrate the research methodology that we also apply to{" "}
                <span className="bg-yellow-400 px-2 -mx-2">traditional</span> media.
              </h2>
              <p className="text-gray-600 mb-8">
                We combine human empathy and intelligent data to create exceptional digital experiences that drive results.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-3">
                LET'S TALK NOW
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold mb-2">8500+</div>
                <div className="text-sm text-gray-600">Users on marketplaces...</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold mb-2">660+</div>
                <div className="text-sm text-gray-600">Successfully finished projects...</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold mb-2">6834+</div>
                <div className="text-sm text-gray-600">Monthly visitors on our e-Commerce...</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold mb-2">300%</div>
                <div className="text-sm text-gray-600">Onboarding conversions growth...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Abstract Spiral/Funnel Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 border-8 border-white rounded-full"></div>
          <div className="absolute w-72 h-72 border-8 border-white rounded-full"></div>
          <div className="absolute w-48 h-48 border-8 border-white rounded-full"></div>
          <div className="absolute w-24 h-24 border-8 border-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">
            Forward thinking team of designers, copywriters and developers.
          </h2>
          
          {/* Awards */}
          <div className="flex flex-wrap gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-sm text-gray-300 mb-1">envato</div>
              <div className="text-xl font-bold">3X SITE OF THE DAY</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-sm text-gray-300 mb-1">awwwards.</div>
              <div className="text-xl font-bold">2X DEVELOPER AWARD</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog (Journal) Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">Our journal</h2>
            <a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
              Read all posts <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="group cursor-pointer">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 group-hover:opacity-90 transition-opacity"></div>
              <div className="mb-2">
                <span className="text-sm font-bold text-gray-600">BRANDING</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">COLENE LANDIN</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                The Future of Digital Branding
              </h3>
            </article>
            <article className="group cursor-pointer">
              <div className="h-48 bg-gray-300 rounded-lg mb-4 group-hover:opacity-90 transition-opacity"></div>
              <div className="mb-2">
                <span className="text-sm font-bold text-gray-600">DESIGN</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">COLENE LANDIN</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                Minimalist Design Trends
              </h3>
            </article>
            <article className="group cursor-pointer">
              <div className="h-48 bg-gray-400 rounded-lg mb-4 group-hover:opacity-90 transition-opacity"></div>
              <div className="mb-2">
                <span className="text-sm font-bold text-gray-600">DEVELOPMENT</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">COLENE LANDIN</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                Building Scalable Applications
              </h3>
            </article>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-4xl md:text-6xl font-black mx-8 text-black">marketing.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-gray-400">analysis.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-black">strategy.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-gray-400">business.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-black">marketing.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-gray-400">analysis.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-black">strategy.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-gray-400">business.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-black">marketing.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-gray-400">analysis.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-black">strategy.</span>
            <span className="text-4xl md:text-6xl font-black mx-8 text-gray-400">business.</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Logo and Social */}
            <div>
              <div className="w-10 h-10 bg-black flex items-center justify-center mb-6">
                <span className="text-white font-bold text-sm">DA</span>
              </div>
              <div className="flex gap-4 text-sm">
                <a href="#" className="hover:text-yellow-400 transition-colors">Fb.</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Ig.</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Tw.</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Be.</a>
              </div>
            </div>

            {/* Column 2: Rotterdam */}
            <div>
              <h3 className="font-bold mb-4">Rotterdam</h3>
              <p className="text-gray-600 text-sm">
                CRAFT0 DIGITAL MEDIA.<br />
                123 Design Street<br />
                3011 KN Rotterdam<br />
                Netherlands
              </p>
            </div>

            {/* Column 3: Barcelona */}
            <div>
              <h3 className="font-bold mb-4">Barcelona</h3>
              <p className="text-gray-600 text-sm">
                CRAFT0 DIGITAL MEDIA.<br />
                456 Creative Avenue<br />
                08001 Barcelona<br />
                Spain
              </p>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">WORK INQUIRIES</div>
                <a href="#" className="text-sm hover:text-yellow-400 transition-colors">hello@crafto.com</a>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">WORK WITH US</div>
                <a href="#" className="text-sm hover:text-yellow-400 transition-colors">careers@crafto.com</a>
              </div>
            </div>

            {/* Column 5: Newsletter */}
            <div>
              <h3 className="font-bold mb-4">SIGN UP FOR THE NEWSLETTER</h3>
              <div className="flex gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-yellow-400"
                />
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors text-sm">
                  Send
                </button>
              </div>
              <a href="#" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">
                Protecting your privacy
              </a>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>© 2025 Crafto. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms and conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
