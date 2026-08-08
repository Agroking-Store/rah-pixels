import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Link } from "react-router-dom";
import MoltenMetal from "./MoltenMetal";

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Hero = () => {
  // Ultra-Flexible Mouse Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Increased rotation range for more "flexibility"
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [25, -25]), {
    damping: 25,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-25, 25]), {
    damping: 25,
    stiffness: 200,
  });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    x.set(event.clientX / innerWidth - 0.5);
    y.set(event.clientY / innerHeight - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black px-6 pt-20"
    >
      {/* BACKGROUND MESH */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <MoltenMetal
          color1="#000000"
          color2="#0022FF"
          color3="#00D1FF"
          speed={0.4}
          scale={3}
          glow={2.5}
        />
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-30 w-full text-center flex flex-col items-center"
      >
        {/* RAH LOGO - Positioned lower with mt-24 and high-tilt */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          variants={popIn}
          className="relative px-16 py-10 md:px-24 md:py-14 border border-white/10 bg-black/50 backdrop-blur-3xl mt-24 mb-16 shadow-[0_0_60px_rgba(0,34,255,0.15)] group"
        >
          <h1
            style={{ transform: "translateZ(60px)" }}
            className="text-[16vw] md:text-[10vw] font-black font-sora text-white leading-none tracking-tighter uppercase select-none"
          >
            RAH
          </h1>
          {/* Inner dynamic glow */}
          <div className="absolute inset-0 bg-[#0022FF]/10 blur-3xl -z-10 group-hover:bg-[#0022FF]/30 transition-all duration-500" />
        </motion.div>

        {/* HEADLINE SECTION */}
        <motion.div variants={popIn} className="space-y-8">
          <h2 className="text-4xl md:text-7xl font-black font-sora text-white uppercase tracking-tight">
            Designing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#0022FF]">
              Branding®
            </span>
          </h2>

          <p className="text-white/50 font-manrope max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Building premium digital identities engineered for high-growth
            global brands.
          </p>

          {/* CLEAR ACTION BUTTON */}
          <div className="flex justify-center pt-8">
            <Link
              to="/contact"
              className="relative z-50 px-16 py-6 bg-[#0022FF] text-white font-black uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:text-black transition-all duration-300 shadow-2xl cursor-pointer"
            >
              Start Project ↗
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* BOTTOM SHADOW GRADIENT (Subtle) */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black via-black/90 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
