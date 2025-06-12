import React, { useState } from 'react';
import './Projects.css';
import GlareHover from './GlareHover';
import FloatingElement from './FloatingElement';
import GeometricPatterns from './GeometricPatterns';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const projects = [
    {
      title: "Auto Tracking Camera",
      description: "Developed a camera attachment that tracks and moves to detect and follow faces using Machine Learning and computer vision.",
      categories: ["AI & ML", "Arduino", "Computer Vision"],
      image: "📹",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "3D Printing Manufacturing Control System",
      description: "IoT-based system for real-time monitoring and control of 3D printing processes.",
      categories: ["3D Printing", "IoT", "Arduino"],
      image: "🖨️",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "Home Automation System",
      description: "Installed a home automation system that connects over 150 smart devices across multiple ecosystems to a single Raspberry Pi server.",
      categories: ["IoT", "AI & ML", "Arduino"],
      image: "🏠",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "Hand Tracking Mouse",
      description: "Developed a program that uses the camera to detect the position of a hand and uses it to move the cursor.",
      categories: ["AI & ML", "Arduino", "Computer Vision"],
      image: "✋",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "ShreyAI",
      description: "Digitally cloned my voice by training a machine learning model based on voice samples.",
      categories: ["AI & ML", "Computer Vision", "Raspberry Pi"],
      image: "✨",
      github: "https://github.com/",
      demo: "#"
    },
    {
      title: "Voice Assistant",
      description: "A voice-controlled assistant powered by deepseek to interact with various smart devices and perform tasks using Human-like voice.",
      categories: ["IoT", "AI & ML", "Raspberry Pi"],
      image: "🤖",
      github: "https://github.com/",
      demo: "#"
    },
  ];

  const filterCategories = ["All", "AI & ML", "Computer Vision", "Arduino", "IoT", "3D Printing", "Raspberry Pi"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.categories.includes(activeFilter);
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="projects">
      <GeometricPatterns 
        density="medium" 
        speed="slow" 
        opacity={0.4}
        colors={['#4a90e2', '#2c5aa0', '#357abd', '#74a9ff', '#9bb8ff']}
      />
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
                    {project.image}
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
                    <a href={project.github} className="project-link">
                      <span>📁</span> Code
                    </a>
                    <a href={project.demo} className="project-link">
                      <span>🚀</span> Demo
                    </a>
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
