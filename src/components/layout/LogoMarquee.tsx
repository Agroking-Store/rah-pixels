import React from 'react';

interface LogoItem {
  src: string;
  width?: string;
}

const logos: LogoItem[] = [
  { src: "https://indux.cloud/wp-content/uploads/2026/03/ahg_asset-2-1.5x-A1agVE6Kj5Fb7yOn.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/mb_asset-1-1.5x-Yan2eXGBBBfEbOo2.avif", width: "250px" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/ods_asset-2-1.5x-d95ENJOgNGHPqB0X.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/pcf_asset-3-1.5x-AE0q3l9pPeSnWKRZ.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/sac_asset-2-1.5x-YyvkejaowQUErJln.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/tmt_asset-1-1.5x-A1agVE6Jkwu3232A.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/tts_asset-3-1.5x-Yan2eXGBJMi714MZ.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/di_asset-1-1.5x-dJoGxMpJN5heQooE.avif" },
  { src: "https://indux.cloud/wp-content/uploads/2026/03/lgh_asset-1-1.5x-YrDLOe0o3lSRV4V1.avif", width: "300px" },
];

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-[#F3F1F2] py-5 relative">
      {/* Marquee Track */}
      <div className="flex w-max whitespace-nowrap animate-marquee-scroll hover:[animation-play-state:paused]">
        
        {/* SET 1 */}
        <div className="flex items-center shrink-0">
          {logos.map((logo, index) => (
            <div
              key={`set1-${index}`}
              className="inline-flex items-center justify-center mx-[30px] md:mx-[50px] shrink-0"
            >
              <img
                decoding="async"
                src={logo.src}
                alt={`brand-logo-${index}`}
                style={{ width: logo.width || "180px", height: "95px" }}
                className="object-contain transition-transform duration-300 hover:scale-108 max-sm:w-[140px] max-sm:h-[75px]"
              />
            </div>
          ))}
        </div>

        {/* SET 2 (CLONE FOR PERFECT INFINITE LOOP) */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {logos.map((logo, index) => (
            <div
              key={`set2-${index}`}
              className="inline-flex items-center justify-center mx-[30px] md:mx-[50px] shrink-0"
            >
              <img
                decoding="async"
                src={logo.src}
                alt={`brand-logo-clone-${index}`}
                style={{ width: logo.width || "180px", height: "95px" }}
                className="object-contain transition-transform duration-300 hover:scale-108 max-sm:w-[140px] max-sm:h-[75px]"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Embedded CSS for Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-scroll {
          animation: marqueeScroll 18s linear infinite;
        }
      `}} />
    </div>
  );
}