import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate, type Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const defaultStats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 1400, suffix: "+", label: "Brands Designed" },
  { value: 50, suffix: "+", label: "Industry Awards" },
  { value: 5500, suffix: "+", label: "Entrepreneurs Guided" }
];

export function Counter({ from = 0, to, suffix = "" }: { from?: number; to: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      if (!node) return;
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [from, to, suffix, inView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

interface StatCardsProps {
  className?: string;
  stats?: Array<{ value: number; suffix: string; label: string }>;
}

export const StatCards: React.FC<StatCardsProps> = ({ className = "", stats = defaultStats }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full ${className}`}
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-8 border border-[#1F2430]/5 shadow-xl flex flex-col items-center justify-center text-center space-y-4 group hover:-translate-y-2 transition-transform duration-300">
          <h4 className="text-[40px] md:text-[48px] font-['Sora'] font-extrabold text-[#34164F] group-hover:text-[#F7B71D] transition-colors duration-300 leading-none">
            <Counter to={stat.value} suffix={stat.suffix} />
          </h4>
          <div className="w-10 h-[2px] bg-[#F7B71D]/50 group-hover:bg-[#F7B71D] group-hover:w-16 transition-all duration-300" />
          <p className="text-[16px] md:text-[18px] font-['Manrope'] font-medium text-[#6B7280]">
            {stat.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default StatCards;
