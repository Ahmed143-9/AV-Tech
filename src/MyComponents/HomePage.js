import React, { useState, useEffect } from 'react';
import './HomePage.css';

export default function AVTech() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Products data with your images
  const products = [
    {
      name: 'E-Commerce Platform',
      price: '$2999',
      description: 'Complete online store with payment integration & admin dashboard',
      image: '/ecomerce.jpg',
      category: 'E-Commerce'
    },
    {
      name: 'Portfolio Website',
      price: '$899',
      description: 'Professional portfolio to showcase your creative work',
      image: '/portfoilo.jpg',
      category: 'Portfolio'
    },
    {
      name: 'Business Website',
      price: '$1499',
      description: 'Corporate website with CMS and booking capabilities',
      image: '/business.jpg',
      category: 'Business'
    },
    {
      name: 'Mobile App UI/UX',
      price: '$1999',
      description: 'Modern mobile application design and development',
      image: '/mobileapps.jpg',
      category: 'Mobile App'
    },
    {
      name: 'Web Application',
      price: '$3499',
      description: 'Custom web application with advanced features',
      image: '/Webapplication.jpg',
      category: 'Web App'
    },
    {
      name: 'Landing Page',
      price: '$499',
      description: 'High-converting landing page for marketing campaigns',
      image: '/landingpage.jpg',
      category: 'Marketing'
    }
  ];

  // Services data
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Custom websites built with modern technologies',
      image: '/eyes1.avif'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'E-Commerce',
      description: 'Complete online store solutions',
      image: '/eyes2.avif'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'Portfolio',
      description: 'Get your identity with a stunning portfolio',
      image: '/eyes3.PNG'
    }
  ];

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark text-white">
      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <video 
          autoPlay 
          muted 
          loop 
          className="hero-video slow-video"
          poster="/hero2222.jpg"
          playsInline
        >
          <source src="/FinalEarth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        
        {/* Fixed Navbar */}
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'navbar-blur' : 'bg-transparent'} transition-all`}>
          <div className="container">
            {/* Logo with circular container */}
            <a className="navbar-brand d-flex align-items-center" href="#">
              <div className="logo-container me-2">
                <img 
                  src="/AVlogo.jpg" 
                  alt="AVTech" 
                  className="logo-img"
                />
              </div>
              <span className="gradient-text fw-bold fs-3 glow-text">AVTech</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="navbar-toggler border-0"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Menu */}
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active fw-bold text-white fs-5 bright-text" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold text-white fs-5 bright-text" href="#products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold text-white fs-5 bright-text" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold text-white fs-5 bright-text" href="#contact">Contact</a>
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

        {/* Hero Content */}
        <div className="hero-content d-flex align-items-center min-vh-100">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 text-over-video">
                <h1 className="display-2 fw-bold mb-4 fade-in-up bright-text">
                  Transform Your Digital Vision
                </h1>
                <p className="lead mb-5 fade-in-up fs-4 bright-text" style={{animationDelay: '0.2s'}}>
                  We create stunning digital experiences that captivate your audience and drive business growth
                </p>
                <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
                  <button className="btn gradient-bg text-white btn-lg px-5 py-3 rounded-pill me-3 glow float">
                    View Our Work
                  </button>
                  <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill float">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Video Background */}
      <section id="products" className="py-5 video-bg-section" style={{minHeight: '100vh'}}>
        <video 
          autoPlay 
          muted 
          loop 
          className="video-bg slow-video"
          playsInline
        >
          <source src="/Hero1111.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="section-overlay"></div>
        
        <div className="section-content">
          <div className="container">
            <div className="text-center mb-5 text-over-video">
              <h2 className="display-3 fw-bold mb-3 gradient-text glow-text">Our Digital Products</h2>
              <p className="lead fs-4 bright-text">Premium solutions for your digital success</p>
            </div>

            <div className="row g-4">
              {products.map((product, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="card card-hover border-light h-100 bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="tech-badge">{product.category}</span>
                        <span className="price-tag">{product.price}</span>
                      </div>
                      
                      <div className="text-center mb-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="img-fluid rounded glow"
                          style={{
                            height: '150px', 
                            width: '100%', 
                            objectFit: 'cover',
                            border: '2px solid #667eea'
                          }}
                        />
                      </div>
                      
                      <h4 className="card-title text-white mb-3 text-center glow-text">{product.name}</h4>
                      <p className="card-text text-light mb-4 text-center">{product.description}</p>
                      
                      <button className="btn gradient-bg text-white w-100 rounded-pill py-3 fs-5 glow">
                        Get This Solution
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Video Background */}
      <section id="services" className="py-5 video-bg-section" style={{minHeight: '80vh'}}>
        <video 
          autoPlay 
          muted 
          loop 
          className="video-bg slow-video"
          playsInline
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="section-overlay"></div>
        
        <div className="section-content">
          <div className="container">
            <div className="text-center mb-5 text-over-video">
              <h2 className="display-3 fw-bold mb-3 gradient-text glow-text">Our Services</h2>
              <p className="lead fs-4 bright-text">Comprehensive digital solutions for your business</p>
            </div>

            <div className="row g-5">
              {services.map((service, index) => (
                <div key={index} className="col-md-4">
                  <div className="text-center p-4 card-hover rounded-4 h-100 float">
                    <div 
                      className="rounded-4 mb-4 mx-auto d-flex align-items-center justify-content-center"
                      style={{
                        width: '200px',
                        height: '200px',
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '3px solid #667eea'
                      }}
                    >
                      <div className="feature-icon">
                        <i className={`${service.icon} text-white fs-1`}></i>
                      </div>
                    </div>
                    <h3 className="text-white mb-3 glow-text">{service.title}</h3>
                    <p className="text-light fs-5">{service.description}</p>
                    <button className="btn btn-outline-light rounded-pill px-4 mt-3">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Clean and Bright */}
      <section id="contact" className="py-5 contact-section" style={{
        minHeight: '60vh',
        backgroundImage: 'url(/ready.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="contact-overlay"></div>
        
        <div className="contact-content">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 text-over-video">
                <h2 className="display-3 fw-bold mb-4 bright-text">Ready to Start?</h2>
                <p className="lead mb-5 fs-4 bright-text">
                  Let's discuss your project and create something amazing together. 
                  Your digital transformation starts here.
                </p>
                
                <div className="row g-4 mb-5">
                  <div className="col-md-4">
                    <div className="text-center contact-card p-4 rounded-4">
                      <i className="fas fa-phone text-white fs-1 mb-3"></i>
                      <h5 className="text-white">Call Us</h5>
                      <p className="text-white fs-5 fw-bold">+1 234 567 890</p>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="text-center contact-card p-4 rounded-4">
                      <i className="fas fa-envelope text-white fs-1 mb-3"></i>
                      <h5 className="text-white">Email Us</h5>
                      <p className="text-white fs-5 fw-bold">hello@avtech.com</p>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="text-center contact-card p-4 rounded-4">
                      <i className="fas fa-map-marker-alt text-white fs-1 mb-3"></i>
                      <h5 className="text-white">Visit Us</h5>
                      <p className="text-white fs-5 fw-bold">123 Tech Street</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <button className="btn gradient-bg text-white btn-lg px-5 py-3 rounded-pill me-3 glow pulse">
                    Start Your Project
                  </button>
                  <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill float">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}