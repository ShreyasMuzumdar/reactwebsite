import './AboutMe.css'

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="name-title">Shreyas Muzumdar</h1>
            <h2 className="subtitle">Mechanical Engineer</h2>
            <p className="description">
              Hello, My name is Shreyas Muzumdar. I am a current student at Northeastern
              University and graduated from Saint Johns High School. Over the past few years, worked
              on various projects broadening my engineering experience. Eager to work hard
              while learning new concepts and helping you and your team in any way I can.
            </p>
            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>CAD & Design</h4>
                  <span className="skill-tags">CAD (Computer Aided Design) • Stress Testing • 3D Rendering • 3D Simulation</span>
                </div>
                <div className="skill-category">
                  <h4>Manufacturing</h4>
                  <span className="skill-tags">Laser Cutting • Metalworking Processes • 3D Printing</span>
                </div>
                <div className="skill-category">
                  <h4>AI/ML & Vision</h4>
                  <span className="skill-tags">Machine Learning & AI • Computer Vision • IoT Protocols</span>
                </div>
                <div className="skill-category">
                  <h4>Programming</h4>
                  <span className="skill-tags">Python Development • Java Development • Web Development</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="profile-image-container">
              <img src="/reactwebsite/DSC_9142.jpg" alt="Shreyas Muzumdar" className="profile-image" />
            </div>
            <div className="robot-animation">
              <div className="robot-head">
                <div className="robot-eye left-eye"></div>
                <div className="robot-eye right-eye"></div>
                <div className="robot-antenna"></div>
              </div>
              <div className="robot-body">
                <div className="circuit-pattern"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
