interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  hasExpandIcon: boolean;
  hasDecorativeDot: boolean;
  height: 'normal' | 'tall' | 'short';
}

const portfolioItems: PortfolioItem[] = [
  // Row 1
  {
    id: 1,
    title: 'Violator',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    hasExpandIcon: true,
    hasDecorativeDot: false,
    height: 'tall'
  },
  {
    id: 2,
    title: 'Identity',
    category: 'Poster',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    hasExpandIcon: false,
    hasDecorativeDot: true,
    height: 'normal'
  },
  {
    id: 3,
    title: 'Essentials',
    category: 'Digital',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    hasExpandIcon: true,
    hasDecorativeDot: false,
    height: 'short'
  },
  // Row 2
  {
    id: 4,
    title: 'Architecture',
    category: 'Web',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    hasExpandIcon: false,
    hasDecorativeDot: true,
    height: 'normal'
  },
  {
    id: 5,
    title: 'Leather Craft',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    hasExpandIcon: true,
    hasDecorativeDot: false,
    height: 'tall'
  },
  {
    id: 6,
    title: 'Mountain Vista',
    category: 'Digital',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    hasExpandIcon: false,
    hasDecorativeDot: false,
    height: 'normal'
  },
  // Row 3
  {
    id: 7,
    title: 'Curved Space',
    category: 'Web',
    imageUrl: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    hasExpandIcon: true,
    hasDecorativeDot: true,
    height: 'short'
  },
  {
    id: 8,
    title: 'Fashion Portrait',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    hasExpandIcon: false,
    hasDecorativeDot: false,
    height: 'tall'
  },
  {
    id: 9,
    title: 'Black Jacket',
    category: 'Selected',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    hasExpandIcon: true,
    hasDecorativeDot: true,
    height: 'normal'
  }
];

export default function PortfolioGallerySection() {
  const getHeightClass = (height: string) => {
    switch (height) {
      case 'tall': return 'h-96';
      case 'short': return 'h-48';
      default: return 'h-72';
    }
  };

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Portfolio Grid - Masonry Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-8 relative group overflow-hidden"
            >
              {/* Decorative Dot */}
              {item.hasDecorativeDot && (
                <div className="absolute top-4 left-4 w-3 h-3 bg-gray-400 rounded-full z-20 shadow-sm"></div>
              )}

              {/* Main Thumbnail Image */}
              <div className={`relative ${getHeightClass(item.height)} overflow-hidden`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-35 transition-all duration-500 flex items-end">
                  {/* Text Overlay */}
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-[#DDDDDD]">{item.category}</p>
                  </div>
                </div>

                {/* Expand Icon */}
                {item.hasExpandIcon && (
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
