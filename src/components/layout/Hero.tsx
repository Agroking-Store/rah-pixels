// src\components\layout\Hero.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#13071C] overflow-hidden">
    {/* MOVING GRID */}
    <motion.div
      animate={{ y: [0, -60] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: `linear-gradient(#F7B71D 1px, transparent 1px), linear-gradient(90deg, #F7B71D 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,22,79,0.4)_0%,transparent_70%)]" />

    {/* CONTENT AREA WITH CONSTANT GAPS */}
    <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-center px-6">
      {/* 1. Digital Studio Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block border border-[#F7B71D]/40 px-8 py-3"
      >
        <span className="text-[#F7B71D] font-sans font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs leading-none">
          Digital Studio
        </span>
      </motion.div>

      {/* 2. RAH PIXEL & Designing Brands */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col gap-6" // Slightly tighter gap for these two specifically as they are a unit
      >
        <h1 className="text-white text-6xl md:text-[11vw] font-heading font-black uppercase tracking-tighter leading-none">
          RAH PIXEL
        </h1>
        <h2 className="text-[#F7B71D] text-4xl md:text-[6vw] font-heading font-black uppercase tracking-tight leading-none">
          Designing Brands
        </h2>
      </motion.div>

      {/* 3. Slogan */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-white font-sans text-lg md:text-xl max-w-2xl mx-auto font-bold uppercase tracking-widest leading-none"
      >
        Precision in every pixel, growth in every design.
      </motion.p>

      {/* 4. Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-7"
      >
        <Link
          to="/contact"
          className="px-16 py-6 bg-[#F7B71D] text-[#13071C] font-sans font-bold uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-xl leading-none"
        >
          Start Project ↗
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Hero;
