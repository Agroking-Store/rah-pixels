import { AnimatePresence, motion, type Variants } from "framer-motion";
import AboutStudio from "@/components/layout/AboutStudio";
import BrandChemistrySection from "@/components/layout/BrandChemistrySection";
import {
  Users,
  ClipboardCheck,
  Palette,
  LineChart,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import TestimonialMarquee from "../components/layout/TestimonialMarquee";
import LogoMarquee from "@/components/layout/LogoMarquee";
import CTASection from "@/components/layout/CTASection";
import MoltenMetal from "@/components/layout/MoltenMetal";
import HorizontalProcessScroll from "@/components/common/HorizontalProcessScroll";
import { Link } from "react-router-dom";
import { useState } from "react";
import HugeLoader from "@/components/common/HugeLoader";
import CustomCursor from "@/components/common/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {isLoading && <HugeLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main
        className={`bg-black min-h-screen ${isLoading ? "hidden" : "block"}`}
      >
        {/* ================= HERO SECTION ================= */}
        <Hero />

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
                  Partner with a strategic studio that focuses on deep market
                  positioning, cohesive visual systems, and driving real
                  emotional connection for your audience.
                </p>

                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-block pt-2"
                >
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
                      viewport={{ once: true, margin: "-50px" }}
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
        <HorizontalProcessScroll
          eyebrow="OUR DESIGN PROCESS"
          title={
            <>
              Step-by-Step to Your Brand{" "}
              <span className="text-[#7A4DFF]">Evolution</span>
            </>
          }
          subtitle="We follow a proven, research-backed methodology to transform your brand positioning into an unmistakable visual identity."
        />

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
              <motion.div
                variants={fadeInUp}
                className="bg-white/5 p-6 rounded-xl border border-white/10"
              >
                <div className="text-[32px] font-bold font-heading text-accent-gold mb-1">
                  10+
                </div>
                <div className="text-[16px] font-normal font-sans text-gray-300">
                  Years of Experience
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 p-6 rounded-xl border border-white/10"
              >
                <div className="text-[32px] font-bold font-heading text-accent-gold mb-1">
                  1,400+
                </div>
                <div className="text-[16px] font-normal font-sans text-gray-300">
                  Brands Designed
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 p-6 rounded-xl border border-white/10"
              >
                <div className="text-[32px] font-bold font-heading text-accent-gold mb-1">
                  Awards
                </div>
                <div className="text-[16px] font-normal font-sans text-gray-300">
                  Multiple Industry Awards
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 p-6 rounded-xl border border-white/10"
              >
                <div className="text-[32px] font-bold font-heading text-accent-gold mb-1">
                  1,000s
                </div>
                <div className="text-[16px] font-normal font-sans text-gray-300">
                  Entrepreneurs Guided
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <div>
          <LogoMarquee />
        </div>
        <div>
          <TestimonialMarquee />
        </div>
        <CTASection />
      </main>
    </>
  );
};

export default Home;
