import { ArrowRight } from 'lucide-react';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="animate-fadeInUp text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 opacity-0" style={{ animationDelay: '0.1s' }}>
            Our portfolio
          </h2>
          <p className="animate-fadeInUp text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto opacity-0" style={{ animationDelay: '0.2s' }}>
            We create world-class digital products materials that communicate clearly, achieve your goals and successfully scale your business.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="portfolio-item animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Web Design Project"
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-content text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Web Design</h3>
                  <p className="mb-4">Modern responsive website design</p>
                  <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors">
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Portfolio Item 2 */}
          <div className="portfolio-item animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Mobile App Project"
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-content text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Mobile App</h3>
                  <p className="mb-4">iOS and Android application</p>
                  <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors">
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Portfolio Item 3 */}
          <div className="portfolio-item animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Branding Project"
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-content text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Branding</h3>
                  <p className="mb-4">Complete brand identity design</p>
                  <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors">
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Portfolio Item 4 */}
          <div className="portfolio-item animate-fadeInUp opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1559028006-44a26f30b5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Marketing Campaign"
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-content text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Marketing</h3>
                  <p className="mb-4">Digital marketing campaign</p>
                  <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors">
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Portfolio Item 5 */}
          <div className="portfolio-item animate-fadeInUp opacity-0" style={{ animationDelay: '0.7s' }}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="E-commerce Platform"
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-content text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">E-commerce</h3>
                  <p className="mb-4">Online shopping platform</p>
                  <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors">
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Portfolio Item 6 */}
          <div className="portfolio-item animate-fadeInUp opacity-0" style={{ animationDelay: '0.8s' }}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="UI/UX Design"
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-content text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">UI/UX Design</h3>
                  <p className="mb-4">User interface and experience</p>
                  <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors">
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="animate-fadeInUp bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-3 mx-auto opacity-0" style={{ animationDelay: '0.9s' }}>
            View all projects <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
