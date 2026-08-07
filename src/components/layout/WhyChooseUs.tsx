"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import the component you provided
import { RandomLetterSwap, type RandomLetterSwapRef } from "@/components/RandomLetterSwap";

gsap.registerPlugin(ScrollTrigger);

const CARDS_DATA = [
  { id: 1, title: "Aesthetic Excellence", desc: "We don't just design; we craft digital masterpieces that leave a lasting visual impact on your audience." },
  { id: 2, title: "Brand Strategy", desc: "Every pixel is placed with purpose. Our strategies align perfectly with your brand's core vision and long-term goals." },
  { id: 3, title: "Smooth Interactions", desc: "We believe in the power of motion. Our micro-interactions and animations bring your website to life seamlessly." },
  { id: 4, title: "Performance First", desc: "Beauty doesn't compromise speed. Our code is highly optimized for lightning-fast loading and smooth rendering." },
  { id: 5, title: "Bespoke Solutions", desc: "No templates. Every project is built from scratch to ensure your brand stands out with a unique digital identity." },
  { id: 6, title: "Dedicated Support", desc: "Our partnership doesn't end at launch. We provide ongoing support to ensure your platform evolves with your brand." },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const backgroundTitleRef = useRef(null);
  const finaleRef = useRef(null);
  const progressRef = useRef(null);
  const cardsRef = useRef([]);
  const swapRef = useRef<RandomLetterSwapRef>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions;

          // Master Timeline
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: `+=${CARDS_DATA.length * (isMobile ? 1200 : 1500)}`,
              scrub: 1.5,
              pin: true,
              anticipatePin: 1,
            },
          });

          // 1. THE PREVIOUS ANIMATION: Background Title Parallax & Fade
          // Delay this until the 6th card starts to vanish
          // Card 6 starts at 25s, enters for 2.5s, holds for 0.5s -> vanishes at 28.0s
          const lastCardVanishTime = (CARDS_DATA.length - 1) * 5 + 3.0;
          tl.to(
            backgroundTitleRef.current,
            {
              y: isMobile ? "-15vh" : "-25vh",
              scale: 0.85,
              opacity: 0,
              filter: "blur(20px)",
              duration: 3.0,
              ease: "power2.inOut",
            },
            lastCardVanishTime
          );

          // 2. Initial 3D Setup for Cards
          gsap.set(cardsRef.current, {
            y: "120vh",
            z: isDesktop ? -800 : -400,
            x: (index) => {
              if (isMobile) return "0vw";
              if (index % 3 === 0) return "-32vw";
              if (index % 3 === 1) return "32vw";
              return "0vw";
            },
            rotationX: 50,
            rotationY: (index) => {
              if (isMobile) return index % 2 === 0 ? -10 : 10;
              return index % 2 === 0 ? -20 : 20;
            },
            rotationZ: (index) => (index % 2 === 0 ? -10 : 10),
            opacity: 0,
            scale: isMobile ? 0.8 : 0.6,
            transformOrigin: "center center",
          });

          // 3. Build Overlapping Sequence
          cardsRef.current.forEach((card, index) => {
            const isLeft = index % 3 === 0;
            const isRight = index % 3 === 1;

            const targetX = isMobile ? "0vw" : isLeft ? "-28vw" : isRight ? "28vw" : "0vw";
            const targetY = isMobile ? "0vh" : isLeft ? "5vh" : isRight ? "-5vh" : "0vh";
            const restingRotation = isMobile
              ? (index % 2 === 0 ? -2 : 2)
              : isLeft ? -4 : isRight ? 4 : (index % 2 === 0 ? -2 : 2);

            const cardTl = gsap.timeline();

            cardTl.to(card, {
              y: targetY,
              x: targetX,
              z: 0,
              rotationX: 0,
              rotationY: 0,
              rotationZ: restingRotation,
              opacity: 1,
              scale: 1,
              duration: 2.5,
              ease: "expo.out",
            });

            const holdDuration = index === 5 ? 0.5 : 2.5;

            cardTl.to(card, {
              y: `calc(${targetY} - ${isMobile ? "5vh" : "8vh"})`,
              rotationZ: restingRotation * 1.5,
              duration: holdDuration,
              ease: "none",
            });

            cardTl.to(card, {
              y: "-100vh",
              z: isDesktop ? 600 : 300,
              rotationX: -45,
              opacity: 0,
              duration: 2,
              ease: "power3.in",
            });

            // Space them out significantly so they appear one by one.
            // 5 seconds gap means the next card starts entering right as this one starts exiting
            tl.add(cardTl, index * 5);
          });

          // 4. THE GRAND FINALE: RandomLetterSwap rises from the bottom
          // Starts AFTER the last card completely vanishes (takes 2 seconds to vanish)
          tl.fromTo(
            finaleRef.current,
            { y: "40vh", autoAlpha: 0, scale: 0.9 },
            { 
              y: "0vh", 
              autoAlpha: 1, 
              scale: 1, 
              duration: 2.5, 
              ease: "expo.out",
              onStart: () => {
                if (swapRef.current) {
                  swapRef.current.play();
                }
              }
            },
            lastCardVanishTime + 2.0 // Starts after 6th card's 2-second vanish completes
          );

          // 5. Dynamic Progress Bar
          tl.to(
            progressRef.current,
            {
              scaleX: 1,
              ease: "none",
              duration: tl.duration(),
            },
            0
          );
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#030303] text-white overflow-hidden flex items-center justify-center"
      style={{ perspective: "1500px" }}
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-neutral-900/40 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. The Original Background Title */}
      <h2
        ref={backgroundTitleRef}
        className="absolute z-0 text-[4rem] md:text-7xl lg:text-[10rem] font-black tracking-tighter text-center uppercase whitespace-nowrap"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.15)",
        }}
      >
        Why Choose Us
      </h2>

      {/* 2. 3D Cards Environment */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
        {CARDS_DATA.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="absolute w-[85%] max-w-[360px] md:max-w-[400px] aspect-[4/5] bg-[#0a0a0a]/80 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between backdrop-blur-xl"
            style={{
              boxShadow: "inset 0 1px 20px rgba(255,255,255,0.03), 0 30px 60px rgba(0,0,0,0.9)",
            }}
          >
            <div className="flex justify-between items-start mb-auto">
              <div className="w-14 h-14 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5 backdrop-blur-md">
                <span className="text-white/60 font-mono text-sm tracking-wider">
                  {String(card.id).padStart(2, "0")}
                </span>
              </div>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent">
                {card.id}
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight">
                {card.title}
              </h3>
              <p className="text-gray-400/80 text-sm md:text-base leading-relaxed font-light">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. The New Finale (Your component wrapped in a GSAP-animated ref) */}
      <div
        ref={finaleRef}
        className="absolute inset-0 flex items-center justify-center z-30 pointer-events-auto"
      >
        {/* We make the inner text big and solid white */}
        <div className="text-[4rem] md:text-7xl lg:text-[9rem] font-black uppercase text-white tracking-tighter cursor-crosshair">
          <RandomLetterSwap ref={swapRef} label="Why Choose Us" />
        </div>
      </div>

      {/* Animated Scroll Progress Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/10 overflow-hidden z-20 rounded-full">
        <div
          ref={progressRef}
          className="w-full h-full bg-white origin-left scale-x-0"
        />
      </div>
    </section>
  );
}