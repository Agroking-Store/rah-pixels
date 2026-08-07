import { useEffect, useRef } from "react";
import gsap from "gsap";

const HugeLoader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out",
    })
      .to(boxRef.current, {
        rotate: -5,
        scale: 1.1,
        duration: 1,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut",
      })
      .to(boxRef.current, {
        scale: 50, // Expands to cover the whole screen
        duration: 1.5,
        ease: "expo.inOut",
      })
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
      });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 bg-black flex items-center justify-center overflow-hidden"
    >
      <div
        ref={boxRef}
        className="w-48 h-48 bg-[#34164F] flex items-center justify-center relative shadow-2xl"
      >
        <span
          ref={textRef}
          className="text-[#F7B71D] text-4xl font-black font-sora opacity-0 translate-y-10"
        >
          RAH
        </span>
      </div>
    </div>
  );
};

export default HugeLoader;
