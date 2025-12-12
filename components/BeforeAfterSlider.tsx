"use client";

import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  return (
    <section className="bg-[#f4f6f8] text-black py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="text-xl md:text-3xl font-black uppercase leading-tight">
            Website walkthrough<br className="md:hidden" /> – before / after
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-neutral-600 max-w-2xl mx-auto px-2">
            Drag handle to compare old Northwest website with new experience.
          </p>
        </div>

        <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
          <style jsx>{`
            img-comparison-slider {
              --divider-width: 3px;
              --divider-color: #ffffff;
              --handle-size: 40px;
              --handle-color: #ffffff;
              --handle-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            
            img-comparison-slider::part(divider) {
              background-color: var(--divider-color);
              width: var(--divider-width);
            }
            
            img-comparison-slider::part(handle) {
              width: var(--handle-size);
              height: var(--handle-size);
              background-color: var(--handle-color);
              border-radius: 50%;
              box-shadow: var(--handle-shadow);
              border: 2px solid #f4f6f8;
            }

            @media (max-width: 768px) {
              img-comparison-slider {
                --handle-size: 32px;
              }
            }
          `}</style>
          
          <div className="aspect-[4/3] md:aspect-[16/9]">
            <ImgComparisonSlider>
              <img 
                slot="first" 
                src={beforeImage} 
                alt={beforeLabel}
                className="w-full h-full object-cover"
              />
              <img 
                slot="second" 
                src={afterImage} 
                alt={afterLabel}
                className="w-full h-full object-cover"
              />
            </ImgComparisonSlider>
          </div>
          
          {/* Labels */}
          <div className="pointer-events-none absolute top-3 md:top-4 left-3 md:left-4 px-2 md:px-3 py-1 rounded-full bg-black/60 text-xs font-semibold uppercase tracking-wide text-white">
            {beforeLabel}
          </div>
          <div className="pointer-events-none absolute top-3 md:top-4 right-3 md:right-4 px-2 md:px-3 py-1 rounded-full bg-black/60 text-xs font-semibold uppercase tracking-wide text-white">
            {afterLabel}
          </div>
        </div>
      </div>
    </section>
  );
}
