import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-fadeInUp text-4xl lg:text-5xl font-bold mb-4 opacity-0" style={{ animationDelay: '0.1s' }}>
            Let's work together
          </h2>
          <p className="animate-fadeInUp text-xl text-gray-400 max-w-3xl mx-auto opacity-0" style={{ animationDelay: '0.2s' }}>
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        
        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-3"
              >
                Send message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">hello@digitalagency.com</p>
                    <p className="text-gray-400">info@digitalagency.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">+44 20 7123 4567</p>
                    <p className="text-gray-400">+44 20 7123 4568</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office</h4>
                    <p className="text-gray-400">123 Creative Street</p>
                    <p className="text-gray-400">London, UK</p>
                    <p className="text-gray-400">EC1A 1BB</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-bold mb-4">Business hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
            <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold mb-4">Follow us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                  <span className="font-bold">f</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                  <span className="font-bold">t</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                  <span className="font-bold">in</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                  <span className="font-bold">ig</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
