import { AnimatePresence } from "framer-motion";
import { useState } from "react";


import Loader from "@/components/common/Loader";
import Hero from "@/components/layout/Hero";
import WhatWeDo from "@/components/layout/WhatWeDo";
import OurServices from "@/components/layout/OurServices";
import { BrandChemistrySection } from "@/components/layout/BrandChemistrySection";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import TestimonialMarquee from "../components/layout/TestimonialMarquee";
import LogoMarquee from "@/components/layout/LogoMarquee";


import ShowAndTellProjects from "@/components/layout/ShowAndTellProjects";

import CustomCursor from "@/components/common/CustomCursor";
import GravityParticles from "@/components/layout/InteractiveDotsLogo";

import WorkProcess3 from "@/components/layout/WorkProcess3";


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {isLoading && (
          <Loader
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

        {/* ================= WHAT WE DO ================= */}
        <WhatWeDo />

        {/* ================= OUR SERVICES ================= */}
        <OurServices />

        {/* ================= BRAND CHEMISTRY & COLLATERAL SYSTEM ================= */}
        <BrandChemistrySection />

        {/* ================= WHY CHOOSE US (GSAP Scroll Hijacking) ================= */}
        <WhyChooseUs />

        {/* ================= SHOW & TELL PROJECTS SECTION ================= */}
        <ShowAndTellProjects />

        {/* ================= WORK PROCESS SECTION (Horizontally Scrollable) ================= */}

        <div>
          <LogoMarquee />
        </div>

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
