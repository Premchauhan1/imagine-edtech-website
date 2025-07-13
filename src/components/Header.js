import React, { useState, useEffect } from 'react';
import '../styles/components/Header.css';
import { Menu, X, Zap, ArrowRight } from 'lucide-react';
import logo from '../assets/images/company-logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} >
      <div className="container">
        
        <a href="#home" className="logo" onClick={() => scrollToSection('home')}>
          <div className="logo-icon">
            <img src={logo} width={100} height={100} alt="Imagine EdTech Logo" className="logo" />
          </div>
          <span>Imagine EdTech</span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('services')}>Solutions</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          
          {/* <div className="nav-cta">
            <button 
              className="cta-button"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
              <ArrowRight />
            </button>
          </div> */}
        </nav>

        <button 
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;