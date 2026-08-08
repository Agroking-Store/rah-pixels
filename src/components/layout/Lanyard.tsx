import React from 'react';
import { motion } from 'framer-motion';

export const WavyCorals: React.FC = () => {
  const lines = Array.from({ length: 16 }).map((_, i) => {
    const space = i * 45;
    
    // Start at right edge, curve towards bottom-left
    const startX = 1200;
    const startY = -400 + space * 2;
    
    const cp1x = 800 - space * 0.8;
    const cp1y = 200 + space * 1.5;
    
    const cp2x = 300 - space * 1.2;
    const cp2y = 700 + space;
    
    const endX = -400;
    const endY = 1000 + space;

    const p1 = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
    
    // Shift control points for smooth animation
    const m_cp1x = 750 - space * 0.8;
    const m_cp1y = 250 + space * 1.5;
    
    const m_cp2x = 350 - space * 1.2;
    const m_cp2y = 650 + space;

    const p2 = `M ${startX} ${startY} C ${m_cp1x} ${m_cp1y}, ${m_cp2x} ${m_cp2y}, ${endX} ${endY}`;
    
    return { p1, p2, duration: 25 + (i % 3) * 3, delay: i * -2 };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1] opacity-70 mix-blend-screen">
      <svg 
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="xMaxYMax slice" 
        className="absolute right-0 top-0 w-full h-full"
      >
        <g fill="none" stroke="#9D00FF" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round">
          {lines.map((line, i) => (
            <motion.path
              key={i}
              d={line.p1}
              animate={{ d: [line.p1, line.p2, line.p1] }}
              transition={{
                duration: line.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: line.delay
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default WavyCorals;
