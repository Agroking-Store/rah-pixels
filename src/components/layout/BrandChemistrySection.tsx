import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WavyCorals from './Lanyard'; // Remember we renamed the inner component but the file is still Lanyard.tsx

export const BrandChemistrySection = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // 0.0 -> top enters bottom of viewport
  // 0.33 -> top reaches top of viewport
  // 0.66 -> bottom reaches bottom of viewport
  // 1.0 -> bottom reaches top of viewport

  // 4. "We believe —" Sequence
  const weBelieveY = useTransform(scrollYProgress, [0.1, 0.33, 0.5, 0.66], ['20vh', '0vh', '0vh', '-20vh']);
  const weBelieveOpacity = useTransform(scrollYProgress, [0.1, 0.33, 0.45, 0.66], [0, 1, 1, 0]);
  const weBelieveBlur = useTransform(scrollYProgress, [0.1, 0.33], ['blur(20px)', 'blur(0px)']);

  // 5. Final IX Section
  const finalSectionY = useTransform(scrollYProgress, [0.45, 0.66], ['20vh', '0vh']);
  const finalSectionOpacity = useTransform(scrollYProgress, [0.45, 0.66], [0, 1]);

  const boxPathLength = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  const text1Opacity = useTransform(scrollYProgress, [0.5, 0.66], [0, 1]);
  const text1Y = useTransform(scrollYProgress, [0.5, 0.66], ['20px', '0px']);

  const text2Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const text2Y = useTransform(scrollYProgress, [0.6, 0.7], ['20px', '0px']);
  const text2Blur = useTransform(scrollYProgress, [0.6, 0.7], ['blur(12px)', 'blur(0px)']);

  const weCallThisOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.75, 0.85], [0, 1, 1, 0]);
  const weCallThisBlur = useTransform(scrollYProgress, [0.6, 0.7, 0.75, 0.85], ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)']);
  const weCallThisScale = useTransform(scrollYProgress, [0.6, 0.7, 0.75, 0.85], [0.9, 1, 1, 1.1]);

  const ixOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const ixBlur = useTransform(scrollYProgress, [0.8, 0.9], ['blur(12px)', 'blur(0px)']);
  const ixScale = useTransform(scrollYProgress, [0.8, 0.95], [0.9, 1]);

  const blobOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="h-[200vh] w-full relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center p-4 md:p-12 lg:p-16 select-none">
        
        {/* LAYER 4: Giant Title "We believe —" */}
        <motion.div
          style={{ y: weBelieveY, opacity: weBelieveOpacity, filter: weBelieveBlur }}
          className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[160px] font-extrabold tracking-tighter text-white leading-none font-sans">
            We believe —
          </h2>
        </motion.div>

        {/* LAYER 5: Final IX Section */}
        <motion.div
          style={{ y: finalSectionY, opacity: finalSectionOpacity }}
          className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none px-4 md:px-12"
        >
          {/* Wavy Corals Background */}
          <motion.div style={{ opacity: blobOpacity }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
             <WavyCorals />
          </motion.div>

          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-20">
            
            {/* Left Box Display */}
            <div className="relative aspect-square md:aspect-[4/3] max-w-lg mx-auto w-full flex items-center justify-center">
              {/* SVG Animated Border */}
              <svg className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="box-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF006E" />
                    <stop offset="100%" stopColor="#8A2BE2" />
                  </linearGradient>
                </defs>
                <motion.rect
                  x="0" y="0" width="100%" height="100%"
                  fill="none"
                  stroke="url(#box-gradient)"
                  strokeWidth="2"
                  style={{ pathLength: boxPathLength }}
                />
              </svg>

              {/* Ambient Purple Blob */}
              <motion.div
                style={{ opacity: blobOpacity }}
                className="absolute inset-0 z-0 flex items-center justify-center"
              >
                <div className="w-[140%] h-[140%] bg-[#9D00FF] rounded-full blur-[100px] opacity-30 mix-blend-screen" />
                <div className="absolute w-[100%] h-[100%] bg-[#FF006E] rounded-full blur-[80px] opacity-20 mix-blend-screen" />
              </motion.div>

              {/* Initial Text: We call this */}
              <motion.div
                style={{ opacity: weCallThisOpacity, filter: weCallThisBlur, scale: weCallThisScale }}
                className="absolute z-10 text-white font-medium text-3xl md:text-5xl tracking-tight"
              >
                We call this
              </motion.div>

              {/* Final Text: IX */}
              <motion.div
                style={{ opacity: ixOpacity, filter: ixBlur, scale: ixScale }}
                className="absolute z-10 flex flex-col justify-between h-full p-8 md:p-12 w-full text-white"
              >
                <div className="text-3xl md:text-5xl font-bold tracking-tight">
                  Intelligent<br />Experiences
                </div>
                <div className="text-[120px] md:text-[200px] font-medium leading-none tracking-tighter">
                  IX
                </div>
              </motion.div>
            </div>

            {/* Right Text Content */}
            <div className="flex flex-col justify-center space-y-12 max-w-xl">
              <motion.div
                style={{ opacity: text1Opacity, y: text1Y }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight"
              >
                The future will be defined by intelligent interactions between brands and users.
              </motion.div>

              <motion.div
                style={{ opacity: text2Opacity, y: text2Y, filter: text2Blur }}
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-400 tracking-tight leading-tight"
              >
                This next wave of experiences will be <span className="bg-gradient-to-r from-[#FF006E] to-[#8A2BE2] text-transparent bg-clip-text font-bold">anticipatory, personalized and conversational.</span>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BrandChemistrySection;