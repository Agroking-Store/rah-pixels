import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#13071C] overflow-hidden">
        {/* MOVING GRID */}
        <motion.div
          animate={{ y: [0, -60] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(#F7B71D 1px, transparent 1px), linear-gradient(90deg, #F7B71D 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* SUBTLE GLOW DEPTH */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,22,79,0.2)_0%,transparent_70%)]" />

        {/* CONTENT AREA */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-center px-6">
          {/* Digital Studio Label*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block border-2 border-[#F7B71D] px-8 py-3 shadow-[0_0_20px_rgba(247,183,29,0.15)]"
          >
            <span className="text-[#F7B71D] font-sans font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs leading-none">
              Digital Studio
            </span>
          </motion.div>

          {/*RAH PIXEL & Designing Brands */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-white text-6xl md:text-[11vw] font-heading font-black uppercase tracking-tighter leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              RAH PIXELS
            </h1>
            <h2 className="text-[#F7B71D] text-4xl md:text-[6vw] font-heading font-black uppercase tracking-tight leading-none shadow-[#F7B71D]/20 drop-shadow-lg">
              Designing Brands
            </h2>
          </motion.div>

          {/* Slogan - Solid White */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white font-sans text-lg md:text-xl max-w-2xl mx-auto font-bold uppercase tracking-widest leading-none drop-shadow-md"
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
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-16 py-6 bg-[#F7B71D] text-[#13071C] font-sans font-bold uppercase text-xs tracking-[0.3em] hover:bg-white hover:scale-105 transition-all shadow-[0_10px_40px_rgba(247,183,29,0.3)] leading-none cursor-pointer"
            >
              Explore Rah ↗
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </AnimatePresence>
    </>
  );
};

export default Hero;

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   const projects = [
//     {
//       id: 1,
//       pos: "top-[12%] left-[8%]",
//       img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800",
//     },
//     {
//       id: 2,
//       pos: "top-[15%] right-[10%]",
//       img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
//     },
//     {
//       id: 3,
//       pos: "top-[40%] left-[4%]",
//       img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
//     },
//     {
//       id: 4,
//       pos: "top-[45%] right-[5%]",
//       img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800",
//     },
//     {
//       id: 5,
//       pos: "bottom-[18%] left-[12%]",
//       img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800",
//     },
//     {
//       id: 6,
//       pos: "bottom-[12%] right-[15%]",
//       img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
//     },
//   ];

//   return (
//     <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#13071C] overflow-hidden">
//       {/* MOVING BACKGROUND GRID */}
//       <motion.div
//         animate={{ y: [0, -60] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//         className="absolute inset-0 opacity-[0.1]"
//         style={{
//           backgroundImage: `linear-gradient(#F7B71D 1px, transparent 1px), linear-gradient(90deg, #F7B71D 1px, transparent 1px)`,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* SCATTERED INTERACTIVE IMAGE TILES */}
//       {projects.map((project, index) => (
//         <motion.div
//           key={project.id}
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
//           className={`absolute ${project.pos} z-20 group hidden md:block`}
//         >
//           <motion.div
//             whileHover={{
//               scale: 4,
//               zIndex: 50,
//               boxShadow: "0px 0px 40px rgba(0,0,0,0.8)",
//             }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//             className="w-16 h-16 lg:w-20 lg:h-20 border-2 border-[#F7B71D] overflow-hidden bg-[#1F2430] cursor-zoom-in"
//           >
//             <img
//               src={project.img}
//               alt="Project Showcase"
//               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//             />
//           </motion.div>
//         </motion.div>
//       ))}

//       {/* MAIN CENTER CONTENT */}
//       <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-center px-6 pointer-events-none">
//         {/* Label */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="inline-block border-2 border-[#F7B71D] px-8 py-3"
//         >
//           <span className="text-[#F7B71D] font-sans font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs">
//             Digital Studio
//           </span>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="flex flex-col gap-6"
//         >
//           <h1 className="text-white text-6xl md:text-[10vw] font-heading font-black uppercase tracking-tighter leading-none drop-shadow-2xl">
//             RAH PIXEL
//           </h1>
//           <h2 className="text-[#F7B71D] text-4xl md:text-[5vw] font-heading font-black uppercase tracking-tight leading-none">
//             Designing Brands
//           </h2>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.8 }}
//           className="text-white font-sans text-lg md:text-xl max-w-2xl mx-auto font-bold uppercase tracking-widest leading-none drop-shadow-md"
//         >
//           Precision in every pixel, growth in every design.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="mt-8 pointer-events-auto"
//         >
//           <Link
//             to="/contact"
//             className="px-16 py-6 bg-[#F7B71D] text-[#13071C] font-sans font-bold uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-[0_10px_30px_rgba(247,183,29,0.3)] leading-none"
//           >
//             Start Project ↗
//           </Link>
//         </motion.div>
//       </div>

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,22,79,0.3)_0%,transparent_70%)] pointer-events-none" />
//     </section>
//   );
// };

// export default Hero;
