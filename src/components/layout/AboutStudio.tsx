import React, { useRef } from 'react'

import Lanyard from './Lanyard'

import rahPixelsCardFront from '@/assets/lanyard/rah_pixels_card.png';
import rahPixelsBand from '@/assets/lanyard/rah_pixels_band.png';
import CardSwap, { Card } from '@/components/ui/CardSwap';

// --- Main AboutStudio Component ---
const AboutStudio = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden z-10 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="mb-12 lg:mb-20 flex flex-col items-end text-right">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-medium tracking-widest text-accent-purple uppercase">
              [ 01 // Discover ]
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white">
            About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: 3D Hanging Identity Card (Lanyard) */}
          <div className="lg:col-span-5 relative w-full h-[500px] lg:h-[600px] bg-black/50 rounded-3xl overflow-hidden border border-white/5 flex justify-center items-center group -translate-y-8 lg:-translate-y-16">
            {/* Faint Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
              <span className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[120px] xl:text-[140px] font-black font-heading text-white/[0.03] whitespace-nowrap tracking-tighter">
                Drag It!
              </span>
            </div>
            
            <div className="relative z-10 w-full h-full flex justify-center items-center">
              <Lanyard
                position={[0, 0, 24]}
                gravity={[0, -40, 0]}
                frontImage={rahPixelsCardFront}
                imageFit="cover"
                lanyardImage={rahPixelsBand}
                lanyardWidth={1.2}
              />
            </div>
          </div>

          {/* Right Column: CardSwap Stack */}
          <div className="lg:col-span-7 relative z-10 w-full h-full flex justify-center items-center">
            <CardSwap cardDistance={30} verticalDistance={40} delay={4000} pauseOnHover={true} width={650} height={520}>
              <Card customClass="flex flex-col text-white bg-[#0A0A0A] border border-white/10 border-t-white/30 shadow-2xl overflow-hidden group">
                <div className="w-full flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-[#0A0A0A]">
                  <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <span className="text-sm font-sans font-medium text-gray-200">Founder & Strategist</span>
                </div>
                <div className="p-8 flex flex-col justify-center flex-1 bg-gradient-to-b from-[#111] to-[#050505] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>

                  <span className="inline-block px-3 py-1 mb-6 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-mono tracking-widest uppercase w-fit">
                    Leading the Vision
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
                    Sudeepa Chaudhari
                  </h3>
                  <p className="text-gray-400 font-sans leading-relaxed text-lg max-w-[90%]">
                    With over <strong className="text-white">10 years</strong> of experience in shaping meaningful brand identities across national and international markets.
                  </p>
                </div>
              </Card>

              <Card customClass="flex flex-col text-white bg-[#0A0A0A] border border-white/10 border-t-white/30 shadow-2xl overflow-hidden">
                <div className="w-full flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-[#0A0A0A]">
                  <span className="text-sm font-mono text-gray-200 font-bold text-blue-400">&lt;/&gt;</span>
                  <span className="text-sm font-sans font-medium text-gray-200">RAH Pixels</span>
                </div>
                <div className="p-8 flex flex-col justify-center flex-1 bg-gradient-to-b from-[#111] to-[#050505] relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent"></div>

                  <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white leading-tight">
                    Award-winning <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent-purple">Branding & Design Studio</span>
                  </h3>
                  <p className="text-gray-400 font-sans leading-relaxed text-lg z-10 relative">
                    Our approach is simple — understand the idea behind the business and translate it into thoughtful, striking design that truly represents the brand.
                  </p>
                </div>
              </Card>

              <Card customClass="flex flex-col text-white bg-[#0A0A0A] border border-white/10 border-t-white/30 shadow-2xl overflow-hidden">
                <div className="w-full flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-[#0A0A0A]">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="text-sm font-sans font-medium text-gray-200">Work We Do</span>
                </div>
                <div className="p-8 flex flex-col justify-center flex-1 bg-gradient-to-b from-[#111] to-[#050505]">
                  <h3 className="text-2xl font-bold font-heading mb-8 text-white">Our Core Services</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-green-400/50 transition-all cursor-pointer">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                      <span className="text-gray-200 font-medium">Brand Identity</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-blue-400/50 transition-all cursor-pointer">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                      <span className="text-gray-200 font-medium">UI/UX Design</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-accent-purple/50 transition-all cursor-pointer">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-purple shadow-[0_0_8px_rgba(122,77,255,0.6)]" />
                      <span className="text-gray-200 font-medium">Social Marketing</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-orange-400/50 transition-all cursor-pointer">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
                      <span className="text-gray-200 font-medium">Advertising</span>
                    </div>
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStudio