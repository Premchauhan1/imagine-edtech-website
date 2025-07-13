import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Award,
  Filter,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import './portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'cloud', label: 'Cloud Migration' },
    { id: 'automation', label: 'Automation' },
    { id: 'web', label: 'Enterprise Apps' }
  ];

  const projects = [
    {
      id: 1,
      title: "Enterprise AI Analytics Platform",
      category: "ai",
      description: "AI-powered business intelligence platform that processes millions of data points for predictive insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      features: ["Predictive Analytics", "Real-time Dashboards", "ML Model Management", "Data Visualization"],
      client: "Fortune 500 Retail Corp",
      duration: "12 months",
      rating: 5
    },
    {
      id: 2,
      title: "Cloud Migration & Modernization",
      category: "cloud",
      description: "Complete cloud transformation for a financial services company, migrating legacy systems to AWS.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      features: ["Zero-downtime Migration", "Auto-scaling", "Cost Optimization", "Security Compliance"],
      client: "Global Financial Services",
      duration: "8 months",
      rating: 5
    },
    {
      id: 3,
      title: "Intelligent Process Automation",
      category: "automation",
      description: "RPA solution that automated 80% of manual processes, saving 2000+ hours monthly.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      technologies: ["UiPath", "Python", "Power BI", "Azure"],
      features: ["Document Processing", "Workflow Automation", "Exception Handling", "Analytics Dashboard"],
      client: "Manufacturing Giant",
      duration: "6 months",
      rating: 5
    },
    {
      id: 4,
      title: "Enterprise Resource Planning System",
      category: "web",
      description: "Custom ERP solution for supply chain management with real-time tracking and analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      features: ["Inventory Management", "Supply Chain Tracking", "Financial Reporting", "Mobile Access"],
      client: "Logistics Corporation",
      duration: "10 months",
      rating: 5
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Award className="badge-icon" />
            <span>Case Studies</span>
          </div>
          <h2 className="section-title">
            Proven Enterprise Solutions
          </h2>
          <p className="section-description">
            Explore our portfolio of successful enterprise projects that have driven 
            digital transformation and delivered measurable business value for our clients.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <Filter className="filter-icon" />
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="overlay-btn">
                    <ExternalLink />
                  </button>
                  <button className="overlay-btn">
                    <Github />
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-rating">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="star filled" />
                    ))}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-features">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="project-cta">
                  View Details
                  <ArrowRight className="cta-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;