export default function ContactSection() {

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 
            className="text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: '#111111', lineHeight: '1.1' }}
          >
            We're here to help you and answer any questions you might have.
          </h2>
        </div>
        
        {/* Four Contact Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Office Location */}
          <div className="text-center">
            {/* Pin Icon with peach dotted highlight */}
            <div className="relative inline-block mb-6">
              <svg 
                className="w-12 h-12"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#111111" 
                strokeWidth="1.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {/* Peach dotted highlight */}
              <svg 
                className="absolute -top-1 -right-1 w-6 h-6"
                viewBox="0 0 24 24" 
                fill="#EEC8C3"
              >
                <circle cx="18" cy="6" r="2"/>
                <circle cx="20" cy="10" r="1.5"/>
                <circle cx="16" cy="11" r="1"/>
              </svg>
            </div>
            
            <h3 
              className="text-xl font-semibold mb-3"
              style={{ color: '#111111' }}
            >
              Office location
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: '#666666', lineHeight: '1.6' }}
            >
              27 Eden walk eden center,<br />
              Orchard view, Paris,<br />
              France
            </p>
          </div>
          
          {/* Column 2 - Send a Message */}
          <div className="text-center">
            {/* Chat bubble icon with peach dots */}
            <div className="relative inline-block mb-6">
              <svg 
                className="w-12 h-12"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#111111" 
                strokeWidth="1.5"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              {/* Peach dotted highlight */}
              <svg 
                className="absolute -top-1 -right-1 w-6 h-6"
                viewBox="0 0 24 24" 
                fill="#EEC8C3"
              >
                <circle cx="18" cy="6" r="2"/>
                <circle cx="20" cy="10" r="1.5"/>
                <circle cx="16" cy="11" r="1"/>
              </svg>
            </div>
            
            <h3 
              className="text-xl font-semibold mb-3"
              style={{ color: '#111111' }}
            >
              Send a message
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: '#666666', lineHeight: '1.6' }}
            >
              info@yourdomain.com<br />
              hr@yourdomain.com
            </p>
          </div>
          
          {/* Column 3 - Let's Talk */}
          <div className="text-center">
            {/* Phone icon with peach arc-dots */}
            <div className="relative inline-block mb-6">
              <svg 
                className="w-12 h-12"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#111111" 
                strokeWidth="1.5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {/* Peach arc-dots highlight */}
              <svg 
                className="absolute -top-1 -right-1 w-6 h-6"
                viewBox="0 0 24 24" 
                fill="#EEC8C3"
              >
                <circle cx="18" cy="6" r="2"/>
                <circle cx="20" cy="10" r="1.5"/>
                <circle cx="16" cy="11" r="1"/>
              </svg>
            </div>
            
            <h3 
              className="text-xl font-semibold mb-3"
              style={{ color: '#111111' }}
            >
              Let's talk with us
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: '#666666', lineHeight: '1.6' }}
            >
              Phone: 1-800-222-000<br />
              Fax:   1-800-222-002
            </p>
          </div>
          
          {/* Column 4 - Join Our Team */}
          <div className="text-center">
            {/* Person icon with peach dotted partner shadow */}
            <div className="relative inline-block mb-6">
              <svg 
                className="w-12 h-12"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#111111" 
                strokeWidth="1.5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              {/* Peach dotted partner shadow */}
              <svg 
                className="absolute -top-1 -right-1 w-6 h-6"
                viewBox="0 0 24 24" 
                fill="#EEC8C3"
              >
                <circle cx="18" cy="6" r="2"/>
                <circle cx="20" cy="10" r="1.5"/>
                <circle cx="16" cy="11" r="1"/>
              </svg>
            </div>
            
            <h3 
              className="text-xl font-semibold mb-3"
              style={{ color: '#111111' }}
            >
              Join our team
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: '#666666', lineHeight: '1.6' }}
            >
              Lorem ipsum is simply the<br />
              printing typesetting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
