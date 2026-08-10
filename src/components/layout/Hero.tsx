// src\components\layout\Hero.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#13071C] overflow-hidden">
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
    <div className="absolute inset-0 bg-linear-to-b from-[#13071C] via-transparent to-[#13071C]" />

    <div className="relative z-10 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-block border border-[#F7B71D]/40 px-8 py-3 mb-10 backdrop-blur-sm"
      >
        <span className="text-[#F7B71D] font-sans font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs">
          Digital Studio
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-white text-6xl md:text-[10vw] font-heading font-black uppercase tracking-tighter leading-[0.9]">
          RAH PIXEL
        </h1>
        <h2 className="text-[#F7B71D] text-4xl md:text-[6vw] font-heading font-extrabold uppercase tracking-tight mt-2">
          Designing Brands
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-8 text-white font-sans text-lg md:text-xl max-w-2xl mx-auto italic font-light"
      >
        "Precision in every pixel, growth in every design."
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12"
      >
        <Link
          to="/contact"
          className="px-12 py-5 bg-[#F7B71D] text-[#13071C] font-sans font-bold uppercase text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(247,183,29,0.2)]"
        >
          Start Project ↗
        </Link>
      </motion.div>
    </div>

    <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-[#F7B71D]/30 hidden md:block" />
    <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-[#F7B71D]/30 hidden md:block" />
  </section>
);

export default Hero;
