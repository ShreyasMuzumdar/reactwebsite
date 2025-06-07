import React, { useRef, useEffect } from 'react';
import './GlareHover.css';

interface GlareHoverProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
}

const GlareHover: React.FC<GlareHoverProps> = ({ 
  children, 
  className = '',
  glareColor = 'rgba(255, 255, 255, 0.3)'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      container.style.setProperty('--mouse-x', `${x}%`);
      container.style.setProperty('--mouse-y', `${y}%`);
      container.style.setProperty('--glare-opacity', '1');
    };

    const handleMouseLeave = () => {
      container.style.setProperty('--glare-opacity', '0');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`glare-hover ${className}`}
      style={{ '--glare-color': glareColor } as React.CSSProperties}
    >
      {children}
      <div className="glare-overlay"></div>
    </div>
  );
};

export default GlareHover;
