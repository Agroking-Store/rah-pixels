// src/components/layout/Hero.tsx
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import MoltenMetal from "./MoltenMetal";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <MoltenMetal
          color1="#5227FF"
          color2="#FF9FFC"
          color3="#FFFFFF"
          speed={0.35}
          scale={4}
          detail={3}
          glow={1.6}
          coreSize={0.1}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="molten"
          grain
          grainIntensity={0.05}
          mouseInteraction
          mouseStrength={0.3}
        />
      </div>

      {/* Content Layer */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-[12vw] md:text-[8vw] font-black font-sora text-white leading-[0.9] tracking-tighter uppercase"
        >
          Designing <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-white/20">
            Identities®
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl font-manrope text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          We turn high-growth ideas into brands people trust, remember, and
          recommend.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <Link
            to="/contact"
            className="px-10 py-5 bg-[#F7B71D] text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-colors cursor-pointer"
          >
            Start Project ↗
          </Link>
          <Link
            to="/projects"
            className="px-10 py-5 border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-colors cursor-pointer"
          >
            Our Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Brand Bar */}
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end border-t border-white/10 pt-6">
        <div className="hidden sm:flex gap-10">
          <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
            Available <span className="text-[#F7B71D] ml-2">●</span>
          </div>
          <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
            10+ Years Exp.
          </div>
        </div>
        <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
          Rah Pixels © 2024
        </div>
      </div>
    </section>
  );
};

export default Hero;
