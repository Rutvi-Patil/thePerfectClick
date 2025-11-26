import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">DA</span>
              </div>
              <span className="text-xl font-bold">Digital Agency</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating world-class digital experiences that inspire and engage.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                <span className="text-sm font-bold">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                <span className="text-sm font-bold">ig</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#agency" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#expertise" className="text-gray-400 hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-yellow-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Branding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Content Writing</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates and news.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s' }}>
              © 2024 Digital Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm animate-fadeInUp opacity-0" style={{ animationDelay: '0.6s' }}>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
