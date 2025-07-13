import React, { useState, useEffect } from 'react';
import { ShieldCheck, Server, Settings2, Monitor, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Play, Pause, Zap, Star, Code, Globe } from 'lucide-react';
import '../styles/components/services.css';

const services = [
  {
    title: 'Quality Assurance',
    subtitle: 'Enterprise Testing Solutions',
    description: 'Comprehensive testing strategies ensuring your product meets the highest standards of quality, security, and reliability across all platforms.',
    icon: <ShieldCheck size={56} />,
    features: ['Automated Testing Suites', 'Manual QA Processes', 'Performance Optimization', 'Security Vulnerability Audits'],
    color: '#00fff7',
    gradient: 'linear-gradient(135deg, #00fff7 0%, #0891b2 100%)',
    stats: { projects: '500+', accuracy: '99.9%' }
  },
  {
    title: 'Backend Development',
    subtitle: 'Scalable Server Solutions',
    description: 'Robust, high-performance backend architectures built with cutting-edge technologies and industry best practices.',
    icon: <Server size={56} />,
    features: ['RESTful API Development', 'Database Architecture', 'Cloud Infrastructure', 'Microservices Design'],
    color: '#ff7a00',
    gradient: 'linear-gradient(135deg, #ff7a00 0%, #f97316 100%)',
    stats: { apis: '1000+', uptime: '99.99%' }
  },
  {
    title: 'Process Automation',
    subtitle: 'Intelligent Workflow Solutions',
    description: 'Transform your business operations with smart automation that eliminates manual tasks and maximizes efficiency.',
    icon: <Settings2 size={56} />,
    features: ['Workflow Automation', 'CI/CD Pipeline Setup', 'Task Scheduling Systems', 'Integration Platforms'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    stats: { efficiency: '85%', saved: '1000hrs' }
  },
  {
    title: 'Web Development',
    subtitle: 'Modern Digital Experiences',
    description: 'Cutting-edge web applications that deliver exceptional user experiences with responsive design and optimal performance.',
    icon: <Monitor size={56} />,
    features: ['React/Next.js Applications', 'Responsive UI/UX Design', 'Progressive Web Apps', 'E-commerce Platforms'],
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    stats: { websites: '300+', speed: '98/100' }
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 5000; // 5 seconds per slide

  useEffect(() => {
    let interval;
    let progressInterval;

    if (isAutoPlaying) {
      // Progress bar animation
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + (100 / (SLIDE_DURATION / 50));
        });
      }, 50);

      // Slide change
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % services.length);
        setProgress(0);
      }, SLIDE_DURATION);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % services.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + services.length) % services.length);
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (isAutoPlaying) {
      setProgress(0);
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="services-badge">
            <Star size={16} />
            <span>Our Services</span>
          </div>
          <p className="services-subtitle">
            Delivering cutting-edge solutions that drive innovation, enhance performance, 
            and accelerate your digital transformation journey.
          </p>
        </div>
        
        {/* Enhanced Carousel */}
        <div className="services-carousel">
          {/* Background Elements */}
          <div className="carousel-bg-elements">
            <div className="bg-element bg-element-1"></div>
            <div className="bg-element bg-element-2"></div>
            <div className="bg-element bg-element-3"></div>
          </div>

          {/* Navigation Controls */}
          <div className="carousel-nav">
            <button className="nav-btn prev-btn" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <button className="nav-btn next-btn" onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>
            <button className="nav-btn play-pause-btn" onClick={toggleAutoPlay}>
              {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>

          {/* Main Carousel */}
          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, idx) => (
                <div className="carousel-slide" key={idx}>
                  <div className="service-card-modern" style={{
                    '--primary-color': service.color,
                    '--gradient': service.gradient
                  }}>
                    {/* Card Background Pattern */}
                    <div className="card-pattern">
                      <div className="pattern-grid"></div>
                      <div className="pattern-glow"></div>
                    </div>

                    {/* Card Header */}
                    <div className="card-header">
                      <div className="service-badge">
                        <span className="badge-number">0{idx + 1}</span>
                        <span className="badge-text">{service.subtitle}</span>
                      </div>
                      <div className="service-icon-container">
                        <div className="icon-bg"></div>
                        <div className="service-icon">{service.icon}</div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="card-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                      
                      {/* Features Grid */}
                      <div className="features-grid">
                        {service.features.map((feature, featureIdx) => (
                          <div className="feature-item" key={featureIdx}>
                            <div className="feature-icon">
                              <CheckCircle size={14} />
                            </div>
                            <span className="feature-text">{feature}</span>
                          </div>
                        ))}
                      </div>

                      

                      {/* Action Button */}
                      <button className="service-cta">
                        <span>Explore Service</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Indicators */}
          <div className="carousel-indicators">
            <div className="indicators-track">
              {services.map((service, idx) => (
                <button
                  key={idx}
                  className={`indicator-btn ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                  style={{'--indicator-color': service.color}}
                >
                  <div className="indicator-content">
                    <div className="indicator-icon">{service.icon}</div>
                    <div className="indicator-info">
                      <span className="indicator-title">{service.title}</span>
                      <span className="indicator-subtitle">{service.subtitle}</span>
                    </div>
                    <div className="indicator-progress">
                      {idx === currentSlide && (
                        <div 
                          className="progress-fill" 
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Services;