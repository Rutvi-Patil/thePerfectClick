import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="bg-black text-white py-8 sm:py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="animate-fadeInUp animate-delay-100">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-yellow.png"
                alt="DA Logo"
                className="w-10 h-10"
              />
              <span className="text-lg sm:text-xl font-bold">The Perfect Click</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
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
          <div className="animate-fadeInUp animate-delay-200">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/agency" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/expertise" className="text-gray-400 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-yellow-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="animate-fadeInUp animate-delay-400">
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
            <p className="text-gray-400 text-sm animate-fadeInUp animate-delay-500">
              © 2024 The Perfect Click. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm animate-fadeInUp animate-delay-600">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-yellow-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
