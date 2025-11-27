import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="expertise" className="py-12 sm:py-16 lg:py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="animate-fadeInUp text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-8 sm:mb-12 opacity-0" style={{ animationDelay: '0.1s' }}>
          It's so challenging to find a good team to do great things. But we can provide you best one.
        </h2>
        
        {/* Services List */}
        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          <div className="service-item flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl sm:text-3xl font-bold text-gray-500 flex-shrink-0">01</div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Design</h3>
              <p className="text-gray-400 text-sm sm:text-base">Creating beautiful and functional designs that capture your brand essence.</p>
            </div>
          </div>
          
          <div className="service-item flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl sm:text-3xl font-bold text-gray-500 flex-shrink-0">02</div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold">Development</h3>
                <span className="bg-yellow-400 text-black text-xs px-2 sm:px-3 py-1 rounded-full font-bold animate-pulse self-start sm:self-auto">POPULAR</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">Building robust and scalable digital solutions with cutting-edge technology.</p>
            </div>
          </div>
          
          <div className="service-item flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="text-2xl sm:text-3xl font-bold text-gray-500 flex-shrink-0">03</div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Marketing</h3>
              <p className="text-gray-400 text-sm sm:text-base">Strategic marketing campaigns that drive results and grow your business.</p>
            </div>
          </div>
          
          <div className="service-item flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="text-2xl sm:text-3xl font-bold text-gray-500 flex-shrink-0">04</div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Content writing</h3>
              <p className="text-gray-400 text-sm sm:text-base">Compelling content that tells your story and engages your audience.</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <p className="animate-fadeInUp text-base sm:text-lg opacity-0 text-center sm:text-left" style={{ animationDelay: '0.6s' }}>
          Save your precious time and effort spent for finding a solution.{" "}
          <a href="#" className="text-hover-accent underline hover:no-underline">Contact us now</a>
        </p>
      </div>
    </section>
  );
}
