'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <Menu className="w-6 h-6 text-black" />
        )}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link href="/" onClick={closeSidebar}>
  +++++++ REPLACE
              <img
                src="/logo.png"
                alt="DA Logo"
                className="w-10 h-10"
                style={{ width: 'auto', height: '40px', aspectRatio: '1' }}
              />
            </Link>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <div className="space-y-6">
              <Link 
                href="/" 
                className="block text-lg font-medium text-black hover:text-yellow-400 transition-colors py-2"
                onClick={closeSidebar}
              >
                Home
              </Link>
              <Link 
                href="/agency" 
                className="block text-lg font-medium text-black hover:text-yellow-400 transition-colors py-2"
                onClick={closeSidebar}
              >
                Agency
              </Link>
              <Link 
                href="/expertise" 
                className="block text-lg font-medium text-black hover:text-yellow-400 transition-colors py-2"
                onClick={closeSidebar}
              >
                Expertise
              </Link>
              <Link 
                href="/portfolio" 
                className="block text-lg font-medium text-black hover:text-yellow-400 transition-colors py-2"
                onClick={closeSidebar}
              >
                Portfolio
              </Link>
              <Link 
                href="/contact" 
                className="block text-lg font-medium text-black hover:text-yellow-400 transition-colors py-2"
                onClick={closeSidebar}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200">
            <Link href="/contact" onClick={closeSidebar}>
              <button className="btn-hover-slide w-full bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors" suppressHydrationWarning>
                Send a message
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
