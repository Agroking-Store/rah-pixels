// src/components/layout/Navbar.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-8 right-8 z-90 flex justify-between items-start pointer-events-none">
      {/* LOGO BLOCK */}
      <div className="flex pointer-events-auto">
        <Link
          to="/"
          className="h-16 px-8 bg-[#34164F] flex items-center justify-center text-[#F7B71D] font-black text-2xl hover:bg-black transition-colors"
        >
          RAH
        </Link>

        {/* MODULAR EXPANDING MENU */}
        <motion.div
          animate={{ width: isOpen ? "auto" : "100px" }}
          className="h-16 bg-white flex items-center overflow-hidden px-4"
        >
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="w-full h-full font-black uppercase text-[11px] tracking-[0.3em] text-black cursor-pointer"
            >
              Menu
            </button>
          ) : (
            <div className="flex items-center gap-10 pr-6">
              {["Home", "Services", "Projects", "About", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-black font-black uppercase text-[11px] tracking-widest hover:text-accent-purple transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ),
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="font-black text-black ml-4 cursor-pointer hover:rotate-90 transition-transform"
              >
                ✕
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* CTA BLOCK */}
      <div className="hidden md:flex pointer-events-auto">
        <Link
          to="/contact"
          className="h-16 px-10 bg-[#F7B71D] text-black font-black uppercase text-[11px] tracking-widest flex items-center hover:bg-white transition-all shadow-xl"
        >
          Let's talk ↗
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
