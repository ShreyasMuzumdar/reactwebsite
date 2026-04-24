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
    </>
  );
};

export default AboutMe;
