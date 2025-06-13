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
            <div className="skills-categories">
              <div className="skill-category-section">
                <h4 className="category-title">CAD</h4>
                <div className="skills-grid">
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faCube} />
                    </span>
                    <span className="skill-name">Solidworks</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faWrench} />
                    </span>
                    <span className="skill-name">Fusion 360</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faRuler} />
                    </span>
                    <span className="skill-name">Onshape</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faDraftingCompass} />
                    </span>
                    <span className="skill-name">AutoCAD</span>
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
                    <span className="skill-name">SolidWorks Simulation (FEA)</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faCubes} />
                    </span>
                    <span className="skill-name">Blender 3D Rendering</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faChartBar} />
                    </span>
                    <span className="skill-name">Tolerance Analysis</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </span>
                    <span className="skill-name">Engineering Drawings</span>
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
                    <span className="skill-name">CNC/Laser Cutting</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faHammer} />
                    </span>
                    <span className="skill-name">Power & Hand Tools</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faPrint} />
                    </span>
                    <span className="skill-name">3D Printing</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faPlug} />
                    </span>
                    <span className="skill-name">Soldering & Wiring</span>
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
                    <span className="skill-name">Python (CV, ML & AI)</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faCode} />
                    </span>
                    <span className="skill-name">Web Development</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faJava} />
                    </span>
                    <span className="skill-name">Java</span>
                  </GlareHover>
                  <GlareHover className="skill-item">
                    <span className="skill-icon">
                      <FontAwesomeIcon icon={faCloud} />
                    </span>
                    <span className="skill-name">IoT Protocols</span>
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
