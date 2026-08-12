import React, { useRef, useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface ShowcaseCollageProps {
  sectionNumber: string;
  title: string;
  bodyText?: string;
  subtitle?: string;
  features?: string[];
  exploreUrl?: string;
  imageName?: string;
  ctaText?: string;
}

export const ShowcaseCollage: React.FC<ShowcaseCollageProps> = ({
  title,
  bodyText,
  subtitle,
  features,
  imageName,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);

  const updateHeight = () => {
    if (imgRef.current && imgRef.current.complete) {
      setImgHeight(imgRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left side: Service image */}
        <div className="lg:col-span-7 w-full">
          <div className="w-full overflow-hidden">
            {imageName ? (
              <img
                ref={imgRef}
                src={`/our-services/${imageName}`}
                alt={title}
                className="block w-full object-cover object-top"
                onLoad={updateHeight}
              />
            ) : (
              <div className="w-full p-8 md:p-10 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center text-[16px] font-manrope text-[#7A4DFF] z-10">
                  <span className="uppercase tracking-widest">{title}</span>
                </div>
                <div className="space-y-4 z-10">
                  <h3 className="text-[28px] font-sora font-semibold text-white leading-tight">
                    {subtitle ?? 'Service overview'}
                  </h3>
                  <p className="text-white/80 text-[18px] font-manrope max-w-md">
                    {bodyText}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side: Description & Features */}
        <div
          className="lg:col-span-5 flex flex-col justify-between"
          style={imgHeight ? { height: imgHeight } : undefined}
        >
          {/* Top content: title, subtitle, body */}
          <div className="space-y-4">
            <div>
              <h2 className="text-[32px] font-sora font-extrabold text-white leading-none" style={{ marginTop: '-0.1em' }}>
                {title}
              </h2>
            </div>

            {subtitle && (
              <p className="text-[22px] font-sora font-medium text-white/90 leading-snug">
                {subtitle}
              </p>
            )}
            {bodyText && (
              <p className="text-[18px] font-manrope text-white/70 leading-snug">
                {bodyText}
              </p>
            )}
          </div>

          {/* Bottom content: features aligned with image bottom */}
          {features && features.length > 0 && (
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-auto">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start text-white/70">
                  <Check className="w-5 h-5 text-[#F7B71D] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] font-manrope">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCollage;

