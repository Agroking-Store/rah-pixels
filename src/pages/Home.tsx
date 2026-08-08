import { AnimatePresence, motion, type Variants } from "framer-motion";
import AboutStudio from "@/components/layout/AboutStudio";
import BrandChemistrySection from "@/components/layout/BrandChemistrySection";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
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
import MagicBento from "@/components/layout/MagicBento";
import MoltenMetal from "@/components/layout/MoltenMetal";
import HorizontalProcessScroll from "@/components/common/HorizontalProcessScroll";
import { Link } from "react-router-dom";
import { useState } from "react";
import HugeLoader from "@/components/common/HugeLoader";
import CustomCursor from "@/components/common/CustomCursor";
import Hero from "@/components/layout/Hero";
import GravityParticles from "@/components/layout/InteractiveDotsLogo";
import { TestimonalMarquee1 } from "@/components/layout/TestimonalMarquee1";
import WorkProcess from "@/components/layout/WorkProcess";
import WorkProcess2 from "@/components/layout/WorkProcess2";
import WorkProcess3 from "@/components/layout/WorkProcess3";

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

        {/* ================= OUR SERVICES ================= */}
        <section className="bg-black py-24 relative overflow-hidden">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-sans text-lg">
                Comprehensive brand solutions designed to elevate your business.
              </p>
            </motion.div>

            <MagicBento
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>
        </section>

        {/* ================= BRAND CHEMISTRY & COLLATERAL SYSTEM ================= */}
        <BrandChemistrySection />

        {/* ================= WHY CHOOSE US (GSAP Scroll Hijacking) ================= */}
        <WhyChooseUs />

        {/* ================= WORK PROCESS SECTION (Horizontally Scrollable) ================= */}

        <div>
          <LogoMarquee />
        </div>
        
        {/* ================= WORK PROCESS (SOLAR SYSTEM ANIMATION) ================= */}
        <WorkProcess />

        {/* ================= WORK PROCESS (GRID LAYOUT) ================= */}
        <WorkProcess2 />

        {/* ================= WORK PROCESS (GSAP PRESENTATION) ================= */}
        <WorkProcess3 />

        <div>
          <TestimonialMarquee />
          {/* <TestimonalMarquee1 /> */}
        </div>
        <GravityParticles />
      </main>
    </>
  );
};

export default Home;
