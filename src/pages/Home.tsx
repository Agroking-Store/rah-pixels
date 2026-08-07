import { AnimatePresence, motion, type Variants } from 'framer-motion'
import AboutStudio from '@/components/layout/AboutStudio'
import BrandChemistrySection from '@/components/layout/BrandChemistrySection'
import WhyChooseUs from '@/components/layout/WhyChooseUs'
import { Users, ClipboardCheck, Palette, LineChart, ArrowRight, Sparkles, Award } from 'lucide-react'
import TestimonialMarquee from '../components/layout/TestimonialMarquee'
import LogoMarquee from '@/components/layout/LogoMarquee'
import CTASection from '@/components/layout/CTASection'
import MoltenMetal from '@/components/layout/MoltenMetal'
import HorizontalProcessScroll from '@/components/common/HorizontalProcessScroll'
import { Link } from 'react-router-dom'
import CustomCursor from '@/components/common/CustomCursor'
import HugeLoader from '@/components/common/HugeLoader'
import { useState } from 'react'
import Hero from '@/components/layout/Hero'

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
        {isLoading && (
          <HugeLoader
            onComplete={() => {
              setIsLoading(false);
              setTimeout(() => {
                import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                  ScrollTrigger.refresh();
                });
              }, 100);
            }}
          />
        )}
      </AnimatePresence>

      <main
        className={`bg-black min-h-screen ${isLoading ? "h-screen overflow-hidden" : ""}`}
      >
        {/* ================= HERO SECTION ================= */}
        <Hero />

        {/* ================= ABOUT OUR STUDIO ================= */}
        <AboutStudio />

        {/* ================= BRAND CHEMISTRY & COLLATERAL SYSTEM ================= */}
        <BrandChemistrySection />

        {/* ================= WHY CHOOSE US (GSAP Scroll Hijacking) ================= */}
        <WhyChooseUs />

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
