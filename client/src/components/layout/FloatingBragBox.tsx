// src/components/layout/FloatingBragBox.tsx
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const FloatingBragBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [15, -15]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-15, 15]),
    springConfig,
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-64 h-64 md:w-80 md:h-80 group"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-between shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#F7B71D] flex items-center justify-center font-black text-black text-xl">
          1.4k
        </div>

        <div className="space-y-2">
          <h3 className="text-[#F7B71D] font-black uppercase text-[10px] tracking-[0.3em]">
            Global Impact
          </h3>
          <p className="text-white text-2xl font-black font-sora leading-tight uppercase">
            Brands <br /> Engineered <br /> To Last.
          </p>
        </div>

        <div className="text-[9px] text-white/20 font-bold uppercase tracking-[0.3em]">
          Rah Pixels Studio
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingBragBox;
