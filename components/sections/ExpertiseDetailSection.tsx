import React from 'react';

export default function ExpertiseDetailSection() {
  return (
    <>
      {/* 1. INTRO HEADING (White Background) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-center text-5xl lg:text-6xl font-bold text-[#111111] leading-tight">
            Build impactful experiences through<br />
            web design and development.
          </h1>
        </div>
      </section>

      {/* 2. FOUR SERVICE ICONS ROW */}
      <section className="bg-white py-12 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Service 1 */}
            <div className="text-center transition-all duration-300 ease-in-out p-6 rounded-lg cursor-pointer hover:bg-[#2b2c2d] group">
              <div className="relative inline-block mb-6">
                <svg className="w-16 h-16 mx-auto transition-colors duration-300 group-hover:stroke-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <circle cx="12" cy="8" r="1" fill="#F4C9C4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-white">Project analysis</h3>
              <p className="text-[#666] text-sm transition-colors duration-300 group-hover:text-white">Research and strategy</p>
            </div>

            {/* Service 2 */}
            <div className="text-center transition-all duration-300 ease-in-out p-6 rounded-lg cursor-pointer hover:bg-[#2b2c2d] group">
              <div className="relative inline-block mb-6">
                <svg className="w-16 h-16 mx-auto transition-colors duration-300 group-hover:stroke-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  <circle cx="12" cy="8" r="1" fill="#F4C9C4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-white">Build strategy</h3>
              <p className="text-[#666] text-sm transition-colors duration-300 group-hover:text-white">Wireframes and design</p>
            </div>

            {/* Service 3 */}
            <div className="text-center transition-all duration-300 ease-in-out p-6 rounded-lg cursor-pointer hover:bg-[#2b2c2d] group">
              <div className="relative inline-block mb-6">
                <svg className="w-16 h-16 mx-auto transition-colors duration-300 group-hover:stroke-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  <circle cx="12" cy="8" r="1" fill="#F4C9C4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-white">Launch and live</h3>
              <p className="text-[#666] text-sm transition-colors duration-300 group-hover:text-white">Development and scale</p>
            </div>

            {/* Service 4 */}
            <div className="text-center transition-all duration-300 ease-in-out p-6 rounded-lg cursor-pointer hover:bg-[#2b2c2d] group">
              <div className="relative inline-block mb-6">
                <svg className="w-16 h-16 mx-auto transition-colors duration-300 group-hover:stroke-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <circle cx="12" cy="8" r="1" fill="#F4C9C4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-white">Maintenance</h3>
              <p className="text-[#666] text-sm transition-colors duration-300 group-hover:text-white">Maintaining strong</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LARGE IMAGE + FLOATING EXPERIENCE CARD */}
      <section className="relative w-full h-96 lg:h-[600px] overflow-hidden flex justify-center z-20">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-6xl">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating Experience Card */}
        <div className="absolute right-8 lg:right-16 top-1/2 transform -translate-y-1/2 bg-[#F4C9C4] p-12 lg:p-16 rounded-xl shadow-2xl max-w-md">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] mb-8">
            Highly experienced
          </h2>
          
          <div className="space-y-6">
            {/* Web Design */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#111111] font-medium">Web design</span>
                <span className="bg-black text-white px-3 py-1 rounded text-sm">80%</span>
              </div>
              <div className="w-full bg-[#D9D9D9] h-2 rounded-full">
                <div className="bg-[#222] h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Web Development */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#111111] font-medium">Web development</span>
                <span className="bg-black text-white px-3 py-1 rounded text-sm">87%</span>
              </div>
              <div className="w-full bg-[#D9D9D9] h-2 rounded-full">
                <div className="bg-[#222] h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>

            {/* e-Commerce Solutions */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#111111] font-medium">e-Commerce solutions</span>
                <span className="bg-black text-white px-3 py-1 rounded text-sm">93%</span>
              </div>
              <div className="w-full bg-[#D9D9D9] h-2 rounded-full">
                <div className="bg-[#222] h-2 rounded-full" style={{ width: '93%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DARK BLOCK WITH BOLD HEADLINE + 5. FOUR-SERVICE LIST + 6. CLOSING CTA */}
      <section className="bg-[#111111] py-20 lg:py-32 -mt-48 lg:-mt-72 relative z-10">
        <div className="max-w-6xl mx-auto px-8">
          {/* Spacer to push content below image */}
          <div className="h-48 lg:h-72"></div>
          
          {/* Bold Headline */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-16">
            It's so challenging to find a good<br />
            team to do great things. But we can<br />
            provide you the best one.
          </h2>

          {/* Four Service List */}
          <div className="space-y-8 mb-16">
            {/* Service 1 - Design */}
            <div className="flex items-center space-x-6 pb-8 border-b border-gray-800">
              <span className="text-white text-2xl font-bold">01</span>
              <div className="w-12 h-12 rounded-full border-2 border-[#F4C9C4] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#F4C9C4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl font-semibold mb-1">Design</h3>
                <p className="text-[#BBBBBB]">Creating beautiful and functional user interfaces that captivate and convert</p>
              </div>
            </div>

            {/* Service 2 - Development */}
            <div className="flex items-center space-x-6 pb-8 border-b border-gray-800">
              <span className="text-white text-2xl font-bold">02</span>
              <div className="w-12 h-12 rounded-full border-2 border-[#F4C9C4] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#F4C9C4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <h3 className="text-white text-xl font-semibold">Development</h3>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded text-xs font-bold">POPULAR</span>
                </div>
                <p className="text-[#BBBBBB]">Building robust, scalable web applications with cutting-edge technologies</p>
              </div>
            </div>

            {/* Service 3 - Marketing */}
            <div className="flex items-center space-x-6 pb-8 border-b border-gray-800">
              <span className="text-white text-2xl font-bold">03</span>
              <div className="w-12 h-12 rounded-full border-2 border-[#F4C9C4] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#F4C9C4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl font-semibold mb-1">Marketing</h3>
                <p className="text-[#BBBBBB]">Strategic digital marketing to boost your online presence and reach</p>
              </div>
            </div>

            {/* Service 4 - Content Writing */}
            <div className="flex items-center space-x-6">
              <span className="text-white text-2xl font-bold">04</span>
              <div className="w-12 h-12 rounded-full border-2 border-[#F4C9C4] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#F4C9C4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl font-semibold mb-1">Content writing</h3>
                <p className="text-[#BBBBBB]">Compelling content that engages your audience and drives results</p>
              </div>
            </div>
          </div>

          {/* Closing CTA Text */}
          <div className="text-center lg:text-left">
            <p className="text-[#CCCCCC] text-lg">
              Save your precious time and effort spent for finding a solution.{' '}
              <a href="/contact" className="text-white hover:text-yellow-400 transition-colors duration-300 font-semibold">
                Contact us now
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section className="bg-white py-32 lg:py-40 relative">
        {/* Decorative Dot - Top Left */}
        <div className="absolute top-12 left-12 w-4 h-4 bg-[#111111] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <div className="flex items-center space-x-8">
              <span className="text-[#333333] text-sm font-medium tracking-wider">PREV</span>
              <div className="w-px h-20 bg-[#E6E6E6]"></div>
            </div>

            {/* Center Content */}
            <div className="flex-1 text-center px-12">
              {/* Main Heading */}
              <h2 className="text-4xl lg:text-6xl font-bold text-[#111111] leading-tight mb-8">
                Trusted by people
              </h2>

              {/* Testimonial Paragraph */}
              <p className="text-[#666666] text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
                "There are design companies and then there are user experience, design, consulting, interface design. Simply the great designs and best theme for fast loading."
              </p>

              {/* Author Name */}
              <p className="text-[#111111] text-lg lg:text-xl font-semibold">
                Leonel Mooney, ThemeZaa
              </p>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-8">
              <div className="w-px h-20 bg-[#E6E6E6]"></div>
              <span className="text-[#333333] text-sm font-medium tracking-wider">NEXT</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
