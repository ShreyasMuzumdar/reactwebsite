import { useEffect, useRef } from 'react';
import './BlobCursor.css';

const BlobCursor = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <div ref={blobRef} className="blob-cursor"></div>;
};

export default BlobCursor;
