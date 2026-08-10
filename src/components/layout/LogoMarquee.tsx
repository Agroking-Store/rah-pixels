"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LogoItem {
  src: string;
  width?: string;
}

const logos: LogoItem[] = [
  { src: "https://indux.cloud/wp-content/uploads/2026/03/ahg_asset-2-1.5x-A1agVE6Kj5Fb7yOn.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/mb_asset-1-1.5x-Yan2eXGBBBfEbOo2.avif", width: "160px" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/ods_asset-2-1.5x-d95ENJOgNGHPqB0X.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/pcf_asset-3-1.5x-AE0q3l9pPeSnWKRZ.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/sac_asset-2-1.5x-YyvkejaowQUErJln.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/tmt_asset-1-1.5x-A1agVE6Jkwu3232A.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/tts_asset-3-1.5x-Yan2eXGBJMi714MZ.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/di_asset-1-1.5x-dJoGxMpJN5heQooE.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/lgh_asset-1-1.5x-YrDLOe0o3lSRV4V1.avif", width: "180px" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/ahg_asset-2-1.5x-A1agVE6Kj5Fb7yOn.avif" },
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
          isTablet: "(min-width: 768px) and (max-width: 1023px)", // 4 columns
          isDesktop: "(min-width: 1024px)", // 5 columns
        },
        (context) => {
          let { isMobile, isTablet, isDesktop } = context.conditions as any;

          // Determine items per row based on the Tailwind classes in the <ul> below
          let columns = isDesktop ? 5 : isTablet ? 4 : 2;

          itemsRef.current.forEach((item, index) => {
            if (!item) return;

            const rowIndex = Math.floor(index / columns);

            // First row (0) left to right: starts from negative X
            // Second row (1) right to left: starts from positive X
            const startX = rowIndex % 2 === 0 ? -400 : 400;

            gsap.fromTo(
              item,
              {
                x: startX,
              },
              {
                x: 0,
                ease: "power4.out", // Fast entry, extremely smooth and slow settling
                scrollTrigger: {
                  trigger: item,
                  start: "top 80%", // Starts when the item is slightly more visible
                  end: "top 40%",   // Ends much later (higher up on the screen), giving a longer window to see the animation
                  scrub: 1.5,
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

        {/* Layout updated: Heading on top left, paragraph pushed down on the right */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-10 mb-20 md:mb-24">
          <h3 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-3xl leading-tight">
            And industry-leading alliances.
          </h3>

          <div className="lg:max-w-md lg:mt-55">
            <p className="text-gray-400 text-lg md:text-xl font-normal leading-relaxed">
              Together with our trusted partners, we push the limits of AI to create groundbreaking solutions for our clients.
            </p>
          </div>
        </div>

        {/* The Grid: 2 cols on mobile, 4 on tablet, 5 on desktop */}
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
                  style={{ width: logo.width || "120px", maxHeight: "70px" }}
                  className="object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}