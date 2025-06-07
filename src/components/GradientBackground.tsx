import type { ReactNode } from 'react';
import './GradientBackground.css';

interface GradientBackgroundProps {
  children?: ReactNode;
  variant?: 'subtle' | 'vibrant' | 'tech' | 'ocean' | 'sunset';
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

const GradientBackground = ({ 
  children, 
  variant = 'tech',
  speed = 'medium',
  className = ''
}: GradientBackgroundProps) => {
  const backgroundClass = `gradient-background gradient-${variant} gradient-${speed}`;

  return (
    <div className={`${backgroundClass} ${className}`}>
      {children}
    </div>
  );
};

export default GradientBackground;
