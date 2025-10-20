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
      categories: ["AI & ML", "Raspberry Pi", "Computer Vision"],
      image: "📹",
      github: "https://github.com/ShreyasMuzumdar/CameraTrackingSystem"
    },
    {
      title: "3D Printing Manufacturing Control System",
      description: "IoT-based system for real-time monitoring and control of 3D printing processes.",
      categories: ["3D Printing", "IoT", "Arduino"],
      image: "🖨️"
    },
    {
      title: "Home Automation System",
      description: "Installed a home automation system that connects over 150 smart devices across multiple ecosystems to a single Raspberry Pi server.",
      categories: ["IoT", "Arduino", "Automation"],
      image: "🏠"
    },
    {
      title: "Hand Tracking Mouse",
      description: "Developed a program that uses the camera to detect the position of a hand and uses it to move the cursor.",
      categories: ["AI & ML", "Arduino", "Computer Vision"],
      image: "✋",
      github: "https://github.com/ShreyasMuzumdar/HandTrackingMouse"
    },
    {
      title: "ShreyAI Voice Assistant",
      description: "A combined system that pairs my ShreyAI custom-cloned voice with a local voice assistant powered by DeepSeek/Ollama. Runs on Mac/Raspberry Pi to enable natural voice interactions and control of devices.",
      categories: ["AI & ML", "IoT", "Raspberry Pi"],
      image: "🤖",
      github: "https://github.com/ShreyasMuzumdar/ollama-voice-mac"
    },
    {
      title: "n8n Automation Server",
      description: "Self-hosted n8n workflow automation server that automatically updates devices, AI newsletter and more.",
      categories: ["Automation", "IoT", "Raspberry Pi"],
      image: "🔁"
    },
    {
      title: "Connect 4 AI Bot",
      description: "Intelligent Connect 4 game featuring an AI opponent powered by the minimax algorithm with alpha-beta pruning. Built with Pygame for interactive gameplay and optimized decision-making.",
      categories: ["AI & ML", "Computer Vision"],
      image: "🔴",
      github: "https://github.com/ShreyasMuzumdar/connect4",
      demo: `${import.meta.env.BASE_URL}connect4.html`
    },
    {
      title: "QR Code Generator",
      description: "Developed a program that generates QR codes from text input.",
      categories: ["Python"],
      /* 
      QR Code SVG Breakdown:
      
      1. TOP-LEFT CORNER (x="5" y="5"): Position Detection Pattern
         - Outer black square (20x20)
         - Middle white square (14x14) 
         - Inner black square (8x8)
      
      2. TOP-RIGHT CORNER (x="35" y="5"): Position Detection Pattern
         - Same structure as top-left
      
      3. BOTTOM-LEFT CORNER (x="5" y="35"): Position Detection Pattern
         - Same structure as top-left
      
      4. BOTTOM-RIGHT REGION (x="35-50" y="35-50"): Data/Information Area
         - 12 small pixels (4x4) scattered randomly
         - Represents encoded data in a real QR code
      
      5. TIMING PATTERNS (x="28" and y="28"): Alignment guides
         - 3 vertical pixels connecting top corners
         - 3 horizontal pixels connecting left corners
         - Helps scanners determine QR code size and alignment
      */
      image: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <rect x="5" y="5" width="20" height="20" fill="currentColor"/>
          <rect x="8" y="8" width="14" height="14" fill="var(--bg-primary)"/>
          <rect x="11" y="11" width="8" height="8" fill="currentColor"/>
          
          <rect x="35" y="5" width="20" height="20" fill="currentColor"/>
          <rect x="38" y="8" width="14" height="14" fill="var(--bg-primary)"/>
          <rect x="41" y="11" width="8" height="8" fill="currentColor"/>
          
          <rect x="5" y="35" width="20" height="20" fill="currentColor"/>
          <rect x="8" y="38" width="14" height="14" fill="var(--bg-primary)"/>
          <rect x="11" y="41" width="8" height="8" fill="currentColor"/>
          
          <rect x="35" y="35" width="4" height="4" fill="currentColor"/>
          <rect x="40" y="35" width="4" height="4" fill="currentColor"/>
          <rect x="45" y="35" width="4" height="4" fill="currentColor"/>
          <rect x="50" y="35" width="4" height="4" fill="currentColor"/>
          <rect x="35" y="40" width="4" height="4" fill="currentColor"/>
          <rect x="40" y="40" width="4" height="4" fill="currentColor"/>
          <rect x="45" y="40" width="4" height="4" fill="currentColor"/>
          <rect x="50" y="40" width="4" height="4" fill="currentColor"/>
          <rect x="35" y="45" width="4" height="4" fill="currentColor"/>
          <rect x="40" y="45" width="4" height="4" fill="currentColor"/>
          <rect x="45" y="45" width="4" height="4" fill="currentColor"/>
          <rect x="50" y="45" width="4" height="4" fill="currentColor"/>
          <rect x="35" y="50" width="4" height="4" fill="currentColor"/> 
          <rect x="40" y="50" width="4" height="4" fill="currentColor"/>
          <rect x="45" y="50" width="4" height="4" fill="currentColor"/>
          <rect x="50" y="50" width="4" height="4" fill="currentColor"/>
          
          <rect x="28" y="5" width="4" height="4" fill="currentColor"/>
          <rect x="28" y="12" width="4" height="4" fill="currentColor"/>
          <rect x="28" y="19" width="4" height="4" fill="currentColor"/>
          <rect x="5" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="12" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="19" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="28" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="28" y="35" width="4" height="4" fill="currentColor"/>
          <rect x="28" y="42" width="4" height="4" fill="currentColor"/>
          <rect x="28" y="49" width="4" height="4" fill="currentColor"/>
          <rect x="5" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="12" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="19" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="28" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="35" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="42" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="49" y="28" width="4" height="4" fill="currentColor"/>
          <rect x="5" y="28" width="4" height="4" fill="currentColor"/>
        </svg>
      ), 
      
      github: "https://github.com/ShreyasMuzumdar/QRcodeGenerator"
    },
    {
      title: "File Cleaner",
      description: "Developed a program that automatically organizes and cleans up files.",
      categories: ["Python"],
      image: "🧹",
      github: "https://github.com/ShreyasMuzumdar/FileCleaner"
    },
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
    <section id="projects" className="projects">
      <GeometricPatterns 
        density="high" 
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
