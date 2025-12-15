export default function TeamSection() {
  const benefits = [
    {
      title: "Successfully finished projects with creativity.",
      description: "We value each and every human life placed our hands constantly work towards meeting the expectations of our customers."
    },
    {
      title: "Work together for better branding solutions.",
      description: "We value each and every human life placed our hands constantly work towards meeting the expectations of our customers."
    },
    {
      title: "Committed to deliver unique digital media.",
      description: "We value each and every human life placed our hands constantly work towards meeting the expectations of our customers."
    }
  ];

  const portraits = [
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      alt: "Female team member",
      name: "Jessica Dover",
      position: "Designer"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      alt: "Male team member with beard",
      name: "Jeremy Dupont",
      position: "Director"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Older male team member",
      name: "Matthew Taylor",
      position: "Manager"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* TOP HALF - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* LEFT COLUMN - Main Headline */}
          <div className="flex items-start">
            <div className="relative">
              <h1 
                className="text-5xl lg:text-6xl font-bold leading-none"
                style={{ 
                  color: '#111111',
                  lineHeight: '1.1',
                  fontFamily: 'var(--font-space-grotesk, sans-serif)'
                }}
              >
                We want to bring
                <br />
                and business the
                <br />
                <span className="relative inline-block">
                  digital
                  <svg 
                    className="absolute -bottom-2 -left-2 w-full h-8"
                    viewBox="0 0 200 40"
                    preserveAspectRatio="none"
                    style={{ transform: 'rotate(-2deg)' }}
                  >
                    <path 
                      d="M 10 20 Q 50 35, 100 25 T 190 20" 
                      stroke="#F6D74A" 
                      strokeWidth="8" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                world.
              </h1>
            </div>
          </div>

          {/* RIGHT COLUMN - Benefit Rows */}
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 
                      className="text-xl lg:text-2xl font-bold mb-4"
                      style={{ 
                        color: '#222222',
                        fontFamily: 'var(--font-space-grotesk, sans-serif)'
                      }}
                    >
                      {benefit.title}
                    </h3>
                  </div>
                  <div>
                    <p 
                      className="text-base leading-relaxed"
                      style={{ 
                        color: '#666666',
                        lineHeight: '1.7'
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
                {index < benefits.length - 1 && (
                  <div className="mt-8">
                    <div 
                      className="w-full h-px"
                      style={{ backgroundColor: '#E5E5E5' }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM HALF - Team Portrait Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {portraits.map((portrait, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group cursor-pointer transition-all duration-300"
            >
              <div className={`aspect-[3/4] ${index === 1 ? 'md:aspect-[4/5]' : ''}`}>
                <img
                  src={portrait.image}
                  alt={portrait.alt}
                  className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-300"
                  style={{
                    filter: 'grayscale(100%) contrast(1.25)',
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-end">
                  <div className="w-full p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 
                      className="text-white text-xl font-bold mb-1"
                      style={{ fontFamily: 'var(--font-space-grotesk, sans-serif)' }}
                    >
                      {portrait.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {portrait.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
