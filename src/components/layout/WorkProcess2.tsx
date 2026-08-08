import React from 'react';
import { Search, Palette, PenTool, Layout, Blender, Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const PROCESS_STEPS = [
  {
    title: "Discovery & Strategy",
    description: "We identify your brand essence, audience and aesthetic direction. This creates the foundation for identity and digital experience.",
    icon: Search,
  },
  {
    title: "Creative Direction",
    description: "We define the visual universe — aesthetic direction, identity concept, and brand rules.",
    icon: Palette,
  },
  {
    title: "Identity Design",
    description: "We design the complete visual identity system: logo, typography, colour, layout rules.",
    icon: PenTool,
  },
  {
    title: "UX & UI Design",
    description: "We translate the identity into a premium digital experience with intentional UX flows and clean, editorial interfaces.",
    icon: Layout,
  },
  {
    title: "Full Development",
    description: "Our development team builds your website, ensuring pixel-perfect execution of the creative direction.",
    icon: Blender,
  },
  {
    title: "Launch & Support",
    description: "We test, refine, launch, and provide post-launch creative support. This full-cycle model ensures consistency, speed, and world-class execution.",
    icon: Rocket,
  },
];

export default function WorkProcess2() {

  return (
    <section className="w-full bg-[#fbfbfb] text-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
          <div className="flex flex-col text-5xl md:text-6xl lg:text-[5rem] font-medium tracking-tight leading-[1.1]">
            <span>When people</span>
            <div className="flex items-center gap-3">
              <span className="text-[#34164F]">do</span>
              
              {/* Custom CSS Toggle Switch */}
              <div className="relative w-[80px] h-[40px] md:w-[100px] md:h-[50px] bg-[#34164F] rounded-full flex items-center px-1.5 cursor-pointer shadow-inner">
                <motion.div 
                  className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-white rounded-full shadow-md"
                  initial={{ x: '100%' }}
                  animate={{ x: '120%' }} // Positioned to the right side of the toggle
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
              
              <span>work with us.</span>
            </div>
          </div>

          <button className="flex cursor-pointer items-center gap-2 bg-[#222] hover:bg-black text-white px-6 py-4 rounded-xl font-medium transition-colors text-sm whitespace-nowrap">
            <Sparkles className="w-4 h-4" />
            Let's build something
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-start"
              >
                <div className="mb-6 text-gray-700">
                  <Icon className="w-8 h-8" strokeWidth={1.2} />
                </div>
                <h3 className="text-lg font-medium mb-1.5 text-black">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
