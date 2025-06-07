import type { ReactNode } from 'react';
import './FloatingElement.css';

interface FloatingElementProps {
  children: ReactNode;
  intensity?: 'subtle' | 'medium' | 'strong';
  direction?: 'up' | 'down' | 'left' | 'right' | 'random';
  duration?: number;
  delay?: number;
  className?: string;
}

const FloatingElement = ({ 
  children, 
  intensity = 'medium',
  direction = 'up',
  duration = 3,
  delay = 0,
  className = ''
}: FloatingElementProps) => {
  const floatingClass = `floating-element floating-${intensity} floating-${direction}`;
  
  const style = {
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  };

  return (
    <div 
      className={`${floatingClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
