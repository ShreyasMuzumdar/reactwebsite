import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com', color: '#333' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com', color: '#0077b5' },
    { name: 'Email', icon: '📧', url: 'mailto:your.email@example.com', color: '#ea4335' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com', color: '#1da1f2' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">📡</span>
          Get In Touch
        </h2>
        
        <div className="contact-content-centered">
          <div className="contact-info-centered">
            <h3>Let's Connect!</h3>
            <p>
              Interested in robotics, automation, or just want to chat about technology? 
              I'm always excited to discuss new projects and opportunities.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Boston, MA</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>muzumdar.s@northeastern.edu</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🎓</span>
                <div>
                  <h4>University</h4>
                  <p>Northeastern University</p>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <h4>My Resume</h4>
              <a href="/reactwebsite/Shreyas_Muzumdar_Resume.pdf" className="resume-download" target="_blank" rel="noopener noreferrer">
                <span className="resume-icon">📄</span>
                Download PDF
              </a>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  style={{ '--hover-color': link.color } as React.CSSProperties}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
