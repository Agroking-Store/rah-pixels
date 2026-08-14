import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import ShowcaseCollage from '../ui/CardSwap';
import { SLIDES } from '../../data/servicesData';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import ContactModal from './ContactModal';

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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const total = SLIDES.length;

  const prevIndex = (activeServiceIndex - 1 + total) % total;
  const nextIndex = (activeServiceIndex + 1) % total;

  const navigatePrev = () => {
    setDirection(-1);
    setActiveServiceIndex(prevIndex);
  };

  const navigateNext = () => {
    setDirection(1);
    setActiveServiceIndex(nextIndex);
  };

  const navigateToService = (index: number, dir: number) => {
    setDirection(dir);
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
  const prevService = SLIDES[prevIndex];
  const nextService = SLIDES[nextIndex];

  return (
    <section className="bg-[#13071C] py-24 relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <h2 className="text-[32px] font-sora font-extrabold text-white mb-0">
            Our Services
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-manrope text-[18px] font-medium">
            Comprehensive brand solutions designed to elevate your business.
          </p>
        </motion.div>

        <div className="w-full relative overflow-hidden">
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
                imageName={currentService.imageName}
                ctaText={currentService.ctaText}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Services Navigation Switcher Bar */}
        <div className="relative z-40 w-auto max-w-max mx-auto mt-14">
          <div className="bg-[#150721]/95 backdrop-blur-md text-white p-2 flex items-center space-x-2 md:space-x-4 rounded-xl lg:rounded-none">
            
            {/* Mobile Previous Arrow */}
            <button
              onClick={navigatePrev}
              className="p-2 hover:bg-white/10 text-white transition-colors flex-shrink-0 cursor-pointer rounded-lg lg:hidden"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Left section (Desktop only) */}
            <div className="hidden lg:flex relative items-center justify-between min-w-[320px]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-[#7A4DFF] shadow-[0_0_15px_rgba(122,77,255,0.6)] z-50" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-[#7A4DFF] shadow-[0_0_15px_rgba(122,77,255,0.6)] z-50" />
              {/* Previous chevron */}
              <button
                onClick={navigatePrev}
                className="p-2 hover:bg-white/10 text-white transition-colors flex-shrink-0 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Previous service */}
              <button
                onClick={() => navigateToService(prevIndex, -1)}
                className="flex-1 text-center px-4 py-2 text-[16px] font-manrope font-semibold text-white/50 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
              >
                {prevService.title}
              </button>
            </div>

            {/* Current service (active) - CTA button */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-4 lg:px-6 py-2.5 text-[14px] lg:text-[16px] font-manrope font-semibold bg-[#F7B71D] text-[#13071C] shadow-lg whitespace-nowrap cursor-pointer flex items-center space-x-2 transition-all hover:bg-white hover:scale-105 active:scale-95 rounded-lg lg:rounded-none"
            >
              <span>Explore</span>
              <span className="hidden sm:inline">{currentService.title}</span>
              <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>

            {/* Right section (Desktop only) */}
            <div className="hidden lg:flex relative items-center justify-between min-w-[320px]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7A4DFF] to-transparent shadow-[0_0_15px_rgba(122,77,255,0.6)] z-50" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7A4DFF] to-transparent shadow-[0_0_15px_rgba(122,77,255,0.6)] z-50" />
              {/* Next service */}
              <button
                onClick={() => navigateToService(nextIndex, 1)}
                className="flex-1 text-center px-4 py-2 text-[16px] font-manrope font-semibold text-white/50 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
              >
                {nextService.title}
              </button>

              {/* Next chevron */}
              <button
                onClick={navigateNext}
                className="p-2 hover:bg-white/10 text-white transition-colors flex-shrink-0 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Next Arrow */}
            <button
              onClick={navigateNext}
              className="p-2 hover:bg-white/10 text-white transition-colors flex-shrink-0 cursor-pointer rounded-lg lg:hidden"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};

export default OurServices;
