import React, { useEffect, useRef } from 'react';
import './ChromaGrid.css';

interface ChromaGridProps {
  gridSize?: number;
  animationSpeed?: 'slow' | 'medium' | 'fast';
  colorIntensity?: 'low' | 'medium' | 'high';
  opacity?: number;
  colors?: string[];
  className?: string;
}

interface GridCell {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  phase: number;
  pulseSpeed: number;
  glowIntensity: number;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  gridSize = 40,
  animationSpeed = 'medium',
  colorIntensity = 'medium',
  opacity = 0.7,
  colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b', '#fb5607'],
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<GridCell[]>([]);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const speedMap = { slow: 0.005, medium: 0.01, fast: 0.02 };
    const intensityMap = { low: 0.3, medium: 0.6, high: 1.0 };
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    // Setup canvas with proper sizing and DPI handling
    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = parent.clientWidth;
      const displayHeight = parent.clientHeight;
      
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = displayWidth + 'px';
      canvas.style.height = displayHeight + 'px';

      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      ctx.scale(dpr, dpr);
      return { ctx, width: displayWidth, height: displayHeight };
    };

    const setup = setupCanvas();
    if (!setup) return;
    
    const { ctx, width, height } = setup;

    // Create grid cells
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);
    const cells: GridCell[] = [];

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        cells.push({
          x: i * gridSize,
          y: j * gridSize,
          size: gridSize,
          color,
          alpha: Math.random() * 0.5 + 0.1,
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          glowIntensity: Math.random() * intensityMap[colorIntensity]
        });
      }
    }

    cellsRef.current = cells;

    const animate = () => {
      timeRef.current += speedMap[animationSpeed];
      
      ctx.clearRect(0, 0, width, height);

      cellsRef.current.forEach((cell, index) => {
        // Calculate pulsing alpha
        const pulseOffset = Math.sin(timeRef.current * 20 + cell.phase + index * 0.1);
        const currentAlpha = (cell.alpha + pulseOffset * 0.2) * opacity;
        
        // Calculate color variations
        const hueShift = Math.sin(timeRef.current * 10 + index * 0.05) * 30;
        const saturation = 70 + Math.sin(timeRef.current * 15 + index * 0.1) * 30;
        const lightness = 50 + Math.sin(timeRef.current * 12 + index * 0.08) * 20;
        
        // Create gradient for each cell
        const gradient = ctx.createRadialGradient(
          cell.x + cell.size / 2, cell.y + cell.size / 2, 0,
          cell.x + cell.size / 2, cell.y + cell.size / 2, cell.size * 0.8
        );

        // Parse original color and apply hue shift
        const originalHue = getHueFromColor(cell.color);
        const newHue = (originalHue + hueShift) % 360;
        
        gradient.addColorStop(0, `hsla(${newHue}, ${saturation}%, ${lightness}%, ${currentAlpha})`);
        gradient.addColorStop(0.7, `hsla(${newHue}, ${saturation * 0.8}%, ${lightness * 0.7}%, ${currentAlpha * 0.6})`);
        gradient.addColorStop(1, `hsla(${newHue}, ${saturation * 0.4}%, ${lightness * 0.4}%, 0)`);

        ctx.fillStyle = gradient;
        
        // Add glow effect
        ctx.shadowBlur = cell.glowIntensity * 20 * (1 + pulseOffset * 0.5);
        ctx.shadowColor = `hsla(${newHue}, ${saturation}%, ${lightness}%, ${currentAlpha * 0.8})`;
        
        // Draw cell with rounded corners
        ctx.beginPath();
        const radius = 4;
        const x = cell.x + 2;
        const y = cell.y + 2;
        const w = cell.size - 4;
        const h = cell.size - 4;
        
        // Manual rounded rectangle path
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + w - radius, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
        ctx.lineTo(x + w, y + h - radius);
        ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
        ctx.lineTo(x + radius, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
        
        // Add border effect on some cells
        if (index % 7 === 0) {
          ctx.strokeStyle = `hsla(${newHue}, ${saturation}%, ${lightness + 20}%, ${currentAlpha * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Utility function to extract hue from hex color
    function getHueFromColor(color: string): number {
      // Simple hue extraction - this is a basic implementation
      const colorMap: { [key: string]: number } = {
        '#ff006e': 320,
        '#8338ec': 270,
        '#3a86ff': 210,
        '#06ffa5': 160,
        '#ffbe0b': 45,
        '#fb5607': 15
      };
      return colorMap[color] || Math.random() * 360;
    }

    animate();

    const handleResize = () => {
      const newSetup = setupCanvas();
      if (newSetup) {
        // Recreate grid for new dimensions
        const { width: newWidth, height: newHeight } = newSetup;
        const newCols = Math.ceil(newWidth / gridSize);
        const newRows = Math.ceil(newHeight / gridSize);
        
        const newCells: GridCell[] = [];
        for (let i = 0; i < newCols; i++) {
          for (let j = 0; j < newRows; j++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            newCells.push({
              x: i * gridSize,
              y: j * gridSize,
              size: gridSize,
              color,
              alpha: Math.random() * 0.5 + 0.1,
              phase: Math.random() * Math.PI * 2,
              pulseSpeed: Math.random() * 0.02 + 0.01,
              glowIntensity: Math.random() * intensityMap[colorIntensity]
            });
          }
        }
        cellsRef.current = newCells;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gridSize, animationSpeed, colorIntensity, opacity, colors]);

  return (
    <div className={`chroma-grid ${className}`}>
      <canvas ref={canvasRef} className="chroma-canvas" />
    </div>
  );
};

export default ChromaGrid;
