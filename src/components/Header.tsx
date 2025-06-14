import './Header.css'
import GeometricPatterns from './GeometricPatterns';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <GeometricPatterns 
        density="low" 
        speed="slow" 
        opacity={0.2}
        colors={['#4a90e2', '#2c5aa0', '#357abd']}
      />
      <div className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      <nav className="nav">
        <div className="logo">
          <span className="logo-text">
            🤖 Shreyas Muzumdar
          </span>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li><button onClick={() => scrollToSection('about')} className="nav-button">About</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="nav-button">Projects</button></li>
          <li><button onClick={() => scrollToSection('robots')} className="nav-button">Robots</button></li>
          <li><button onClick={() => scrollToSection('resume')} className="nav-button">Resume</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-button">Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
