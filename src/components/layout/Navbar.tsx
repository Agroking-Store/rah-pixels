// src\components\layout\Navbar.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-6 right-6 z-100 flex justify-between items-start pointer-events-none">
      <div className="flex pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <Link
          to="/"
          className="h-14 px-8 bg-[#34164F] flex items-center justify-center text-[#F7B71D] font-heading font-black text-xl hover:bg-black transition-colors border-r border-white/10"
        >
          RAH
        </Link>

        <motion.div
          animate={{ width: isOpen ? "auto" : "110px" }}
          className="h-14 bg-[#F7B71D] flex items-center overflow-hidden border-l border-[#34164F]/10"
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
              {["Home", "Work", "Services", "Studio", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-[#34164F] font-sans font-bold uppercase text-[11px] hover:opacity-60 transition-opacity"
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#34164F] font-bold text-lg cursor-pointer ml-4 hover:rotate-90 transition-transform"
              >
                ✕
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <div className="pointer-events-auto hidden md:block shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <Link
          to="/contact"
          className="h-14 px-8 bg-[#F7B71D] text-[#34164F] font-sans font-bold uppercase text-[12px] tracking-[0.2em] flex items-center hover:bg-white transition-all"
        >
          Let's talk ↗
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
