// src\components\layout\Navbar.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-6 right-6 z-100 flex justify-between items-start pointer-events-none">
      <div className="flex pointer-events-auto shadow-2xl">
        {/* LOGO BLOCK */}
        <a
          href="/#top"
          className="h-14 px-8 bg-[#34164F] flex items-center justify-center text-[#F7B71D] font-heading font-black text-xl hover:bg-black transition-colors border-r border-white/10"
        >
          RAH
        </a>

        {/* MENU BLOCK */}
        <motion.div
          animate={{ width: isOpen ? "auto" : "110px" }}
          className="h-14 bg-[#F7B71D] flex items-center overflow-hidden"
        >
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="w-full h-full px-6 font-sans font-bold uppercase text-[12px] tracking-[0.2em] text-[#34164F] cursor-pointer hover:bg-white transition-colors"
            >
              Menu
            </button>
          ) : (
            <div className="flex items-center gap-8 px-8 whitespace-nowrap">
              {["Home", "Work", "Services", "Studio", "Social", "Contact"].map((item) => {
                const href = item === "Home" ? "/#top" : item === "Social" ? "/social" : `/#${item.toLowerCase()}`;
                return (
                  <a
                    key={item}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-[#34164F] font-sans font-bold uppercase text-[11px] hover:opacity-50 transition-opacity"
                  >
                    {item}
                  </a>
                );
              })}
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#34164F] font-bold text-lg cursor-pointer ml-4"
              >
                ✕
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* RIGHT MODULAR BLOCK */}
      <div className="pointer-events-auto hidden md:block shadow-2xl" style={{ perspective: "1000px" }}>
        <div onClick={() => setIsContactModalOpen(true)} className="block">
          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative h-14 cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Invisible placeholder to maintain exact button size */}
            <div className="px-8 h-full flex items-center justify-center font-bold uppercase text-[12px] tracking-widest opacity-0 pointer-events-none">
              Let's talk ↗
            </div>

            {/* Front Face (White) */}
            <motion.div
              className="absolute inset-0 bg-white text-black font-bold uppercase text-[12px] tracking-widest flex items-center justify-center origin-bottom"
              variants={{
                initial: { rotateX: 0, opacity: 1 },
                hover: { rotateX: 90, opacity: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Let's talk ↗
            </motion.div>

            {/* Bottom Face (Blue) */}
            <motion.div
              className="absolute inset-0 bg-[#0022FF] text-white font-bold uppercase text-[12px] tracking-widest flex items-center justify-center origin-top"
              variants={{
                initial: { rotateX: -90, opacity: 0 },
                hover: { rotateX: 0, opacity: 1 }
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Let's talk ↗
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
