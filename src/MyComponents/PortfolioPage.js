import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // Client logos data
  const clientLogos = [
    { id: 1, name: 'Moonlit', image: 'Moonlit.jpg' },
    { id: 2, name: 'Nukta', image: 'Nukta.png' },
    { id: 3, name: 'CombactCare', image: 'New1.PNG' },
    { id: 4, name: 'Big Boss Style', image: 'Big Boss Style.jfif' },
    { id: 5, name: 'Sir Plus Size Menswear', image: 'Sir+plus- Size Menswear.jfif' },
    { id: 6, name: 'Tecrix', image: 'Tecrix.jfif' },
    { id: 7, name: 'UAN', image: 'UAN.png' },
    { id: 8, name: 'AV Global Path', image: 'AV Global Path.png' }
  ];

  // Auto slide effect - infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientLogos.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [clientLogos.length]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Send message to WhatsApp
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `*New Message from AV Tech Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}%0A%0A_This message was sent from AV Tech website contact form_`;
    
    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/8801958483962?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Show success message
    alert('Message sent to WhatsApp! We will contact you soon.');
  };

  // Products data
  const products = [
    {
      id: 1,
      title: 'Custom Web Applications',
      icon: '🌐',
      description: 'Powerful, scalable web applications tailored to your business needs',
      features: ['Responsive Design', 'Cloud Deployment', 'Security Built-in', 'Ongoing Support']
    },
    {
      id: 2,
      title: 'Mobile App Solutions',
      icon: '📱',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: ['Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Deployment']
    },
    {
      id: 3,
      title: 'E-Commerce Platforms',
      icon: '🛒',
      description: 'Complete online store solutions with payment integration',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard', 'SEO Optimized']
    },
    {
      id: 4,
      title: 'AI & ML Solutions',
      icon: '🤖',
      description: 'Intelligent automation and data-driven insights',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Custom Models']
    },
    {
      id: 5,
      title: 'Cloud Infrastructure',
      icon: '☁️',
      description: 'Secure, scalable cloud architecture and deployment',
      features: ['AWS/Azure Setup', 'Auto-scaling', 'Load Balancing', '24/7 Monitoring']
    },
    {
      id: 6,
      title: 'Consulting & Strategy',
      icon: '💡',
      description: 'Expert guidance for your digital transformation',
      features: ['Technology Assessment', 'Roadmap Planning', 'Team Training', 'Best Practices']
    }
  ];

  // Services data with images
  const services = [
    {
      icon: '',
      title: 'Web Applications',
      description: 'Custom web applications built with modern technologies',
      image: 'Webapplication.jpg'
    },
    {
      icon: '',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      image: 'mobileapps.jpg'
    },
    {
      icon: '',
      title: 'E-Commerce',
      description: 'Complete online store solutions',
      image: 'ecomerce.jpg'
    },
    {
      icon: '',
      title: 'Business Solutions',
      description: 'Tailored solutions for your business growth',
      image: 'business.jpg'
    },
    {
      icon: '',
      title: 'Landing Pages',
      description: 'High-converting landing pages',
      image: 'landingpage.jpg'
    },
    {
      icon: '',
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
        <nav className={`navbar navbar-expand-lg navbar-dark text-white fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
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
                  <Link to="/" className="nav-link text-white">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
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
                    <ul className="list-unstyled mb-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-dark mb-2 small">
                          <i className="fas fa-check text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="https://forms.gle/HgEvF1g6zW8tMq1e9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success w-100 btn-sm"
                    >
                      Get Project Estimate
                    </a>
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

      {/* Trusted Clients Section */}
      <section id="clients" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              Trusted By Industry Leaders
            </h2>
            <p className="lead text-muted">
              We're proud to partner with innovative brands across various industries
            </p>
          </div>

          {/* Infinite Logo Marquee */}
          <div className="client-marquee">
            <div className="marquee-container">
              <div className="marquee-track">
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div 
                    key={`${client.id}-${index}`}
                    className="marquee-item"
                  >
                    <div className="logo-card">
                      <img 
                        src={`/${client.image}`} 
                        alt={client.name}
                        className="client-logo img-fluid"
                      />
                      <div className="client-name">{client.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-5 bg-light text-black">
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
              <form onSubmit={sendToWhatsApp}>
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input 
                          type="text" 
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input 
                          type="email" 
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <textarea 
                          name="message"
                          className="form-control"
                          rows="4"
                          placeholder="Tell us about your project"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button 
                          type="submit"
                          className="btn btn-primary w-100 py-2"
                        >
                          <i className="fab fa-whatsapp me-2"></i>
                          Send via WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="row mt-5 text-center">
            <div className="col-md-4 mb-4">
              <div className="h1 text-primary mb-3">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="h5 fw-bold text-dark mb-2">Our Address</h3>
              <p className="text-muted mb-1 small">
                Jalan Bangsar Utama 1, Bangsar,<br />
                59000 Kuala Lumpur,<br />
                Wilayah Persekutuan Kuala Lumpur,<br />
                Malaysia
              </p>
              <p className="text-muted small">
                Suite-342, Level-3, R H Home Centre,<br />
                Green Rd, Dhaka, Bangladesh
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="h1 text-primary mb-3">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="h5 fw-bold text-dark mb-2">Call Us</h3>
              <p className="text-muted mb-1">+880 1958-483962</p>
              <p className="text-muted">+880 01896-318091</p>
              <a 
                href="https://wa.me/8801958483962" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-success btn-sm mt-2"
              >
                <i className="fab fa-whatsapp me-1"></i>
                WhatsApp
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <div className="h1 text-primary mb-3">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="h5 fw-bold text-dark mb-2">Email Us</h3>
              <p className="text-muted">infouias25@gmail.com</p>
              <a 
                href="mailto:infouias25@gmail.com" 
                className="btn btn-outline-primary btn-sm mt-2"
              >
                <i className="fas fa-envelope me-1"></i>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">AV Tech</h5>
              <p className="text-light small">
                Innovate. Create. Elevate. Your vision, our expertise - building digital solutions 
                that propel your business forward.
              </p>
              <div className="social-links">
  <a href="https://www.facebook.com/infouias/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://www.youtube.com/@youtubuias" target="_blank" rel="noopener noreferrer" className="text-light me-3">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="https://www.linkedin.com/company/universal-institute-for-advanced-studies%C2%A0-uias/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://www.snapchat.com/@infouias" target="_blank" rel="noopener noreferrer" className="text-light me-3">
    <i className="fab fa-snapchat-ghost"></i>
  </a>
  <a href="https://wa.me/8801958483962" target="_blank" rel="noopener noreferrer" className="text-light">
    <i className="fab fa-whatsapp"></i>
  </a>
</div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Contact Info</h5>
              <div className="text-light small">
                <p className="mb-2">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  <strong>Malaysia Office:</strong><br />
                  Jalan Bangsar Utama 1, Bangsar,<br />
                  59000 Kuala Lumpur
                </p>
                <p className="mb-2">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  <strong>Bangladesh Office:</strong><br />
                  Suite-342, Level-3, R H Home Centre,<br />
                  Green Rd, Dhaka
                </p>
                <p className="mb-2">
                  <i className="fas fa-phone me-2"></i>
                  +880 1958-483962
                </p>
                <p className="mb-2">
                  <i className="fas fa-envelope me-2"></i>
                  infouias25@gmail.com
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <div className="d-flex flex-column">
                <a href="#products" className="text-light mb-2 text-decoration-none small">Our Products</a>
                <a href="#services" className="text-light mb-2 text-decoration-none small">Our Services</a>
                <a href="#clients" className="text-light mb-2 text-decoration-none small">Our Clients</a>
                <a href="#contact" className="text-light mb-2 text-decoration-none small">Contact Us</a>
                <a 
                  href="https://forms.gle/HgEvF1g6zW8tMq1e9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light mb-2 text-decoration-none small"
                >
                  Get Project Estimate
                </a>
              </div>
            </div>
          </div>
          
          <hr className="my-4" />
          
          <div className="text-center">
            <p className="mb-0 small">
              &copy; 2025 AV Tech. All Rights Reserved. | 
              <span className="text-warning"> Developed with ❤️ by AV Tech Team</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}