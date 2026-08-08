import React from 'react';
import { ArrowUpRight, Sparkles, Smartphone, Layers, ShoppingBag, TrendingUp, Cpu } from 'lucide-react';

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
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center px-4 md:px-8">
      {/* Left side: Visual Collage Cards */}
      <div className="lg:col-span-7">
        {sectionNumber === '01' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Green Eco Sustainability Mobile / Web Card */}
            <div className="bg-[#183827] text-white p-5 md:p-6 rounded-lg space-y-4 shadow-xl border border-emerald-900/40 relative overflow-hidden group">
              <div className="flex justify-between items-center text-xs font-mono text-emerald-400">
                <span>A leader in circularity</span>
                <span className="bg-emerald-950/80 px-2 py-0.5 rounded text-[10px] uppercase border border-emerald-800">
                  Impact
                </span>
              </div>

              <div className="bg-[#122A1D] p-4 rounded border border-emerald-800/50 space-y-3">
                <div className="text-xs text-emerald-300 font-medium">Our global impact</div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-[#1A3C29] p-2 rounded">
                    <div className="text-lg md:text-xl font-bold text-white">~1.2B</div>
                    <div className="text-[10px] text-emerald-400">gallons of renewable fuel</div>
                  </div>
                  <div className="bg-[#1A3C29] p-2 rounded">
                    <div className="text-lg md:text-xl font-bold text-white">~11B</div>
                    <div className="text-[10px] text-emerald-400">gallons of water saved</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-sm font-semibold text-white">Giving every end a new beginning.</div>
                <div className="text-xs text-emerald-300/80 mt-1">Sustainable brand transformation</div>
              </div>
            </div>

            {/* Card 2: Financial Investor Dashboard Mockup */}
            <div className="bg-[#0F172A] text-white p-5 md:p-6 rounded-lg space-y-4 shadow-xl border border-slate-800 relative overflow-hidden group">
              <div className="flex justify-between items-center text-xs font-mono text-sky-400">
                <span>Investor Overview</span>
                <span className="text-emerald-400 font-bold">+1.42 (+3.1%)</span>
              </div>

              <div className="bg-slate-900/90 p-4 rounded border border-slate-800 space-y-2">
                <div className="text-xs text-slate-400">Feb 21, 5:00 PM EST</div>
                <div className="text-3xl font-extrabold text-white tracking-tight">$42.09</div>
                <div className="text-xs text-slate-300 font-medium">An attractive investment</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  We work to create sustainable, long-term value...
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-semibold text-sky-400">
                <span>View investor hub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3: Brands Mobile App Display */}
            <div className="sm:col-span-2 bg-[#14261C] text-white p-5 rounded-lg border border-emerald-900/50 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 space-y-2">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                  Brand Ecosystem
                </span>
                <h4 className="text-lg font-bold text-white">Brands that matter</h4>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  Our brands span more than 20 countries, transforming ingredients into valuable solutions.
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="w-16 h-20 bg-emerald-900/60 rounded border border-emerald-700/40 p-2 flex flex-col justify-end">
                  <span className="text-[9px] font-bold text-emerald-300">Feed</span>
                </div>
                <div className="w-16 h-20 bg-emerald-800/80 rounded border border-emerald-600/50 p-2 flex flex-col justify-end">
                  <span className="text-[9px] font-bold text-white">Food</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {sectionNumber === '02' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Marketing Card 1: Social Velocity */}
            <div className="bg-[#2D0A1E] text-white p-5 md:p-6 rounded-lg space-y-4 shadow-xl border border-pink-900/50">
              <div className="flex justify-between items-center text-xs font-mono text-[#FF006E]">
                <span>Content Velocity</span>
                <Sparkles className="w-4 h-4 text-[#FF006E]" />
              </div>
              <div className="text-3xl font-extrabold text-white">3.4M+</div>
              <p className="text-xs text-pink-200/80 leading-relaxed">
                Omnichannel engagement across TikTok, Instagram & global media hubs.
              </p>
              <div className="bg-[#3D102A] p-3 rounded border border-pink-800/40 flex items-center justify-between text-xs">
                <span>Campaign ROI</span>
                <span className="text-emerald-400 font-bold">+280%</span>
              </div>
            </div>

            {/* Marketing Card 2: Omnichannel Studio */}
            <div className="bg-[#18181B] text-white p-5 md:p-6 rounded-lg space-y-4 shadow-xl border border-neutral-800">
              <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
                <span>Storytelling Engine</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-bold">Data-Driven Campaigns</div>
                <p className="text-xs text-neutral-400">
                  Personalized creative assets at infinite scale with AI orchestration.
                </p>
              </div>
              <div className="pt-2 flex space-x-2">
                <span className="bg-neutral-800 text-neutral-300 text-[10px] font-mono px-2 py-1 rounded">Video</span>
                <span className="bg-neutral-800 text-neutral-300 text-[10px] font-mono px-2 py-1 rounded">Interactive</span>
                <span className="bg-neutral-800 text-neutral-300 text-[10px] font-mono px-2 py-1 rounded">Spatial</span>
              </div>
            </div>

            {/* Marketing Card 3: Banner */}
            <div className="sm:col-span-2 bg-[#FF006E] text-black p-5 rounded-lg flex justify-between items-center">
              <div>
                <span className="text-xs font-mono uppercase font-bold tracking-widest block">Cultural Relevance</span>
                <h4 className="text-xl font-extrabold">Turning attention into brand devotion.</h4>
              </div>
              <ArrowUpRight className="w-8 h-8 shrink-0" />
            </div>
          </div>
        )}

        {sectionNumber === '03' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Product Card 1: Flagship Mobile */}
            <div className="bg-[#0B132B] text-white p-5 md:p-6 rounded-lg space-y-4 shadow-xl border border-sky-900/50">
              <div className="flex justify-between items-center text-xs font-mono text-sky-400">
                <span>Flagship iOS & Android</span>
                <Smartphone className="w-4 h-4 text-sky-400" />
              </div>
              <div className="bg-[#1C2541] p-4 rounded-md border border-sky-800/40 space-y-2">
                <div className="text-xs text-sky-300 font-semibold">User Experience Rating</div>
                <div className="text-3xl font-black text-white">4.9 ★★★★★</div>
                <p className="text-[11px] text-sky-200/70">Over 10 Million Active Subscribers</p>
              </div>
            </div>

            {/* Product Card 2: Design Token System */}
            <div className="bg-[#111827] text-white p-5 md:p-6 rounded-lg space-y-4 shadow-xl border border-gray-800">
              <div className="flex justify-between items-center text-xs font-mono text-purple-400">
                <span>Design System</span>
                <Layers className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-sm font-bold">Component Ecosystem</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Atomic tokens & accessible components powering 40+ engineering squads.
              </p>
              <div className="flex space-x-1">
                <div className="w-6 h-6 rounded-full bg-sky-500" />
                <div className="w-6 h-6 rounded-full bg-purple-500" />
                <div className="w-6 h-6 rounded-full bg-[#FF006E]" />
              </div>
            </div>

            {/* Product Card 3: Banner */}
            <div className="sm:col-span-2 bg-[#1E293B] text-white p-5 rounded-lg border border-slate-700 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block">Scalable UX</span>
                <h4 className="text-lg font-bold">Human-centered digital products that convert.</h4>
              </div>
              <ArrowUpRight className="w-6 h-6 text-sky-400 shrink-0" />
            </div>
          </div>
        )}

        {sectionNumber === '04' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Commerce Card 1: Headless Commerce */}
            <div className="bg-[#1C1917] text-white p-5 md:p-6 rounded-lg space-y-4 shadow-xl border border-amber-900/50">
              <div className="flex justify-between items-center text-xs font-mono text-amber-400">
                <span>Headless Architecture</span>
                <ShoppingBag className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-3xl font-extrabold text-amber-400">99.99%</div>
              <div className="text-xs text-stone-300">Uptime during Cyber Week peak traffic</div>
              <div className="bg-[#292524] p-3 rounded border border-amber-800/40 text-xs text-amber-200">
                ⚡ Sub-100ms Page Load Time
              </div>
            </div>

            {/* Commerce Card 2: API Orchestration */}
            <div className="bg-[#09090B] text-white p-5 md:p-6 rounded-lg space-y-4 shadow-xl border border-neutral-800">
              <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
                <span>API Orchestration</span>
                <Cpu className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-sm font-bold text-white">Microservices & Checkout</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Seamless Stripe, Shopify Plus, and ERP integrations with real-time inventory sync.
              </p>
            </div>

            {/* Commerce Card 3: Banner */}
            <div className="sm:col-span-2 bg-[#78350F] text-amber-100 p-5 rounded-lg border border-amber-700/60 flex justify-between items-center">
              <div>
                <span className="text-xs font-mono text-amber-300 uppercase block">Global E-Commerce</span>
                <h4 className="text-lg font-bold text-white">Unlocking hyper-growth multi-region storefronts.</h4>
              </div>
              <ArrowUpRight className="w-6 h-6 text-amber-300 shrink-0" />
            </div>
          </div>
        )}
      </div>

      {/* Right side: Description & Action */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="text-[#000000] font-mono text-xl font-light opacity-50 block mb-1">
            {sectionNumber}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight">
            {title}
          </h2>
        </div>

        <p className="text-xl sm:text-2xl text-neutral-400 leading-snug font-normal">
          {bodyText}
        </p>

        <div className="pt-2">
          <button className="bg-white text-black px-8 py-4 font-semibold text-base flex items-center space-x-3 transition-all hover:bg-[#FF006E] hover:text-black hover:scale-105 active:scale-95 shadow-md">
            <span>Explore {sectionNumber}</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCollage;
