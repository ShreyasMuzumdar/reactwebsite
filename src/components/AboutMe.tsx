import './AboutMe.css'
import ScrollReveal from './ScrollReveal'
import ShinyText from './ShinyText'
import TypewriterEffect from './TypewriterEffect'
import FloatingElement from './FloatingElement'

const AboutMe = () => {
  return (
    <>
      <section id="about" className="about-section">
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
                <ScrollReveal enableBlur={false} baseOpacity={0.2}>
                  <ShinyText>Shreyas Muzumdar</ShinyText>
                </ScrollReveal>
              </h1>
              <h2 className="subtitle">
                <TypewriterEffect 
                  text={["Mechanical Engineer", "Robotics Enthusiast", "Problem Solver", "Innovation Driver"]} 
                  speed={150}
                  className="gradient"
                />
              </h2>
              <p className="description">
                <ScrollReveal baseOpacity={0.2} blurStrength={3}>
                  Hello, My name is Shreyas Muzumdar. I am a current student at Northeastern
                  University and graduated from Saint Johns High School. Over the past few years, worked
                  on various projects broadening my engineering experience. Eager to work hard
                  while learning new concepts and helping you and your team in any way I can.
                </ScrollReveal>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="skills-section">
        <div className="container">
          <div className="skills">
            <h3>
              <ScrollReveal enableBlur={false} baseOpacity={0.3}>
                Technical Skills
              </ScrollReveal>
            </h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>
                  <ScrollReveal enableBlur={false} baseOpacity={0.4}>
                    CAD & Design
                  </ScrollReveal>
                </h4>
                <span className="skill-tags">
                  <ScrollReveal baseOpacity={0.3} blurStrength={2}>
                    CAD (Computer Aided Design) • Stress Testing • 3D Rendering • 3D Simulation
                  </ScrollReveal>
                </span>
              </div>
              <div className="skill-category">
                <h4>
                  <ScrollReveal enableBlur={false} baseOpacity={0.4}>
                    Manufacturing
                  </ScrollReveal>
                </h4>
                <span className="skill-tags">
                  <ScrollReveal baseOpacity={0.3} blurStrength={2}>
                    Laser Cutting • Metalworking Processes • 3D Printing
                  </ScrollReveal>
                </span>
              </div>
              <div className="skill-category">
                <h4>
                  <ScrollReveal enableBlur={false} baseOpacity={0.4}>
                    AI/ML & Vision
                  </ScrollReveal>
                </h4>
                <span className="skill-tags">
                  <ScrollReveal baseOpacity={0.3} blurStrength={2}>
                    Machine Learning & AI • Computer Vision • IoT Protocols
                  </ScrollReveal>
                </span>
              </div>
              <div className="skill-category">
                <h4>
                  <ScrollReveal enableBlur={false} baseOpacity={0.4}>
                    Programming
                  </ScrollReveal>
                </h4>
                <span className="skill-tags">
                  <ScrollReveal baseOpacity={0.3} blurStrength={2}>
                    Python Development • Java Development • Web Development
                  </ScrollReveal>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
