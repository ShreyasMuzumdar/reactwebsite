import './Header.css'
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Dynamically calculate header height for accurate scrolling
      const header = document.querySelector('.header') as HTMLElement;
      const headerHeight = header ? header.offsetHeight + 20 : 80; // Add 20px buffer
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      <nav className="nav">
        <div className="logo">
          <span className="logo-text">
            🤖 Shreyas Muzumdar
          </span>
          <ThemeToggle />
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li><button onClick={() => scrollToSection('about')} className="nav-button">About</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="nav-button">Skills</button></li>
          <li><button onClick={() => scrollToSection('education-experience')} className="nav-button">Education & Experience</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="nav-button">Projects</button></li>
          <li><button onClick={() => scrollToSection('robots')} className="nav-button">Robots</button></li>
          <li><button onClick={() => scrollToSection('resume')} className="nav-button">Resume</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-button">Contact</button></li>
        </ul>
        <div className="nav-controls">
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
