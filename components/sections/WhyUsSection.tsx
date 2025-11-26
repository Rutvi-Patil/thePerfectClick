'use client';

import { useState } from 'react';

export default function WhyUsSection() {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      title: "Trusted company",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
      )
    },
    {
      title: "Award winning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 12v8" />
          <path d="M8 16l4 4 4-4" />
        </svg>
      )
    },
    {
      title: "Professional work",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="4" y="6" width="16" height="14" rx="2" />
          <path d="M8 10h8" />
          <path d="M8 14h5" />
        </svg>
      )
    },
    {
      title: "Help any time",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Full-width Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
            backgroundColor: '#1a1a1a'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 lg:py-24">
        
        {/* Center Video Play Button */}
        <div className="mb-12 lg:mb-16">
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Black Circle */}
            <div 
              className={`w-24 h-24 lg:w-28 lg:h-28 bg-black rounded-full flex items-center justify-center transition-all duration-300 ${
                isHovered ? 'scale-110 shadow-2xl' : 'shadow-xl'
              }`}
              style={{
                background: 'radial-gradient(circle at 30% 30%, #2a2a2a, #000000)'
              }}
            >
              {/* White Play Triangle */}
              <svg 
                className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            
            {/* Circular Text Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-40 h-40 lg:w-44 lg:h-44 animate-spin-slow" 
                viewBox="0 0 200 200"
                style={{ animationDuration: '20s' }}
              >
                <defs>
                  <path 
                    id="text-circle" 
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text className="fill-white text-xs font-light tracking-wider">
                  <textPath href="#text-circle" startOffset="0%">
                    FULL SERVICE CREATIVE AGENCY • BASED ON LONDON •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Centered Hero Headline */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 
            className="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-space-grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
              lineHeight: '1.1'
            }}
          >
            Forward thinking team of<br />
            designers, copywriters and<br />
            developers.
          </h1>
        </div>
      </div>

      {/* Glassmorphic Features Strip */}
      <div className="relative z-10 w-full">
        <div 
          className="w-full h-28 lg:h-32 backdrop-blur-md border-t border-white/10"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
        >
          <div className="h-full flex items-center justify-center px-4 lg:px-8">
            <div className="flex items-center justify-between w-full max-w-4xl lg:max-w-6xl">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 text-white"
                >
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-sm lg:text-base font-medium whitespace-nowrap">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
