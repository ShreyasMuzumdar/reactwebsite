import './AboutMe.css'

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="name-title">Shreyas Muzumdar</h1>
            <h2 className="subtitle">Robotics Engineer & AI Enthusiast</h2>
            <p className="description">
              Welcome to my digital workshop! I'm a passionate robotics engineer with expertise in 
              autonomous systems, computer vision, and machine learning. I love building intelligent 
              machines that can perceive, learn, and interact with the world around them.
            </p>
            <p className="description">
              My journey in robotics began with a fascination for how we can bridge the gap between 
              the physical and digital worlds. From designing control algorithms to implementing 
              cutting-edge AI models, I'm always exploring new ways to push the boundaries of 
              what's possible in robotics.
            </p>
            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Programming</h4>
                  <span className="skill-tags">Python • C++ • ROS • MATLAB</span>
                </div>
                <div className="skill-category">
                  <h4>AI/ML</h4>
                  <span className="skill-tags">TensorFlow • PyTorch • OpenCV • Computer Vision</span>
                </div>
                <div className="skill-category">
                  <h4>Hardware</h4>
                  <span className="skill-tags">Arduino • Raspberry Pi • Sensors • Actuators</span>
                </div>
                <div className="skill-category">
                  <h4>Tools</h4>
                  <span className="skill-tags">Git • Docker • Linux • Simulation</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
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
