import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


import Loader from "@/components/common/Loader";
import Hero from "@/components/layout/Hero";
import WhatWeDo from "@/components/layout/WhatWeDo";
import OurServices from "@/components/layout/OurServices";
import { FoundersSection } from "@/components/layout/FoundersSection";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import TestimonialMarquee from "../components/layout/TestimonialMarquee";
import LogoMarquee from "@/components/layout/LogoMarquee";


import ShowAndTellProjects from "@/components/layout/ShowAndTellProjects";

import CustomCursor from "@/components/common/CustomCursor";
import GravityParticles from "@/components/layout/InteractiveDotsLogo";

import WorkProcess3 from "@/components/layout/WorkProcess3";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scrolling on the entire body while loading and force scroll to top
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

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
        id="top"
        className={`bg-black min-h-screen ${isLoading ? "h-screen overflow-hidden" : ""}`}
      >
        {/* ================= HERO SECTION ================= */}
        <Hero />

        {/* ================= ABOUT OUR STUDIO ================= */}
        <div id="studio">
          <WhatWeDo />
        </div>

        {/* ================= OUR SERVICES ================= */}
        <section id="services">
          <OurServices />
        </section>

        {/* ================= About Us=========== */}
        <FoundersSection />

        {/* ================= WHY CHOOSE US (GSAP Scroll Hijacking) ================= */}
        <WhyChooseUs />

        {/* ================= SHOW & TELL PROJECTS SECTION ================= */}
        <div id="work">
          <ShowAndTellProjects />
        </div>

        {/* ================= WORK PROCESS SECTION (Horizontally Scrollable) ================= */}

        <div>
          <LogoMarquee />
        </div>

        {/* ================= WORK PROCESS (GSAP PRESENTATION) ================= */}
        <WorkProcess3 />

        <div id="contact">
          <TestimonialMarquee />
          {/* <TestimonalMarquee1 /> */}
          <GravityParticles />
        </div>
      </main>
    </>
  );
};

export default Home;
