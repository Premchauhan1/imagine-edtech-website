import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Star, Zap, Code, Shield, Cpu, Globe } from 'lucide-react';
import '../styles/components/hero.css';
const Hero = () => {
  const [currentText, setCurrentText] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentText((prev) => (prev + 1) % texts.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [texts.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            
            <h1 className="hero-title">
              Innovate. Implement. Inspire.
              <span className="hero-highlight">
                Transforming Education with, 
                <span className="typing-text">Technology Solutions</span>
              </span>
            </h1>
            
            <p className="hero-description">
Ready to transform your EdTech vision into reality? Get in touch with our team and let's discuss how we can help you achieve your goals.            </p>
            
            {/* <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('services')}
              >
                Explore Solutions
                <ArrowRight className="btn-icon" />
              </button>
              
            </div> */}
          </div>
          
          {/* <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="card-title">Enterprise Solutions</div>
              </div>
              <div className="card-content">
                <div className="service-item">
                  <Shield className="service-icon" />
                  <span>Security & Compliance</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div className="service-item">
                  <Code className="service-icon" />
                  <span>Custom Development</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="service-item">
                  <Cpu className="service-icon" />
                  <span>AI Implementation</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="service-item">
                  <Globe className="service-icon" />
                  <span>Cloud Migration</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '96%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="scroll-down" onClick={() => scrollToSection('services')}>
        <svg width="32" height="54" viewBox="0 0 32 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.5" y="1.5" width="29" height="51" rx="14.5" stroke="#00fff7" strokeWidth="3"/>
          <circle className="mouse-wheel" cx="16" cy="14" r="3" fill="#00fff7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;