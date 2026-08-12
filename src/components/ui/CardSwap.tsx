import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

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
  ctaText,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch px-4 md:px-8 h-auto lg:h-[420px]">
      {/* Left side: Service image */}
      <div className="lg:col-span-7 w-full h-full">
        <div className="w-full h-full bg-[#150721] rounded-none shadow-2xl border border-[#34164F]/50 overflow-hidden">
          {imageName ? (
            <img
              src={`/our-services/${imageName}`}
              alt={title}
              className="block w-full h-full object-fill"
            />
          ) : (
            <div className="w-full h-full p-8 md:p-10 flex flex-col justify-between text-white">
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

      {/* Right side: Description & Action */}
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div className="space-y-4">
          <div>
            {/* sectionNumber removed as it was black on black and preventing title top alignment */}
            <h2 className="text-[32px] font-sora font-extrabold text-white leading-none">
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

          {features && features.length > 0 && (
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start text-white/70">
                  <Check className="w-5 h-5 text-[#F7B71D] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] font-manrope">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-auto pt-6">
          <button className="bg-[#F7B71D] text-[#13071C] px-8 py-3.5 text-[16px] font-manrope font-semibold flex items-center space-x-3 transition-all hover:bg-white hover:text-[#13071C] hover:scale-105 active:scale-95 shadow-md cursor-pointer">
            <span>{ctaText || 'Learn More'}</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCollage;
