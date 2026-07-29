import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.dataset.cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Hide custom cursor on mobile touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-blue-500/50 dark:border-violet-500/50"
        animate={{
          x: x - (isHovered ? 24 : 16),
          y: y - (isHovered ? 24 : 16),
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.15)' : 'rgba(0, 0, 0, 0)',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250,
          mass: 0.5,
        }}
        style={{
          width: 32,
          height: 32,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-blue-600 dark:bg-violet-400"
        animate={{
          x: x - 4,
          y: y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
        }}
        style={{
          width: 8,
          height: 8,
        }}
      />
    </>
  );
};
