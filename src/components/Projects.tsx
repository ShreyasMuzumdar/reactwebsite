/** @jsx React.createElement */
import React, { useState } from 'react';
import './Projects.css';
import GlareHover from './GlareHover';
import FloatingElement from './FloatingElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faVideo, faPrint, faHouse, faHand, faRobot, faGamepad } from '@fortawesome/free-solid-svg-icons';

const Projects = (): React.ReactElement => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const iconMap = {
    video: faVideo,
    print: faPrint,
    house: faHouse,
    hand: faHand,
    robot: faRobot,
    gamepad: faGamepad,
    python: faPython,
  };

  const projects = [
    {
      title: "Auto Tracking Camera",
      description: "Developed a camera attachment that tracks and moves to detect and follow faces using Machine Learning and computer vision.",
      categories: ["AI & ML", "Raspberry Pi", "Computer Vision"],
      icon: 'video' as const,
      github: "https://github.com/ShreyasMuzumdar/CameraTrackingSystem"
    },
    {
      title: "3D Printing Manufacturing Control System",
      description: "IoT-based system for real-time monitoring and control of 3D printing processes.",
      categories: ["3D Printing", "IoT", "Arduino"],
      icon: 'print' as const,
    },
    {
      title: "Home Automation System",
      description: "Installed a home automation system that connects over 150 smart devices across multiple ecosystems to a single Raspberry Pi server.",
      categories: ["IoT", "Arduino", "Automation"],
      icon: 'house' as const,
    },
    {
      title: "Hand Tracking Mouse",
      description: "Developed a program that uses the camera to detect the position of a hand and uses it to move the cursor.",
      categories: ["AI & ML", "Arduino", "Computer Vision"],
      icon: 'hand' as const,
      github: "https://github.com/ShreyasMuzumdar/HandTrackingMouse"
    },
    {
      title: "ShreyAI Voice Assistant",
      description: "A combined system that pairs my ShreyAI custom-cloned voice with a local voice assistant powered by DeepSeek/Ollama. Runs on Mac/Raspberry Pi to enable natural voice interactions and control of devices.",
      categories: ["AI & ML", "IoT", "Raspberry Pi"],
      icon: 'robot' as const,
      github: "https://github.com/ShreyasMuzumdar/ollama-voice-mac"
    },
    {
      title: "Connect 4 AI Bot",
      description: "Intelligent Connect 4 game featuring an AI opponent powered by the minimax algorithm with alpha-beta pruning. Built with Pygame for interactive gameplay and optimized decision-making.",
      categories: ["AI & ML", "Python"],
      icon: 'gamepad' as const,
      github: "https://github.com/ShreyasMuzumdar/connect4",
      demo: `${import.meta.env.BASE_URL}connect4.html`
    },
    {
      title: "Python Automations",
      description: "Collection of Python automation tools including QR code generation and file organization. Developed programs that generate QR codes from text input and automatically organize and clean up files.",
      categories: ["Python"],
      icon: 'python' as const,
      github: "https://github.com/ShreyasMuzumdar"
    },
    {
      title: "Satellite Tracking Project",
      description: "Collection of Python automation tools including QR code generation and file organization. Developed programs that generate QR codes from text input and automatically organize and clean up files.",
      categories: ["Python"],
      icon: 'python' as const,
      github: "https://github.com/ShreyasMuzumdar"
    }
  ];

  const filterCategories = ["All", "AI & ML", "Computer Vision", "Arduino", "IoT", "Automation", "3D Printing", "Raspberry Pi","Python"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.categories.includes(activeFilter);
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="projects-section">
        <div className="container">
        <h2 className="section-title">
          <span className="title-icon">🔧</span>
          Projects
        </h2>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects or categories..."
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
            <GlareHover key={index} className="project-card">
              <div className="project-icon">
                  <FloatingElement 
                    intensity="subtle" 
                    direction="random" 
                    duration={4 + index * 0.5}
                    delay={index * 0.2}
                  >
                    <FontAwesomeIcon icon={iconMap[project.icon]} />
                  </FloatingElement>
                </div>
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
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
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>📁</span> Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>🚀</span> Demo
                      </a>
                    )}
                  </div>
                </GlareHover>
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
