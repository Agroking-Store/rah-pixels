import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import AboutStudio from '@/components/layout/AboutStudio'
import BrandChemistrySection from '@/components/layout/BrandChemistrySection'
import { Users, ClipboardCheck, Palette, LineChart, ArrowRight, Sparkles, Award } from 'lucide-react'
import TestimonialMarquee from '../components/layout/TestimonialMarquee'
import LogoMarquee from '@/components/layout/LogoMarquee'
import CTASection from '@/components/layout/CTASection'
import MoltenMetal from '@/components/layout/MoltenMetal'
import { Link } from 'react-router-dom'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const Home = () => {
  // Ref and scroll hooks for Horizontal Work Process section
  const processRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: processScrollProgress } = useScroll({
    target: processRef,
    offset: ['start start', 'end end'],
  })
  const processX = useTransform(processScrollProgress, [0, 1], ['0%', '-75%'])

  return (
    <main className="min-h-screen bg-background text-body-text selection:bg-accent-gold selection:text-primary">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto min-h-[92vh] flex flex-col justify-center overflow-hidden">
        
        {/* Animated Molten Metal Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-45 overflow-hidden">
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <MoltenMetal
              color1="#5227FF"
              color2="#FF9FFC"
              color3="#FFFFFF"
              speed={0.35}
              scale={4}
              detail={3}
              glow={1.6}
              coreSize={0.1}
              swirl={1}
              fold={-0.2}
              blackPoint={0.05}
              brightness={1.3}
              colorMode="molten"
              grain
              grainIntensity={0.05}
              mouseInteraction
              mouseStrength={0.3}
              opacity={1}
            />
          </div>
        </div>

        {/* Hero Content - Perfectly Balanced Centered Alignment */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-8 pt-8"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold font-sora text-[#34164F] bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-[#34164F]/15 shadow-md">
              <Sparkles className="w-4 h-4 text-[#F7B71D]" />
              <span>Designs that give your brand a distinct voice.</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-sora text-[#34164F] leading-[1.12] tracking-tight"
          >
            Designing Brands People{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34164F] via-[#7A4DFF] to-[#34164F]">
              Trust, Remember,
            </span>{' '}
            and Recommend®
          </motion.h1>

          {/* Body Intro Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl font-manrope text-[#1F2430]/85 max-w-2xl mx-auto leading-relaxed"
          >
            At Rah Pixels, we help businesses build brands that feel authentic,
            look professional, and leave a lasting impression. Through
            thoughtful design and strategic branding, we turn ideas into
            identities that connect with people.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-[#34164F] hover:bg-[#1F2430] text-[#F7B71D] px-8 py-4 text-sm font-extrabold font-sora uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.03] cursor-pointer border border-[#F7B71D]/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/80 hover:bg-white text-[#34164F] px-7 py-4 text-sm font-extrabold font-sora uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Mini Trust Stats Bar */}
          <motion.div variants={fadeInUp} className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold font-sora text-[#34164F]/75 border-t border-gray-200/60 max-w-xl mx-auto">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#F7B71D]" />
              <span>10+ Years Experience</span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#7A4DFF]" />
              <span>1,400+ Global Brands</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ABOUT OUR STUDIO ================= */}
      <AboutStudio />

      {/* ================= BRAND CHEMISTRY & COLLATERAL SYSTEM ================= */}
      <BrandChemistrySection />

      {/* ================= WHY CHOOSE US (Sticky Left + Scrollable Right) ================= */}
      <section className="bg-[#F5F5F7] relative py-16 sm:py-24 lg:py-32 border-y border-gray-200/60">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-start relative">
            {/* Left Side: Sticky Content */}
            <div className="w-full lg:w-5/12 lg:sticky lg:top-32 z-10 space-y-6">
              <div className="inline-flex items-center justify-start gap-2 font-bold tracking-wider text-xs sm:text-sm text-[#34164F] uppercase bg-[#34164F]/5 px-4 py-2 rounded-full border border-[#34164F]/10 font-sora">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34164F]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7B71D]" />
                </div>
                <span>Why Partner With Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#34164F] leading-[1.15] font-sora">
                We don't just decorate, <br className="hidden md:block" />
                We engineer your{" "}
                <span className="text-[#7A4DFF] underline decoration-[#7A4DFF]/30">
                  brand value
                </span>
              </h2>

              <p className="text-[#1F2430]/80 leading-relaxed text-sm sm:text-base md:text-lg max-w-md font-manrope">
                Partner with a strategic studio that focuses on deep market positioning, cohesive visual systems, and driving real emotional connection for your audience.
              </p>

              <a href="/contact" className="w-full sm:w-auto inline-block pt-2">
                <button className="w-full sm:w-auto bg-[#34164F] hover:bg-[#1F2430] text-[#F7B71D] px-8 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider font-sora transition-all hover:scale-105 shadow-xl group justify-center cursor-pointer flex items-center gap-2">
                  <span>Consult With Our Expertise</span>
                  <ArrowRight className="w-4 h-4 text-[#F7B71D] group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>

            {/* Right Side: Scrollable Cards */}
            <div className="w-full lg:w-7/12 flex flex-col gap-6 sm:gap-8 lg:gap-10">
              {[
                {
                  icon: Users,
                  title: "Strategic Brand Thinkers",
                  desc: "Our team combines engineering logic with creative mastery to map your positioning, audience, and white space before a single visual asset is crafted.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Methodical Discovery",
                  desc: "We follow rigorous research-backed workflows to ensure your visual identity is completely aligned with business goals, meeting timelines without design fatigue.",
                },
                {
                  icon: Palette,
                  title: "Identity as a Coherent System",
                  desc: "We build scalable, future-proof design systems that scale fluidly across touchpoints—from tactile packaging to digital interfaces—without ever losing character.",
                },
                {
                  icon: LineChart,
                  title: "Built to Resonate & Convert",
                  desc: "Gain deep clarity into how your audience perceives your brand. We design identities that build instant trust and make customers feel understood before reading a word.",
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                const numStr = String(idx + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start w-full group"
                  >
                    {/* Huge Number */}
                    <div className="text-5xl sm:text-7xl lg:text-[6.5rem] font-extrabold text-[#34164F]/20 group-hover:text-[#34164F]/50 transition-colors leading-none tracking-tighter sm:mt-2 w-16 sm:w-24 md:w-28 flex-shrink-0 font-sora">
                      {numStr}
                    </div>

                    {/* Content Card - Crisp White */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-gray-200/90 transition-all duration-300 flex-1 relative group-hover:border-[#34164F]/40 group-hover:shadow-xl w-full shadow-md">
                      <div className="w-12 h-12 rounded-2xl bg-[#34164F] flex items-center justify-center mb-5 text-[#F7B71D] group-hover:bg-[#F7B71D] group-hover:text-[#34164F] transition-colors shadow-sm">
                        <Icon className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-extrabold font-sora text-[#34164F] mb-3 tracking-tight">
                        {feature.title}
                      </h4>
                      <p className="text-[#1F2430]/80 text-xs sm:text-sm md:text-base leading-relaxed font-manrope">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK PROCESS SECTION (Horizontally Scrollable) ================= */}
      <section ref={processRef} className="relative h-[300vh] bg-white border-y border-gray-100">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="mb-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-extrabold tracking-wider text-xs sm:text-sm text-[#34164F] uppercase bg-[#34164F]/5 px-4 py-2 rounded-full border border-[#34164F]/10 font-sora mb-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7B71D]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34164F]"></span>
                </div>
                <span>Our Design Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#34164F] font-sora">
                Step-by-Step to Your Brand <span className="text-[#7A4DFF]">Evolution</span>
              </h2>
            </div>

            {/* Horizontal Track */}
            <motion.div style={{ x: processX }} className="flex gap-8 items-center w-max">
              {[
                {
                  step: "01",
                  title: "Discover & Workshop",
                  desc: "We run deep brand discovery workshops to unpack your positioning, core values, target audience, and business goals.",
                },
                {
                  step: "02",
                  title: "Strategy & Direction",
                  desc: "Our strategists define the brand architecture and conceptual moodboards that translate your story into an aesthetic language.",
                },
                {
                  step: "03",
                  title: "Design & Craft",
                  desc: "We design identity systems, typography guidelines, and collateral sets with meticulous attention to detail and proportion.",
                },
                {
                  step: "04",
                  title: "Launch & Empower",
                  desc: "We package your brand guidelines and assets cleanly, ensuring your team is fully empowered to scale consistently post-launch.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="w-[85vw] sm:w-[450px] md:w-[500px] flex flex-col rounded-[2rem] overflow-hidden shadow-xl border border-gray-200/90 bg-[#F5F5F7] h-[380px] flex-shrink-0 hover:border-[#34164F]/30 transition-colors"
                >
                  <div className="flex-1 p-8 md:p-10 relative overflow-hidden flex flex-col justify-center bg-white">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10rem] font-extrabold text-[#34164F]/5 font-sora pointer-events-none select-none z-0">
                      {card.step}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-extrabold text-[#34164F] font-sora mb-3 tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-[#1F2430]/80 leading-relaxed text-sm md:text-base font-manrope">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  <div className="h-16 bg-[#34164F] flex items-center justify-between px-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,rgba(247,183,29,1)_25%,transparent_25%,transparent_50%,rgba(247,183,29,1)_50%,rgba(247,183,29,1)_75%,transparent_75%,transparent)] bg-[length:10px_10px]" />
                    <span className="text-[#F7B71D] text-xs font-extrabold tracking-widest uppercase relative z-10 font-sora">
                      Phase
                    </span>
                    <span className="text-[#F7B71D] text-xl font-extrabold relative z-10 font-sora">
                      {card.step}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF & STATS ================= */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <span className="text-[16px] font-normal font-sans text-accent-gold uppercase tracking-widest">
              Trusted
            </span>
            <h2 className="text-[28px] font-semibold font-heading text-white">
              Proudly partnering with 1,400+ brands worldwide.
            </h2>
            <p className="text-[18px] font-normal font-sans text-gray-400">
              Real partnerships. Meaningful brands. Lasting relationships.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            <motion.div variants={fadeInUp} className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-[32px] font-bold font-heading text-accent-gold mb-1">10+</div>
              <div className="text-[16px] font-normal font-sans text-gray-300">Years of Experience</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-[32px] font-bold font-heading text-accent-gold mb-1">1,400+</div>
              <div className="text-[16px] font-normal font-sans text-gray-300">Brands Designed</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-[32px] font-bold font-heading text-accent-gold mb-1">Awards</div>
              <div className="text-[16px] font-normal font-sans text-gray-300">Multiple Industry Awards</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-[32px] font-bold font-heading text-accent-gold mb-1">1,000s</div>
              <div className="text-[16px] font-normal font-sans text-gray-300">Entrepreneurs Guided</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div>
        <LogoMarquee/>
      </div>
      <div>
        <TestimonialMarquee/>
      </div>  
      <CTASection />
    </main>
  )
}

export default Home