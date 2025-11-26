// PortfolioPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    title: 'Modern E-Commerce Store',
    category: 'ecommerce',
    image: '/ecomerce.jpg',
    description: 'A fully functional online store with payment processing',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    details: 'This e-commerce platform features a modern design with seamless shopping experience, secure payment processing, and comprehensive admin dashboard.',
    features: ['Secure Payment Gateway', 'Admin Dashboard', 'Inventory Management', 'Order Tracking', 'User Accounts']
  },
  {
    id: 2,
    title: 'Creative Portfolio Website',
    category: 'portfolio',
    image: '/portfoilo.jpg',
    description: 'Professional portfolio for creative professionals',
    technologies: ['React', 'CSS3', 'Framer Motion'],
    liveLink: '#',
    details: 'A stunning portfolio website that showcases creative work effectively with smooth animations and responsive design.',
    features: ['Responsive Design', 'Image Gallery', 'Contact Form', 'SEO Optimized']
  },
  {
    id: 3,
    title: 'Business Corporate Website',
    category: 'business',
    image: '/business.jpg',
    description: 'Corporate website with booking system',
    technologies: ['Next.js', 'Tailwind', 'Calendar API'],
    liveLink: '#',
    details: 'Professional business website with integrated booking and management system.',
    features: ['CMS Integration', 'Booking System', 'Blog', 'Analytics Dashboard']
  },
  {
    id: 4,
    title: 'Mobile App UI/UX Design',
    category: 'mobile',
    image: '/mobileapps.jpg',
    description: 'Modern mobile application design',
    technologies: ['React Native', 'Figma', 'Firebase'],
    liveLink: '#',
    details: 'Beautiful mobile app UI with smooth animations and modern design principles.',
    features: ['User Authentication', 'Push Notifications', 'Offline Support', 'Cloud Storage']
  },
  {
    id: 5,
    title: 'Web Application Dashboard',
    category: 'webapp',
    image: '/Webapplication.jpg',
    description: 'Advanced web application with dashboard',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    liveLink: '#',
    details: 'Feature-rich web application with comprehensive dashboard and analytics.',
    features: ['Real-time Analytics', 'User Management', 'Data Visualization', 'API Integration']
  },
  {
    id: 6,
    title: 'Marketing Landing Page',
    category: 'marketing',
    image: '/landingpage.jpg',
    description: 'High-converting marketing landing page',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveLink: '#',
    details: 'Optimized landing page designed for maximum conversions and user engagement.',
    features: ['A/B Testing', 'Lead Capture', 'Social Integration', 'Performance Optimized']
  },
  {
    id: 7,
    title: 'Payment Gateway Integration',
    category: 'payment',
    image: '/ecomerce.jpg', // You can add specific payment gateway image
    description: 'Secure payment processing system',
    technologies: ['Stripe API', 'Node.js', 'SSL Encryption'],
    liveLink: '#',
    details: 'Secure and reliable payment gateway integration for various business needs.',
    features: ['Multiple Payment Methods', 'Security Compliance', 'Real-time Processing', 'Fraud Detection']
  },
  {
    id: 8,
    title: 'Admin Dashboard System',
    category: 'dashboard',
    image: '/Webapplication.jpg',
    description: 'Comprehensive admin management system',
    technologies: ['React', 'Chart.js', 'REST API'],
    liveLink: '#',
    details: 'Powerful admin dashboard for managing business operations and analytics.',
    features: ['Data Analytics', 'User Management', 'Report Generation', 'System Monitoring']
  }
];

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'business', name: 'Business' },
    { id: 'mobile', name: 'Mobile App' },
    { id: 'webapp', name: 'Web Application' },
    { id: 'payment', name: 'Payment Gateway' },
    { id: 'dashboard', name: 'Dashboard' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Navigation Bar - Same as Homepage */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-blur">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <div className="logo-container me-2">
              <img 
                src="/AVlogo.jpg" 
                alt="AVTech" 
                className="logo-img"
              />
            </div>
            <span className="gradient-text fw-bold fs-3 glow-text">AVTech</span>
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold text-white fs-5" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-white fs-5" href="/#products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-white fs-5" href="/#services">Services</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold text-white fs-5" to="/portfolio">Our Work</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-white fs-5" href="/#contact">Contact</a>
              </li>
              <li className="nav-item ms-3">
                <button className="btn gradient-bg text-white px-4 py-2 rounded-pill pulse fw-bold">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Portfolio Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-4 gradient-text">Our Portfolio</h1>
              <p className="lead fs-4 text-light">
                Explore our latest projects and see how we've helped businesses transform digitally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="portfolio-filter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid">
        <div className="container">
          <div className="row g-4">
            {filteredItems.map(item => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div 
                  className="portfolio-item"
                  onClick={() => setSelectedItem(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="portfolio-image"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <div className="portfolio-tags">
                        {item.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="portfolio-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      {selectedItem && (
        <div className="portfolio-modal">
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title}
              className="modal-image"
            />
            
            <div className="modal-body">
              <h2 className="text-white mb-3">{selectedItem.title}</h2>
              <p className="text-light fs-5 mb-4">{selectedItem.details}</p>
              
              <div className="modal-features">
                {selectedItem.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <i className="fas fa-check text-success mb-2"></i>
                    <p className="text-white mb-0">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="technologies mb-4">
                <h5 className="text-white mb-3">Technologies Used:</h5>
                <div className="portfolio-tags">
                  {selectedItem.technologies.map((tech, index) => (
                    <span key={index} className="portfolio-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn gradient-bg text-white px-4 py-2 rounded-pill">
                  View Live Demo
                </button>
                <button className="btn btn-outline-light px-4 py-2 rounded-pill">
                  Get This Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Home Button */}
      <div className="back-to-home">
        <Link to="/" className="btn btn-outline-light rounded-pill px-4">
          <i className="fas fa-arrow-left me-2"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PortfolioPage;