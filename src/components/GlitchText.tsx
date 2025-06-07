import { useState, useEffect } from 'react';
import './GlitchText.css';

interface GlitchTextProps {
  text: string;
  intensity?: 'low' | 'medium' | 'high';
  triggerOnHover?: boolean;
  autoTrigger?: boolean;
  autoTriggerInterval?: number;
  className?: string;
}

const GlitchText = ({ 
  text, 
  intensity = 'medium',
  triggerOnHover = false,
  autoTrigger = false,
  autoTriggerInterval = 3000,
  className = ''
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(!triggerOnHover);

  useEffect(() => {
    if (autoTrigger && !triggerOnHover) {
      const interval = setInterval(() => {
        setIsGlitching(false);
        setTimeout(() => setIsGlitching(true), 100);
      }, autoTriggerInterval);

      return () => clearInterval(interval);
    }
  }, [autoTrigger, triggerOnHover, autoTriggerInterval]);

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      setIsGlitching(true);
    }
  };

  const handleMouseLeave = () => {
    if (triggerOnHover) {
      setIsGlitching(false);
    }
  };

  const glitchClass = `glitch-text glitch-${intensity} ${isGlitching ? 'glitching' : ''} ${className}`;

  return (
    <span 
      className={glitchClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;
