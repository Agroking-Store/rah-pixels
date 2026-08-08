import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-6 right-6 z-[100] flex justify-between items-start pointer-events-none">
      {/* LEFT MODULAR BLOCK */}
      <div className="flex pointer-events-auto shadow-2xl">
        <Link
          to="/"
          className="h-14 px-8 bg-[#0022FF] flex items-center justify-center text-white font-black text-xl hover:bg-black transition-colors"
        >
          RAH
        </Link>

        <motion.div
          animate={{ width: isOpen ? "auto" : "100px" }}
          className="h-14 bg-white flex items-center overflow-hidden"
        >
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="w-full h-full px-6 font-bold uppercase text-[12px] tracking-widest text-black cursor-pointer hover:bg-gray-50"
            >
              Menu
            </button>
          ) : (
            <div className="flex items-center gap-8 px-8">
              {["Home", "Work", "Services", "Studio", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-black font-bold uppercase text-[11px] hover:text-[#0022FF]"
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => setIsOpen(false)}
                className="text-black font-bold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* RIGHT MODULAR BLOCK */}
      <div className="pointer-events-auto hidden md:block shadow-2xl">
        <Link
          to="/contact"
          className="h-14 px-8 bg-white text-black font-bold uppercase text-[12px] tracking-widest flex items-center hover:bg-[#0022FF] hover:text-white transition-all"
        >
          Let's talk ↗
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
