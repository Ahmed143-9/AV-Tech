import React, { useState, useEffect } from 'react';

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    description: 'Full-featured online store with payment gateway integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    details: 'Complete e-commerce solution with secure payment processing, inventory management, and customer analytics.',
    features: ['Payment Gateway', 'Admin Dashboard', 'Inventory System', 'Order Tracking', 'Customer Portal']
  },
  {
    id: 2,
    title: 'Business Management System',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    description: 'Comprehensive business operations management platform',
    technologies: ['React', 'Express', 'PostgreSQL'],
    details: 'Enterprise-level system for managing all aspects of business operations efficiently.',
    features: ['CRM Integration', 'Analytics Dashboard', 'Report Generation', 'Team Management', 'Project Tracking']
  },
  {
    id: 3,
    title: 'Mobile App Development',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    description: 'Cross-platform mobile application with native performance',
    technologies: ['React Native', 'Firebase', 'Redux'],
    details: 'Modern mobile app with seamless user experience across iOS and Android platforms.',
    features: ['Push Notifications', 'Offline Support', 'Cloud Sync', 'Real-time Updates', 'User Authentication']
  },
  {
    id: 4,
    title: 'Corporate Website',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    description: 'Professional corporate presence with modern design',
    technologies: ['Next.js', 'Tailwind CSS', 'CMS'],
    details: 'Enterprise-grade website with content management and SEO optimization.',
    features: ['SEO Optimized', 'Content Management', 'Blog System', 'Contact Forms', 'Analytics Integration']
  },
  {
    id: 5,
    title: 'AI-Powered Analytics',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    description: 'Advanced analytics platform with machine learning',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
    details: 'Intelligent analytics solution providing actionable business insights.',
    features: ['Predictive Analytics', 'Data Visualization', 'ML Models', 'Real-time Processing', 'Custom Reports']
  },
  {
    id: 6,
    title: 'Cloud Infrastructure',
    category: 'cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    description: 'Scalable cloud architecture and deployment',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    details: 'Enterprise cloud infrastructure with high availability and security.',
    features: ['Auto-scaling', 'Load Balancing', 'Security Compliance', 'Backup Systems', '24/7 Monitoring']
  }
];

// Services data
const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    details: 'We create responsive, fast, and secure web solutions tailored to your business needs.',
    techStack: ['React', 'Node.js', 'Next.js', 'Vue.js']
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    details: 'Build powerful mobile apps for iOS and Android with seamless user experience.',
    techStack: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment',
    details: 'Deploy and manage your applications on reliable cloud platforms.',
    techStack: ['AWS', 'Azure', 'Google Cloud', 'Docker']
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence',
    details: 'Implement AI-driven features to automate and enhance your business processes.',
    techStack: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision']
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interface design',
    details: 'Create engaging user experiences that delight your customers.',
    techStack: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions and audits',
    details: 'Protect your digital assets with industry-leading security practices.',
    techStack: ['Penetration Testing', 'Security Audits', 'Compliance', 'Encryption']
  }
];

// Why Choose Us data
const whyChooseUs = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'We deliver projects on time without compromising quality'
  },
  {
    icon: '🏆',
    title: 'Expert Team',
    description: 'Experienced professionals with proven track records'
  },
  {
    icon: '💡',
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology and creative approaches'
  },
  {
    icon: '🤝',
    title: 'Client-Focused',
    description: 'Your success is our priority, always'
  },
  {
    icon: '📊',
    title: 'Data-Driven',
    description: 'Decisions backed by analytics and research'
  },
  {
    icon: '🔧',
    title: 'Ongoing Support',
    description: '24/7 maintenance and technical assistance'
  }
];

export default function AVTechWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'business', name: 'Business' },
    { id: 'mobile', name: 'Mobile App' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'cloud', name: 'Cloud' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const scrollToSection = (sectionId) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Navbar Component
  const Navbar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">AV</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AVTech
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-white hover:text-blue-400 transition font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-blue-400 transition font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => setCurrentPage('portfolio')}
              className="text-white hover:text-blue-400 transition font-medium"
            >
              Our Work
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-white hover:text-blue-400 transition font-medium"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition font-medium"
            >
              Contact
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition font-medium">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
              className="block w-full text-left text-white hover:text-blue-400 transition py-2"
            >
              Home
            </button>
            <button 
              onClick={() => { scrollToSection('services'); setIsMenuOpen(false); }}
              className="block w-full text-left text-white hover:text-blue-400 transition py-2"
            >
              Services
            </button>
            <button 
              onClick={() => { setCurrentPage('portfolio'); setIsMenuOpen(false); }}
              className="block w-full text-left text-white hover:text-blue-400 transition py-2"
            >
              Our Work
            </button>
            <button 
              onClick={() => { scrollToSection('why-us'); setIsMenuOpen(false); }}
              className="block w-full text-left text-white hover:text-blue-400 transition py-2"
            >
              Why Us
            </button>
            <button 
              onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
              className="block w-full text-left text-white hover:text-blue-400 transition py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
              Cutting-Edge Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            We deliver innovative tech solutions that drive growth, efficiency, and digital transformation for businesses worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('portfolio')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl hover:scale-105 transition"
            >
              View Our Work
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition border border-white/20"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <p className="text-gray-500 mb-4 text-sm">{service.details}</p>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, i) => (
                    <span key={i} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose AVTech?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're not just service providers – we're your technology partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-400">
              Ready to transform your business? Get in touch with us today
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <div className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your project"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-500 outline-none resize-none"
                ></textarea>
              </div>
              <button 
                onClick={() => alert('Thank you! We will contact you soon.')}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 AVTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );

  // Portfolio Page
  const PortfolioPage = () => (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm mb-2">Click to view details</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="fixed bottom-8 left-8 z-40">
        <button 
          onClick={() => setCurrentPage('home')}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition flex items-center gap-2"
        >
          ← Back to Home
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 AVTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      {currentPage === 'home' ? <HomePage /> : <PortfolioPage />}
      
      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-gray-800 rounded-2xl max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-white bg-gray-900/80 hover:bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center z-10 transition"
              >
                ✕
              </button>
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-80 object-cover rounded-t-2xl"
              />
            </div>
            
            <div className="p-8">
              <h2 className="text-4xl font-bold text-white mb-4">{selectedItem.title}</h2>
              <p className="text-gray-400 text-lg mb-6">{selectedItem.details}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Key Features:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedItem.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => alert('Thank you for your interest! We will contact you soon.')}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition"
                >
                  Request Similar Project
                </button>
                <button className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition">
                  View Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}