import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import AboutStudio from '@/components/layout/AboutStudio'
import BrandChemistrySection from '@/components/layout/BrandChemistrySection'
import { Users, ClipboardCheck, Palette, LineChart, ArrowRight } from 'lucide-react'
import TestimonialMarquee from '../components/layout/TestimonialMarquee'
import LogoMarquee from '@/components/layout/LogoMarquee'

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
      <section className="relative pt-64 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-end">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-20"
        >
          {/* Left Column: Tagline & Eyebrow */}
          <motion.div variants={fadeInUp} className="md:col-span-7 space-y-4">
            <span className="text-[16px] font-normal font-sans text-accent-purple bg-accent-purple/10 px-4 py-1.5 rounded-full border border-accent-purple/20 inline-block">
              Designs that give your brand a distinct voice.
            </span>
            <h1 className="text-[32px] font-bold font-heading text-primary leading-tight md:text-[44px] lg:text-[50px]">
              Designing Brands People Trust, Remember, and Recommend®
            </h1>
          </motion.div>

          {/* Right Column: Studio Intro */}
          <motion.div variants={fadeInUp} className="md:col-span-5 space-y-6">
            <p className="text-[18px] font-normal font-sans text-body-text leading-relaxed">
              At Rah Pixels, we help businesses build brands that feel authentic,
              look professional, and leave a lasting impression. Through
              thoughtful design and strategic branding, we turn ideas into
              identities that connect with people.
            </p>
            <button className="text-[16px] font-semibold font-sans bg-primary hover:bg-secondary text-white px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
              Start Your Project
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ABOUT OUR STUDIO ================= */}
      <AboutStudio />

      {/* ================= BRAND CHEMISTRY & COLLATERAL SYSTEM ================= */}
      <BrandChemistrySection />

      {/* ================= WHY CHOOSE US (Sticky Left + Scrollable Right) ================= */}
      <section className="bg-slate-50/50 dark:bg-slate-950/50 relative py-16 sm:py-24 lg:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-start relative">
            {/* Left Side: Sticky Content */}
            <div className="w-full lg:w-5/12 lg:sticky lg:top-32 z-10">
              <div className="inline-flex items-center justify-start gap-2 font-bold tracking-wider text-xs sm:text-sm text-accent-purple uppercase mb-4 sm:mb-6">
                <div className="flex gap-1">
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-accent-purple"></span>
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-200 dark:bg-slate-800"></span>
                </div>
                Why Partner With Us
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary dark:text-white leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6">
                We don't just decorate, <br className="hidden md:block" />
                We engineer your{" "}
                <span className="text-accent-purple underline decoration-accent-purple/30">
                  brand value
                </span>
              </h2>

              <p className="text-body-text dark:text-slate-400 leading-relaxed text-sm sm:text-base md:text-lg max-w-md mb-8 sm:mb-10">
                Partner with a strategic studio that focuses on deep market positioning, cohesive visual systems, and driving real emotional connection for your audience.
              </p>

              <a href="/contact-us" className="w-full sm:w-auto inline-block">
                <button className="w-full sm:w-auto bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg group justify-center cursor-pointer flex items-center">
                  Consult With Our Expertise{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>

            {/* Right Side: Scrollable Cards */}
            <div className="w-full lg:w-7/12 flex flex-col gap-6 sm:gap-8 lg:gap-12">
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
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-start w-full group"
                  >
                    {/* Huge Number */}
                    <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold text-accent-purple/60 dark:text-accent-purple/40 leading-none tracking-tighter sm:mt-4 w-16 sm:w-24 md:w-32 flex-shrink-0">
                      {numStr}
                    </div>

                    {/* Content Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border-[1.5px] border-slate-200 dark:border-slate-800 transition-all duration-500 flex-1 relative group-hover:border-accent-purple/40 dark:group-hover:border-accent-purple/40 w-full shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary dark:bg-accent-purple/20 flex items-center justify-center mb-4 sm:mb-6">
                        <Icon
                          className="w-5 h-5 md:w-6 md:h-6 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary dark:text-white mb-2 sm:mb-3 md:mb-4 tracking-tight">
                        {feature.title}
                      </h4>
                      <p className="text-body-text dark:text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
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
      <section ref={processRef} className="relative h-[300vh] bg-slate-50 dark:bg-slate-950">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="mb-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-bold tracking-wider text-sm text-accent-purple uppercase mb-2">
                <div className="flex gap-1">
                  <span className="w-3.5 h-3.5 rounded-full bg-accent-purple"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-800"></span>
                </div>
                Our Design Process
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary dark:text-white">
                Step-by-Step to Your Brand <span className="text-accent-purple">Evolution</span>
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
                  className="w-[85vw] sm:w-[450px] md:w-[500px] flex flex-col rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-[380px] flex-shrink-0"
                >
                  <div className="flex-1 p-8 md:p-10 relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10rem] font-bold text-slate-100 dark:text-slate-800/30 pointer-events-none select-none z-0">
                      {card.step}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-primary dark:text-white mb-3 tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-body-text dark:text-slate-400 leading-relaxed text-sm md:text-base">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  <div className="h-16 bg-primary dark:bg-slate-800 flex items-center justify-between px-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,rgba(255,255,255,1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,1)_50%,rgba(255,255,255,1)_75%,transparent_75%,transparent)] bg-[length:10px_10px]"></div>
                    <span className="text-white text-xs font-bold tracking-widest uppercase relative z-10">
                      Phase
                    </span>
                    <span className="text-white text-lg font-bold relative z-10">
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
    </main>
    
  )
}

export default Home