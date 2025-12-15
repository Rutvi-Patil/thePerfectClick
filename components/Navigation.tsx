import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 font-space-grotesk text-[19px]" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '19px' }}>
      <div className="flex justify-between items-center h-16 px-2.5 lg:px-4">
        {/* Left Side - DA Logo and Nav Links */}
        <div className="flex items-center space-x-8 pl-4 sm:pl-8 lg:pl-16">
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.png"
              alt="DA Logo"
              className="w-10 h-10"
              style={{ width: 'auto', height: '40px', aspectRatio: '1' }}
            />
          </Link>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-black hover:text-yellow-400">Home</Link>
            <Link href="/agency" className="nav-link text-black hover:text-yellow-400">Agency</Link>
            <Link href="/expertise" className="nav-link text-black hover:text-yellow-400">Expertise</Link>
            <Link href="/portfolio" className="nav-link text-black hover:text-yellow-400">Portfolio</Link>
            <Link href="/contact" className="nav-link text-black hover:text-yellow-400">Contact</Link>
          </nav>
        </div>
        
        {/* Right Side - Mobile Menu and Send Message Button */}
        <div className="flex items-center gap-4 pr-4 sm:pr-8 lg:pr-16">
          {/* Mobile Menu Toggle */}
          <MobileMenu />
          
          {/* Send Message Button - Desktop */}
          <div className="hidden sm:block">
            <Link href="/contact">
              <button className="btn-hover-slide bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors border border-black" suppressHydrationWarning>
                Send a message
              </button>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
