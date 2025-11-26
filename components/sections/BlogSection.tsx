import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-fadeInUp text-4xl lg:text-5xl font-bold mb-4 opacity-0" style={{ animationDelay: '0.1s' }}>
            Latest blog posts
          </h2>
          <p className="animate-fadeInUp text-xl text-gray-600 max-w-3xl mx-auto opacity-0" style={{ animationDelay: '0.2s' }}>
            Stay updated with the latest trends, insights, and news from the digital world.
          </p>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="blog-card animate-fadeInUp bg-white rounded-lg shadow-lg overflow-hidden opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="blog-card-image overflow-hidden h-48">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Web Design Trends"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">Design</span>
                <span className="text-gray-500 text-sm">5 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Top Web Design Trends for 2024</h3>
              <p className="text-gray-600 mb-4">Discover the latest design trends that will shape the digital landscape in 2024.</p>
              <a href="#" className="text-black font-semibold flex items-center gap-2 hover:text-yellow-400 transition-colors">
                Read more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Blog Post 2 */}
          <div className="blog-card animate-fadeInUp bg-white rounded-lg shadow-lg overflow-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="blog-card-image overflow-hidden h-48">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Mobile Development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">Development</span>
                <span className="text-gray-500 text-sm">8 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile App Development Best Practices</h3>
              <p className="text-gray-600 mb-4">Learn the essential practices for building successful mobile applications.</p>
              <a href="#" className="text-black font-semibold flex items-center gap-2 hover:text-yellow-400 transition-colors">
                Read more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Blog Post 3 */}
          <div className="blog-card animate-fadeInUp bg-white rounded-lg shadow-lg overflow-hidden opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="blog-card-image overflow-hidden h-48">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Digital Marketing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">Marketing</span>
                <span className="text-gray-500 text-sm">6 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Marketing Strategies That Work</h3>
              <p className="text-gray-600 mb-4">Explore proven marketing strategies to grow your online presence.</p>
              <a href="#" className="text-black font-semibold flex items-center gap-2 hover:text-yellow-400 transition-colors">
                Read more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="animate-fadeInUp bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-3 mx-auto opacity-0" style={{ animationDelay: '0.6s' }}>
            View all posts <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
