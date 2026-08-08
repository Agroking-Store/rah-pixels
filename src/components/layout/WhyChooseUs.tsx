"use client";

import { motion, type Variants } from "framer-motion";
import { Users, ClipboardCheck, Palette, LineChart, ShieldCheck, Zap } from "lucide-react";

const CARDS_DATA = [
  { id: 1, title: "Strategic Thinkers", desc: "We map your positioning and audience before a single visual asset is crafted. Logic meets creative mastery.", icon: Users, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Methodical Discovery", desc: "Rigorous research-backed workflows to ensure your visual identity is perfectly aligned with business goals.", icon: ClipboardCheck, image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Coherent System", desc: "We build scalable, future-proof design systems that scale fluidly across touchpoints without losing character.", icon: Palette, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Built to Convert", desc: "Gain deep clarity into your audience. We design identities that build instant trust and make customers feel understood.", icon: LineChart, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Future-Proof", desc: "Designs engineered to grow with your brand over the next decade, providing lasting value and impact.", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Lightning Execution", desc: "We deliver premium quality without the typical agency drag. Agile workflows for rapid deployment.", icon: Zap, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" },
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
    <section className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden">
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
          className="text-center mb-16 md:mb-24 flex flex-col items-center justify-center"
        >
          <p className="text-white/50 tracking-[0.3em] text-xs md:text-sm uppercase mb-6 font-bold">
            ( The Rah Pixels Standard )
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black font-heading text-white leading-[1.05] tracking-tighter uppercase">
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
                className="w-full max-w-[360px] aspect-[4/5] bg-[#111111] border border-white/10 hover:border-white/30 transition-colors duration-300 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col group relative"
              >
                {/* Image Section */}
                <div className="relative w-full h-[55%] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient overlay to blend image smoothly into the dark card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/30" />

                  {/* Icon positioned beautifully over the image */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col flex-1 p-6 md:p-8 -mt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-heading uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans line-clamp-3">
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