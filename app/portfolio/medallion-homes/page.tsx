"use client";

import React, { useState, useEffect } from "react";
import { Trees, Frame, Home, Utensils, HardHat, Clipboard, Hammer, Key, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import AnimatedSection from "@/components/AnimatedSection";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  location: string;
  year: string;
};

type Material = {
  name: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
};

type Neighborhood = {
  name: string;
  projects: number;
  description: string;
};

type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
  beforeAfter?: boolean;
};

const projects: Project[] = [
  {
    title: "Modern Luxury Estate",
    category: "Custom Home",
    description: "Contemporary 6,000 sq ft custom home with premium finishes and smart home technology",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    location: "Oakville, ON",
    year: "2024"
  },
  {
    title: "Heritage Home Restoration",
    category: "Renovation",
    description: "Complete restoration of a century home while preserving its historic character",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=60",
    afterImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=60",
    location: "Toronto, ON",
    year: "2023"
  },
  {
    title: "Second Story Addition",
    category: "Home Addition",
    description: "Seamless second story addition adding 1,200 sq ft of living space",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    location: "Vaughan, ON",
    year: "2024"
  },
  {
    title: "Gourmet Kitchen Transformation",
    category: "Renovation",
    description: "Complete kitchen renovation with high-end appliances and custom cabinetry",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=60",
    afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=60",
    location: "Richmond Hill, ON",
    year: "2023"
  },
  {
    title: "Contemporary Family Home",
    category: "Custom Home",
    description: "Modern 4,500 sq ft family home with open-concept living and outdoor entertainment space",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    location: "Markham, ON",
    year: "2024"
  },
  {
    title: "Luxury Basement Finishing",
    category: "Renovation",
    description: "Complete basement transformation with home theater, gym, and guest suite",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    location: "Burlington, ON",
    year: "2023"
  }
];

const materials: Material[] = [
  {
    name: "Premium Hardwood",
    description: "Sustainably sourced hardwood flooring with lifetime warranty",
    icon: <Trees className="w-8 h-8" />,
    features: ["Oak & Maple Options", "Sustainable Sourcing", "25-Year Warranty", "Custom Finishes"]
  },
  {
    name: "Energy-Efficient Windows",
    description: "Triple-pane windows with superior insulation and UV protection",
    icon: <Frame className="w-8 h-8" />,
    features: ["Triple-Pane Glass", "Low-E Coating", "Energy Star Rated", "Sound Reduction"]
  },
  {
    name: "Smart Home Integration",
    description: "Cutting-edge home automation and security systems",
    icon: <Home className="w-8 h-8" />,
    features: ["Voice Control", "Mobile App", "Security Integration", "Energy Monitoring"]
  },
  {
    name: "Luxury Kitchen Packages",
    description: "High-end appliances and custom cabinetry solutions",
    icon: <Utensils className="w-8 h-8" />,
    features: ["Wolf & Sub-Zero", "Custom Cabinetry", "Quartz Countertops", "Smart Appliances"]
  }
];

const neighborhoods: Neighborhood[] = [
  {
    name: "Oakville",
    projects: 45,
    description: "Luxury custom homes and lakefront properties"
  },
  {
    name: "Vaughan",
    projects: 38,
    description: "Modern family homes and major renovations"
  },
  {
    name: "Richmond Hill",
    projects: 32,
    description: "Estate homes and heritage restorations"
  },
  {
    name: "Markham",
    projects: 28,
    description: "Contemporary homes and additions"
  },
  {
    name: "Burlington",
    projects: 25,
    description: "Custom builds and basement transformations"
  },
  {
    name: "Toronto",
    projects: 22,
    description: "Urban renovations and heritage restorations"
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Michael & Sarah Thompson",
    location: "Vaughan, ON",
    rating: 5,
    text: "Medallion Homes transformed our vision into reality. Their attention to detail and craftsmanship exceeded our expectations. Our custom home is everything we dreamed of and more.",
    project: "Custom Home - 6,000 sq ft",
    beforeAfter: true
  },
  {
    name: "David Chen",
    location: "Richmond Hill, ON",
    rating: 5,
    text: "The second story addition was seamless. You can't even tell it wasn't part of original house. The team was professional, on time, and within budget.",
    project: "Home Addition - 1,200 sq ft",
    beforeAfter: true
  },
  {
    name: "Jennifer & Robert Martinez",
    location: "Markham, ON",
    rating: 5,
    text: "Our kitchen renovation completely transformed our home. The design team understood our style perfectly and execution was flawless. We couldn't be happier!",
    project: "Kitchen Renovation",
    beforeAfter: true
  }
];

const MedallionHomesCaseStudy: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({ years: 0, homes: 0, neighborhoods: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ years: 25, homes: 500, neighborhoods: 15 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-[#0f1011]" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      <Navigation />
      
      {/* MAIN */}
      <main className="pt-16 md:pt-20">
        {/* FULL HERO VIDEO WITH TITLE OVERLAY */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              playsInline
              loop
              muted
              className="w-full h-full object-cover"
              poster="https://r2-medallion.takkar.ooo/compressed_3118.mp4"
            >
              <source
                src="https://r2-medallion.takkar.ooo/compressed_3118.mp4"
                type="video/mp4"
              />
            </video>
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 max-w-6xl mx-auto">
            {/* Top Marquee */}
            <div className="w-full text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/80 overflow-hidden mb-8 md:mb-12">
              <div className="flex gap-6 md:gap-8 whitespace-nowrap animate-[marquee_32s_linear_infinite]">
                <span className="text-center">
                  Medallion Homes • Custom Home Builder • GTA • Luxury Construction • 
                  Premium Renovations • Digital transformation
                </span>
                <span className="text-center">
                  Medallion Homes • Custom Home Builder • GTA • Luxury Construction • 
                  Premium Renovations • Digital transformation
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="flex flex-col items-center text-center px-4 mb-8 md:mb-12">
              <span className="uppercase font-medium text-[10px] md:text-[11px] tracking-[0.25em] text-amber-400 mb-3 md:mb-4 animate-fadeInUp">
                Case study
              </span>
            <h1 className="font-black text-[20px] xs:text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-tight uppercase max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl text-white animate-fadeInUp" 
                style={{ fontFamily: 'var(--font-space-grotesk)', animationDelay: '0.2s' }}>
              Medallion <br className="block xs:hidden" />
              Homes
            </h1>
            </div>

            {/* Bottom Marquee (Mobile) */}
            <div className="w-full text-[10px] uppercase tracking-[0.3em] text-white/80 md:hidden overflow-hidden">
              <div className="flex gap-6 whitespace-nowrap animate-[marquee_32s_linear_infinite]">
                <span>Website redesign • Premium construction • Client showcase</span>
                <span>Website redesign • Premium construction • Client showcase</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                <div className="w-0.5 h-3 bg-white/60 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT MEDALLION HOMES */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Building Dreams for Over 25 Years
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Medallion Homes is a family-owned custom home building company serving Greater Toronto Area for over 25 years. Specializing in luxury custom homes, renovations, and additions, we bring dreams to life with exceptional craftsmanship and attention to detail.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From concept to completion, our team works closely with clients to create spaces that reflect their unique lifestyle and vision. We pride ourselves on quality construction, innovative design, and lasting relationships with our clients.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">25+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">Family-Owned Business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">GTA Service Area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">Licensed & Insured</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"
                  alt="Medallion Homes Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PROJECT TIMELINE */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Project Showcase Timeline
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our finest custom homes, renovations, and additions by category
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              {["all", "Custom Home", "Home Addition", "Renovation"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-amber-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter === "all" ? "All Projects" : filter}
                </button>
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter(project => activeFilter === "all" || project.category === activeFilter)
                .map((project, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm font-medium text-amber-400 mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200 mb-2">{project.location} • {project.year}</p>
                      <p className="text-sm text-gray-300">{project.description}</p>
                    </div>
                  </div>
                  
                  {selectedProject === index && project.beforeImage && project.afterImage && (
                    <div className="absolute inset-0 bg-white/95 p-4 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Before</h4>
                          <img src={project.beforeImage} alt="Before" className="w-full rounded-lg" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">After</h4>
                          <img src={project.afterImage} alt="After" className="w-full rounded-lg" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MATERIALS & QUALITY SHOWCASE */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Premium Materials & Quality
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use only the finest materials and latest technology to ensure lasting quality
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {materials.map((material, index) => (
                <div key={index} className="group rounded-2xl bg-gray-50 p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-amber-100 text-2xl sm:text-3xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      {material.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{material.name}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{material.description}</p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {material.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                            <div className="h-1.5 w-1.5 bg-amber-600 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-8 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-8">
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900 mb-1">Quality Certifications</div>
                  <div className="text-gray-600">Fully licensed, insured, and certified</div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
                  <div className="h-12 w-12 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
                  <div className="h-12 w-12 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GTA NEIGHBORHOODS MAP */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Serving Greater Toronto Area
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proudly building and renovating homes across GTA's finest neighborhoods
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="group rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{neighborhood.name}</h3>
                      <p className="text-sm text-gray-600">{neighborhood.description}</p>
                    </div>
                    <div className="text-2xl font-bold text-amber-600">{neighborhood.projects}</div>
                  </div>
                  <div className="text-sm text-gray-500">Projects Completed</div>
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-600 rounded-full transition-all duration-1000"
                      style={{ width: `${(neighborhood.projects / 45) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 rounded-full bg-amber-600 px-8 py-4 text-white">
                <div className="h-3 w-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-medium">Currently Building in 6+ GTA Neighborhoods</span>
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL BUILDING JOURNEY */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Your Building Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A transparent, step-by-step process with clear timelines and milestones
              </p>
            </div>

            <div className="relative">
              {/* Progress Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-amber-200 -translate-y-1/2"></div>
              
              <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
                {[
                  { 
                    step: "01", 
                    title: "Discovery & Design", 
                    description: "Initial consultation, site analysis, and architectural design development",
                    timeframe: "2-4 weeks",
                    icon: <HardHat className="w-6 h-6 sm:w-8 sm:h-8" />
                  },
                  { 
                    step: "02", 
                    title: "Permits & Planning", 
                    description: "Building permits, material selection, and detailed construction scheduling",
                    timeframe: "4-6 weeks",
                    icon: <Clipboard className="w-6 h-6 sm:w-8 sm:h-8" />
                  },
                  { 
                    step: "03", 
                    title: "Construction", 
                    description: "Foundation work, framing, roofing, and interior finishing",
                    timeframe: "6-12 months",
                    icon: <Hammer className="w-6 h-6 sm:w-8 sm:h-8" />
                  },
                  { 
                    step: "04", 
                    title: "Handover & Warranty", 
                    description: "Final inspection, client orientation, and warranty activation",
                    timeframe: "1-2 weeks",
                    icon: <Key className="w-6 h-6 sm:w-8 sm:h-8" />
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="text-center">
                      <div className="mb-4 sm:mb-6 relative">
                        <div className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto items-center justify-center rounded-full bg-amber-600 text-white text-2xl sm:text-3xl md:text-4xl shadow-lg">
                          {item.icon}
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                          {item.step}
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{item.description}</p>
                      <div className="inline-flex items-center gap-2 bg-amber-50 px-2 sm:px-3 py-1 rounded-full">
                        <div className="h-2 w-2 bg-amber-600 rounded-full"></div>
                        <span className="text-xs font-medium text-amber-700">{item.timeframe}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN INSPIRATION GALLERY */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Design Inspiration Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our signature styles and find inspiration for your dream home
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  style: "Modern Contemporary",
                  description: "Clean lines, open spaces, and minimalist aesthetics",
                  features: ["Open Concept", "Floor-to-Ceiling Windows", "Smart Home Tech", "Neutral Palettes"],
                  image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
                },
                {
                  style: "Traditional Luxury",
                  description: "Timeless elegance with classic architectural elements",
                  features: ["Crown Molding", "Hardwood Floors", "Custom Millwork", "Grand Entrances"],
                  image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80"
                },
                {
                  style: "Transitional",
                  description: "Perfect blend of contemporary and traditional elements",
                  features: ["Mixed Materials", "Versatile Spaces", "Updated Classics", "Comfortable Luxury"],
                  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                }
              ].map((style, index) => (
                <div key={index} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={style.image}
                      alt={style.style}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{style.style}</h3>
                    <p className="text-gray-600 mb-4">{style.description}</p>
                    <div className="space-y-2">
                      {style.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="h-1.5 w-1.5 bg-amber-600 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT TESTIMONIALS */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear what our clients say about their experience with Medallion Homes
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-lg transition-all duration-300 ${
                    activeTestimonial === index ? 'ring-2 ring-amber-600 shadow-xl' : ''
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
                    <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{testimonial.location}</div>
                    <div className="text-xs sm:text-sm font-medium text-amber-600">{testimonial.project}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AGENCY SHOWCASE - CONSTRUCTION SPECIFIC */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Digital Transformation for Luxury Construction
                  </h2>
                  <p className="text-lg mb-8 text-amber-50">
                    We transformed Medallion Homes' digital presence to match their premium craftsmanship, creating a sophisticated platform that attracts high-net-worth clients and showcases their exceptional work.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <span>Virtual tour integration for luxury properties</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <span>High-end portfolio with before/after galleries</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <span>Targeted SEO for luxury home buyers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <span>Lead qualification system for premium clients</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
                    <div className="text-3xl font-bold mb-2">73%</div>
                    <div className="text-amber-100">Increase in Project Inquiries</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
                    <div className="text-3xl font-bold mb-2">5.2x</div>
                    <div className="text-amber-100">Average Project Value Increase</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
                    <div className="text-3xl font-bold mb-2">89%</div>
                    <div className="text-amber-100">Lead-to-Contract Conversion</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
                    <div className="text-3xl font-bold mb-2">#1</div>
                    <div className="text-amber-100">GTA Luxury Home Builder Rankings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WEBSITE PLATFORM SCREENSHOTS - 3 SIDE BY SIDE */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 md:py-24">
          <div className="w-full px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-black uppercase text-gray-900">
                Digital Platform Showcase
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 px-2">
                Full-page captures of our luxury construction platform designed for premium home buyers
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
              {[
                {
                  label: "Medallion Homes Platform",
                  src: "/images/mhp.png",
                },
                {
                  label: "Property Showcase",
                  src: "/images/prop.png",
                },
                {
                  label: "Project Gallery",
                  src: "/images/pro.png",
                },
              ].map((shot, i) => (
                <AnimatedSection
                  key={i}
                  delay={i * 0.2}
                  className="overflow-hidden rounded-xl md:rounded-2xl border border-black/10 shadow-lg md:shadow-xl bg-white group"
                >
                  <img
                    src={shot.src}
                    alt={shot.label}
                    className="w-full h-auto object-cover"
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE CONSULTATION FORM */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Start Your Dream Home Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Schedule your free consultation and take the first step toward your custom home
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors text-sm sm:text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors text-sm sm:text-base"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors text-sm sm:text-base"
                      placeholder="(416) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Project Type</label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors text-sm sm:text-base">
                    <option>Select a project type</option>
                    <option>Custom Home</option>
                    <option>Home Addition</option>
                    <option>Renovation</option>
                    <option>Kitchen Remodel</option>
                    <option>Bathroom Renovation</option>
                    <option>Basement Finishing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Preferred Timeline</label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors text-sm sm:text-base">
                    <option>Select timeline</option>
                    <option>ASAP</option>
                    <option>3-6 months</option>
                    <option>6-12 months</option>
                    <option>1+ years</option>
                    <option>Just exploring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Tell us about your dream project</label>
                  <textarea 
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-colors text-sm sm:text-base"
                    placeholder="Describe your vision, style preferences, budget range, or any specific requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <input 
                    type="checkbox" 
                    id="newsletter"
                    className="mt-0.5 sm:mt-1 h-3 w-3 sm:h-4 sm:w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <label htmlFor="newsletter" className="text-xs sm:text-sm text-gray-600 leading-tight sm:leading-normal">
                    I'd like to receive design inspiration and project updates from Medallion Homes
                  </label>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <button 
                    type="submit"
                    className="w-full sm:flex-1 rounded-full bg-amber-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-amber-700 transition-colors shadow-lg"
                  >
                    Schedule Free Consultation
                  </button>
                  <button 
                    type="button"
                    className="w-full sm:flex-1 rounded-full border-2 border-amber-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-amber-600 hover:bg-amber-50 transition-colors"
                  >
                    Download Portfolio
                  </button>
                </div>
              </form>

              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-xs sm:text-sm text-gray-600">
                  <span className="font-medium">Response time:</span> Within 24 hours • 
                  <span className="font-medium"> Free consultation</span> • 
                  <span className="font-medium"> No obligation</span>
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default MedallionHomesCaseStudy;
