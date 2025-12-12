"use client";

import React, { useState } from 'react';
import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  condition: string;
  rating: number;
  text: string;
  result: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-lg transition-all duration-300 cursor-pointer ${
            activeTestimonial === index ? 'ring-2 ring-teal-600 shadow-xl' : ''
          }`}
          onClick={() => setActiveTestimonial(index)}
        >
          <div className="flex mb-3 sm:mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base">"{testimonial.text}"</p>
          <div className="border-t pt-3 sm:pt-4">
            <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
            <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{testimonial.condition}</div>
            <div className="text-xs sm:text-sm font-medium text-teal-600">{testimonial.result}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
