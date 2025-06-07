import { useState, useEffect, useMemo } from 'react';
import './TypewriterEffect.css';

interface TypewriterEffectProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  loop?: boolean;
  className?: string;
}

const TypewriterEffect = ({ 
  text, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000,
  loop = true,
  className = ''
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const textArray = useMemo(() => Array.isArray(text) ? text : [text], [text]);

  useEffect(() => {
    if (textArray.length === 0) return;

    const currentText = textArray[currentIndex];
    let timeout: number;

    if (!isDeleting && displayText === currentText) {
      // Finished typing current text, wait then start deleting (if loop is enabled)
      if (loop && textArray.length > 1) {
        timeout = setTimeout(() => setIsDeleting(true), delayBetween);
      }
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % textArray.length);
    } else if (isDeleting) {
      // Continue deleting
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deleteSpeed);
    } else {
      // Continue typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, speed);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [displayText, currentIndex, isDeleting, textArray, speed, deleteSpeed, delayBetween, loop]);

  return (
    <span className={`typewriter-effect ${className}`}>
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default TypewriterEffect;
