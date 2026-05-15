import React from 'react';
import './EducationExperience.css';
import GlareHover from './GlareHover';

const EducationExperience: React.FC = () => {
  const educationData = [
    {
      period: "2021 - 2025",
      institution: "Saint Johns High School",
      location: "Shrewsbury, MA",
      degree: "High School Diploma",
      description: "Strong foundation in STEM subjects with an emphasis on advanced mathematics, physics, and computer science.",
      achievements: [
        "Investment Club President",
        "Model UN Leader",
        "Varsity Tennis Athlete",
        "National Honor Society"
      ],
      logo: "🏫"
    },
    {
      period: "2025 - 2029",
      institution: "Northeastern University",
      location: "Boston, MA",
      degree: "B.S. in Mechanical Engineering",
      description: "Focusing on machinery design, thermal-mechanical energy conversion, and robotics integration in the modern engineering landscape.",
      logo: "🎓"
    }
  ];

  const experienceData = [
    {
      period: "June 2024 - August 2024",
      company: "RoboHub",
      location: "Boston, MA", 
      position: "Intern",
      description: "Led engineering workshops for students and developed automated systems for 3D printing monitoring.",
      achievements: [
        "Taught younger kids engineering skills and creative robotics",
        "Helped students create drones, Lego robots, and 3D models",
        "Developed a custom system to create time-lapses of 3D prints"
      ],
      logo: "🔬"
    },
    {
      period: "2021 - 2025",
      company: "Pioneer Robotics (FTC #12589)",
      location: "Boston, MA",
      position: "Build Team Lead",
      description: "Led the mechanical design and assembly of high-performance competition robots.",
      achievements: [
        "Led team to MTI (Top 40 teams worldwide)",
        "2023 MA State Champion & 2024 New England Finalist",
        "3x MA State Finalist (2021-2024)",
        "FLL Mentor and Founder of 2 new teams"
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
        
        {/* Education Section - Horizontal Cards */}
        <div className="education-section">
          <h3 className="subsection-title">
            <span className="subsection-icon">🎓</span>
            Education
          </h3>
          <div className="education-cards">
            {educationData.map((item, index) => (
              <GlareHover key={index} className="edu-card">
                <div className="edu-card-header">
                  <div className="edu-logo">{item.logo}</div>
                  <div className="edu-meta">
                    <span className="edu-period">{item.period}</span>
                    <h4 className="edu-institution">{item.institution}</h4>
                    <p className="edu-location">{item.location}</p>
                  </div>
                </div>
                <div className="edu-card-body">
                  <h5 className="edu-degree">{item.degree}</h5>
                  <p className="edu-description">{item.description}</p>
                  {item.achievements && (
                    <div className="edu-achievements">
                      <ul>
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </GlareHover>
            ))}
          </div>
        </div>

        {/* Experience Section - Vertical Timeline */}
        <div className="experience-section">
          <h3 className="subsection-title">
            <span className="subsection-icon">💼</span>
            Experience
          </h3>
          
          <div className="vertical-timeline">
            {experienceData.map((item, index) => (
              <div key={index} className="v-timeline-item">
                <div className="v-timeline-marker">
                  <div className="v-timeline-icon">{item.logo}</div>
                </div>
                <GlareHover className="v-timeline-content">
                  <div className="v-timeline-header">
                    <div className="v-header-main">
                      <h4 className="v-timeline-title">{item.company}</h4>
                      <h5 className="v-timeline-position">{item.position}</h5>
                    </div>
                    <div className="v-header-meta">
                      <span className="v-timeline-period">{item.period}</span>
                      <p className="v-timeline-location">{item.location}</p>
                    </div>
                  </div>
                  <div className="v-timeline-body">
                    <p className="v-timeline-description">{item.description}</p>
                    {item.achievements && (
                      <div className="v-timeline-achievements">
                        <h6>Key Accomplishments:</h6>
                        <ul>
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </GlareHover>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
