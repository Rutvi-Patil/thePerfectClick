import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="bg-white font-space-grotesk text-[19px] border-b border-gray-200" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '19px' }}>
      <div className="flex justify-between items-center h-16 px-[10px] lg:px-[16px]">
        {/* Left Side - DA Logo and Nav Links */}
        <div className="flex items-center space-x-8 pl-8 lg:pl-16">
          {/* Black square logo with "DA" */}
          <Link href="/" className="hover-scale">
            <div className="w-10 h-10 bg-black flex items-center justify-center" style={{ width: 'auto', height: '40px', aspectRatio: '1' }}>
              <span className="text-white font-bold text-sm">DA</span>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-gray-700 hover:text-black">Home</Link>
            <Link href="/agency" className="nav-link text-gray-700 hover:text-black">Agency</Link>
            <Link href="/expertise" className="nav-link text-gray-700 hover:text-black">Expertise</Link>
            <Link href="/portfolio" className="nav-link text-gray-700 hover:text-black">Portfolio</Link>
            <Link href="/contact" className="nav-link text-gray-700 hover:text-black">Contact</Link>
          </nav>
        </div>
        
        {/* Right Side - Send Message Button */}
        <div className="pr-8 lg:pr-16">
          <Link href="/contact">
            <button className="btn-hover-slide border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-colors" suppressHydrationWarning>
              Send a message
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
