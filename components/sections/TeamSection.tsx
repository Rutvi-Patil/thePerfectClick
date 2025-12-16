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

      </div>
    </section>
  );
}
