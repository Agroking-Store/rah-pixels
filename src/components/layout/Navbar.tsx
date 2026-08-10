// src\components\layout\Navbar.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* CTA BLOCK */}
      <div className="pointer-events-auto hidden md:block shadow-2xl">
        <a
          href="/#contact"
          className="h-14 px-8 bg-[#F7B71D] text-[#34164F] font-sans font-bold uppercase text-[12px] tracking-[0.2em] flex items-center hover:bg-white transition-all"
        >
          Let's talk ↗
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
