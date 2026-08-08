import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import NoirBackground from "./NoirBackground";
import FloatingBragBox from "./FloatingBragBox";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black px-10">
      <NoirBackground />

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-[11vw] lg:text-[7.5vw] font-black font-sora text-white leading-[0.85] tracking-[ -0.04em] uppercase"
          >
            Digital <br />
            <span className="text-[#F7B71D]">Excellence®</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg font-manrope text-white/50 max-w-md leading-relaxed tracking-wide"
          >
            A high-end studio building digital identities engineered for the
            next generation of global brands.
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-6 text-white font-bold uppercase tracking-[0.3em] text-xs"
            >
              Start Project
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F7B71D] group-hover:text-black transition-all">
                ↗
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <FloatingBragBox />
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-[9px] text-white/20 font-bold uppercase tracking-[0.4em]">
        <span>Scroll to Explore</span>
        <span>Est. 2014 — Rah Pixels</span>
      </div>
    </section>
  );
};

export default Hero;
