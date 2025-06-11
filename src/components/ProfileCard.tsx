import React, { useRef, useState } from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  title: string;
  description: string;
  image: string;
  categories: string[];
  github?: string;
  demo?: string;
  className?: string;
  onCategoryClick?: (category: string) => void;
  activeFilter?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  description,
  image,
  categories,
  github,
  demo,
  className = '',
  onCategoryClick,
  activeFilter
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`profile-card ${isHovered ? 'hovered' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Background glow effect */}
      <div className="profile-card-glow"></div>
      
      {/* Border highlight */}
      <div className="profile-card-border"></div>
      
      {/* Content container */}
      <div className="profile-card-content">
        {/* Project icon/image */}
        <div className="profile-card-image">
          <div className="profile-card-icon-container">
            <span className="profile-card-icon">{image}</span>
          </div>
        </div>

        {/* Text content */}
        <div className="profile-card-text">
          <h3 className="profile-card-title">{title}</h3>
          <p className="profile-card-description">{description}</p>
          
          {/* Categories */}
          <div className="profile-card-categories">
            {categories.map((category, index) => (
              <span 
                key={index} 
                className={`profile-card-category ${activeFilter === category ? 'active' : ''}`}
                onClick={() => onCategoryClick && onCategoryClick(category)}
              >
                {category}
              </span>
            ))}
          </div>

          {/* Action links */}
          <div className="profile-card-links">
            {github && (
              <a href={github} className="profile-card-link" target="_blank" rel="noopener noreferrer">
                <span>📁</span> Code
              </a>
            )}
            {demo && (
              <a href={demo} className="profile-card-link" target="_blank" rel="noopener noreferrer">
                <span>🚀</span> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
