import React from 'react';
import './EducationExperience.css';
import GlareHover from './GlareHover';

const EducationExperience: React.FC = () => {
  const educationData = [
    {
      period: "2025 - Present",
      institution: "Northeastern University",
      location: "Boston, MA",
      degree: "B.S. in Mechanical Engineering",
      description: "Involves the design, development, and manufacture of machinery and devices to transmit power or to convert energy from thermal to mechanical form in order to power the modern world and its machines.",
      logo: "🎓"
    },
    {
      period: "2021 - 2025",
      institution: "Saint Johns High School",
      location: "Shrewsbury, MA",
      degree: "High School Diploma",
      description: "Strong foundation in STEM subjects with emphasis on mathematics, physics, and computer science.",
      achievements: [
        "Robotics Build Team Lead",
        "Investment Club President",
        "National Honor Society"
      ],
      logo: "🏫"
    }
  ];

  const experienceData = [
    {
      period: "June 2024 - August 2024",
      company: "RoboHub",
      location: "Boston, MA", 
      position: "Intern",
      description: "Taught younger kids engineering skills, Helped students create drones, Lego robots, 3d models, and animations & Developed a system to create time-lapses of different 3d prints.",
      logo: "🔬"
    },
    {
      period: "2021 - 2025",
      company: "Pioneer Robotics",
      location: "Boston, MA",
      position: "Build Team Lead",
      description: "Led the build team for the robotics team, overseeing the building and programming of competition robots.",
      achievements: [
        "Led team to MTI (Top 40 teams worldwide)",
        "MA State Champion",
        "3x MA State Finalist",
      ],
      logo: "🛠️"
    }
  ];

  return (
    <section id="education-experience" className="education-experience-section">
        <div className="container">
        <h2 className="section-title">
          <span className="title-icon">📚</span>
          Education & Experience
        </h2>
        
        <div className="timeline-container">
          {/* Education Section */}
          <div className="timeline-section">
            <h3 className="subsection-title">
              <span className="subsection-icon">🎓</span>
              Education
            </h3>
            
            <div className="timeline">
              {educationData.map((item, index) => (
                <GlareHover key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-icon">{item.logo}</span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-period">{item.period}</span>
                      <h4 className="timeline-title">{item.institution}</h4>
                      <p className="timeline-location">{item.location}</p>
                    </div>
                    <div className="timeline-body">
                      <h5 className="timeline-degree">{item.degree}</h5>
                      <p className="timeline-description">{item.description}</p>
                      {item.achievements && (
                        <div className="timeline-achievements">
                          <h6>Key Achievements:</h6>
                          <ul>
                            {item.achievements.map((achievement, achIndex) => (
                              <li key={achIndex}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </GlareHover>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="timeline-section">
            <h3 className="subsection-title">
              <span className="subsection-icon">💼</span>
              Experience
            </h3>
            
            <div className="timeline">
              {experienceData.map((item, index) => (
                <GlareHover key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-icon">{item.logo}</span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-period">{item.period}</span>
                      <h4 className="timeline-title">{item.company}</h4>
                      <p className="timeline-location">{item.location}</p>
                    </div>
                    <div className="timeline-body">
                      <h5 className="timeline-position">{item.position}</h5>
                      <p className="timeline-description">{item.description}</p>
                      {item.achievements && (
                        <div className="timeline-achievements">
                          <h6>Key Accomplishments:</h6>
                          <ul>
                            {item.achievements.map((achievement, achIndex) => (
                              <li key={achIndex}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </GlareHover>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
