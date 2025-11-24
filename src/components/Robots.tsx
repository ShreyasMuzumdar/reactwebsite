import React from 'react';
import './Robots.css';
import GlareHover from './GlareHover';
import GeometricPatterns from './GeometricPatterns';

const Robots: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const robots = [
    {
      name: "StretchBot",
      description: "Stretch Bot was our robot during the POWERPLAY season. We won the State Championship and had the highest scoring match in the State Championship with 269 points.",
      image: `${baseUrl}files/StretchBot.png`,
      model3d: `${baseUrl}files/StretchBot.usdz`,
    },
    {
      name: "BlackBox",
      description: "BlackBox was our robot during the CENTERSTAGE season. We went to the finals of the State Championship and averaged the highest autonomous robot score.",
      image: `${baseUrl}files/BlackBox.png`,
      model3d: `${baseUrl}files/BlackBox.usdz`,
    },
    {
      name: "PlugBot",
      description: "PlugBot was our robot during the INTOTHEDEEP season. It uses a camera and differential claw designed to precisely pick up objects with minimal human intervention.",
      image: `${baseUrl}files/PlugBot.png`,
      model3d: `${baseUrl}files/PlugBot.usdz`,
    }
  ];

  return (
    <section id="robots" className="robots-section">
        <GeometricPatterns 
          density="medium" 
          speed="slow" 
          opacity={0.2}
          colors={['#FFE135', '#FFD700', '#F4D03F', '#FFF59D']}
        />
        <div className="container">
        <h2 className="section-title">
          <span className="title-icon">🤖</span>
          Robots
        </h2>
        
        <div className="robots-grid">
          {robots.map((robot, index) => (
            <GlareHover key={index} className="robot-card">
              <div className="robot-image-container">
                  <img src={robot.image} alt={robot.name} className="robot-image" />
                  <div className="image-overlay">
                    <a href={robot.model3d} className="view-3d-btn">
                      <span>📱</span> View in AR
                    </a>
                  </div>
                </div>
              
              <div className="robot-content">
                <h3 className="robot-name">
                  {robot.name}
                </h3>
                <p className="robot-description">
                  {robot.description}
                </p>
                
                <div className="robot-actions">
                  <a href={robot.model3d} className="robot-link primary">
                    <span>🥽</span> 3D Preview
                  </a>
                </div>
              </div>
              </GlareHover>
          ))}
        </div>
        
        <div className="ar-info">
          <div className="ar-notice">
            <span className="ar-icon">📱</span>
            <p>
              <strong>AR Experience:</strong> Click "View in AR" on iOS devices to see these robots in augmented reality. 
              Place them in your real environment and interact with 3D models!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Robots;
