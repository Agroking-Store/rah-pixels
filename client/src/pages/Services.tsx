import { useState } from 'react'
import {
  SERVICES_DATA,
  FAQS,
} from '../data/serviceData'
import type { ServiceItem } from '../data/serviceData'
import ServiceDetailModal from '../components/services/ServiceDetailModal'
import ProjectEstimatorModal from '../components/services/ProjectEstimatorModal'
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Check,
} from 'lucide-react'

import StrokeText from '../components/common/StrokeText'
import ScrollStack, { ScrollStackItem } from '../components/common/ScrollStack'
import StaggeredGrid from '../components/common/StaggeredGrid'
import HorizontalProcessScroll from '../components/common/HorizontalProcessScroll'
import FaqAccordion from '../components/common/FaqAccordion'

export const Services = () => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null)
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false)
  const [estimatorInitialService, setEstimatorInitialService] = useState<ServiceItem | null>(null)
  const [activeTabId, setActiveTabId] = useState<string>('brand-identity-design')

  const handleOpenDetailModal = (service: ServiceItem) => {
    setSelectedServiceForModal(service)
  }

  const handleOpenEstimator = (service?: ServiceItem) => {
    setEstimatorInitialService(service || null)
    setIsEstimatorOpen(true)
  }

  const activeTabService = SERVICES_DATA.find((s) => s.id === activeTabId) || SERVICES_DATA[0]

  return (
    <div className="w-full min-h-screen py-10 space-y-24">

      {/* 1. CLEAN HERO SECTION (NO BACKGROUND COLOR & NO IMAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 text-center space-y-8">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Animated Stroke Text - BIG IMPACT */}
          <div className="w-full space-y-2 py-4">
            {/* Large Desktop Version */}
            <div className="hidden md:block space-y-2">
              <StrokeText
                text="Build a Brand People"
                strokeColor="#34164F"
                fillColor="#34164F"
                strokeWidth={1.8}
                drawDuration={1.4}
                fillDelay={0.2}
                stagger={0.04}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={84}
                fontWeight={800}
                letterSpacing={-3}
                reverse={false}
              />
              <StrokeText
                text="Remember, Trust & Choose."
                strokeColor="#7A4DFF"
                fillColor="#F7B71D"
                strokeWidth={1.8}
                drawDuration={1.6}
                fillDelay={0.4}
                stagger={0.04}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={76}
                fontWeight={800}
                letterSpacing={-3}
                reverse={false}
              />
            </div>

            {/* Responsive Mobile Version */}
            <div className="md:hidden space-y-2">
              <StrokeText
                text="Build a Brand"
                strokeColor="#34164F"
                fillColor="#34164F"
                strokeWidth={1.6}
                drawDuration={1.2}
                fillDelay={0.2}
                stagger={0.04}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={44}
                fontWeight={800}
                letterSpacing={-1}
              />
              <StrokeText
                text="People Remember,"
                strokeColor="#7A4DFF"
                fillColor="#34164F"
                strokeWidth={1.6}
                drawDuration={1.4}
                fillDelay={0.3}
                stagger={0.04}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={40}
                fontWeight={800}
                letterSpacing={-1}
              />
              <StrokeText
                text="Trust & Choose."
                strokeColor="#34164F"
                fillColor="#F7B71D"
                strokeWidth={1.6}
                drawDuration={1.6}
                fillDelay={0.4}
                stagger={0.04}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={40}
                fontWeight={800}
                letterSpacing={-1}
              />
            </div>
          </div>

          {/* Clean Subtitle */}
          <p className="text-base sm:text-xl text-[#6B7280] font-manrope max-w-2xl mx-auto leading-relaxed">
            We create strategic brand identities, clean responsive websites, and high-impact digital collateral.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleOpenEstimator()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F7B71D] hover:bg-[#e0a416] px-8 py-4 text-base font-extrabold text-[#34164F] transition-all cursor-pointer shadow-xl hover:scale-105 font-sora uppercase tracking-wider"
            >
              <Sparkles className="w-5 h-5 text-[#34164F]" />
              <span>Get Custom Quote</span>
            </button>

            <a
              href="#services-grid"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#34164F] hover:bg-[#1F2430] px-8 py-4 text-base font-bold text-white transition-all cursor-pointer font-sora shadow-md"
            >
              <span>Explore 5 Services</span>
              <ArrowRight className="w-4 h-4 text-[#F7B71D]" />
            </a>
          </div>

        </div>
      </section>

      {/* 2. OUR 5 CORE DIVISIONS WITH SCROLL STACK ANIMATION */}
      <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block rounded-full bg-[#34164F]/5 border border-[#34164F]/10 px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-[#7A4DFF] font-sora">
            OUR 5 CORE DIVISIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sora text-[#34164F]">
            A Cleaner, More Premium Service Architecture
          </h2>
          <p className="text-base text-[#6B7280] font-manrope leading-relaxed">
            Every division receives specialized focus. Scroll down to experience our stacked service architecture.
          </p>
        </div>

        {/* ScrollStack Animated Cards Container */}
        <div className="relative">
          <ScrollStack
            itemDistance={40}
            itemScale={0.03}
            itemStackDistance={35}
            stackPosition="15%"
            scaleEndPosition="8%"
            baseScale={0.88}
            useWindowScroll={true}
          >
            {SERVICES_DATA.map((service, index) => (
              <ScrollStackItem key={service.id}>
                <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8 h-full">

                  {/* Left Column: Number, Title, Subhead & Quick Highlights */}
                  <div className="lg:w-3/5 space-y-5 text-left">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold font-sora text-[#F7B71D] bg-[#34164F] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                        0{index + 1} / DIVISION
                      </span>
                      <span className="text-xs font-bold font-sora text-[#7A4DFF] bg-[#7A4DFF]/10 px-3 py-1 rounded-full">
                        {service.badgeText}
                      </span>
                      <span className="text-xs text-[#6B7280] font-medium ml-auto hidden sm:inline-block">
                        ⚡ {service.turnaround}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold font-sora text-[#34164F] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-[#34164F]/90 italic font-sora text-sm sm:text-base border-l-4 border-[#F7B71D] pl-4 leading-relaxed">
                      "{service.subhead}"
                    </p>

                    <p className="text-xs sm:text-sm text-[#6B7280] font-manrope leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Quick Highlights Bullet Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {service.quickHighlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F2430]">
                          <span className="text-[#F7B71D] font-bold text-base">✔️</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Master Deliverable Badges & Action CTAs */}
                  <div className="lg:w-2/5 flex flex-col justify-between p-6 rounded-2xl bg-[#F5F5F7] border border-gray-200/80 space-y-6">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#34164F] font-sora block mb-3">
                        Master Deliverables & Files
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.sourceFiles.map((fmt, fIdx) => (
                          <span
                            key={fIdx}
                            className="rounded-lg bg-white border border-gray-200 px-3 py-1 text-xs font-bold text-[#34164F] shadow-xs"
                          >
                            {fmt}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => handleOpenDetailModal(service)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#34164F] hover:bg-[#1F2430] py-3 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer font-sora shadow-md"
                      >
                        <span>→ Learn More & Full Inclusions</span>
                        <ArrowRight className="w-4 h-4 text-[#F7B71D]" />
                      </button>

                      <button
                        onClick={() => handleOpenEstimator(service)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7B71D] hover:bg-[#e0a416] py-3 text-xs sm:text-sm font-bold text-[#34164F] transition-all cursor-pointer font-sora shadow-md"
                      >
                        <Sparkles className="w-4 h-4 text-[#34164F]" />
                        <span>Calculate Custom Package</span>
                      </button>
                    </div>
                  </div>

                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* 3. INTERACTIVE ITEMIZED DELIVERABLES GRID (INDEPENDENT ANIMATED CARDS) */}
      <section className="space-y-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
          <div>
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#34164F] bg-[#F7B71D] px-3.5 py-1 rounded-full font-sora mb-3">
              ITEMIZED DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sora text-[#34164F]">
              Inspect What's Included Line-by-Line
            </h2>
          </div>
          <p className="text-sm text-[#6B7280] font-manrope max-w-md">
            Click any service division below to explore the full scope of deliverables included in your project package.
          </p>
        </div>

        {/* Floating Glassmorphism Division Switcher Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 p-3 bg-white rounded-2xl border border-gray-200/90 shadow-sm max-w-5xl mx-auto">
          {SERVICES_DATA.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveTabId(s.id)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-xs sm:text-sm font-bold font-sora transition-all cursor-pointer ${activeTabId === s.id
                  ? 'bg-[#34164F] text-white shadow-lg shadow-[#34164F]/20 scale-102'
                  : 'bg-[#F5F5F7] text-[#1F2430] hover:text-[#34164F] hover:bg-gray-200'
                }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeTabId === s.id ? 'bg-[#F7B71D]' : 'bg-gray-400'}`} />
              <span>0{idx + 1}. {s.title}</span>
            </button>
          ))}
        </div>

        {/* Active Division: Separate Independent Animated Cards Grid */}
        {activeTabService && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">

            {/* Card 1: Dark Royal Purple Division Spotlight Card */}
            <div className="rounded-3xl bg-[#34164F] text-white p-8 space-y-6 flex flex-col justify-between shadow-xl border border-[#34164F] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold font-sora text-[#34164F] bg-[#F7B71D] px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeTabService.badgeText}
                  </span>
                  <span className="text-xs font-medium text-white/80">
                    ⚡ {activeTabService.turnaround}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-sora text-white">
                  {activeTabService.title}
                </h3>

                <p className="text-sm text-[#F7B71D] italic border-l-4 border-[#F7B71D] pl-4 font-sora leading-relaxed">
                  "{activeTabService.subhead}"
                </p>

                <p className="text-xs sm:text-sm text-gray-300 font-manrope leading-relaxed">
                  {activeTabService.shortDescription}
                </p>

                {/* Master File Chips */}
                <div className="pt-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F7B71D] font-sora block mb-3">
                    Master Deliverable Formats
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeTabService.sourceFiles.map((fmt, fIdx) => (
                      <span
                        key={fIdx}
                        className="rounded-lg bg-white/10 border border-white/20 px-3 py-1 text-xs font-bold text-white shadow-xs"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => handleOpenDetailModal(activeTabService)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7B71D] hover:bg-[#e0a416] py-3 text-xs sm:text-sm font-extrabold text-[#34164F] transition-all cursor-pointer font-sora uppercase tracking-wider shadow-md hover:scale-102"
                >
                  <Sparkles className="w-4 h-4 text-[#34164F]" />
                  <span>View Full Specification</span>
                </button>

                <button
                  onClick={() => handleOpenEstimator(activeTabService)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 py-3 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer font-sora border border-white/20"
                >
                  <span>Estimate Custom Scope</span>
                  <ArrowRight className="w-4 h-4 text-[#F7B71D]" />
                </button>
              </div>
            </div>

            {/* Cards 2 to N: Independent Deliverables Cards */}
            {activeTabService.detailedInclusions.map((group, gIdx) => (
              <div
                key={gIdx}
                className="rounded-3xl bg-white p-8 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#F7B71D]/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                    <span className="text-xs font-extrabold font-sora text-[#7A4DFF] bg-[#7A4DFF]/10 px-3 py-1 rounded-full uppercase">
                      MODULE 0{gIdx + 1}
                    </span>
                    <Check className="w-5 h-5 text-[#F7B71D] group-hover:scale-125 transition-transform" />
                  </div>

                  {group.sectionName && (
                    <h4 className="text-lg font-extrabold text-[#34164F] font-sora mb-4">
                      {group.sectionName}
                    </h4>
                  )}

                  <ul className="space-y-3.5">
                    {group.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1F2430]">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#F7B71D] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-[#6B7280] font-manrope">
                  <span>Guaranteed Included</span>
                  <span className="font-bold text-[#34164F] group-hover:text-[#F7B71D] transition-colors">
                    100% Quality
                  </span>
                </div>
              </div>
            ))}

          </div>
        )}
      </section>

      {/* 4. WHY WORK WITH RAH PIXELS (5-CARD HOVER EXPAND GRID) */}
      <section className="py-6">
        <StaggeredGrid
          centerText="WHY CHOOSE US"
          eyebrow="THE RAH PIXELS ADVANTAGE"
          subtitle="Every project is executed with strategic purpose, visual excellence, and complete client file ownership."
          bentoItems={[
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
          ]}
        />
      </section>

      {/* 5. OUR 4-STEP WORKING PROCESS (INDUX PROJECT HORIZONTAL SCROLL ANIMATION) */}
      <HorizontalProcessScroll />

      {/* 6. FAQS ACCORDION SECTION (VENGEANCE UI STYLE ANIMATION & BORDER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <FaqAccordion
          title="Got Questions? We Have Answers."
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about our design process, deliverables, vector source files, and project timelines."
          items={FAQS}
        />
      </section>



      {/* Modals */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onOpenEstimator={handleOpenEstimator}
      />

      {isEstimatorOpen && (
        <ProjectEstimatorModal
          initialService={estimatorInitialService}
          onClose={() => {
            setIsEstimatorOpen(false)
            setEstimatorInitialService(null)
          }}
        />
      )}

    </div>
  )
}

export default Services
