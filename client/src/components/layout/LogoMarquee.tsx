"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo1 from "@/assets/logos/logos-01.png";
import logo2 from "@/assets/logos/logos-02.png";
import logo3 from "@/assets/logos/logos-03.png";
import logo4 from "@/assets/logos/logos-04.png";
import logo5 from "@/assets/logos/logos-05.png";
import logo6 from "@/assets/logos/logos-06.png";
import logo7 from "@/assets/logos/logos-07.png";
import logo8 from "@/assets/logos/logos-08.png";
import logo9 from "@/assets/logos/logos-09.png";
import logo10 from "@/assets/logos/logos-10.png";

gsap.registerPlugin(ScrollTrigger);

interface LogoItem {
  src: string;
  width?: string;
}

const logos: LogoItem[] = [
  { src: logo1 },
  { src: logo2 },
  { src: logo3 },
  { src: logo4 },
  { src: logo5 },
  { src: logo6 },
  { src: logo7 },
  { src: logo8 },
  { src: logo9 },
  { src: logo10 },
];

export default function IndustryAlliances() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // We use matchMedia to dynamically determine how many columns exist
      // so the "Row" calculation is always 100% accurate on any device.
      mm.add(
        {
          isMobile: "(max-width: 767px)", // 2 columns
          isTablet: "(min-width: 768px) and (max-width: 1023px)", // 5 columns (perfectly divides 10)
          isDesktop: "(min-width: 1024px)", // 5 columns
        },
        (context) => {
          let { isTablet, isDesktop } = context.conditions as any;

          // Determine items per row based on the Tailwind classes in the <ul> below
          let columns = (isDesktop || isTablet) ? 5 : 2;

          itemsRef.current.forEach((item, index) => {
            if (!item) return;

            const rowIndex = Math.floor(index / columns);

            // First row (0) left to right: starts from off-screen left
            // Second row (1) right to left: starts from off-screen right
            const startX = rowIndex % 2 === 0 ? -window.innerWidth : window.innerWidth;

            gsap.fromTo(
              item,
              {
                x: startX,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
                duration: 1.8,
                ease: "expo.out", // Fast entry, extremely smooth and slow settling
                scrollTrigger: {
                  trigger: item,
                  start: "top 65%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#13071C] text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Layout updated: Heading and paragraph aligned to the left */}
        <div className="flex flex-col gap-6 mb-16 md:mb-24">
          <h3 className="text-[32px] font-sora font-bold text-white tracking-tight leading-tight">
            Trusted by Businesses. Chosen by Visionaries.
          </h3>

          <div className="max-w-2xl">
            <p className="text-gray-400 text-[18px] font-manrope font-normal leading-relaxed">
              From emerging entrepreneurs to established businesses, we've had the privilege of building brands across industries, markets, and borders.
            </p>
            <p className="text-gray-400 text-[18px] font-manrope font-normal leading-relaxed mt-6">
              This feels premium and directly supports your 1,400+ brands positioning.
            </p>
          </div>
        </div>

        {/* The Grid: 2 cols on mobile, 5 on tablet/desktop */}
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {logos.map((logo, index) => (
            <li
              key={index}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="w-full"
            >
              <div className="flex aspect-square w-full items-center justify-center border border-white/50 p-2 rounded-none bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white/[0.08] group cursor-pointer">
                <img
                  decoding="async"
                  src={logo.src}
                  alt={`alliance-logo-${index}`}
                  className="w-[100%] h-[100%] object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}