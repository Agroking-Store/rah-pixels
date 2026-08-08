import React from 'react';
import { ArrowUpRight, Sparkles, Smartphone, ShoppingBag, TrendingUp } from 'lucide-react';

interface ShowcaseCollageProps {
  sectionNumber: string;
  title: string;
  bodyText: string;
  exploreUrl?: string;
}

export const ShowcaseCollage: React.FC<ShowcaseCollageProps> = ({
  sectionNumber,
  title,
  bodyText,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start px-4 md:px-8">
      {/* Left side: Single Visual Box */}
      <div className="lg:col-span-7 h-[300px] lg:h-[380px] w-full">
        {sectionNumber === '01' && (
          <div className="w-full h-full bg-[#150721] text-white p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-2xl border border-purple-500/20 relative overflow-hidden group">
            <div className="flex justify-between items-center text-sm font-mono text-purple-300 z-10">
              <span className="uppercase tracking-widest">Brand Ecosystem</span>
              <Sparkles className="w-6 h-6 text-purple-300" />
            </div>
            <div className="space-y-4 z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Giving every end a new beginning.
              </h3>
              <p className="text-purple-200/70 text-lg max-w-md">
                Sustainable brand transformation and circularity at global scale.
              </p>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F7B71D]/10 rounded-full blur-3xl group-hover:bg-[#F7B71D]/20 transition-colors duration-700"></div>
          </div>
        )}

        {sectionNumber === '02' && (
          <div className="w-full h-full bg-[#150721] text-white p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-2xl border border-purple-500/20 relative overflow-hidden group">
            <div className="flex justify-between items-center text-sm font-mono text-purple-300 z-10">
              <span className="uppercase tracking-widest">Content Velocity</span>
              <TrendingUp className="w-6 h-6 text-purple-300" />
            </div>
            <div className="space-y-4 z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Turning attention into brand devotion.
              </h3>
              <p className="text-purple-200/70 text-lg max-w-md">
                Omnichannel engagement across global media hubs.
              </p>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F7B71D]/10 rounded-full blur-3xl group-hover:bg-[#F7B71D]/20 transition-colors duration-700"></div>
          </div>
        )}

        {sectionNumber === '03' && (
          <div className="w-full h-full bg-[#150721] text-white p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-2xl border border-purple-500/20 relative overflow-hidden group">
            <div className="flex justify-between items-center text-sm font-mono text-purple-300 z-10">
              <span className="uppercase tracking-widest">Scalable UX</span>
              <Smartphone className="w-6 h-6 text-purple-300" />
            </div>
            <div className="space-y-4 z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Human-centered digital products that convert.
              </h3>
              <p className="text-purple-200/70 text-lg max-w-md">
                Flagship iOS & Android applications powering millions.
              </p>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F7B71D]/10 rounded-full blur-3xl group-hover:bg-[#F7B71D]/20 transition-colors duration-700"></div>
          </div>
        )}

        {sectionNumber === '04' && (
          <div className="w-full h-full bg-[#150721] text-white p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-2xl border border-purple-500/20 relative overflow-hidden group">
            <div className="flex justify-between items-center text-sm font-mono text-purple-300 z-10">
              <span className="uppercase tracking-widest">Global E-Commerce</span>
              <ShoppingBag className="w-6 h-6 text-purple-300" />
            </div>
            <div className="space-y-4 z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Unlocking hyper-growth multi-region storefronts.
              </h3>
              <p className="text-purple-200/70 text-lg max-w-md">
                Headless architecture and microservices for peak traffic.
              </p>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F7B71D]/10 rounded-full blur-3xl group-hover:bg-[#F7B71D]/20 transition-colors duration-700"></div>
          </div>
        )}
      </div>

      {/* Right side: Description & Action */}
      <div className="lg:col-span-5 flex flex-col h-[300px] lg:h-[380px]">
        <div className="space-y-6 lg:-mt-2">
          <div>
            {/* sectionNumber removed as it was black on black and preventing title top alignment */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-none">
              {title}
            </h2>
          </div>

          <p className="text-xl sm:text-2xl text-neutral-400 leading-snug font-normal">
            {bodyText}
          </p>
        </div>

        <div className="mt-auto">
          <button className="bg-white text-black px-8 py-4 font-semibold text-base flex items-center space-x-3 transition-all hover:bg-[#F7B71D] hover:text-black hover:scale-105 active:scale-95 shadow-md">
            <span>Explore {sectionNumber}</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCollage;
