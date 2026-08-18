"use client";

import { motion, type Variants } from "framer-motion";
import { Users, ClipboardCheck, Palette, LineChart, ShieldCheck, Zap } from "lucide-react";

import strategyImg from "../../assets/why-choose/strategy.png";
import creativeImg from "../../assets/why-choose/creative.png";
import discoveryImg from "../../assets/why-choose/discovery.png";
import expertiseImg from "../../assets/why-choose/expertise.png";
import partnershipImg from "../../assets/why-choose/partnership.png";
import growthImg from "../../assets/why-choose/growth.png";

const CARDS_DATA = [
  { id: 1, title: "Strategic Thinkers", desc: "Think beyond the brief.", icon: Users, image: strategyImg },
  { id: 2, title: "Creative Thinkers", desc: "Create beyond the ordinary.", icon: ClipboardCheck, image: creativeImg },
  { id: 3, title: "Deep Discovery", desc: "Understand before we create.", icon: Palette, image: discoveryImg },
  { id: 4, title: "End-to-End Expertise", desc: "Your brand. One creative partner.", icon: LineChart, image: expertiseImg },
  { id: 5, title: "Personal Partnership", desc: "Built together, not handed over.", icon: ShieldCheck, image: partnershipImg },
  { id: 6, title: "Built for Growth", desc: "Designed for where you're going.", icon: Zap, image: growthImg },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each card appearing
    },
  },
};

const cardVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -150 : 150, // Even cards from left, odd cards from right
    y: 0
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#13071C] overflow-hidden py-15">
      {/* Aesthetic Background (Blur / Shadow) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-white/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-black/80 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 flex flex-col items-center justify-center"
        >
          <p className="text-white/50 tracking-[0.2em] text-[16px] font-manrope font-normal uppercase mb-4">
            ( The Rah Pixels Standard )
          </p>
          <h2 className="text-[32px] font-sora font-bold text-white leading-tight tracking-tight uppercase">
            DISCOVER WHY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              BRANDS PARTNER <br />
            </span>
            WITH US
          </h2>
        </motion.div>

        {/* Grid Container for Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center"
        >
          {CARDS_DATA.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                custom={i}
                variants={cardVariants}
                className="w-full max-w-[360px] h-full bg-[#1F0D33] border border-white/10 hover:border-[#F7B71D]/40 hover:shadow-[0_0_30px_rgba(247,183,29,0.1)] transition-all duration-500 rounded-none overflow-hidden shadow-2xl flex flex-col group relative cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden ">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Dark overlay to mute bright photography and blend into theme */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                  {/* Gradient overlay to blend image smoothly into the dark card ONLY at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#1F0D33] via-[#1F0D33]/80 to-transparent" />

                  {/* Icon positioned beautifully over the image */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#13071C]/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#F7B71D] shadow-lg group-hover:bg-[#F7B71D] group-hover:text-[#13071C] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col flex-1 p-6 md:p-8 -mt-2">
                  <h3 className="text-[22px] font-sora font-medium text-white mb-2 uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-[18px] font-manrope font-normal leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}