export default function KeywordsSection() {
  const keywords = [
    "marketing", "analysis", "strategy", "business", "marketing", "analysis"
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Keywords Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 animate-fadeInUp">
          {keywords.map((keyword, index) => (
            <div key={index} className="flex items-center">
              <span 
                className="text-lg lg:text-xl text-gray-400 font-light tracking-wide hover:text-gray-600 transition-colors duration-300 cursor-default"
                style={{ 
                  fontFamily: 'var(--font-inter)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {keyword}
              </span>
              {index < keywords.length - 1 && (
                <span className="mx-2 lg:mx-4 text-gray-300">•</span>
              )}
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-bg opacity-5 pointer-events-none"></div>
    </section>
  );
}
