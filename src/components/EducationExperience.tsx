import React from 'react';
import './EducationExperience.css';
import GlareHover from './GlareHover';
import GeometricPatterns from './GeometricPatterns';

const EducationExperience: React.FC = () => {
  const educationData = [
    {
      period: "2021 - 2025",
      institution: "Northeastern University",
      location: "Boston, MA",
      degree: "B.S. in Computer Engineering",
      description: "Focused on robotics, automation, and embedded systems. Relevant coursework includes Digital Signal Processing, Control Systems, Machine Learning, Computer Vision, and Robotics.",
      achievements: [
        "Dean's List (2022-2024)",
        "Robotics Club Vice President", 
        "Senior Capstone: Autonomous Navigation System"
      ],
      logo: "🎓"
    },
    {
      period: "2017 - 2021",
      institution: "High School",
      location: "Boston, MA",
      degree: "High School Diploma",
      description: "Strong foundation in STEM subjects with emphasis on mathematics, physics, and computer science.",
      achievements: [
        "Valedictorian",
        "National Honor Society",
        "Robotics Team Captain"
      ],
      logo: "🏫"
    }
  ];

  const experienceData = [
    {
      period: "Summer 2024",
      company: "Tech Robotics Inc.",
      location: "Boston, MA",
      position: "Robotics Engineering Intern",
      description: "Developed autonomous navigation algorithms for warehouse robots. Implemented computer vision systems for object detection and worked on sensor fusion for LIDAR and camera data.",
      achievements: [
        "Improved navigation accuracy by 25%",
        "Developed Python-based control interface",
        "Collaborated with cross-functional engineering teams"
      ],
      logo: "🤖"
    },
    {
      period: "2023 - Present",
      company: "Northeastern Robotics Lab",
      location: "Boston, MA", 
      position: "Research Assistant",
      description: "Conducting research on autonomous systems and machine learning applications in robotics. Working on projects involving ROS, computer vision, and embedded systems programming.",
      achievements: [
        "Published 2 research papers",
        "Developed novel SLAM algorithm",
        "Mentored junior students"
      ],
      logo: "🔬"
    },
    {
      period: "2022 - 2023",
      company: "Local Makerspace",
      location: "Boston, MA",
      position: "Technical Volunteer",
      description: "Taught robotics workshops to high school students and helped maintain 3D printers and CNC machines. Developed curriculum for introductory programming courses.",
      achievements: [
        "Trained 50+ students",
        "Reduced equipment downtime by 30%",
        "Created educational content"
      ],
      logo: "🛠️"
    }
  ];

  return (
    <section id="education-experience" className="education-experience">
      <GeometricPatterns 
        density="medium" 
        speed="medium" 
        opacity={0.3}
        colors={['#4a90e2', '#2c5aa0', '#357abd', '#74a9ff']}
      />
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
                      <div className="timeline-achievements">
                        <h6>Key Achievements:</h6>
                        <ul>
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
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
                      <div className="timeline-achievements">
                        <h6>Key Accomplishments:</h6>
                        <ul>
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
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
