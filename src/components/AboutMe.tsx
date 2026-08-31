import './AboutMe.css'
import TypewriterEffect from './TypewriterEffect'
import FloatingElement from './FloatingElement'
import VoiceAssistant from './VoiceAssistant'

const AboutMe = () => {
  return (
    <>
      <section id="about" className="about-section">
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
                  text={["Mechanical Engineer", "FTC Robotics — Team 12589", "Rover Auger Designer", "CAD & Fabrication"]} 
                  speed={150}
                  className="gradient"
                />
              </h2>
              <p className="description">
                I'm a mechanical engineering student at Northeastern University. Most of what I build
                sits at the intersection of mechanical design and code — I spent years on FTC robotics
                with Pioneer Robotics (Team 12589), where our robots won a State Championship and
                made state finals twice more, and I'm currently on Northeastern's Rover Team designing
                the sand-collection auger for our Mars-analog rover, Watney MKVII.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
