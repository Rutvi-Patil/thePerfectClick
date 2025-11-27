'use client';

import React, { useState } from 'react';

export default function ExpertiseDetailSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "There are design companies and then there are user experience, design, consulting, interface design. Simply the great designs and best theme for fast loading.",
      author: "Leonel Mooney, ThemeZaa"
    },
    {
      text: "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative solutions exceeded all our expectations.",
      author: "Sarah Johnson, TechStart Inc."
    },
    {
      text: "The level of professionalism and creativity they bring to every project is unmatched. They transformed our online presence completely.",
      author: "Michael Chen, Digital Dynamics"
    },
    {
      text: "From concept to execution, every step was handled with expertise. Our website traffic has increased by 300% since the launch.",
      author: "Emily Rodriguez, Growth Labs"
    }
  ];

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      {/* 1. INTRO HEADING (White Background) */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111111] leading-tight px-4">
            Build impactful experiences through<br />
            web design and development.
          </h1>
        </div>
      </section>

      {/* 2. FOUR SERVICE ICONS ROW */}
      <section className="bg-white py-8 sm:py-12 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
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
      <section className="relative w-full h-100 sm:h-96 md:h-[500px] lg:h-[600px] overflow-hidden z-20">
        {/* Background Image - Fixed size 290x450 with padding */}
        <div className="absolute inset-0 flex justify-center px-4 sm:px-6 lg:px-0">
          <div className="w-[290px] h-[450px] lg:w-auto lg:h-full">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating Experience Card - Mobile: Centered on background image, Desktop: Half overlapping image */}
        <div className="
  absolute 
  left-1/2 
  top-1/2 
  -translate-y-1/2 
  -translate-x-1/2 
  
  /* DESKTOP BEHAVIOUR */
  lg:left-auto 
  lg:right-[115px]     /* Pushes half outside background */
  lg:top-1/2 
  lg:-translate-y-1/2 
  lg:translate-x-0      /* Disable mobile centering */
  
  bg-[#F4C9C4] 
  w-[230px] h-[283px] 
  lg:w-[400px] lg:h-auto 
  lg:p-12 xl:p-16 
  lg:rounded-xl 
  shadow-2xl 
  p-4 sm:p-6 
">


          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-6 lg:mb-8">
            Highly experienced
          </h2>
          
          <div className="space-y-4 lg:space-y-6">
            {/* Web Design */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#111111] font-medium text-sm sm:text-base">Web design</span>
                <span className="bg-black text-white px-2 py-1 rounded text-xs sm:text-sm">80%</span>
              </div>
              <div className="w-full bg-[#D9D9D9] h-2 rounded-full">
                <div className="bg-[#222] h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Web Development */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#111111] font-medium text-sm sm:text-base">Web development</span>
                <span className="bg-black text-white px-2 py-1 rounded text-xs sm:text-sm">87%</span>
              </div>
              <div className="w-full bg-[#D9D9D9] h-2 rounded-full">
                <div className="bg-[#222] h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>

            {/* e-Commerce Solutions */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#111111] font-medium text-sm sm:text-base">e-Commerce solutions</span>
                <span className="bg-black text-white px-2 py-1 rounded text-xs sm:text-sm">93%</span>
              </div>
              <div className="w-full bg-[#D9D9D9] h-2 rounded-full">
                <div className="bg-[#222] h-2 rounded-full" style={{ width: '93%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DARK BLOCK WITH BOLD HEADLINE + 5. FOUR-SERVICE LIST + 6. CLOSING CTA */}
      <section className="bg-[#111111] py-16 sm:py-20 lg:py-32 -mt-48 sm:-mt-56 lg:-mt-72 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Spacer to push content below image */}
          <div className="h-48 sm:h-56 lg:h-72"></div>
          
          {/* Bold Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-8 sm:mb-12 lg:mb-16 px-2">
            It's so challenging to find a good<br />
            team to do great things. But we can<br />
            provide you the best one.
          </h2>

          {/* Four Service List */}
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            {/* Service 1 - Design */}
            <div className="flex items-start sm:items-center space-x-4 sm:space-x-6 pb-6 sm:pb-8 border-b border-gray-800">
              <span className="text-white text-xl sm:text-2xl font-bold flex-shrink-0">01</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#F4C9C4] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4C9C4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">Design</h3>
                <p className="text-[#BBBBBB] text-sm sm:text-base">Creating beautiful and functional user interfaces that captivate and convert</p>
              </div>
            </div>

            {/* Service 2 - Development */}
            <div className="flex items-start sm:items-center space-x-4 sm:space-x-6 pb-6 sm:pb-8 border-b border-gray-800">
              <span className="text-white text-xl sm:text-2xl font-bold flex-shrink-0">02</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#F4C9C4] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4C9C4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-1">
                  <h3 className="text-white text-lg sm:text-xl font-semibold">Development</h3>
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold w-fit">POPULAR</span>
                </div>
                <p className="text-[#BBBBBB] text-sm sm:text-base">Building robust, scalable web applications with cutting-edge technologies</p>
              </div>
            </div>

            {/* Service 3 - Marketing */}
            <div className="flex items-start sm:items-center space-x-4 sm:space-x-6 pb-6 sm:pb-8 border-b border-gray-800">
              <span className="text-white text-xl sm:text-2xl font-bold flex-shrink-0">03</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#F4C9C4] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4C9C4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">Marketing</h3>
                <p className="text-[#BBBBBB] text-sm sm:text-base">Strategic digital marketing to boost your online presence and reach</p>
              </div>
            </div>

            {/* Service 4 - Content Writing */}
            <div className="flex items-start sm:items-center space-x-4 sm:space-x-6">
              <span className="text-white text-xl sm:text-2xl font-bold flex-shrink-0">04</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#F4C9C4] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4C9C4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">Content writing</h3>
                <p className="text-[#BBBBBB] text-sm sm:text-base">Compelling content that engages your audience and drives results</p>
              </div>
            </div>
          </div>

          {/* Closing CTA Text */}
          <div className="text-center px-4">
            <p className="text-[#CCCCCC] text-base sm:text-lg">
              Save your precious time and effort spent for finding a solution.{' '}
              <a href="/contact" className="text-white hover:text-yellow-400 transition-colors duration-300 font-semibold">
                Contact us now
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section className="bg-white py-20 sm:py-24 lg:py-40 relative">
        {/* Decorative Dot - Top Left */}
        <div className="absolute top-8 sm:top-12 left-6 sm:left-12 w-3 h-3 sm:w-4 sm:h-4 bg-[#111111] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col lg:hidden items-center space-y-8">
            {/* Center Content */}
            <div className="text-center px-6 py-8">
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#111111] leading-tight mb-6 sm:mb-8">
                Trusted by people
              </h2>

              {/* Testimonial Paragraph */}
              <p className="text-[#666666] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-6 transition-opacity duration-300">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Author Name */}
              <p className="text-[#111111] text-base sm:text-lg lg:text-xl font-semibold transition-opacity duration-300">
                {testimonials[currentTestimonial].author}
              </p>
            </div>

            {/* Navigation - Bottom */}
            <div className="flex items-center justify-center space-x-8 w-full max-w-md">
              <button 
                className="flex items-center space-x-4 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={handlePrev}
              >
                <span className="text-[#333333] text-sm font-medium tracking-wider">PREV</span>
                <div className="w-px h-16 bg-[#E6E6E6]"></div>
              </button>

              <button 
                className="flex items-center space-x-4 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={handleNext}
              >
                <div className="w-px h-16 bg-[#E6E6E6]"></div>
                <span className="text-[#333333] text-sm font-medium tracking-wider">NEXT</span>
              </button>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left Navigation */}
            <div className="flex items-center space-x-8 cursor-pointer hover:opacity-70 transition-opacity" onClick={handlePrev}>
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
              <p className="text-[#666666] text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-6 transition-opacity duration-300">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Author Name */}
              <p className="text-[#111111] text-lg lg:text-xl font-semibold transition-opacity duration-300">
                {testimonials[currentTestimonial].author}
              </p>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-8 cursor-pointer hover:opacity-70 transition-opacity" onClick={handleNext}>
              <div className="w-px h-20 bg-[#E6E6E6]"></div>
              <span className="text-[#333333] text-sm font-medium tracking-wider">NEXT</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
