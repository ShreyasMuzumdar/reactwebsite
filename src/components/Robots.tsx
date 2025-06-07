import React from 'react';
import './Robots.css';
import ScrollReveal from './ScrollReveal';
import Magnet from './Magnet';
import GlareHover from './GlareHover';

const Robots: React.FC = () => {
  const robots = [
        {
      name: "PlugBot",
      description: "Industrial robotic arm for precision assembly tasks.",
      image: "/reactwebsite/PlugBot.png",
      model3d: "/reactwebsite/PlugBot.usdz",
      features: ["6-DOF Movement", "Precision Assembly", "Industrial Grade", "Servo Control"]
    },
    {
      name: "BlackBox",
      description: "This robot is designed for autonomous navigation in indoor environments. It features LIDAR and computer vision for mapping and obstacle avoidance.",
      image: "/reactwebsite/BlackBox.png",
      model3d: "/reactwebsite/BlackBox.usdz",
      features: ["LIDAR Navigation", "Computer Vision", "Obstacle Avoidance", "Indoor Mapping"]
    }

  ];

  return (
    <section id="robots" className="robots">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">🤖</span>
          <ScrollReveal>Robots</ScrollReveal>
        </h2>
        
        <div className="robots-grid">
          {robots.map((robot, index) => (
            <Magnet key={index} strength={0.15}>
              <GlareHover className="robot-card">
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
                  <ScrollReveal enableBlur={false} baseOpacity={0.2}>
                    {robot.name}
                  </ScrollReveal>
                </h3>
                <p className="robot-description">
                  <ScrollReveal baseOpacity={0.3} blurStrength={2}>
                    {robot.description}
                  </ScrollReveal>
                </p>
                
                <div className="robot-features">
                  <h4>
                    <ScrollReveal enableBlur={false} baseOpacity={0.4}>
                      Key Features:
                    </ScrollReveal>
                  </h4>
                  <div className="features-list">
                    {robot.features.map((feature, featIndex) => (
                      <span key={featIndex} className="feature-tag">
                        <ScrollReveal enableBlur={false} baseOpacity={0.3}>
                          {feature}
                        </ScrollReveal>
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
            </Magnet>
          ))}
        </div>
        
        <div className="ar-info">
          <div className="ar-notice">
            <span className="ar-icon">📱</span>
            <p>
              <ScrollReveal baseOpacity={0.3} blurStrength={2}>
                <strong>AR Experience:</strong> Click "View in AR" on iOS devices to see these robots in augmented reality. 
                Place them in your real environment and interact with 3D models!
              </ScrollReveal>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Robots;
