import './AboutMe.css'
import TypewriterEffect from './TypewriterEffect'
import FloatingElement from './FloatingElement'
import GeometricPatterns from './GeometricPatterns'
import GlareHover from './GlareHover'

const AboutMe = () => {
  return (
    <>
      <section id="about" className="about-section">
        <GeometricPatterns 
          density="medium" 
          speed="medium" 
          opacity={0.3}
          colors={['#4a90e2', '#2c5aa0', '#357abd', '#74a9ff']}
        />
        <div className="container">
          <div className="about-content">
            <div className="about-visual">
              <div className="profile-image-container">
                <FloatingElement intensity="subtle" direction="up" duration={4}>
                  <img src="/reactwebsite/DSC_9142.jpg" alt="Shreyas Muzumdar" className="profile-image" />
                </FloatingElement>
              </div>
            </div>
            <div className="about-text">
              <h1 className="name-title">
                Shreyas Muzumdar
              </h1>
              <h2 className="subtitle">
                <TypewriterEffect 
                  text={["Mechanical Engineer", "Robotics Enthusiast", "Problem Solver", "Innovation Driver"]} 
                  speed={150}
                  className="gradient"
                />
              </h2>
              <p className="description">
                Hello, My name is Shreyas Muzumdar. I am a current student at Northeastern
                University and graduated from Saint Johns High School. Over the past few years, worked
                on various projects broadening my engineering experience. Eager to work hard
                while learning new concepts and helping you and your team in any way I can.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="skills-section">
        <div className="container">
          <div className="skills">
            <h3>
              Technical Skills
            </h3>
            <div className="skills-grid">
              <GlareHover className="skill-category">
                <h4>
                  CAD & Design
                </h4>
                <span className="skill-tags">
                  CAD (Computer Aided Design) • Stress Testing • 3D Rendering • 3D Simulation
                </span>
              </GlareHover>
              <GlareHover className="skill-category">
                <h4>
                  Manufacturing
                </h4>
                <span className="skill-tags">
                  Laser Cutting • Metalworking Processes • 3D Printing
                </span>
              </GlareHover>
              <GlareHover className="skill-category">
                <h4>
                  AI/ML & Vision
                </h4>
                <span className="skill-tags">
                  Machine Learning & AI • Computer Vision • IoT Protocols
                </span>
              </GlareHover>
              <GlareHover className="skill-category">
                <h4>
                  Programming
                </h4>
                <span className="skill-tags">
                  Python Development • Java Development • Web Development
                </span>
              </GlareHover>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
