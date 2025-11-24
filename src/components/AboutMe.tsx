import './AboutMe.css'
import TypewriterEffect from './TypewriterEffect'
import FloatingElement from './FloatingElement'
import GeometricPatterns from './GeometricPatterns'
import GlareHover from './GlareHover'
import VoiceAssistant from './VoiceAssistant'

const AboutMe = () => {
  return (
    <>
      <section id="about" className="about-section">
        <GeometricPatterns 
          density="high" 
          speed="medium" 
          opacity={0.3}
          colors={['#4a90e2', '#2c5aa0', '#357abd', '#74a9ff']}
        />
        <div className="container">
          <div className="about-content" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10 }}>
              <VoiceAssistant />
            </div>
            <div className="about-visual">
              <div className="profile-image-container">
                <FloatingElement intensity="subtle" direction="up" duration={4}>
                  <img src={`${import.meta.env.BASE_URL}files/DSC_9142.jpg`} alt="Shreyas Muzumdar" className="profile-image" />
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
              
              <div className="interests-section">
                <h3 className="interests-title">My Interests</h3>
                <div className="interests-grid">
                  <GlareHover className="interest-item">
                    <span className="interest-icon">🏎️</span>
                    <span className="interest-text">Formula 1 Racing</span>
                  </GlareHover>
                  <GlareHover className="interest-item">
                    <span className="interest-icon">🎾</span>
                    <span className="interest-text">Tennis</span>
                  </GlareHover>
                  <GlareHover className="interest-item">
                    <span className="interest-icon">💰</span>
                    <span className="interest-text">Personal Finance</span>
                  </GlareHover>
                  <GlareHover className="interest-item">
                    <span className="interest-icon">🏈</span>
                    <span className="interest-text">NFL</span>
                  </GlareHover>
                  <GlareHover className="interest-item">
                    <span className="interest-icon">🎸</span>
                    <span className="interest-text">Guitar</span>
                  </GlareHover>
                  <GlareHover className="interest-item">
                    <span className="interest-icon">🏊‍♂</span>
                    <span className="interest-text">Swimming</span>
                  </GlareHover>
                  <GlareHover className="interest-item">
                    <span className="interest-icon">📱</span>
                    <span className="interest-text">Consumer Tech</span>
                  </GlareHover>
                  <GlareHover className="interest-item">
                    <span className="interest-icon">🎮</span>
                    <span className="interest-text">Gaming</span>
                  </GlareHover>
                  <GlareHover className="interest-item">
                    <span className="interest-icon">🧱</span>
                    <span className="interest-text">Legos</span>
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
