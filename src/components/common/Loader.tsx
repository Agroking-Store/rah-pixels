// src\components\common\Loader.tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef(null);
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const contentRef = useRef(null);
  const bgNumberRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Hello");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set([contentRef.current, bgNumberRef.current], {
        opacity: 0,
        y: 30,
      });
      gsap.set([leftCurtain.current, rightCurtain.current], { xPercent: 0 });

      tl.to([contentRef.current, bgNumberRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      const count = { value: 0 };
      tl.to(count, {
        value: 100,
        duration: 3,
        ease: "power2.inOut",
        onUpdate: () => {
          const val = Math.round(count.value);
          setProgress(val);
          if (val > 35 && val < 75) setMessage("We Are");
          if (val >= 75) setMessage("Rah Pixels");
        },
      });

      tl.to([contentRef.current, bgNumberRef.current], {
        opacity: 0,
        y: -100,
        duration: 0.5,
        ease: "power2.in",
      });

      tl.to(leftCurtain.current, {
        xPercent: -100,
        duration: 1.2,
        ease: "expo.inOut",
      });

      tl.to(
        rightCurtain.current,
        {
          xPercent: 100,
          duration: 1.2,
          ease: "expo.inOut",
          onComplete: () => {
            onComplete();
          },
        },
        "<",
      );
    });
    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex overflow-hidden select-none bg-transparent"
    >
      <div
        ref={leftCurtain}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#13071C] z-10 border-r border-white/5"
      />
      <div
        ref={rightCurtain}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#13071C] z-10 border-l border-white/5"
      />

      <div
        ref={bgNumberRef}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
      >
        {/* <span className="text-[22vw] font-heading font-semibold text-white/5 leading-none tabular-nums tracking-tighter scale-x-[0.7] transform">
          {progress}%
        </span> */}
        {/* <span className="text-[22vw] font-heading font-normal text-white/[0.05] leading-none tabular-nums tracking-tighter scale-x-[0.7] transform">
          {progress}%
        </span> */}

        {/* <span className="text-[25vw] font-heading font-light text-white/[0.06] leading-none tabular-nums tracking-tighter scale-x-[0.6] transform">
          {progress}%
        </span> */}

        <span className="text-[22vw] font-heading font-medium text-white/5 leading-none tabular-nums tracking-tight scale-x-[0.7] transform">
          {progress}%
        </span>

        {/* The Ghost Outline */}
        {/* <span
          className="text-[25vw] font-heading font-bold text-transparent leading-none tabular-nums scale-x-[0.7] transform"
          style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)" }}
        >
          {progress}%
        </span> */}
        {/* <span className="text-[20vw] font-heading font-normal text-white/[0.04] leading-none tabular-nums tracking-[0.1em] scale-x-[0.8] transform">
          {progress}%
        </span> */}
      </div>

      <div
        ref={contentRef}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[#F7B71D] font-heading font-black text-6xl md:text-9xl tracking-tighter uppercase">
            {message}
          </h2>
          <div className="w-40 md:w-64 h-0.5 bg-white/10 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-[#F7B71D] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
