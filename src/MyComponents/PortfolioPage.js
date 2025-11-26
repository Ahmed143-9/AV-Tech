import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // Products data
  const products = [
    {
      id: 1,
      title: 'Custom Web Applications',
      icon: '🌐',
      description: 'Powerful, scalable web applications tailored to your business needs',
      price: 'Starting at $5,000',
      features: ['Responsive Design', 'Cloud Deployment', 'Security Built-in', 'Ongoing Support']
    },
    {
      id: 2,
      title: 'Mobile App Solutions',
      icon: '📱',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      price: 'Starting at $8,000',
      features: ['Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Deployment']
    },
    {
      id: 3,
      title: 'E-Commerce Platforms',
      icon: '🛒',
      description: 'Complete online store solutions with payment integration',
      price: 'Starting at $7,500',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard', 'SEO Optimized']
    },
    {
      id: 4,
      title: 'AI & ML Solutions',
      icon: '🤖',
      description: 'Intelligent automation and data-driven insights',
      price: 'Starting at $10,000',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Custom Models']
    },
    {
      id: 5,
      title: 'Cloud Infrastructure',
      icon: '☁️',
      description: 'Secure, scalable cloud architecture and deployment',
      price: 'Starting at $4,000',
      features: ['AWS/Azure Setup', 'Auto-scaling', 'Load Balancing', '24/7 Monitoring']
    },
    {
      id: 6,
      title: 'Consulting & Strategy',
      icon: '💡',
      description: 'Expert guidance for your digital transformation journey',
      price: 'Starting at $2,500',
      features: ['Technology Assessment', 'Roadmap Planning', 'Team Training', 'Best Practices']
    }
  ];

  // Services data with images
  const services = [
    {
      icon: '💻',
      title: 'Web Applications',
      description: 'Custom web applications built with modern technologies',
      image: 'Webapplication.jpg'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      image: 'mobileapps.jpg'
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Complete online store solutions',
      image: 'ecomerce.jpg'
    },
    {
      icon: '🏢',
      title: 'Business Solutions',
      description: 'Tailored solutions for your business growth',
      image: 'business.jpg'
    },
    {
      icon: '🌐',
      title: 'Landing Pages',
      description: 'High-converting landing pages',
      image: 'landingpage.jpg'
    },
    {
      icon: '🎨',
      title: 'Portfolio Sites',
      description: 'Showcase your work professionally',
      image: 'portfoilo.jpg'
    }
  ];

  // Why Choose Us data
  const whyChooseUs = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quality work delivered on time'
    },
    {
      icon: '🏆',
      title: 'Expert Team',
      description: 'Experienced professionals'
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'Creative and modern approaches'
    },
    {
      icon: '🤝',
      title: 'Client-Focused',
      description: 'Your success is our priority'
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-dark text-white">
      {/* Hero Section with Banner Image */}
      <section className="hero-section">
        <div 
          className="hero-banner"
          style={{
            backgroundImage: `url('/Baner inage.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="hero-overlay"></div>
        </div>
        
        {/* Fixed Navbar */}
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
          <div className="container">
            <Link to="/" className="navbar-brand">
              <span className="fw-bold fs-3">AV Tech</span>
            </Link>

            <button 
              className="navbar-toggler"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                {/* <li className="nav-item">
                  <Link to="/portfolio" className="nav-link">Our Work</Link>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-4">
                  Innovate. Create. Elevate.
                </h1>
                <p className="lead mb-5 fs-5">
                  Your vision, our expertise - building digital solutions that propel your business forward
                </p>
                <div>
                  <button 
                    className="btn btn-outline-light btn-lg px-4 py-2"
                    onClick={scrollToContact}
                  >
                    Start Your Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              Our Products & Solutions
            </h2>
            <p className="lead text-muted">
              Choose from our range of proven solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="row g-4">
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow border-0 product-card">
                  <div className="card-body p-4 text-center">
                    <div className="h1 mb-3">{product.icon}</div>
                    <h3 className="h5 fw-bold text-dark mb-3">{product.title}</h3>
                    <p className="text-muted mb-3">{product.description}</p>
                    <div className="h6 text-primary fw-bold mb-3">{product.price}</div>
                    <ul className="list-unstyled mb-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-dark mb-2 small">
                          <i className="fas fa-check text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-primary w-100 btn-sm">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              Our Services
            </h2>
            <p className="lead text-muted">
              Comprehensive digital solutions for your business needs
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow border-0">
                  <div className="card-img-top">
                    <img 
                      src={`/${service.image}`} 
                      alt={service.title}
                      className="service-image"
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <div className="h1 mb-3">{service.icon}</div>
                    <h3 className="h5 fw-bold text-dark mb-3">{service.title}</h3>
                    <p className="text-muted mb-0">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-5 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Why Choose AV Tech?
            </h2>
          </div>

          <div className="row g-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="text-center p-4">
                  <div className="h1 mb-3">{item.icon}</div>
                  <h3 className="h5 fw-bold mb-2">{item.title}</h3>
                  <p className="mb-0 small">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              Get In Touch
            </h2>
            <p className="lead text-muted">
              Ready to start your project? Contact us today
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="email" 
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col-12">
                      <textarea 
                        className="form-control"
                        rows="4"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button 
                        className="btn btn-primary w-100 py-2"
                        onClick={() => alert('Thank you! We will contact you soon.')}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="row mt-5 text-center">
            <div className="col-md-4 mb-4">
              <div className="h1 text-primary mb-3">📧</div>
              <h3 className="h5 fw-bold text-dark mb-2">Email Us</h3>
              <p className="text-muted">info@avtech.com</p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="h1 text-primary mb-3">📞</div>
              <h3 className="h5 fw-bold text-dark mb-2">Call Us</h3>
              <p className="text-muted">+880 1234-567890</p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="h1 text-primary mb-3">📍</div>
              <h3 className="h5 fw-bold text-dark mb-2">Visit Us</h3>
              <p className="text-muted">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="text-center">
            <p className="mb-0">&copy; 2025 AV Tech. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}