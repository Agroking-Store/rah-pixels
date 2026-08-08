import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhatWeDo = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const heroOpacity = useTransform(scrollYProgress, [0.0, 0.2, 0.4, 0.6], [0, 1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0.0, 0.2, 0.4, 0.6], ['15vh', '0vh', '0vh', '-15vh']);

  const subtextOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 1.0], [0, 1, 1, 0]);
  const subtextY = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 1.0], ['20vh', '0vh', '0vh', '-20vh']);
  const subtextBlur = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 1.0], ['blur(24px)', 'blur(0px)', 'blur(0px)', 'blur(16px)']);

  return (
    <section ref={containerRef} className="h-[250vh] bg-black relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Subtle dot grid canvas background */}
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-20" />

        {/* LAYER 1: Giant Title "What we do —" */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute top-12 left-4 md:top-24 md:left-12 lg:left-20 z-10 flex flex-col items-start pointer-events-none"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[80px] xl:text-[100px] font-extrabold tracking-tighter text-white leading-none font-sans">
            What we do —
          </h1>
        </motion.div>

        {/* LAYER 2: Blurred -> Sharp -> Vertical Exit Subtext */}
        <motion.div
          style={{ y: subtextY, opacity: subtextOpacity, filter: subtextBlur }}
          className="absolute bottom-20 md:bottom-28 right-6 md:right-16 lg:right-24 z-20 max-w-xl md:max-w-2xl text-right pointer-events-none"
        >
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            We make things that matter to businesses, to brands, and to the people they serve.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeDo;