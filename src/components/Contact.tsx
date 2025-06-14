import React from 'react';
import './Contact.css';
import FloatingElement from './FloatingElement';
import TypewriterEffect from './TypewriterEffect';
import GeometricPatterns from './GeometricPatterns';

const Contact: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com', color: '#333' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com', color: '#0077b5' },
    { name: 'Email', icon: '📧', url: 'mailto:your.email@example.com', color: '#ea4335' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com', color: '#1da1f2' }
  ];

  return (
    <section id="contact" className="contact">
      <GeometricPatterns 
        density="medium" 
        speed="medium" 
        opacity={0.3}
        colors={['#4a90e2', '#2c5aa0', '#357abd', '#74a9ff']}
      />
      <div className="container">
        <h2 className="section-title">
          <FloatingElement intensity="medium" direction="up" duration={3}>
            <span className="title-icon">📡</span>
          </FloatingElement>
          <TypewriterEffect 
            text="Get In Touch" 
            speed={120}
            loop={false}
            className="large"
          />
        </h2>
        
        <div className="contact-content-centered">
          <div className="contact-info-centered">
            <h3>
              Let's Connect!
            </h3>
            <p>
              Interested in robotics, automation, or just want to chat about technology? 
              I'm always excited to discuss new projects and opportunities.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>
                    Location
                  </h4>
                  <p>
                    Boston, MA
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>
                    Email
                  </h4>
                  <p>
                    muzumdar.s@northeastern.edu
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🎓</span>
                <div>
                  <h4>
                    University
                  </h4>
                  <p>
                    Northeastern University
                  </p>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <h4>
                My Resume
              </h4>
              <a href="/reactwebsite/files/Shreyas_Muzumdar_Resume.pdf" className="resume-download" target="_blank" rel="noopener noreferrer">
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
