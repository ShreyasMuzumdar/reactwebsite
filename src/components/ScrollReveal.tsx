import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationStart?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationStart = 'top bottom',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const container = containerRef.current;
    const textElement = textRef.current;
    
    // Convert children to string if it's not already
    const text = typeof children === 'string' ? children : textElement.textContent || '';
    
    // Split text into words and wrap each in a span
    const words = text.split(' ');
    textElement.innerHTML = words
      .map(word => `<span class="scroll-reveal-word">${word}</span>`)
      .join(' ');

    const wordElements = textElement.querySelectorAll('.scroll-reveal-word');

    // Set initial styles for container rotation
    gsap.set(container, {
      rotation: baseRotation,
      transformOrigin: 'center center'
    });

    // Set initial styles for words
    gsap.set(wordElements, {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none'
    });

    // Container rotation animation
    gsap.to(container, {
      rotation: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: rotationStart,
        end: rotationEnd,
        scrub: true,
        scroller: scrollContainerRef?.current || undefined
      }
    });

    // Word reveal animation
    wordElements.forEach((word) => {
      gsap.to(word, {
        opacity: 1,
        filter: enableBlur ? 'blur(0px)' : 'none',
        ease: 'none',
        scrollTrigger: {
          trigger: word,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true,
          scroller: scrollContainerRef?.current || undefined
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container || 
            Array.from(wordElements).includes(trigger.trigger as HTMLElement)) {
          trigger.kill();
        }
      });
    };
  }, [
    children,
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    rotationStart,
    rotationEnd,
    wordAnimationEnd
  ]);

  return (
    <div 
      ref={containerRef} 
      className={`scroll-reveal-container ${containerClassName}`}
    >
      <div 
        ref={textRef} 
        className={`scroll-reveal-text ${textClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal;
