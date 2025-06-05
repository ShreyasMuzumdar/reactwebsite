import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Autonomous Navigation Robot",
      description: "A mobile robot equipped with LIDAR and camera sensors for autonomous navigation in indoor environments. Implemented SLAM algorithms and path planning using ROS.",
      tech: ["Python", "ROS", "OpenCV", "LIDAR", "Raspberry Pi"],
      image: "🤖",
      github: "#",
      demo: "#"
    },
    {
      title: "Robotic Arm Control System",
      description: "6-DOF robotic arm with computer vision for object detection and manipulation. Features real-time inverse kinematics and precise gripper control.",
      tech: ["C++", "Arduino", "Computer Vision", "Servo Motors"],
      image: "🦾",
      github: "#",
      demo: "#"
    },
    {
      title: "Drone Swarm Coordination",
      description: "Multi-drone system for coordinated flight patterns and formation control. Implemented distributed algorithms for swarm intelligence.",
      tech: ["Python", "MAVLink", "ArduPilot", "Network Communication"],
      image: "🚁",
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Powered Soccer Robot",
      description: "Autonomous soccer-playing robot with machine learning for strategy and ball tracking. Competed in RoboCup Junior competitions.",
      tech: ["TensorFlow", "Python", "Computer Vision", "Motion Planning"],
      image: "⚽",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">🔧</span>
          Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
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
      </div>
    </section>
  );
};

export default Projects;
