// src/MyComponents/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

// Import Admin Components
import EditableText from '../components/Admin/EditableText';
import { useContent } from '../context/ContentContext';

export default function AVTech() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Get content from context
  const { content } = useContent();

  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    setIsMenuOpen(false);
    navigate("/portfolio", { state: { scrollTo: sectionId } });
  };

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
            <Link to="/" className="navbar-brand d-flex align-items-center" onClick={closeMenu}>
              <div className="logo-container me-2">
                <img 
                  src="/AV LOGO FINAL.png" 
                  alt="AVTech" 
                  className="logo-img"
                />
              </div>
              <span className="gradient-text fw-bold fs-3 glow-text">
                <EditableText section="branding" field="companyName">
                  {content.branding?.companyName || "AVTech"}
                </EditableText>
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="navbar-toggler border-0"
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Menu */}
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active fw-bold text-white fs-5 bright-text" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => goToSection("products")}
                    className="nav-link active fw-bold text-white fs-5 bright-text"
                    style={{ background: "none", border: "none" }}
                  >
                    Products
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => goToSection("services")}
                    className="nav-link fw-bold text-white fs-5 bright-text"
                    style={{ background: "none", border: "none" }}
                  >
                    Services
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => goToSection("contact")}
                    className="nav-link fw-bold text-white fs-5 bright-text"
                    style={{ background: "none", border: "none" }}
                  >
                    Contact
                  </button>
                </li>
                <li className="nav-item ms-3">
                  <a
                    href="https://forms.gle/HgEvF1g6zW8tMq1e9"
                    className="btn gradient-bg text-white px-4 py-2 rounded-pill pulse fw-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    <EditableText section="hero" field="ctaButton">
                      {content.hero?.ctaButton || "Get Started"}
                    </EditableText>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Content - ALL EDITABLE */}
        <div className="hero-content d-flex align-items-center min-vh-100">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 text-over-video">
                <h1 className="display-2 fw-bold mb-4 fade-in-up bright-text">
                  <EditableText section="hero" field="title" multiline={false}>
                    {content.hero?.title || "Transform Your Digital Vision"}
                  </EditableText>
                </h1>
                <p className="lead mb-5 fade-in-up fs-4 bright-text" style={{animationDelay: '0.2s'}}>
                  <EditableText section="hero" field="subtitle" multiline={true}>
                    {content.hero?.subtitle || "Global talent hub for any task. We promise quality and on-time delivery."}
                  </EditableText>
                </p>
                <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
                  <Link to="/portfolio" className="btn gradient-bg text-white btn-lg px-5 py-3 rounded-pill me-3 glow float" onClick={closeMenu}>
                    <EditableText section="hero" field="exploreButton">
                      {content.hero?.exploreButton || "Explore"}
                    </EditableText>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}