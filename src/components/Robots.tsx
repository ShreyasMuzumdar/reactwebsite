import React from 'react';
import './Robots.css';
import GlareHover from './GlareHover';
import GeometricPatterns from './GeometricPatterns';

const Robots: React.FC = () => {
  const robots = [
        {
      name: "StretchBot",
      description: "Industrial robotic arm for precision assembly tasks.",
      image: "/reactwebsite/files/StretchBot.png",
      model3d: "/reactwebsite/files/StretchBot.usdz",
      features: ["6-DOF Movement", "Precision Assembly", "Industrial Grade", "Servo Control"]
    },
    {
      name: "BlackBox",
      description: "This robot is designed for autonomous navigation in indoor environments. It features LIDAR and computer vision for mapping and obstacle avoidance.",
      image: "/reactwebsite/files/BlackBox.png",
      model3d: "/reactwebsite/files/BlackBox.usdz",
      features: ["LIDAR Navigation", "Computer Vision", "Obstacle Avoidance", "Indoor Mapping"]
    },
    {
      name: "PlugBot",
      description: "This robot is designed for autonomous navigation in indoor environments. It features LIDAR and computer vision for mapping and obstacle avoidance.",
      image: "/reactwebsite/files/PlugBot.png",
      model3d: "/reactwebsite/files/PlugBot.usdz",
      features: ["LIDAR Navigation", "Computer Vision", "Obstacle Avoidance", "Indoor Mapping"]
    }

  ];

  return (
    <section id="robots" className="robots">
      <GeometricPatterns 
        density="medium" 
        speed="medium" 
        opacity={0.35}
        colors={['#4a90e2', '#2c5aa0', '#357abd', '#74a9ff']}
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
                
                <div className="robot-features">
                  <h4>
                    Key Features:
                  </h4>
                  <div className="features-list">
                    {robot.features.map((feature, featIndex) => (
                      <span key={featIndex} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="robot-actions">
                  <a href={robot.model3d} className="robot-link primary">
                    <span>🥽</span> 3D Preview
                  </a>
                  <button className="robot-link secondary">
                    <span>📊</span> Specifications
                  </button>
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
