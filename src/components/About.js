import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Zap, 
  Globe, 
  Code, 
  Shield, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';
import '../styles/components/about.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { icon: <Users size={32} />, value: '50+', label: 'Team Members', color: '#00fff7' },
    { icon: <Award size={32} />, value: '200+', label: 'Projects Completed', color: '#ff7a00' },
    { icon: <Globe size={32} />, value: '15+', label: 'Countries Served', color: '#8b5cf6' },
    { icon: <TrendingUp size={32} />, value: '99%', label: 'Client Satisfaction', color: '#10b981' }
  ];

  const values = [
    {
      icon: <Target size={40} />,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.',
      color: '#00fff7'
    },
    {
      icon: <Shield size={40} />,
      title: 'Quality Assurance',
      description: 'Every solution undergoes rigorous testing to ensure reliability, security, and optimal performance.',
      color: '#ff7a00'
    },
    {
      icon: <Users size={40} />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through transparent communication.',
      color: '#8b5cf6'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      bio: 'Visionary leader with 15+ years in tech innovation.',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: '/api/placeholder/300/300',
      bio: 'Technical architect specializing in scalable solutions.',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Design',
      image: '/api/placeholder/300/300',
      bio: 'Creative director crafting exceptional user experiences.',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Emily Davis',
      role: 'Lead Developer',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack expert building robust applications.',
      social: { linkedin: '#', twitter: '#', github: '#' }
    }
  ];

  const testimonials = [
    {
      quote: "Imagine EdTech transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations.",
      author: "David Thompson",
      position: "CEO, TechCorp",
      rating: 5
    },
    {
      quote: "The team's expertise in automation saved us countless hours and significantly improved our operational efficiency.",
      author: "Lisa Wang",
      position: "Operations Director, InnovateLab",
      rating: 5
    },
    {
      quote: "Outstanding quality assurance and support. They delivered a flawless solution on time and within budget.",
      author: "Robert Martinez",
      position: "CTO, FutureScale",
      rating: 5
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize digital solutions for businesses worldwide.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project, establishing our reputation.'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew to 25+ talented professionals across development, design, and QA.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded services internationally, serving clients across 15+ countries.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched our innovation lab focusing on AI and automation solutions.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="about" className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="about-container">
          <div className="hero-content">
            <div className="section-badge">
              <Star size={16} />
              <span>About Imagine EdTech</span>
            </div>
            <h1 className="hero-title">
              <span className="title-highlight"> Transforming Ideas Into Digital Reality</span>
            </h1>
            <p className="hero-subtitle">
              We are a passionate team of innovators, developers, and designers dedicated to 
              creating exceptional digital experiences that drive business growth and success.
            </p>
            {/* <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card" style={{'--stat-color': stat.color}}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="about-section">
        <div className="mission-section">
          <div className="section-header">
            {/* <h2 className="hero-badge">Our Foundation</h2> */}
            {/* <p className="section-subtitle">
              Built on strong principles that guide everything we do
            </p> */}
          </div>

          <div className="mission-tabs">
            <div className="tab-buttons">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === 'mission' && (
                <div className="tab-panel">
                  <div className="panel-icon">
                    <Target size={48} />
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    To empower businesses with innovative technology solutions that streamline operations, 
                    enhance user experiences, and drive sustainable growth in the digital age.
                  </p>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="tab-panel">
                  <div className="panel-icon">
                    <Globe size={48} />
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    To be the global leader in digital transformation, recognized for our innovation, 
                    quality, and commitment to creating technology that makes a positive impact on society.
                  </p>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="tab-panel">
                  <div className="panel-icon">
                    <Award size={48} />
                  </div>
                  <h3>Our Values</h3>
                  <div className="values-grid">
                    {values.map((value, index) => (
                      <div key={index} className="value-card" style={{'--value-color': value.color}}>
                        <div className="value-icon">{value.icon}</div>
                        <h4>{value.title}</h4>
                        <p>{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section">
          <div className="section-header">
            <div className="section-badge">
              <Star size={16} />
              <span>Our Journey</span>
            </div>
            <p className="section-subtitle">
              Milestones that shaped our growth and success
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  {/* <div className="marker-year">{item.year}</div> */}
                </div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;