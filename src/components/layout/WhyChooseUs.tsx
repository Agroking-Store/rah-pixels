"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, ClipboardCheck, Palette, LineChart, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CARDS_DATA = [
  { id: 1, title: "Strategic Thinkers", desc: "We map your positioning and audience before a single visual asset is crafted. Logic meets creative mastery.", icon: Users, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Methodical Discovery", desc: "Rigorous research-backed workflows to ensure your visual identity is perfectly aligned with business goals.", icon: ClipboardCheck, image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Coherent System", desc: "We build scalable, future-proof design systems that scale fluidly across touchpoints without losing character.", icon: Palette, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Built to Convert", desc: "Gain deep clarity into your audience. We design identities that build instant trust and make customers feel understood.", icon: LineChart, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Future-Proof", desc: "Designs engineered to grow with your brand over the next decade, providing lasting value and impact.", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Lightning Execution", desc: "We deliver premium quality without the typical agency drag. Agile workflows for rapid deployment.", icon: Zap, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      // 1. Pin the entire container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${CARDS_DATA.length * 800}`, // Scroll length based on number of cards
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 2. Initial setup for cards
      gsap.set(cardsRef.current, {
        y: () => window.innerHeight + 100, // Start below screen
        opacity: 0,
        scale: 0.9,
      });

      // 3. Animate each card moving up
      cardsRef.current.forEach((card, i) => {
        const enterTime = i * 1.5; // Stagger start times
        const travelDuration = 4; // Time it takes to travel top to bottom

        // Movement
        tl.to(
          card,
          {
            y: () => -window.innerHeight - 200, // Move past the top of the screen
            ease: "none",
            duration: travelDuration,
          },
          enterTime
        );

        // Fade In
        tl.to(
          card,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          enterTime
        );

        // Fade Out as it leaves
        tl.to(
          card,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: "power2.in",
          },
          enterTime + travelDuration - 0.8
        );
      });

      // 4. Wrap up the heading text just before the last card finishes
      const lastEnterTime = (cardsRef.current.length - 1) * 1.5;
      tl.to(
        textRef.current,
        {
          opacity: 0,
          scale: 0.85,
          y: -100,
          filter: "blur(10px)",
          duration: 2,
          ease: "power2.inOut",
        },
        lastEnterTime + 1.0 // Trigger slightly after the last card starts entering
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper for dynamic positioning (Left, Right, Center pattern)
  const getPositionClasses = (index: number) => {
    switch (index % 3) {
      case 0:
        return "left-[5%] md:left-[10%]"; // Left aligned
      case 1:
        return "right-[5%] md:right-[10%]"; // Right aligned
      case 2:
        return "left-1/2 -translate-x-1/2"; // Center aligned
      default:
        return "";
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center justify-center"
    >
      {/* Aesthetic Background (Blur / Shadow) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        {/* Soft white glow */}
        <div className="w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-white/5 blur-[120px] rounded-full mix-blend-screen" />
        {/* Deep black core for depth */}
        <div className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-black/80 blur-[80px] rounded-full" />
      </div>

      {/* Sticky Central Text */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center justify-center h-full w-full pointer-events-none"
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
      </div>

      {/* Scrubbing Cards Container */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {CARDS_DATA.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              onMouseEnter={() => {
                gsap.to(`#displacement-${card.id}`, { attr: { scale: 15 }, duration: 0.3 });
                gsap.to(`#turbulence-${card.id}`, { attr: { baseFrequency: "0.02 0.04" }, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
              }}
              onMouseLeave={() => {
                gsap.to(`#displacement-${card.id}`, { attr: { scale: 0 }, duration: 0.5 });
                gsap.killTweensOf(`#turbulence-${card.id}`);
                gsap.to(`#turbulence-${card.id}`, { attr: { baseFrequency: "0.01 0.01" }, duration: 0.5 });
              }}
              className={`absolute top-0 ${getPositionClasses(index)} w-[90%] max-w-[340px] md:max-w-[360px] aspect-[4/5] bg-[#111111] border border-white/10 hover:border-white/30 transition-colors duration-300 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col pointer-events-auto group`}
              style={{ 
                willChange: "transform, opacity",
                filter: `url(#water-${card.id})`
              }}
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
            </div>
          );
        })}
      </div>

      {/* SVG Water Filters for Cards */}
      <svg className="hidden">
        <defs>
          {CARDS_DATA.map((card) => (
            <filter key={card.id} id={`water-${card.id}`}>
              <feTurbulence 
                id={`turbulence-${card.id}`}
                type="fractalNoise" 
                baseFrequency="0.01 0.01" 
                numOctaves="1" 
                result="noise" 
              />
              <feDisplacementMap 
                id={`displacement-${card.id}`}
                in="SourceGraphic" 
                in2="noise" 
                scale="0" 
                xChannelSelector="R" 
                yChannelSelector="G" 
              />
            </filter>
          ))}
        </defs>
      </svg>
    </section>
  );
}