import './Header.css'
import GeometricPatterns from './GeometricPatterns';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <GeometricPatterns 
        density="low" 
        speed="slow" 
        opacity={0.2}
        colors={['#4a90e2', '#2c5aa0', '#357abd']}
      />
      <nav className="nav">
        <div className="logo">
          <span className="logo-text">
            🤖 Shreyas Muzumdar
          </span>
        </div>
        <ul className="nav-links">
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
