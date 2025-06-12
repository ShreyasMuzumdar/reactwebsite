import React, { useEffect, useRef } from 'react';
import './GeometricPatterns.css';

interface GeometricPatternsProps {
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  opacity?: number;
  colors?: string[];
  className?: string;
}

interface Shape {
  id: number;
  type: 'circle' | 'triangle' | 'square' | 'diamond' | 'hexagon';
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  moveX: number;
  moveY: number;
  moveSpeedX: number;
  moveSpeedY: number;
  color: string;
  opacity: number;
}

const GeometricPatterns: React.FC<GeometricPatternsProps> = ({
  density = 'medium',
  speed = 'medium',
  opacity = 0.6,
  colors = ['#4a90e2', '#2c5aa0', '#357abd', '#74a9ff', '#9bb8ff'],
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const densityMap = { low: 8, medium: 15, high: 25 };
    const speedMap = { slow: 0.3, medium: 0.6, fast: 1.2 };
    const shapeTypes: Shape['type'][] = ['circle', 'triangle', 'square', 'diamond', 'hexagon'];

    const drawShape = (ctx: CanvasRenderingContext2D, shape: Shape) => {
      ctx.save();
      ctx.globalAlpha = shape.opacity;
      ctx.fillStyle = shape.color;
      ctx.strokeStyle = shape.color;
      ctx.lineWidth = 2;
      
      ctx.translate(shape.x, shape.y);
      ctx.rotate((shape.rotation * Math.PI) / 180);

      const halfSize = shape.size / 2;

      switch (shape.type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, halfSize, 0, Math.PI * 2);
          ctx.stroke();
          break;

        case 'square':
          ctx.strokeRect(-halfSize, -halfSize, shape.size, shape.size);
          break;

        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -halfSize);
          ctx.lineTo(-halfSize, halfSize);
          ctx.lineTo(halfSize, halfSize);
          ctx.closePath();
          ctx.stroke();
          break;

        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(0, -halfSize);
          ctx.lineTo(halfSize, 0);
          ctx.lineTo(0, halfSize);
          ctx.lineTo(-halfSize, 0);
          ctx.closePath();
          ctx.stroke();
          break;

        case 'hexagon':
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = halfSize * Math.cos(angle);
            const y = halfSize * Math.sin(angle);
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const shapeCount = densityMap[density];
    const shapes: Shape[] = Array.from({ length: shapeCount }, (_, index) => {
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const size = Math.random() * 60 + 20;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      return {
        id: index,
        type,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * speedMap[speed] * 2,
        moveX: Math.random() * canvas.width,
        moveY: Math.random() * canvas.height,
        moveSpeedX: (Math.random() - 0.5) * speedMap[speed] * 0.5,
        moveSpeedY: (Math.random() - 0.5) * speedMap[speed] * 0.5,
        color,
        opacity: Math.random() * opacity + 0.1
      };
    });

    shapesRef.current = shapes;

    const animateShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach(shape => {
        shape.rotation += shape.rotationSpeed;
        shape.moveX += shape.moveSpeedX;
        shape.moveY += shape.moveSpeedY;
        
        shape.x = shape.moveX + Math.sin(Date.now() * 0.001 + shape.id) * 30;
        shape.y = shape.moveY + Math.cos(Date.now() * 0.0008 + shape.id) * 20;

        if (shape.moveX > canvas.width + shape.size) {
          shape.moveX = -shape.size;
        } else if (shape.moveX < -shape.size) {
          shape.moveX = canvas.width + shape.size;
        }

        if (shape.moveY > canvas.height + shape.size) {
          shape.moveY = -shape.size;
        } else if (shape.moveY < -shape.size) {
          shape.moveY = canvas.height + shape.size;
        }

        shape.opacity += Math.sin(Date.now() * 0.002 + shape.id) * 0.001;
        shape.opacity = Math.max(0.1, Math.min(opacity, shape.opacity));

        drawShape(ctx, shape);
      });

      animationRef.current = requestAnimationFrame(animateShapes);
    };

    animateShapes();

    const handleResize = () => {
      const newWidth = parent.clientWidth;
      const newHeight = parent.clientHeight;
      
      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, speed, opacity, colors]);

  return (
    <div className={`geometric-patterns ${className}`}>
      <canvas ref={canvasRef} className="geometric-canvas" />
    </div>
  );
};

export default GeometricPatterns;
