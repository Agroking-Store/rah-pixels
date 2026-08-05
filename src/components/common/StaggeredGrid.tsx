import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../../lib/utils'

gsap.registerPlugin(ScrollTrigger)

export interface BentoItem {
  id: number | string
  title: string
  subtitle: string
  description: string
  icon?: React.ReactNode
  tag?: string
}

export interface StaggeredGridProps {
  bentoItems?: BentoItem[]
  centerText?: string
  eyebrow?: string
  subtitle?: string
  className?: string
}

export function StaggeredGrid({
  bentoItems = [
    {
      id: 1,
      title: "Strategic Brand Purpose",
      subtitle: "Tailored Brand Architecture",
      description: "We don't just design visuals. Every color, font, and asset is crafted to communicate value, build trust, and win market position.",
      tag: "STRATEGY"
    },
    {
      id: 2,
      title: "100% Vector Ownership",
      subtitle: "Master Source File Rights",
      description: "You receive complete master editable files in AI, SVG, PDF, PNG, and Figma with zero copyright restrictions or locked assets.",
      tag: "OWNERSHIP"
    },
    {
      id: 3,
      title: "Guaranteed Milestones",
      subtitle: "Zero Deadline Delays",
      description: "Clear delivery timelines with zero missed deadlines. Stay updated every step of the way with active progress previews.",
      tag: "TIMELINE"
    },
    {
      id: 4,
      title: "Direct Senior Access",
      subtitle: "No Middleman Lag",
      description: "Work directly with our senior creative team. No account managers or middleman delays getting in the way of your vision.",
      tag: "DIRECT ACCESS"
    },
    {
      id: 5,
      title: "High-Converting Design",
      subtitle: "Premium Aesthetics",
      description: "World-class visual aesthetics designed to wow your audience, increase conversions, and elevate your brand presence.",
      tag: "QUALITY"
    }
  ],
  centerText = "WHY CHOOSE US",
  eyebrow = "THE RAH PIXELS ADVANTAGE",
  subtitle = "Every project is executed with strategic purpose, visual excellence, and complete client file ownership.",
  className
}: StaggeredGridProps) {
  const textRef = useRef<HTMLDivElement>(null)
  const [activeBento, setActiveBento] = useState<number>(0)

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block" style={{ willChange: 'transform' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  useEffect(() => {
    // Exact Previous GSAP Character Split Text Animation
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll('.char')
      gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top bottom',
          end: 'center center-=20%',
          scrub: 1,
        }
      })
        .from(chars, {
          ease: 'sine.out',
          yPercent: 300,
          opacity: 0,
          stagger: {
            each: 0.05,
            from: 'center'
          }
        })
    }
  }, [])

  return (
    <div className={cn("relative overflow-hidden w-full space-y-10 py-8", className)}>
      
      {/* GSAP Split Character Text Header */}
      <div className="text-center space-y-4 max-w-5xl mx-auto px-4">
        <span className="inline-block rounded-full bg-[#34164F]/5 border border-[#34164F]/10 px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-[#7A4DFF] font-sora">
          {eyebrow}
        </span>

        <div ref={textRef} className="text font-sora font-extrabold uppercase flex flex-wrap justify-center text-[clamp(2.2rem,5.5vw,4.8rem)] leading-[1.05] text-[#34164F] tracking-tight">
          {splitText(centerText)}
        </div>

        <p className="text-base text-[#6B7280] font-manrope max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* 5 Cards Layout with 100% Guaranteed Visibility & Hover Expand / Shrink */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-5 min-h-[360px]">
          {bentoItems.map((item, index) => {
            const isActive = activeBento === index
            return (
              <div
                key={item.id}
                onClick={() => setActiveBento(index)}
                onMouseEnter={() => setActiveBento(index)}
                className={cn(
                  "w-full rounded-3xl p-7 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col justify-between border relative overflow-hidden group min-h-[260px]",
                  isActive
                    ? "lg:flex-[2.8] bg-[#34164F] text-white border-[#F7B71D]/80 shadow-2xl scale-[1.01] z-20"
                    : "lg:flex-[1] bg-white text-[#1F2430] border-gray-200/90 shadow-sm hover:border-[#F7B71D]/50 opacity-95 hover:opacity-100 z-10"
                )}
              >
                {/* Header: Tag & Number */}
                <div className="flex items-center justify-between border-b pb-4 mb-5 transition-colors duration-500 border-gray-200/40">
                  <span className={cn(
                    "text-[10px] font-extrabold font-sora px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-500 whitespace-nowrap",
                    isActive ? "bg-[#F7B71D] text-[#34164F]" : "bg-[#7A4DFF]/10 text-[#7A4DFF]"
                  )}>
                    {item.tag || `0${index + 1}`}
                  </span>

                  <span className={cn(
                    "text-xl sm:text-2xl font-black font-sora transition-colors duration-500",
                    isActive ? "text-[#F7B71D]" : "text-gray-300 group-hover:text-[#F7B71D]"
                  )}>
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle & Description */}
                <div className="space-y-3 flex-1 flex flex-col justify-center">
                  <h3 className={cn(
                    "font-extrabold font-sora transition-all duration-500 leading-tight",
                    isActive ? "text-xl sm:text-2xl text-white" : "text-base sm:text-lg text-[#34164F]"
                  )}>
                    {item.title}
                  </h3>

                  <p className={cn(
                    "text-xs font-bold font-sora transition-colors duration-500",
                    isActive ? "text-[#F7B71D]" : "text-[#7A4DFF]"
                  )}>
                    {item.subtitle}
                  </p>

                  <p className={cn(
                    "text-xs sm:text-sm font-manrope leading-relaxed transition-all duration-500",
                    isActive ? "text-gray-300 opacity-100" : "text-[#6B7280] lg:opacity-90 lg:line-clamp-3"
                  )}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom Gold Accent Indicator */}
                <div className={cn(
                  "w-full h-1.5 rounded-full mt-5 transition-all duration-500",
                  isActive ? "bg-[#F7B71D] shadow-[0_0_12px_rgba(247,183,29,0.8)]" : "bg-gray-100 group-hover:bg-[#F7B71D]/40"
                )} />
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default StaggeredGrid
