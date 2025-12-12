"use client";

import React, { useState } from 'react';
import { Activity, Bone, Hospital, Heart, Target, Zap } from 'lucide-react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

type InteractiveServiceCardProps = {
  services: Service[];
};

export default function InteractiveServiceCard({ services }: InteractiveServiceCardProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={index}
          className={`group rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-lg transition-all duration-300 cursor-pointer ${
            selectedService === index ? 'ring-2 ring-teal-600' : ''
          }`}
          onClick={() => setSelectedService(selectedService === index ? null : index)}
        >
          <div className="mb-4 sm:mb-6">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-teal-100 text-2xl sm:text-3xl group-hover:bg-teal-600 group-hover:text-white transition-colors">
              {service.icon}
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>
          
          {selectedService === index && (
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">What we treat:</h4>
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600">
                    <span className="mr-2 text-teal-600 mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <button className="mt-3 sm:mt-4 text-teal-600 font-semibold text-xs sm:text-sm hover:text-teal-700">
            Learn more →
          </button>
        </div>
      ))}
    </div>
  );
}
