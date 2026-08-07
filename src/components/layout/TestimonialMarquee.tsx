import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Drake Holloway",
    username: "CTO, Infinitum",
    body: "“Working with Rah Pixels has transformed our brand presence. The team is truly exceptional! Their attention to detail and logic-driven creativity helped us close 40% more on cold traffic.”",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Natalie Kingston",
    username: "Managing Partner",
    body: "“Alexandr did an outstanding job on our identity! He's incredibly responsive, fully dedicated, and went above and beyond to ensure we achieved the perfect aesthetic result.”",
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Liana Whitmore",
    username: "COO, Veridian",
    body: "“Aesthetic, brilliant, and completely unique. They didn't just give us a template; they built a scalable design system that we will use for the next decade.”",
    profile: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "John Carter",
    username: "Founder, TechPro",
    body: "“I didn't want what every other tech company does. I wanted unique. Rah Pixels delivered an identity that builds instant trust and makes customers feel understood.”",
    profile: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Emma Wilson",
    username: "Marketing Director",
    body: "“Their strategic discovery phase blew my mind. They helped us scale faster and increase profitability beyond expectations by just refining our visual communication.”",
    profile: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Brown",
    username: "CEO, InnovateX",
    body: "“Outstanding collaboration and measurable growth results. If you are looking for a studio that understands both art and business, this is it. Highly recommended!”",
    profile: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

export default function TestimonialMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fadeWrapperRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current || !fadeWrapperRef.current) return;

    let ctx = gsap.context(() => {
      // Calculate horizontal scroll distance
      const wrapperWidth = scrollWrapperRef.current?.scrollWidth || 0;
      const amountToScroll = wrapperWidth - window.innerWidth + window.innerWidth * 0.5; // Added 50vw padding

      // 1. Master Timeline (Controls pin and pacing)
      // Multiply scrollLength by 3 to make the scrolling 3x slower/smoother
      const scrollLength = amountToScroll * 3;

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1.5, // 1.5 scrub makes the follow-through buttery smooth
          start: "top top",
          end: () => `+=${scrollLength}`,
          anticipatePin: 1,
        }
      });

      // The horizontal movement takes the first 85% of the total scroll
      const horizontalTween = gsap.to(scrollWrapperRef.current, {
        x: -amountToScroll,
        ease: "none",
        duration: 0.85
      });

      masterTl.add(horizontalTween, 0);

      // The grand finale: Fade out and blur the entire section in the last 15% of scroll
      masterTl.to(fadeWrapperRef.current, {
        opacity: 0,
        filter: "blur(20px)",
        scale: 0.95,
        duration: 0.15,
        ease: "power2.inOut"
      }, 0.85);

      // 2. Individual Card Animations
      cardsRef.current.forEach((card) => {
        if (!card) return;

        // Entry: Diagonal from bottom-right 
        // (y moves from 250 -> 0, while container moves left, creating diagonal motion)
        gsap.fromTo(card,
          { y: 300, opacity: 0, rotationZ: 6 },
          {
            y: 0,
            opacity: 1,
            rotationZ: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 95%", // Card starts appearing when it enters from the right
              end: "left 40%",   // Fully in position slightly past the center
              scrub: 1.5,
            }
          }
        );

        // Exit: Smooth horizontal fade out to the left (no hydraulic y-jump!)
        gsap.fromTo(card,
          { opacity: 1, scale: 1 },
          {
            opacity: 0,
            scale: 0.9,
            ease: "power2.in",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "right 35%", // Starts fading when it's moving towards left edge
              end: "right -10%",  // Fully gone off-screen
              scrub: 1.5,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#181a19] overflow-hidden"
    >
      <div ref={fadeWrapperRef} className="relative w-full h-full flex flex-col justify-center">
        {/* Aesthetic Header */}
        <div className="absolute top-12 left-6 md:left-12 z-20 flex justify-between w-[90%] md:w-[95%] items-end">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-[#e8e6e1] font-heading tracking-tighter">
            Trusted partners.
          </h2>
          <p className="hidden md:block text-[#e8e6e1]/50 text-sm tracking-[0.2em] uppercase font-mono">
            [ Read All Reviews ]
          </p>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div
          ref={scrollWrapperRef}
          className="flex gap-10 md:gap-16 pl-[100vw] pr-[20vw] pt-24 w-max items-center h-[70vh] group"
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              // Group hover logic: when the group is hovered, blur/darken everything. 
              // BUT on the specific hovered card, remove blur/darken and scale it up.
              className="review-card relative w-[320px] md:w-[480px] lg:w-[550px] bg-[#e8e6e1] rounded-sm p-8 md:p-12 flex flex-col justify-between transition-all duration-700 ease-out group-hover:blur-[4px] group-hover:opacity-40 hover:!blur-none hover:!opacity-100 hover:scale-[1.03] hover:shadow-2xl hover:z-30 cursor-pointer"
            >
              {/* Reviewer Profile */}
              <div className="flex items-center gap-5 mb-10">
                <img
                  src={review.profile}
                  alt={review.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover filter grayscale contrast-125"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 font-heading">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-600 font-mono tracking-wide">
                    {review.username}
                  </p>
                </div>
              </div>

              {/* Review Body */}
              <p className="text-lg md:text-2xl text-gray-800 font-medium leading-[1.6] md:leading-[1.7] font-sans">
                {review.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}