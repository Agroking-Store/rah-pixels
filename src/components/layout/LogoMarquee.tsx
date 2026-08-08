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

            // Calculate which row this specific item is in
            const rowIndex = Math.floor(index / columns);

            // First row (0), Third row (2), etc. -> Right to Left (Positive X)
            // Second row (1), Fourth row (3), etc. -> Left to Right (Negative X)
            const isEvenRow = rowIndex % 2 === 0;
            const startX = isEvenRow ? 200 : -200;

            gsap.fromTo(
              item,
              {
                x: startX,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
                ease: "power1.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 100%", // Starts exactly when the item enters the bottom of the screen
                  end: "top 60%",    // Fully in place when it reaches 60% of the screen
                  scrub: 1.5,        // Smooth velocity/momentum effect tied to scroll
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
    <section ref={sectionRef} className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
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
              <div className="flex aspect-square w-full items-center justify-center border border-white/10 p-6 rounded-2xl bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:bg-white/[0.08] group cursor-pointer">
                <img
                  decoding="async"
                  src={logo.src}
                  alt={`alliance-logo-${index}`}
                  style={{ width: logo.width || "120px", maxHeight: "70px" }}
                  className="object-contain brightness-0 invert opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                />
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}