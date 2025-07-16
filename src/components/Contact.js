import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Building
} from 'lucide-react';
import '../styles/components/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email subject and body
    const subject = `${formData.email}`;
    const body = `${formData.message}`;

    // Create mailto link
    const mailtoLink = `mailto:imagineedtech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try multiple methods to open email client
    try {
      // Method 1: Try window.open first
      const emailWindow = window.open(mailtoLink, '_self');
      
      // Method 2: Fallback to window.location if window.open fails
      if (!emailWindow) {
        window.location.href = mailtoLink;
      }
    } catch (error) {
      // Method 3: Create a temporary link and click it
      const tempLink = document.createElement('a');
      tempLink.href = mailtoLink;
      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    }
    
    // Show success message after opening email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Store email details for fallback display
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        emailDetails: {
          to: 'imagineedtech@gmail.com',
          subject: subject,
          body: body
        }
      });
    }, 1000);
  };


  if (isSubmitted) {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="success-message">
            
            <div className="email-fallback">
              <h3>If your email client didn't open, you can manually send an email to:</h3>
              <div className="email-details">
                <p><strong>To:</strong> imagineedtech@gmail.com</p>
                <p><strong>Subject:</strong> {formData.emailDetails?.subject}</p>
                <div className="email-body">
                  <p><strong>Message:</strong></p>
                  <pre>{formData.emailDetails?.body}</pre>
                </div>
              </div>
            </div>
            
            <div className="success-actions">
             
              <button 
                className="btn btn-secondary"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare className="badge-icon" />
            <span>Contact Us</span>
          </div>
          <h2 className="section-title">
            Let's Start Your Project
          </h2>
          <p className="section-description">
            Ready to transform your EdTech vision into reality? Get in touch with our team 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you soon.</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Subject*</label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Subject"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Description *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project, requirements, and goals..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
              >
                {isSubmitting ? (
                  <>
                    Opening Email...
                  </>
                ) : (
                  <>
                    Send via Email
                    <Mail className="btn-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;