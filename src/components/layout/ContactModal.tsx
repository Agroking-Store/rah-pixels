import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />

      {/* Right Drawer */}
      <motion.div
        data-lenis-prevent="true"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 right-0 bottom-0 w-full md:w-[750px] z-[999] bg-black border-l border-white/10 text-white overflow-y-auto overscroll-contain pointer-events-auto shadow-2xl"
      >
        <div className="px-6 md:px-10 py-8">

          {/* TOP NAV */}
          <div className="flex justify-between items-start mt-4">
            <h2 className="text-[32px] font-sora font-bold tracking-tight text-white">Become a client</h2>

            <button
              onClick={onClose}
              className="flex items-center group cursor-pointer"
            >
              <div className="bg-[#1C1C1C] h-14 px-6 flex items-center justify-center text-[16px] font-manrope font-normal transition-colors group-hover:bg-[#2A2A2A] text-white">
                Close
              </div>
              <div className="bg-white h-14 w-14 flex items-center justify-center text-black text-xl transition-transform group-hover:scale-95">
                ✕
              </div>
            </button>
          </div>

          {/* FORM SECTION */}
          <div className="w-full max-w-4xl mt-16 md:mt-24 mb-20">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <InputField label="First Name" />
              <InputField label="Last Name" />
              <InputField label="Email Address" />
              <InputField label="Company Name" />
              <InputField label="Tell us a little bit more:" isTextArea />

              <div className="mt-8">
                <button type="submit" className="bg-white text-black font-manrope font-semibold text-[16px] px-14 py-5 hover:bg-gray-200 transition-colors w-full md:w-auto cursor-pointer">
                  Let's talk.
                </button>
              </div>
            </form>

            <p className="mt-8 text-white/80 text-[18px] font-manrope font-normal">
              Learn more about how your information will be used in our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy.</a>
            </p>
          </div>

          {/* FOOTER */}
          <div className="mt-24 pb-8 pt-12 border-t border-white/10">
            <h3 className="text-[28px] font-sora font-semibold mb-12 text-white">How else can we help?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-20 text-[16px] font-manrope font-normal tracking-wide">

              <div>
                <p className="text-white/60 mb-1">Join us.</p>
                <a href="mailto:jobs@hugeinc.com" className="hover:underline transition-all">jobs@rahapixels.com</a>
              </div>
              <div>
                <p className="text-white/60 mb-1">Post inquiries.</p>
                <a href="mailto:press@hugeinc.com" className="hover:underline transition-all">post@rahapixels.com</a>
              </div>
              <div>
                <p className="text-white/60 mb-1">Everything else.</p>
                <a href="mailto:hello@hugeinc.com" className="hover:underline transition-all">hello@rahapixels.com</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>,
    document.body
  );
}

function InputField({ label, isTextArea = false }: { label: string, isTextArea?: boolean }) {
  const [value, setValue] = useState("");
  const isActive = value.length > 0;

  return (
    <div className="relative flex flex-col w-full">
      {isTextArea ? (
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-black border border-white/20 p-5 pt-8 text-white focus:outline-none focus:border-white transition-colors h-32 resize-none text-[18px] font-manrope font-normal"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-black border border-white/20 p-5 pt-8 text-white focus:outline-none focus:border-white transition-colors h-[72px] text-[18px] font-manrope font-normal"
        />
      )}

      {/* Floating placeholder with red asterisk */}
      <div
        className={`absolute left-5 transition-all pointer-events-none flex items-center gap-1 ${isActive
          ? 'top-2 text-[12px] uppercase tracking-wider text-white/50 font-manrope font-normal'
          : 'top-[26px] text-[16px] text-white/80 font-manrope font-normal'
          } ${isTextArea && !isActive ? 'top-6' : ''}`}
      >
        {label} <span className="text-[#FF004D] text-lg leading-none mt-1">*</span>
      </div>
    </div>
  );
}
