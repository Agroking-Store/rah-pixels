import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Palette, PenTool, Layout, Users, Rocket, ArrowRight, ArrowDown, ArrowLeft, ArrowUp, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  { id: "01", title: "Discovery & Strategy", description: "We identify your brand essence, audience and aesthetic direction.", icon: Search },
  { id: "02", title: "Creative Direction", description: "We define the visual universe — aesthetic direction, identity concept.", icon: Palette },
  { id: "03", title: "Identity Design", description: "We design the complete visual identity system: logo, typography, colour.", icon: PenTool },
  { id: "04", title: "UX & UI Design", description: "We translate the identity into a premium digital experience with intentional UX flows.", icon: Layout },
  { id: "05", title: "Full Development", description: "Our development team builds your website, ensuring pixel-perfect execution.", icon: Users },
  { id: "06", title: "Launch & Support", description: "We test, refine, launch, and provide post-launch creative support.", icon: Rocket },
];

const ALL_SLIDES = [
  { id: "title", title: "Our Work Process", isTitle: true, description: "", icon: null },
  ...PROCESS_STEPS
];

// 7 total slides = 6 transitions
// Title -> 1: RIGHT
// 1 -> 2: RIGHT
// 2 -> 3: DOWN
// 3 -> 4: LEFT
// 4 -> 5: UP
// 5 -> 6: RIGHT
const TRANSITIONS = ['RIGHT', 'RIGHT', 'DOWN', 'LEFT', 'UP', 'RIGHT'];

export default function WorkProcess3() {
  const containerRef = useRef<HTMLElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset initial positions
    gsap.set(slidesRef.current[0], { xPercent: 0, yPercent: 0, autoAlpha: 1 });
    
    // Position slides offscreen based on how they will enter
    for (let i = 1; i < slidesRef.current.length; i++) {
      const dir = TRANSITIONS[i - 1];
      const slide = slidesRef.current[i];
      if (dir === 'RIGHT') gsap.set(slide, { xPercent: 100, yPercent: 0, autoAlpha: 1 });
      if (dir === 'DOWN') gsap.set(slide, { xPercent: 0, yPercent: 100, autoAlpha: 1 });
      if (dir === 'LEFT') gsap.set(slide, { xPercent: -100, yPercent: 0, autoAlpha: 1 });
      if (dir === 'UP') gsap.set(slide, { xPercent: 0, yPercent: -100, autoAlpha: 1 });
      
      const content = slide?.querySelectorAll('.anim-content');
      const lines = slide?.querySelectorAll('.anim-line');
      if (content) gsap.set(content, { autoAlpha: 0, scale: 0.95 });
      
      if (lines) {
        lines.forEach((line) => {
          if (line.classList.contains('line-h')) {
            const origin = line.classList.contains('origin-right') ? 'right center' : 'left center';
            gsap.set(line, { scaleX: 0, transformOrigin: origin });
          } else {
            const origin = line.classList.contains('origin-bottom') ? 'center bottom' : 'center top';
            gsap.set(line, { scaleY: 0, transformOrigin: origin });
          }
        });
      }
    }

    // Animate Slide 0 content immediately on load
    const slide0 = slidesRef.current[0];
    if (slide0) {
      gsap.fromTo(slide0.querySelectorAll('.anim-line'), 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1, ease: 'power2.out', transformOrigin: 'left center' }
      );
      gsap.fromTo(slide0.querySelectorAll('.anim-content'), 
        { autoAlpha: 0, y: 30 }, 
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.3, ease: 'power2.out' }
      );
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=7000", // Increased scroll distance for 7 slides
        pin: true,
        scrub: 1,
      }
    });

    // Build timeline transitions
    for (let i = 0; i < slidesRef.current.length - 1; i++) {
      const currentSlide = slidesRef.current[i];
      const nextSlide = slidesRef.current[i + 1];
      const dir = TRANSITIONS[i]; 

      const panDuration = 1;
      const drawDuration = 0.6;
      const revealDuration = 0.6;

      if (dir === 'RIGHT') {
        tl.to(currentSlide, { xPercent: -100, ease: "power1.inOut", duration: panDuration })
          .to(nextSlide, { xPercent: 0, ease: "power1.inOut", duration: panDuration }, "<");
      } else if (dir === 'DOWN') {
        tl.to(currentSlide, { yPercent: -100, ease: "power1.inOut", duration: panDuration })
          .to(nextSlide, { yPercent: 0, ease: "power1.inOut", duration: panDuration }, "<");
      } else if (dir === 'LEFT') {
        tl.to(currentSlide, { xPercent: 100, ease: "power1.inOut", duration: panDuration })
          .to(nextSlide, { xPercent: 0, ease: "power1.inOut", duration: panDuration }, "<");
      } else if (dir === 'UP') {
        tl.to(currentSlide, { yPercent: 100, ease: "power1.inOut", duration: panDuration })
          .to(nextSlide, { yPercent: 0, ease: "power1.inOut", duration: panDuration }, "<");
      }

      const nextLines = nextSlide?.querySelectorAll('.anim-line');
      const nextContent = nextSlide?.querySelectorAll('.anim-content');
      
      if (nextLines && nextLines.length > 0) {
        nextLines.forEach((line) => {
          if (line.classList.contains('line-h')) {
            tl.to(line, { scaleX: 1, ease: 'none', duration: drawDuration }, "-=0.4");
          } else {
            tl.to(line, { scaleY: 1, ease: 'none', duration: drawDuration }, "-=0.4");
          }
        });
      }

      if (nextContent && nextContent.length > 0) {
        let xOffset = 0;
        let yOffset = 0;
        if (dir === 'RIGHT') xOffset = 50;
        if (dir === 'LEFT') xOffset = -50;
        if (dir === 'DOWN') yOffset = 50;
        if (dir === 'UP') yOffset = -50;

        tl.fromTo(nextContent, 
          { autoAlpha: 0, x: xOffset, y: yOffset, scale: 0.95 },
          { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: revealDuration, stagger: 0.1, ease: "back.out(1.5)" }, 
          "-=0.4"
        );
      }
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.vars.trigger === containerRef.current && t.kill());
    };
  }, []);

  const renderArrow = (i: number) => {
    // Custom Arrow Placement Logic based on Slide Index
    if (i === 0) return null;

    let arrowClasses = "absolute flex items-center justify-center pointer-events-none z-0 anim-content";
    let icon = null;

    // Slide 1 (Step 1) -> Next is RIGHT
    if (i === 1) {
      arrowClasses += " top-12 right-12 md:top-32 md:right-32";
      icon = <ArrowRight className="w-48 h-48 md:w-64 md:h-64 text-[#F7B71D] stroke-[2]" />;
    }
    // Slide 2 (Step 2) -> Next is DOWN
    else if (i === 2) {
      arrowClasses += " bottom-12 right-12 md:bottom-32 md:right-32";
      icon = <ArrowDown className="w-48 h-48 md:w-64 md:h-64 text-[#F7B71D] stroke-[2]" />;
    }
    // Slide 3 (Step 3) -> Next is LEFT
    else if (i === 3) {
      arrowClasses += " bottom-0 left-12 md:-bottom-8 md:left-32";
      icon = <ArrowLeft className="w-48 h-48 md:w-64 md:h-64 text-[#F7B71D] stroke-[2]" />;
    }
    // Slide 4 (Step 4) -> Next is UP
    else if (i === 4) {
      arrowClasses += " top-12 right-12 md:top-32 md:right-32";
      icon = <ArrowUp className="w-48 h-48 md:w-64 md:h-64 text-[#F7B71D] stroke-[2]" />;
    }
    // Slide 5 (Step 5) -> Next is RIGHT
    else if (i === 5) {
      arrowClasses += " top-12 right-12 md:top-32 md:right-32";
      icon = <ArrowRight className="w-48 h-48 md:w-64 md:h-64 text-[#F7B71D] stroke-[2]" />;
    }
    // Slide 6 (Step 6) -> No next transition, Trophy icon in background
    else if (i === 6) {
      arrowClasses += " bottom-0 right-12 md:bottom-48 md:right-40";
      icon = <ShieldCheck className="w-48 h-48 md:w-64 md:h-64 text-[#F7B71D] stroke-[2]" />;
    }

    if (!icon) return null;
    return (
      <div className={arrowClasses}>
        <div className="opacity-20">{icon}</div>
      </div>
    );
  };

  const renderLines = (i: number) => {
    return (
      <div className="absolute inset-0 pointer-events-none z-10">
        {i === 0 && (
          <>
            <div className="absolute left-12 md:left-32 top-[60%] w-4 h-4 bg-[#F7B71D] -translate-y-2 z-20" />
            <div className="absolute left-12 md:left-32 top-[60%] w-[calc(100%-3rem)] md:w-[calc(100%-8rem)] h-[2px] bg-black anim-line line-h origin-left" />
          </>
        )}
        {i === 1 && (
          <div className="absolute left-0 top-[60%] w-full h-[2px] bg-black anim-line line-h origin-left" />
        )}
        {i === 2 && (
          <>
            <div className="absolute left-0 top-[60%] w-1/2 md:w-[60%] h-[2px] bg-black anim-line line-h origin-left" />
            <div className="absolute left-1/2 md:left-[60%] top-[60%] w-[2px] h-[40%] bg-black anim-line line-v origin-top" />
          </>
        )}
        {i === 3 && (
          <>
            <div className="absolute left-1/2 md:left-[60%] top-0 w-[2px] h-[60%] bg-black anim-line line-v origin-top" />
            <div className="absolute right-1/2 md:right-[40%] top-[60%] w-1/2 md:w-[60%] h-[2px] bg-black anim-line line-h origin-right" />
          </>
        )}
        {i === 4 && (
          <>
            <div className="absolute right-0 top-[60%] w-1/2 md:w-[60%] h-[2px] bg-black anim-line line-h origin-right" />
            <div className="absolute right-1/2 md:right-[40%] bottom-[40%] w-[2px] h-[60%] bg-black anim-line line-v origin-bottom" />
          </>
        )}
        {i === 5 && (
          <>
            <div className="absolute right-1/2 md:right-[40%] bottom-0 w-[2px] h-[40%] bg-black anim-line line-v origin-bottom" />
            <div className="absolute left-1/2 md:left-[60%] top-[60%] w-1/2 md:w-[40%] h-[2px] bg-black anim-line line-h origin-left" />
          </>
        )}
        {i === 6 && (
          <>
            <div className="absolute left-0 top-[60%] w-1/2 md:w-[60%] h-[2px] bg-black anim-line line-h origin-left" />
            <div className="absolute left-1/2 md:left-[60%] top-[60%] w-4 h-4 bg-[#F7B71D] -translate-y-2 z-20" />
          </>
        )}
      </div>
    );
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#f5f8fc] overflow-hidden text-black font-sans">
      {ALL_SLIDES.map((step, i) => {
        const IconComponent = step.icon;
        
        return (
          <div 
            key={step.id} 
            ref={(el) => { slidesRef.current[i] = el; }}
            className="absolute inset-0 w-full h-full flex flex-col justify-center px-12 md:px-32 lg:px-48"
          >
            {renderArrow(i)}
            {renderLines(i)}

            {/* Content Area */}
            {step.id === 'title' ? (
              // TITLE SLIDE (Slide 0)
              <div className="absolute inset-0 w-full h-full pointer-events-none anim-content z-20">
                  {/* Above the line (bottom aligned to 40% from bottom = 60% from top) */}
                  <div className="absolute bottom-[40%] left-12 md:left-32 lg:left-48 pb-4 md:pb-8 flex flex-col gap-2 md:gap-4">
                    <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[#F7B71D]">
                      Our work process
                    </span>
                    <h2 className="text-6xl md:text-[5rem] lg:text-[7rem] font-bold tracking-tight leading-[1.05] text-black">
                      The Process
                    </h2>
                  </div>
                  
                  {/* Below the line (top aligned to 60% from top) */}
                  <div className="absolute top-[60%] left-12 md:left-32 lg:left-48 pt-4 md:pt-8">
                    <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl">
                      Seamless & reliable, built around quality service and lasting client satisfaction.
                    </p>
                  </div>
                </div>
            ) : (
              // REGULAR SLIDE
              <div className="relative z-20 w-full max-w-4xl mt-[-10vh]">
                <>
                  <div className="flex items-center gap-4 mb-4 anim-content">
                    <div className="w-6 h-6 bg-[#F7B71D]" />
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-[#111]">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-3xl md:text-5xl font-light text-gray-500 tracking-tight ml-10 mb-16 anim-content">
                    Stage {step.id}
                  </p>

                  <div className="flex gap-8 ml-10 mt-24 anim-content relative">
                    <div className="bg-white p-8 shadow-md flex items-center justify-center w-[160px] h-[160px]">
                      {IconComponent && <IconComponent className="w-16 h-16 text-[#F7B71D]" strokeWidth={1.5} />}
                    </div>
                    
                    <div className="bg-white p-8 shadow-md flex flex-col justify-center flex-1 max-w-lg relative">
                      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium pr-12">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
