import React, { useState } from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const projects = [
    {
      title: "Autonomous Navigation Robot",
      description: "A mobile robot equipped with LIDAR and camera sensors for autonomous navigation in indoor environments. Implemented SLAM algorithms and path planning using ROS.",
      tech: ["Python", "ROS", "OpenCV", "LIDAR", "Raspberry Pi"],
      categories: ["Robotics", "AI & ML", "Computer Vision"],
      image: "🤖",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "Robotic Arm Control System",
      description: "6-DOF robotic arm with computer vision for object detection and manipulation. Features real-time inverse kinematics and precise gripper control.",
      tech: ["C++", "Arduino", "Computer Vision", "Servo Motors"],
      categories: ["Robotics", "Arduino", "Computer Vision"],
      image: "🦾",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "Auto Tracking Camera",
      description: "Created a camera attachment that tracks and moves to detect and follow faces using Machine Learning and computer vision.",
      tech: ["Python", "Computer Vision", "Arduino", "Machine Learning"],
      categories: ["AI & ML", "Arduino", "Computer Vision"],
      image: "📹",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "3D Printing Manufacturing Control",
      description: "IoT-based system for real-time monitoring and control of 3D printing processes with advanced material tracking.",
      tech: ["IoT", "Octopi", "Raspberry Pi", "Python"],
      categories: ["3D Printing", "IoT", "Arduino"],
      image: "🖨️",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "Drone Swarm Coordination",
      description: "Multi-drone system for coordinated flight patterns and formation control. Implemented distributed algorithms for swarm intelligence.",
      tech: ["Python", "MAVLink", "ArduPilot", "Network Communication"],
      categories: ["Robotics", "AI & ML", "IoT"],
      image: "🚁",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "AI-Powered Soccer Robot",
      description: "Autonomous soccer-playing robot with machine learning for strategy and ball tracking. Competed in RoboCup Junior competitions.",
      tech: ["TensorFlow", "Python", "Computer Vision", "Motion Planning"],
      categories: ["Robotics", "AI & ML", "Computer Vision"],
      image: "⚽",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "3D Printed Robotic Hand",
      description: "Biomimetic robotic hand with individual finger control using 3D printed components and servo motors for precise manipulation tasks.",
      tech: ["3D Printing", "Arduino", "Servo Control", "CAD Design"],
      categories: ["Robotics", "3D Printing", "Arduino"],
      image: "✋",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "Smart Home Automation Hub",
      description: "IoT-based system controlling 50+ smart devices with voice recognition and mobile app interface for comprehensive home automation.",
      tech: ["Raspberry Pi", "IoT Protocols", "Voice Recognition", "Node.js"],
      categories: ["IoT", "AI & ML", "Mobile Development"],
      image: "🏠",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "Hand Tracking Mouse",
      description: "Developed a program that uses the camera to detect the position of a hand and uses it to move the cursor.",
      tech: ["Raspberry Pi", "Machine Learning", "AI", "Computer Vision"],
      categories: ["AI & ML", "Arduino", "Computer Vision"],
      image: "👆",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "Neural Object Recognition",
      description: "Implemented a real-time object recognition system using deep neural networks for robotic applications.",
      tech: ["OpenCV", "YOLO", "Raspberry Pi", "TensorFlow"],
      categories: ["AI & ML", "Computer Vision", "Arduino"],
      image: "🧠",
      github: "https://github.com/",
      demo: "#"
    }
  ];

  const filterCategories = ["All", "Robotics", "AI & ML", "Computer Vision", "Arduino", "3D Printing", "IoT", "Mobile Development"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.categories.includes(activeFilter);
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">🔧</span>
          Projects
        </h2>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects, technologies, or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="filter-section">
          <div className="filter-buttons">
            {filterCategories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
                {category !== 'All' && (
                  <span className="filter-count">
                    {projects.filter(project => project.categories.includes(category)).length}
                  </span>
                )}
                {category === 'All' && (
                  <span className="filter-count">{projects.length}</span>
                )}
              </button>
            ))}
          </div>
          
          {(activeFilter !== 'All' || searchTerm !== '') && (
            <button 
              className="clear-filter-btn"
              onClick={() => {
                setActiveFilter('All');
                setSearchTerm('');
              }}
            >
              ✕ Clear All Filters
            </button>
          )}
        </div>

        <div className="results-info">
          <p>
            Showing {filteredProjects.length} of {projects.length} projects
            {searchTerm && ` for "${searchTerm}"`}
            {activeFilter !== 'All' && ` in ${activeFilter}`}
          </p>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-categories">
                {project.categories.map((category, catIndex) => (
                  <span 
                    key={catIndex} 
                    className={`category-tag ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">
                  <span>📁</span> Code
                </a>
                <a href={project.demo} className="project-link">
                  <span>🚀</span> Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
