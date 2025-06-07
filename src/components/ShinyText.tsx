import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ShinyText.css';

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  triggerOnHover?: boolean;
}

const ShinyText: React.FC<ShinyTextProps> = ({ 
  children, 
  className = '', 
  triggerOnHover = false 
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Create the shine effect
    const shine = document.createElement('div');
    shine.className = 'shine-overlay';
    element.appendChild(shine);

    const runShineAnimation = () => {
      gsap.fromTo(shine, 
        { 
          x: '-100%',
          opacity: 0 
        },
        {
          x: '100%',
          opacity: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(shine, { opacity: 0 });
          }
        }
      );
    };

    if (triggerOnHover) {
      const handleMouseEnter = () => {
        runShineAnimation();
      };
      element.addEventListener('mouseenter', handleMouseEnter);
      
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        if (shine.parentNode) {
          shine.parentNode.removeChild(shine);
        }
      };
    } else {
      // Auto-trigger animation every 4 seconds
      const interval = setInterval(runShineAnimation, 4000);
      // Run once immediately
      setTimeout(runShineAnimation, 1000);
      
      return () => {
        clearInterval(interval);
        if (shine.parentNode) {
          shine.parentNode.removeChild(shine);
        }
      };
    }
  }, [triggerOnHover]);

  return (
    <span 
      ref={textRef} 
      className={`shiny-text ${className}`}
    >
      {children}
    </span>
  );
};

export default ShinyText;
