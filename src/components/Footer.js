import React from 'react';
import '../styles/components/Footer.css';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  ArrowUp,
  Heart
} from 'lucide-react';
import logo from '../assets/images/company-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', action: () => scrollToSection('home') },
    { label: 'Services', action: () => scrollToSection('services') },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Contact', action: () => scrollToSection('contact') }
  ];

  const services = [
    'Learning Management Systems',
    'Virtual Classrooms',
    'Educational Analytics',
    'Student Information Systems',
    'E-Learning Platforms',
    'Educational Mobile Apps'
  ];

  const resources = [
    'Education Blog',
    'Success Stories',
    'Research Papers',
    'User Guides',
    'Training Materials',
    'Help Center'
  ];

  const socialLinks = [
    // { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/imagine-edtech/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="brand">
              <div className="logo">
                {/* <img src={logo} width={100} height={100} alt="Imagine EdTech Logo" className="logo" /> */}
                <span className="logo-text">Imagine EdTech</span>
              </div>
              <p className="brand-description">
                Transforming education through innovative technology solutions. 
                We help educational institutions achieve digital excellence and enhanced learning experiences.
              </p>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>imagineedtech@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+91-9643230144</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>A-4/0106, Casa Greens 1, Plot no - GH-04A, Sector-16, Greater Noida West, Gautam Buddha Nagar, Uttar Pradesh, India, 201318</span>
              </div>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button onClick={link.action} className="footer-link">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section footer-newsletter">
            <h3 className="footer-title">Stay Updated</h3>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest educational technology insights and industry updates.
            </p>
            
            <form className="newsletter-form">
              <div className="newsletter-input">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </div>
            </form>

            {/* <div className="footer-badges">
              <div className="badge">
                <span className="badge-text">ISO 27001 Certified</span>
              </div>
            </div> */}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © 2025 Imagine EdTech. Made with <Heart className="heart-icon" /> for educational excellence.
              </p>
            </div>
            
            <div className="footer-bottom-links">
              <button className="bottom-link">Privacy Policy</button>
              <button className="bottom-link">Terms of Service</button>
              <button className="bottom-link">Cookie Policy</button>
              <button className="bottom-link">Sitemap</button>
            </div>
          </div>
        </div>

        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;