import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef(null);
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const splitLine = useRef(null);
  const contentRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Hello");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => onComplete(),
      });

      // 1. Counter & Text Sequence (0 to 100)
      const count = { value: 0 };
      tl.to(count, {
        value: 100,
        duration: 3.2,
        ease: "power2.inOut",
        onUpdate: () => {
          const val = Math.round(count.value);
          setProgress(val);
          // Switch message with a small overlap
          if (val > 52) setMessage("We are");
        },
      });

      // 2. The Fancy Split Sequence
      // First, fade the text out quickly
      tl.to(contentRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power4.in",
      });

      // Flash the split line and then shrink it
      tl.to(splitLine.current, {
        backgroundColor: "#fff",
        width: "2px",
        duration: 0.1,
      }).to(splitLine.current, {
        scaleY: 0,
        duration: 0.6,
        ease: "expo.in",
      });

      // The "Fancy" Split: Expo easing makes it look high-end
      tl.to(
        leftCurtain.current,
        {
          xPercent: -100,
          duration: 1.4,
          ease: "expo.inOut",
        },
        "-=0.3",
      ); // Overlap slightly with line shrink

      tl.to(
        rightCurtain.current,
        {
          xPercent: 100,
          duration: 1.4,
          ease: "expo.inOut",
        },
        "<",
      );

      // Reveal the site by removing the loader wrapper
      tl.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.3,
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex overflow-hidden bg-transparent select-none"
    >
      {/* 1. LEFT PANEL */}
      <div
        ref={leftCurtain}
        className="absolute inset-y-0 left-0 w-1/2 bg-black z-10 border-r border-white/5 shadow-[20px_0_40px_rgba(0,0,0,0.5)]"
      />

      {/* 2. RIGHT PANEL */}
      <div
        ref={rightCurtain}
        className="absolute inset-y-0 right-0 w-1/2 bg-black z-10 border-l border-white/5 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
      />

      {/* 3. CENTER SPLIT LINE */}
      <div
        ref={splitLine}
        className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/20 z-[15] origin-top"
      />

      {/* 4. MAIN CONTENT AREA */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center gap-10">
          {/* Huge Message */}
          <h2 className="text-white font-sora font-black text-7xl md:text-9xl tracking-tighter uppercase text-center">
            {message}
          </h2>

          {/* Minimalist 0-100% Counter */}
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-white/90 font-mono text-2xl tracking-[0.3em] w-24 text-center tabular-nums">
              {progress}%
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
