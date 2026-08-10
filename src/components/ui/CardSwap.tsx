import React from 'react';
import { ArrowUpRight, Sparkles, Smartphone, ShoppingBag, TrendingUp, PenTool, Printer, Check } from 'lucide-react';

interface ShowcaseCollageProps {
  sectionNumber: string;
  title: string;
  bodyText?: string;
  subtitle?: string;
  features?: string[];
  exploreUrl?: string;
}

export const ShowcaseCollage: React.FC<ShowcaseCollageProps> = ({
  sectionNumber,
  title,
  bodyText,
  subtitle,
  features,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start px-4 md:px-8">
      {/* Left side: Single Visual Box */}
      <div className="lg:col-span-7 h-[300px] lg:h-[380px] w-full">
        {sectionNumber === '01' && (
          <div className="w-full h-full bg-[#1F2430] text-white p-8 md:p-10 rounded-none flex flex-col justify-between shadow-2xl border border-[#34164F]/30 relative overflow-hidden group">
            <div className="flex justify-between items-center text-[16px] font-manrope text-[#7A4DFF] z-10">
              <span className="uppercase tracking-widest">Brand Identity</span>
              <Sparkles className="w-6 h-6 text-[#7A4DFF]" />
            </div>
            <div className="space-y-4 z-10">
              <h3 className="text-[28px] font-sora font-semibold text-white leading-tight">
                Strategic design that speaks volumes.
              </h3>
              <p className="text-white/80 text-[18px] font-manrope max-w-md">
                Visually stunning identities built for market dominance.
              </p>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#7A4DFF]/15 rounded-full blur-3xl group-hover:bg-[#7A4DFF]/30 transition-colors duration-700"></div>
          </div>
        )}

        {sectionNumber === '02' && (
          <div className="w-full h-full bg-[#1F2430] text-white p-8 md:p-10 rounded-none flex flex-col justify-between shadow-2xl border border-[#34164F]/30 relative overflow-hidden group">
            <div className="flex justify-between items-center text-[16px] font-manrope text-[#7A4DFF] z-10">
              <span className="uppercase tracking-widest">Creative Collateral</span>
              <PenTool className="w-6 h-6 text-[#7A4DFF]" />
            </div>
            <div className="space-y-4 z-10">
              <h3 className="text-[28px] font-sora font-semibold text-white leading-tight">
                Visual communication that captures attention.
              </h3>
              <p className="text-white/80 text-[18px] font-manrope max-w-md">
                High-impact graphics for corporate and marketing needs.
              </p>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#7A4DFF]/15 rounded-full blur-3xl group-hover:bg-[#7A4DFF]/30 transition-colors duration-700"></div>
          </div>
        )}

        {sectionNumber === '03' && (
          <div className="w-full h-full bg-[#1F2430] text-white p-8 md:p-10 rounded-none flex flex-col justify-between shadow-2xl border border-[#34164F]/30 relative overflow-hidden group">
            <div className="flex justify-between items-center text-[16px] font-manrope text-[#7A4DFF] z-10">
              <span className="uppercase tracking-widest">Scalable UX</span>
              <Smartphone className="w-6 h-6 text-[#7A4DFF]" />
            </div>
            <div className="space-y-4 z-10">
              <h3 className="text-[28px] font-sora font-semibold text-white leading-tight">
                Human-centered digital products that convert.
              </h3>
              <p className="text-white/80 text-[18px] font-manrope max-w-md">
                Fast, responsive websites designed for performance.
              </p>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#7A4DFF]/15 rounded-full blur-3xl group-hover:bg-[#7A4DFF]/30 transition-colors duration-700"></div>
          </div>
        )}

        {sectionNumber === '04' && (
          <div className="w-full h-full bg-[#1F2430] text-white p-8 md:p-10 rounded-none flex flex-col justify-between shadow-2xl border border-[#34164F]/30 relative overflow-hidden group">
            <div className="flex justify-between items-center text-[16px] font-manrope text-[#7A4DFF] z-10">
              <span className="uppercase tracking-widest">Content Velocity</span>
              <TrendingUp className="w-6 h-6 text-[#7A4DFF]" />
            </div>
            <div className="space-y-4 z-10">
              <h3 className="text-[28px] font-sora font-semibold text-white leading-tight">
                Turning attention into brand devotion.
              </h3>
              <p className="text-white/80 text-[18px] font-manrope max-w-md">
                Omnichannel engagement across global media hubs.
              </p>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#7A4DFF]/15 rounded-full blur-3xl group-hover:bg-[#7A4DFF]/30 transition-colors duration-700"></div>
          </div>
        )}

        {sectionNumber === '05' && (
          <div className="w-full h-full bg-[#1F2430] text-white p-8 md:p-10 rounded-none flex flex-col justify-between shadow-2xl border border-[#34164F]/30 relative overflow-hidden group">
            <div className="flex justify-between items-center text-[16px] font-manrope text-[#7A4DFF] z-10">
              <span className="uppercase tracking-widest">Premium Print</span>
              <Printer className="w-6 h-6 text-[#7A4DFF]" />
            </div>
            <div className="space-y-4 z-10">
              <h3 className="text-[28px] font-sora font-semibold text-white leading-tight">
                Tangible touchpoints of the highest quality.
              </h3>
              <p className="text-white/80 text-[18px] font-manrope max-w-md">
                Crisp color reproduction and premium finishes.
              </p>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#7A4DFF]/15 rounded-full blur-3xl group-hover:bg-[#7A4DFF]/30 transition-colors duration-700"></div>
          </div>
        )}
      </div>

      {/* Right side: Description & Action */}
      <div className="lg:col-span-5 flex flex-col h-[300px] lg:h-[380px]">
        <div className="space-y-4 lg:-mt-1">
          <div>
            {/* sectionNumber removed as it was black on black and preventing title top alignment */}
            <h2 className="text-[32px] font-sora font-extrabold text-[#34164F] leading-none">
              {title}
            </h2>
          </div>

          {subtitle ? (
            <p className="text-[22px] font-sora font-medium text-[#1F2430] leading-snug">
              {subtitle}
            </p>
          ) : (
            <p className="text-[18px] font-manrope text-[#6B7280] leading-snug">
              {bodyText}
            </p>
          )}

          {features && features.length > 0 && (
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start text-[#6B7280]">
                  <Check className="w-5 h-5 text-[#F7B71D] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] font-manrope">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-auto pt-6">
          <button className="bg-[#34164F] text-white px-8 py-3.5 text-[16px] font-manrope font-semibold flex items-center space-x-3 transition-all hover:bg-[#F7B71D] hover:text-[#34164F] hover:scale-105 active:scale-95 shadow-md">
            <span>Learn More</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCollage;
