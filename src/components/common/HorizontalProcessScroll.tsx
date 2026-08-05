import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROCESS_STEPS } from '../../data/serviceData'
import { ArrowRight, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function HorizontalProcessScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !trackRef.current) return

      const track = trackRef.current
      const container = containerRef.current

      // Desktop horizontal pinning using GSAP ScrollTrigger
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        // Calculate exact scroll translation so Phase 4 is fully visible
        const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120)

        gsap.to(track, {
          x: getScrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top+=60px',
            end: () => `+=${track.scrollWidth + 300}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F5F5F7] rounded-3xl overflow-hidden my-12 py-12 md:py-20"
    >
      <div className="w-full h-full flex items-center">
        <div
          ref={trackRef}
          className="flex flex-col md:flex-row gap-8 px-6 sm:px-10 lg:px-16 items-center w-full md:w-auto md:flex-nowrap will-change-transform"
        >
          {/* Intro Title Block */}
          <div className="w-full md:w-[48vw] lg:w-[35vw] md:flex-shrink-0 flex flex-col justify-center pr-0 md:pr-8 text-center md:text-left mb-8 md:mb-0">
            <div className="inline-flex items-center gap-2 font-extrabold tracking-wider text-xs text-[#34164F] uppercase mb-4 bg-[#F7B71D] px-3.5 py-1 rounded-full font-sora w-fit mx-auto md:mx-0 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#34164F]" />
              STRUCTURED WORKFLOW
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sora tracking-tight text-[#34164F] leading-[1.1] mb-6">
              Simple 4-Step Process from <span className="text-[#7A4DFF]">Idea to Impact</span>
            </h2>

            <p className="text-[#6B7280] font-manrope text-base sm:text-lg leading-relaxed max-w-lg">
              We eliminate guesswork with transparent milestones, regular design previews, and clear communication every step of the way.
            </p>
          </div>

          {/* 4 Process Cards */}
          {PROCESS_STEPS.map((card, idx) => (
            <div
              key={idx}
              className="w-full md:w-[45vw] lg:w-[30vw] md:flex-shrink-0 flex flex-col rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-200/90 bg-white text-[#1F2430] h-auto md:h-[440px] relative group hover:border-[#F7B71D]/80 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex-1 p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
                
                {/* Giant Step Number Background Watermark */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] font-extrabold text-[#34164F]/5 pointer-events-none select-none font-sora leading-none">
                  {card.number}
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-xs font-extrabold font-sora text-[#34164F] bg-[#F7B71D] px-3.5 py-1 rounded-full uppercase tracking-wider">
                      PHASE 0{idx + 1}
                    </span>
                    <span className="text-xs font-extrabold text-[#7A4DFF] font-sora uppercase tracking-widest">
                      RAH PIXELS
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-sora text-[#34164F] leading-tight pt-2">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#6B7280] font-manrope leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="relative z-10 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold font-sora text-[#34164F] flex items-center gap-1.5">
                    <span>Guaranteed Included</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F7B71D] group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7B71D]" />
                </div>

              </div>
            </div>
          ))}

          {/* Right End Padding Spacer so Phase 4 is 100% Fully Visible */}
          <div className="w-12 md:w-28 shrink-0 pointer-events-none" />

        </div>
      </div>
    </section>
  )
}

export default HorizontalProcessScroll
