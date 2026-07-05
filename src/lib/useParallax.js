import { useEffect, useState } from 'react';

// Returns normalized -1..1 offsets based on pointer position relative to
// viewport center. Falls back to (0,0) on touch devices / reduced motion.
export function useParallax(strength = 1) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    function handleMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x: x * strength, y: y * strength });
    }
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [strength]);

  return offset;
}
