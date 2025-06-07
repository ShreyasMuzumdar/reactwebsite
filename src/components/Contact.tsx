import React from 'react';
import './Contact.css';
import ScrollReveal from './ScrollReveal';
import FloatingElement from './FloatingElement';
import TypewriterEffect from './TypewriterEffect';

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
              <ScrollReveal enableBlur={false} baseOpacity={0.3}>
                Let's Connect!
              </ScrollReveal>
            </h3>
            <p>
              <ScrollReveal baseOpacity={0.3} blurStrength={2}>
                Interested in robotics, automation, or just want to chat about technology? 
                I'm always excited to discuss new projects and opportunities.
              </ScrollReveal>
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>
                    <ScrollReveal enableBlur={false} baseOpacity={0.4}>
                      Location
                    </ScrollReveal>
                  </h4>
                  <p>
                    <ScrollReveal enableBlur={false} baseOpacity={0.3}>
                      Boston, MA
                    </ScrollReveal>
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>
                    <ScrollReveal enableBlur={false} baseOpacity={0.4}>
                      Email
                    </ScrollReveal>
                  </h4>
                  <p>
                    <ScrollReveal enableBlur={false} baseOpacity={0.3}>
                      muzumdar.s@northeastern.edu
                    </ScrollReveal>
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🎓</span>
                <div>
                  <h4>
                    <ScrollReveal enableBlur={false} baseOpacity={0.4}>
                      University
                    </ScrollReveal>
                  </h4>
                  <p>
                    <ScrollReveal enableBlur={false} baseOpacity={0.3}>
                      Northeastern University
                    </ScrollReveal>
                  </p>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <h4>
                <ScrollReveal enableBlur={false} baseOpacity={0.4}>
                  My Resume
                </ScrollReveal>
              </h4>
              <a href="/reactwebsite/Shreyas_Muzumdar_Resume.pdf" className="resume-download" target="_blank" rel="noopener noreferrer">
                <span className="resume-icon">📄</span>
                <ScrollReveal enableBlur={false} baseOpacity={0.3}>
                  Download PDF
                </ScrollReveal>
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
