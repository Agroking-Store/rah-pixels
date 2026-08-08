import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShowcaseCollage from '../ui/CardSwap'; 
import { SLIDES } from '../../data/hugeData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const MagicBento: React.FC<BentoProps> = (props) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const navigateToService = (index: number) => {
    setDirection(index > activeServiceIndex ? 1 : -1);
    setActiveServiceIndex(index);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100vw' : '-100vw',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100vw' : '-100vw',
      opacity: 0,
    }),
  };

  const currentService = SLIDES[activeServiceIndex];

  return (
    <div className="w-full relative min-h-[100vh] flex flex-col justify-center py-20 overflow-hidden bg-black">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentService.sectionNumber}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 18,
            bounce: 0.2,
            mass: 0.8,
          }}
          className="w-full flex justify-center"
        >
          <ShowcaseCollage
            sectionNumber={currentService.sectionNumber}
            title={currentService.title}
            bodyText={currentService.bodyText}
          />
        </motion.div>
      </AnimatePresence>

      {/* Services Navigation Switcher Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 bg-[#111] text-white p-1.5 md:p-2 rounded-full shadow-2xl border border-white/10 flex items-center space-x-1 sm:space-x-2">
        <button
          onClick={() => navigateToService(Math.max(0, activeServiceIndex - 1))}
          disabled={activeServiceIndex === 0}
          className="p-1.5 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {SLIDES.map((slide, idx) => {
          const isActive = activeServiceIndex === idx;
          return (
            <button
              key={slide.sectionNumber}
              onClick={() => navigateToService(idx)}
              className={`px-3 md:px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all flex items-center space-x-1.5 ${
                isActive
                  ? 'bg-[#FF006E] text-black scale-105 shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{slide.sectionNumber}</span>
              <span className="hidden md:inline">{slide.title.split('&')[0]}</span>
            </button>
          );
        })}

        <button
          onClick={() => navigateToService(Math.min(SLIDES.length - 1, activeServiceIndex + 1))}
          disabled={activeServiceIndex === SLIDES.length - 1}
          className="p-1.5 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent text-white transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MagicBento;
