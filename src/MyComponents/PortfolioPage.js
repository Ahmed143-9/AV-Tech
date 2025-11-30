// src/MyComponents/PortfolioPage.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HomePage.css';

// Import Admin Components
import EditableText from '../components/Admin/EditableText';
import { useContent } from '../context/ContentContext';

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const location = useLocation();
  
  // Get content from context
  const { content } = useContent();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // Auto slide effect
  useEffect(() => {
    if (content.clients && content.clients.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % content.clients.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [content.clients]);

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

    const whatsappNumber = content.contact?.whatsapp || '8801958483962';
    const whatsappMessage = `*New Message from AV Tech Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}%0A%0A_This message was sent from AV Tech website contact form_`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent to WhatsApp! We will contact you soon.');
  };

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
              <span className="fw-bold fs-3">
                <EditableText section="branding" field="companyName">
                  {content.branding?.companyName || "AV Tech"}
                </EditableText>
              </span>
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

        {/* Hero Content - EDITABLE */}
        <div className="hero-content">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-4">
                  <EditableText section="portfolioHero" field="title">
                    {content.portfolioHero?.title || "Innovate. Create. Elevate."}
                  </EditableText>
                </h1>
                <p className="lead mb-5 fs-5">
                  <EditableText section="portfolioHero" field="subtitle" multiline={true}>
                    {content.portfolioHero?.subtitle || "Your vision, our expertise - building digital solutions that propel your business forward"}
                  </EditableText>
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

      {/* Products Section - EDITABLE */}
      <section id="products" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              <EditableText section="productsSection" field="title">
                {content.productsSection?.title || "Our Products & Solutions"}
              </EditableText>
            </h2>
            <p className="lead text-muted">
              <EditableText section="productsSection" field="subtitle" multiline={true}>
                {content.productsSection?.subtitle || "Choose from our range of proven solutions designed to accelerate your digital transformation"}
              </EditableText>
            </p>
          </div>

          <div className="row g-4">
            {(content.products || []).map((product, index) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow border-0 product-card">
                  <div className="card-body p-4 text-center">
                    <div className="h1 mb-3">{product.icon}</div>
                    <h3 className="h5 fw-bold text-dark mb-3">
                      <EditableText section="products" field="title" index={index}>
                        {product.title}
                      </EditableText>
                    </h3>
                    <p className="text-muted mb-3">
                      <EditableText section="products" field="description" index={index} multiline={true}>
                        {product.description}
                      </EditableText>
                    </p>
                    <ul className="list-unstyled mb-4">
                      {(product.features || []).map((feature, i) => (
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

      {/* Services Section - EDITABLE */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              <EditableText section="servicesSection" field="title">
                {content.servicesSection?.title || "Our Services"}
              </EditableText>
            </h2>
            <p className="lead text-muted">
              <EditableText section="servicesSection" field="subtitle" multiline={true}>
                {content.servicesSection?.subtitle || "Comprehensive digital solutions for your business needs"}
              </EditableText>
            </p>
          </div>

          <div className="row g-4">
            {(content.services || []).map((service, index) => (
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
                    <h3 className="h5 fw-bold text-dark mb-3">
                      <EditableText section="services" field="title" index={index}>
                        {service.title}
                      </EditableText>
                    </h3>
                    <p className="text-muted mb-0">
                      <EditableText section="services" field="description" index={index} multiline={true}>
                        {service.description}
                      </EditableText>
                    </p>
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
              <EditableText section="clientsSection" field="title">
                {content.clientsSection?.title || "Trusted By Industry Leaders"}
              </EditableText>
            </h2>
            <p className="lead text-muted">
              <EditableText section="clientsSection" field="subtitle" multiline={true}>
                {content.clientsSection?.subtitle || "We're proud to partner with innovative brands across various industries"}
              </EditableText>
            </p>
          </div>

          {/* Client Logo Marquee */}
          <div className="client-marquee">
            <div className="marquee-container">
              <div className="marquee-track">
                {[...(content.clients || []), ...(content.clients || [])].map((client, index) => (
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

      {/* Why Choose Us Section - EDITABLE */}
      <section id="why-us" className="py-5 bg-light text-black">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <EditableText section="whyChooseSection" field="title">
                {content.whyChooseSection?.title || "Why Choose AV Tech?"}
              </EditableText>
            </h2>
          </div>

          <div className="row g-4">
            {(content.whyChooseUs || []).map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="text-center p-4">
                  <div className="h1 mb-3">{item.icon}</div>
                  <h3 className="h5 fw-bold mb-2">
                    <EditableText section="whyChooseUs" field="title" index={index}>
                      {item.title}
                    </EditableText>
                  </h3>
                  <p className="mb-0 small">
                    <EditableText section="whyChooseUs" field="description" index={index}>
                      {item.description}
                    </EditableText>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - EDITABLE */}
      <section id="contact" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              <EditableText section="contactSection" field="title">
                {content.contactSection?.title || "Get In Touch"}
              </EditableText>
            </h2>
            <p className="lead text-muted">
              <EditableText section="contactSection" field="subtitle">
                {content.contactSection?.subtitle || "Ready to start your project? Contact us today"}
              </EditableText>
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div onSubmit={sendToWhatsApp}>
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
                          onClick={sendToWhatsApp}
                          className="btn btn-primary w-100 py-2"
                        >
                          <i className="fab fa-whatsapp me-2"></i>
                          Send via WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info - EDITABLE */}
          <div className="row mt-5 text-center">
            <div className="col-md-4 mb-4">
              <div className="h1 text-primary mb-3">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="h5 fw-bold text-dark mb-2">Our Address</h3>
              <p className="text-muted mb-1 small">
                <EditableText section="contact" field="addressMalaysia" multiline={true}>
                  {content.contact?.addressMalaysia || "Jalan Bangsar Utama 1, Bangsar, 59000 Kuala Lumpur"}
                </EditableText>
              </p>
              <p className="text-muted small">
                <EditableText section="contact" field="addressBangladesh" multiline={true}>
                  {content.contact?.addressBangladesh || "Suite-342, Level-3, R H Home Centre, Green Rd, Dhaka"}
                </EditableText>
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="h1 text-primary mb-3">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="h5 fw-bold text-dark mb-2">Call Us</h3>
              <p className="text-muted mb-1">
                <EditableText section="contact" field="phone1">
                  {content.contact?.phone1 || "+880 1958-483962"}
                </EditableText>
              </p>
              <p className="text-muted">
                <EditableText section="contact" field="phone2">
                  {content.contact?.phone2 || "+880 01896-318091"}
                </EditableText>
              </p>
              <a 
                href={`https://wa.me/${content.contact?.whatsapp || '8801958483962'}`}
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
              <p className="text-muted">
                <EditableText section="contact" field="email">
                  {content.contact?.email || "avtechkm@gmail.com"}
                </EditableText>
              </p>
              <a 
                href={`mailto:${content.contact?.email || 'avtechkm@gmail.com'}`}
                className="btn btn-outline-primary btn-sm mt-2"
              >
                <i className="fas fa-envelope me-1"></i>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - EDITABLE */}
      <footer className="bg-dark text-white py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">
                <EditableText section="branding" field="companyName">
                  {content.branding?.companyName || "AV Tech"}
                </EditableText>
              </h5>
              <p className="text-light small">
                <EditableText section="footer" field="description" multiline={true}>
                  {content.footer?.description || "Innovate. Create. Elevate. Your vision, our expertise - building digital solutions that propel your business forward."}
                </EditableText>
              </p>
              <div className="social-links">
                <a href={content.socialLinks?.facebook || "https://www.facebook.com/infouias/"} target="_blank" rel="noopener noreferrer" className="text-light me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={content.socialLinks?.youtube || "https://www.youtube.com/@youtubuias"} target="_blank" rel="noopener noreferrer" className="text-light me-3">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href={content.socialLinks?.linkedin || "https://www.linkedin.com/company/..."} target="_blank" rel="noopener noreferrer" className="text-light me-3">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={content.socialLinks?.snapchat || "https://www.snapchat.com/@infouias"} target="_blank" rel="noopener noreferrer" className="text-light me-3">
                  <i className="fab fa-snapchat-ghost"></i>
                </a>
                <a href={`https://wa.me/${content.contact?.whatsapp || '8801958483962'}`} target="_blank" rel="noopener noreferrer" className="text-light">
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
                  {content.contact?.addressMalaysia?.split(',').slice(0, 2).join(',')}
                </p>
                <p className="mb-2">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  <strong>Bangladesh Office:</strong><br />
                  {content.contact?.addressBangladesh?.split(',').slice(0, 2).join(',')}
                </p>
                <p className="mb-2">
                  <i className="fas fa-phone me-2"></i>
                  {content.contact?.phone1}
                </p>
                <p className="mb-2">
                  <i className="fas fa-envelope me-2"></i>
                  {content.contact?.email}
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
              &copy; 2025 <EditableText section="branding" field="companyName">{content.branding?.companyName || "AV Tech"}</EditableText>. All Rights Reserved. | 
              <span className="text-warning"> Developed with ❤️ by AV Tech Team</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}