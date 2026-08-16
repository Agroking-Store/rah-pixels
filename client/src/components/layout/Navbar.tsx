// src\components\layout\Navbar.tsx
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 z-[100] flex justify-between items-start pointer-events-none">
      <div className="flex items-start pointer-events-auto shadow-2xl">
        {/* LOGO BLOCK */}
        <a
          href="/#top"
          className="h-12 md:h-14 px-5 md:px-8 bg-[#34164F] flex items-center justify-center text-[#F7B71D] font-heading font-black text-lg md:text-xl hover:bg-black transition-colors border-r border-white/10 shrink-0"
        >
          RAH
        </a>

        {/* MENU BLOCK */}
        <motion.div
          animate={{
            width: isOpen ? (isMobile ? "auto" : "auto") : (isMobile ? "80px" : "110px"),
            height: isOpen ? "auto" : (isMobile ? "48px" : "56px")
          }}
          className="bg-[#F7B71D] overflow-hidden shadow-xl"
        >
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="w-full h-full flex items-center justify-center font-sans font-bold uppercase text-[10px] md:text-[12px] tracking-[0.2em] text-[#34164F] cursor-pointer hover:bg-white transition-colors"
            >
              Menu
            </button>
          ) : (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 px-6 py-5 md:px-8 md:py-0 whitespace-nowrap min-h-[48px] md:min-h-[56px]">
              {["About", "Services", "Work", "Process", "Social"].map((item) => {
                const href = item === "Social" ? "/social" : `/#${item.toLowerCase()}`;
                return (
                  <a
                    key={item}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-[#34164F] font-sans font-bold uppercase text-[13px] md:text-[11px] hover:opacity-50 transition-opacity"
                  >
                    {item}
                  </a>
                );
              })}
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#34164F] font-bold text-lg md:text-xl cursor-pointer self-end md:self-auto mt-2 md:mt-0 md:ml-4 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* RIGHT MODULAR BLOCK */}
      <div className="pointer-events-auto shadow-2xl shrink-0" style={{ perspective: "1000px" }}>
        <div onClick={() => setIsContactModalOpen(true)} className="block">
          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative h-12 md:h-14 cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Invisible placeholder to maintain exact button size */}
            <div className="px-5 md:px-8 h-full flex items-center justify-center font-bold uppercase text-[10px] md:text-[12px] tracking-widest opacity-0 pointer-events-none">
              Let's talk ↗
            </div>

            {/* Front Face (White) */}
            <motion.div
              className="absolute inset-0 bg-white text-black font-bold uppercase text-[10px] md:text-[12px] tracking-widest flex items-center justify-center origin-bottom"
              variants={{
                initial: { rotateX: 0, opacity: 1 },
                hover: { rotateX: 90, opacity: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Let's talk ↗
            </motion.div>

            {/* Bottom Face (Purple) */}
            <motion.div
              className="absolute inset-0 bg-[#34164F] text-[#F7B71D] font-bold uppercase text-[10px] md:text-[12px] tracking-widest flex items-center justify-center origin-top"
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

