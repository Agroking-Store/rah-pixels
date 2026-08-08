import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      gsap.set(textRef.current, { y: 20, opacity: 0 });

      const count = { value: 0 };
      tl.to(count, {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => {
          const val = Math.round(count.value);
          setProgress(val);

          if (val > 30) {
            gsap.to(textRef.current, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            });
          }
        },
      });

      tl.to({}, { duration: 0.2 });

      tl.to(boxRef.current, {
        scale: 40,
        duration: 1.2,
        ease: "expo.in",
      }).to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4",
      );
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 bg-black flex items-center justify-center overflow-hidden"
    >
      <div
        ref={boxRef}
        className="relative flex flex-col items-center transition-transform"
      >
        {/* RAH PIXELS Logo Rectangle */}
        <div className="w-64 h-32 border-2 border-white flex items-center justify-center bg-transparent">
          <span
            ref={textRef}
            className="text-white font-black tracking-[0.4em] text-2xl uppercase font-sora"
          >
            RAH PIXELS
          </span>
        </div>

        {/* The 0-100 Counter */}
        <div className="absolute -bottom-16 overflow-hidden h-10">
          <span className="text-white/40 font-mono text-xl tracking-widest">
            {progress.toString().padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
