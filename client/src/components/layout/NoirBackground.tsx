import { motion } from "framer-motion";

const NoirBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-white/5 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -right-[5%] w-[60%] h-[60%] bg-[#F7B71D]/5 blur-[120px] rounded-full"
      />

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
};

export default NoirBackground;
