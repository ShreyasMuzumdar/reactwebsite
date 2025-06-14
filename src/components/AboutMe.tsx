import './AboutMe.css'
import TypewriterEffect from './TypewriterEffect'
import FloatingElement from './FloatingElement'
import GeometricPatterns from './GeometricPatterns'
import GlareHover from './GlareHover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCube,
  faWrench, 
  faRuler, 
  faDraftingCompass, 
  faCalculator, 
  faChartBar, 
  faHammer, 
  faPrint,
  faPlug,
  faCode,
  faCloud,
  faIndustry,
  faCubes,
  faPenToSquare
} from '@fortawesome/free-solid-svg-icons'
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons'

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
                Hello, My name is Shreyas Muzumdar. I am a student at Northeastern
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
            <div className="skills-categories">
              <div className="skill-category-section">
                <h4 className="category-title">CAD</h4>
                <div className="skills-grid">
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faCube} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Solidworks</span>
                      <span className="skill-experience">4 years</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faWrench} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Fusion 360</span>
                      <span className="skill-experience">4 years</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faRuler} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Onshape</span>
                      <span className="skill-experience">2 year</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faDraftingCompass} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">AutoCAD</span>
                      <span className="skill-experience">1 year</span>
                    </div>
                  </GlareHover>
                </div>
              </div>
             
              <div className="skill-category-section">
                <h4 className="category-title">Mechanical Design/Analysis</h4>
                <div className="skills-grid">
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faCalculator} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">SolidWorks Simulation (FEA)</span>
                      <span className="skill-experience">2 years</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faCubes} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Blender 3D Rendering</span>
                      <span className="skill-experience">2 years</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faChartBar} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Tolerance Analysis</span>
                      <span className="skill-experience">2 years</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Engineering Drawings</span>
                      <span className="skill-experience">3 years</span>
                    </div>
                  </GlareHover>
                </div>
              </div>
             
              <div className="skill-category-section">
                <h4 className="category-title">Prototyping</h4>
                <div className="skills-grid">
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faIndustry} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">CNC/Laser Cutting</span>
                      <span className="skill-experience">3 years</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faHammer} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Power & Hand Tools</span>
                      <span className="skill-experience">4 years</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faPrint} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">3D Printing</span>
                      <span className="skill-experience">3 years</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faPlug} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Soldering & Wiring</span>
                      <span className="skill-experience">2 years</span>
                    </div>
                  </GlareHover>
                </div>
              </div>

              <div className="skill-category-section">
                <h4 className="category-title">Programming</h4>
                <div className="skills-grid">
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faPython} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Python (CV, ML & AI)</span>
                      <span className="skill-experience">2 years</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faCode} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Web Development</span>
                      <span className="skill-experience">1 year</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faJava} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">Java</span>
                      <span className="skill-experience">2 years</span>
                    </div>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faCloud} />
                    </span>
                    <div className="skill-content">
                      <span className="skill-name">IoT Protocols</span>
                      <span className="skill-experience">1 year</span>
                    </div>
                  </GlareHover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
