import React, { useState, useEffect } from 'react';
import './HomePage.css';

export default function AVTech() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Products data with your images
 

  // Services data
 
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
                  <a className="nav-link active fw-bold text-white fs-5 bright-text" href="#">Home</a>
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
    </div>
  );
}