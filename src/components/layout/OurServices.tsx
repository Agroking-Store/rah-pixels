import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import ShowcaseCollage from '../ui/CardSwap';
import { SLIDES } from '../../data/servicesData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const OurServices = () => {
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
    <section className="bg-[#13071C] py-24 relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10"
        >
          <h2 className="text-[32px] font-sora font-extrabold text-white mb-2">
            Our Services
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-manrope text-[18px] font-medium">
            Comprehensive brand solutions designed to elevate your business.
          </p>
        </motion.div>

        {/* MagicBento merged content */}
        <div className="w-full relative flex flex-col justify-start pt-4 pb-40 overflow-hidden">
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
                subtitle={currentService.subtitle}
                features={currentService.features}
              />
            </motion.div>
          </AnimatePresence>

          {/* Services Navigation Switcher Bar */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 w-[95vw] md:w-auto md:max-w-max">
            {/* Top glowing line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#7A4DFF] to-transparent shadow-[0_0_15px_rgba(122,77,255,0.6)] z-50" />
            
            {/* Bottom glowing line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#7A4DFF] to-transparent shadow-[0_0_15px_rgba(122,77,255,0.6)] z-50" />

            <div className="bg-[#150721]/95 backdrop-blur-md text-white p-1.5 md:p-2 flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar w-full">
              <button
                onClick={() => navigateToService(Math.max(0, activeServiceIndex - 1))}
                disabled={activeServiceIndex === 0}
                className="p-1.5 rounded-none hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent text-white transition-colors flex-shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {SLIDES.map((slide, idx) => {
                const isActive = activeServiceIndex === idx;
                return (
                  <button
                    key={slide.sectionNumber}
                    onClick={() => navigateToService(idx)}
                    className={`px-3 md:px-4 py-2 rounded-none text-[16px] font-manrope font-semibold transition-all flex items-center space-x-1.5 whitespace-nowrap flex-shrink-0 ${isActive
                        ? 'bg-[#F7B71D] text-[#13071C] scale-105 shadow-md'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <span>{slide.title}</span>
                  </button>
                );
              })}

              <button
                onClick={() => navigateToService(Math.min(SLIDES.length - 1, activeServiceIndex + 1))}
                disabled={activeServiceIndex === SLIDES.length - 1}
                className="p-1.5 rounded-none hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent text-white transition-colors flex-shrink-0"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
