import  { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    title: "Discovery & Strategy",
    description: "We identify your brand essence, audience and aesthetic direction. This creates the foundation for identity and digital experience.",
  },
  {
    title: "Creative Direction",
    description: "We define the visual universe — aesthetic direction, identity concept, and brand rules.",
  },
  {
    title: "Identity Design",
    description: "We design the complete visual identity system: logo, typography, colour, layout rules.",
  },
  {
    title: "UX & UI Design",
    description: "We translate the identity into a premium digital experience with intentional UX flows and clean, editorial interfaces.",
  },
  {
    title: "Full Development",
    description: "Our development team builds your website, ensuring pixel-perfect execution of the creative direction.",
  },
  {
    title: "Launch & Support",
    description: "We test, refine, launch, and provide post-launch creative support. This full-cycle model ensures consistency, speed, and world-class execution.",
  },
];

export default function WorkProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animation
  useEffect(() => {
    if (!sectionRef.current || !orbitRef.current) return;

    const radius = window.innerWidth < 768 ? 150 : 300; // Matches exact orbit radius
    
    // Set initial position to center
    gsap.set(nodesRef.current, { x: 0, y: 0, opacity: 0, scale: 0.5 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: orbitRef.current,
        start: 'top 70%',
        once: true, // Only animate once when scrolling down
      },
    });



    nodesRef.current.forEach((node, i) => {
      if (!node) return;
      const angle = (i * Math.PI) / 3; // 60 degrees in radians
      const targetX = Math.cos(angle) * radius;
      const targetY = Math.sin(angle) * radius;

      tl.to(node, {
        x: targetX,
        y: targetY,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.2)',
      }, '<0.1'); // Staggered start
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.vars.trigger === sectionRef.current && t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-[130vh] bg-[#f4f4f4] text-black flex flex-col items-center justify-center overflow-hidden py-32"
    >
      <div className="w-full max-w-[1400px] mx-auto px-0 flex flex-col lg:flex-row items-start lg:items-baseline gap-6 lg:gap-16 mb-24 md:mb-32 z-10 w-full pt-12">
        <span className="text-2xl font-bold uppercase tracking-wider text-black lg:w-1/4">
          Our work process
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.05] lg:w-3/4">
          <span className="text-black">Fast & reliable, </span>
          <span className="text-gray-400">focused on premium client service</span>
        </h2>
      </div>

      {/* Main Orbit Container - Rotates continuously */}
      <div 
        ref={orbitRef}
        className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center rounded-full border-[3px] border-black/10 mt-12 md:mt-0"
        style={{ animation: 'spin 120s linear infinite' }}
      >
        {/* Center Content - Counter-rotates to stay upright, absolute centered */}
        <div 
          className="absolute w-[220px] md:w-[320px] text-center z-20"
          style={{ animation: 'spin 120s linear infinite reverse' }}
        >
          <div className="transition-opacity duration-500">
            <h3 className="text-xl font-bold mb-4 text-black">
              {PROCESS_STEPS[activeIndex].title}
            </h3>
            <p className="text-gray-700 text-lg md:text-lg leading-relaxed">
              {PROCESS_STEPS[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Nodes */}
        {PROCESS_STEPS.map((step, index) => {
          const isActive = index === activeIndex;
          
          return (
            <div
              key={index}
              ref={(el) => { nodesRef.current[index] = el; }}
              className="absolute left-1/2 top-1/2 -mt-[50px] -ml-[50px] md:-mt-[70px] md:-ml-[70px] z-30 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              {/* Inner Node - Counter-rotates to keep text upright */}
              <div 
                className={`
                  w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full 
                  flex items-center justify-center text-center p-4
                  transition-colors duration-500
                  ${isActive ? 'bg-[#F7B71D] text-black shadow-[0_0_30px_rgba(247,183,29,0.3)]' : 'bg-black text-white hover:bg-[#222]'}
                `}
                style={{ animation: 'spin 120s linear infinite reverse' }}
              >
                <span className="text-sm md:text-lg font-semibold leading-tight pointer-events-none">
                  {index + 1}. {step.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
