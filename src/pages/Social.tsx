"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Trophy,
  KeyRound,
  Rocket,
  Eye,
  CheckCircle2,
  Play,
  Briefcase,
  Target,
  ShieldCheck,
  Globe,
  X,
  Mail,
  Sparkles,
  Award,
} from "lucide-react";

export default function Social() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div
      className="min-h-screen bg-white text-[#6B7280] font-['Manrope',sans-serif] overflow-x-hidden"
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        marginTop: "-2rem",
        marginBottom: "-2rem",
      }}
    >
      {/* 1. HERO SECTION (Full Viewport Width 100vw Edge-to-Edge) */}
      <section className="relative pt-32 md:pt-36 pb-64 px-6 md:px-12 bg-gradient-to-br from-[#34164F] via-[#260e3d] to-[#1F2430] overflow-hidden w-full">
        {/* Floating Geometric Shapes & Accent Icons */}
        <div className="absolute top-20 left-10 text-[#F7B71D]/25 animate-pulse">
          <Trophy size={58} />
        </div>
        <div className="absolute top-32 right-12 text-[#7A4DFF]/30 animate-pulse delay-700">
          <KeyRound size={64} />
        </div>
        <div className="absolute top-40 right-1/4 w-4 h-4 rounded-full border-2 border-[#F7B71D]/40" />
        <div className="absolute top-24 left-1/4 w-3 h-3 rounded-full bg-[#7A4DFF]/40" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 w-full max-w-7xl mx-auto text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-[#F7B71D] font-semibold text-sm md:text-base mb-6 backdrop-blur-md border border-[#F7B71D]/30 shadow-lg"
          >
            Community & Social Impact
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1] font-['Sora',sans-serif] w-full max-w-6xl mx-auto"
          >
            Designing brands. Empowering entrepreneurs.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl text-[#F5F5F7]/90 max-w-4xl mx-auto leading-relaxed font-['Manrope',sans-serif]"
          >
            At Rah Pixels, branding has always been about more than design. We believe every entrepreneur deserves the opportunity to build a brand they're proud of.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. OVERLAPPING IMAGE GRID (Exact frame matching Indux /about) */}
      <section className="relative px-6 md:px-12 -mt-40 z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              {
                url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
                alt: "Rah Pixels Team Collaboration 1",
              },
              {
                url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
                alt: "Rah Pixels Mentoring Workshop 2",
              },
              {
                url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
                alt: "Rah Pixels Design Strategy 3",
              },
              {
                url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
                alt: "Rah Pixels Community Growth 4",
              },
            ].map((img, index) => (
              <motion.div
                key={img.url}
                variants={fadeUp}
                className={`relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white ${index % 2 !== 0 ? "md:mt-12" : ""
                  }`}
              >
                <div className="absolute inset-0 bg-slate-100">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. JOURNEY / STORY SECTION */}
      <section className="px-6 md:px-12 pt-24 md:pt-32 pb-12 md:pb-16 bg-white w-full">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#34164F] font-['Sora',sans-serif]">
              Rah Pixels Journey & Commitment
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 md:gap-16 text-lg md:text-xl text-[#6B7280] leading-relaxed text-left font-['Manrope',sans-serif]"
          >
            <motion.p variants={fadeUp}>
              We've consistently supported women entrepreneurs, startups, and small businesses with guidance, mentoring, and design support. During challenging times, we offered over 50 brand identities completely free to help small businesses establish themselves.
            </motion.p>
            <motion.p variants={fadeUp}>
              Watching many of those businesses grow continues to be one of our greatest achievements. Beyond client work, we regularly conduct workshops, webinars, mentoring sessions, and community events to help entrepreneurs understand branding, digital presence, and business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4. VIDEO & FOUNDER QUOTE HIGHLIGHT SECTION */}
      <section className="px-6 md:px-12 pt-12 pb-16 md:pt-16 md:pb-24 bg-[#F5F5F7] w-full">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Founder portrait video showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80"
                alt="Founder Video Showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#34164F]/30 backdrop-brightness-95 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Play Founder Video"
                  className="w-20 h-20 bg-[#34164F] text-[#F7B71D] border-2 border-[#F7B71D]/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#7A4DFF] hover:text-white transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer"
                >
                  <Play size={32} className="ml-1 fill-current" />
                </button>
              </div>
            </div>

            {/* Overlaid Float Quote Box */}
            <div className="absolute -bottom-8 -right-4 md:-right-12 bg-white p-6 md:p-8 rounded-3xl shadow-2xl max-w-[280px] border border-[#34164F]/10">
              <p className="font-bold text-lg text-[#34164F] leading-tight font-['Sora',sans-serif]">
                "Making an impact, together"
              </p>
              <p className="text-[#7A4DFF] mt-2 font-semibold text-sm">
                — Sudeepa Chaudhari, Founder
              </p>
            </div>
          </motion.div>

          {/* Right: Narrative & Highlight Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:pl-12 pt-8 md:pt-0"
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#34164F] mb-6 font-['Sora',sans-serif]">
              We empower small business owners
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8 font-['Manrope',sans-serif]">
              We believe in the power of branding and design to transform ideas into reality. Our dedication to our clients goes beyond pixels; it's about building lasting partnerships that drive real-world impact and business growth.
            </p>
            <div className="pl-6 border-l-4 border-[#F7B71D] bg-[#F7B71D]/10 p-6 rounded-r-2xl shadow-sm">
              <p className="text-xl font-semibold italic text-[#34164F] font-['Sora',sans-serif]">
                "Move different if you want different. Old keys can't Unlock new Door."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. MISSION SECTION (IMAGE ON LEFT, TEXT ON RIGHT) */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-white relative overflow-hidden w-full">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Collage for Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Mission Execution"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
                alt="Workshops & Seminars"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(#7A4DFF_2px,transparent_2px)] [background-size:12px_12px] opacity-30 z-0"></div>
          </motion.div>

          {/* Right: Mission Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#34164F]/10 text-[#34164F] rounded-xl shadow-inner">
                  <Rocket size={28} />
                </div>
                <h2 className="text-3xl font-bold text-[#34164F] font-['Sora',sans-serif]">
                  Our Mission
                </h2>
              </div>
              <p className="text-[#6B7280] mb-6 leading-relaxed text-lg font-['Manrope',sans-serif]">
                To digitally educate and empower 100,000 entrepreneurs through branding, strategic design education, and dedicated community initiatives.
              </p>
              <ul className="space-y-4">
                {[
                  "Digital Branding Education",
                  "Community Workshops & Mentoring Webinars",
                  "Sustainable Growth & Startup Initiatives",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-[#34164F] font-medium text-lg"
                  >
                    <CheckCircle2
                      size={24}
                      className="text-[#F7B71D] flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. VISION SECTION (TEXT ON LEFT, IMAGE ON RIGHT) */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#F5F5F7] relative overflow-hidden w-full">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Vision Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col order-2 lg:order-1"
          >
            <motion.div variants={fadeUp} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#7A4DFF]/10 text-[#7A4DFF] rounded-xl shadow-inner">
                  <Eye size={28} />
                </div>
                <h2 className="text-3xl font-bold text-[#34164F] font-['Sora',sans-serif]">
                  Our Vision
                </h2>
              </div>
              <p className="text-[#6B7280] mb-6 leading-relaxed text-lg font-['Manrope',sans-serif]">
                To build a supportive ecosystem where entrepreneurs—especially women and first-time founders—have the knowledge, confidence, and tools to grow meaningful, lasting businesses.
              </p>
              <ul className="space-y-4">
                {[
                  "Empowering Women Entrepreneurs",
                  "First-Time Founder Mentorship Programs",
                  "Inclusive Brand Design & Business Tools",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-[#34164F] font-medium text-lg"
                  >
                    <CheckCircle2
                      size={24}
                      className="text-[#7A4DFF] flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Image Collage for Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] w-full order-1 lg:order-2"
          >
            <div className="absolute top-0 right-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-[#F5F5F7]">
              <img
                src="https://images.unsplash.com/photo-1531538606149-de649915fc84?auto=format&fit=crop&w=800&q=80"
                alt="Vision Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-[#F5F5F7]">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="Ecosystem Growth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#F7B71D_2px,transparent_2px)] [background-size:12px_12px] opacity-35 z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* 7. "WE HELP BUSINESSES TO GROW FASTER AND BIGGER" SECTION */}
      <section className="relative px-6 md:px-12 py-24 md:py-32 bg-white w-full">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#34164F] mb-16 font-['Sora',sans-serif]"
          >
            We help businesses to grow <br className="hidden md:block" />
            faster and bigger
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#34164F]/10 text-[#34164F] rounded-full flex items-center justify-center mb-6 shadow-inner hover:scale-110 transition-transform duration-300">
                <Briefcase size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#34164F] mb-4 font-['Sora',sans-serif]">
                Professional Team
              </h3>
              <p className="text-[#6B7280] leading-relaxed max-w-sm font-['Manrope',sans-serif]">
                Our experts bring a decade of design and business experience to deliver solutions that elevate your brand identity.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#F7B71D]/20 text-[#34164F] rounded-full flex items-center justify-center mb-6 shadow-inner hover:scale-110 transition-transform duration-300">
                <Target size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#34164F] mb-4 font-['Sora',sans-serif]">
                Target Oriented
              </h3>
              <p className="text-[#6B7280] leading-relaxed max-w-sm font-['Manrope',sans-serif]">
                We focus on your specific business goals, ensuring every brand asset and design decision contributes directly to your success.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#7A4DFF]/10 text-[#7A4DFF] rounded-full flex items-center justify-center mb-6 shadow-inner hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#34164F] mb-4 font-['Sora',sans-serif]">
                Success Guarantee
              </h3>
              <p className="text-[#6B7280] leading-relaxed max-w-sm font-['Manrope',sans-serif]">
                We stand by our work with an unwavering commitment to quality, strategic alignment, and ongoing support for our community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. GLOBAL IMPACT & STATS SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#F5F5F7] border-t border-slate-200 relative overflow-hidden w-full">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7A4DFF]/30 bg-[#7A4DFF]/10 text-[#7A4DFF] font-semibold text-sm mb-6 shadow-sm">
                <Globe size={16} />
                Global Reach & Impact
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#34164F] leading-tight mb-6 font-['Sora',sans-serif]">
                Trusted by Businesses Across the Globe
              </h2>
              <p className="text-lg text-[#6B7280] mb-10 leading-relaxed font-['Manrope',sans-serif]">
                Our branding and design solutions transcend borders. From ambitious local startups to global brands, we build scalable, future-ready brand identities that resonate with audiences worldwide.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col border-l-4 border-[#34164F] pl-4">
                  <span className="text-3xl font-black text-[#34164F] font-['Sora',sans-serif]">
                    10+
                  </span>
                  <span className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mt-1">
                    Years Experience
                  </span>
                </div>
                <div className="flex flex-col border-l-4 border-[#F7B71D] pl-4">
                  <span className="text-3xl font-black text-[#34164F] font-['Sora',sans-serif]">
                    1,400+
                  </span>
                  <span className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mt-1">
                    Brands Designed
                  </span>
                </div>
                <div className="flex flex-col border-l-4 border-[#7A4DFF] pl-4">
                  <span className="text-3xl font-black text-[#34164F] font-['Sora',sans-serif]">
                    100k+
                  </span>
                  <span className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mt-1">
                    Founders Targeted
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Globe graphic animation box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[380px] md:h-[480px] w-full flex items-center justify-center rounded-full bg-[#7A4DFF]/10 shadow-[0_0_100px_rgba(122,77,255,0.15)] border border-[#7A4DFF]/20"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-[#7A4DFF]/40 flex items-center justify-center animate-[spin_30s_linear_infinite]">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border border-[#F7B71D]/40 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-[#34164F] via-[#7A4DFF] to-[#F7B71D] opacity-80 blur-md animate-pulse"></div>
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <Globe size={64} className="text-[#34164F] mb-3 animate-bounce" />
              <span className="text-xl font-bold text-[#34164F] font-['Sora',sans-serif]">Global Community</span>
              <span className="text-xs text-[#7A4DFF] font-bold uppercase tracking-widest mt-1">Connecting Entrepreneurs</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. LEADERSHIP & FOUNDERS SECTION */}
      <section className="px-6 md:px-12 py-24 bg-white w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#34164F] font-['Sora',sans-serif]">
              Leadership & Founders
            </h2>
            <p className="text-[#6B7280] mt-3 text-lg font-['Manrope',sans-serif]">
              The visionary minds driving Rah Pixels forward.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Founder 1 */}
            <motion.div
              variants={fadeUp}
              className="bg-[#F5F5F7] p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-[#7A4DFF]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#34164F] font-['Sora',sans-serif]">
                      Sudeepa Chaudhari
                    </h3>
                    <p className="text-xs font-bold text-[#7A4DFF] mt-1 uppercase tracking-wider">
                      Founder | Global Brand Designer & Strategist
                    </p>
                  </div>
                  <div className="p-3 bg-[#34164F] text-[#F7B71D] rounded-full shadow-md">
                    <Award size={20} />
                  </div>
                </div>
                <p className="text-[#6B7280] leading-relaxed text-base font-['Manrope',sans-serif]">
                  A software engineer by education and a brand designer by passion, Sudeepa has spent the last decade helping more than 1,400 businesses build brands with purpose. Her work combines strategy, creativity, and empathy to create identities that truly reflect the people behind the business. Beyond design, she is committed to mentoring startups and women entrepreneurs through workshops and community initiatives.
                </p>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              variants={fadeUp}
              className="bg-[#F5F5F7] p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-[#7A4DFF]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#34164F] font-['Sora',sans-serif]">
                      Anil Chaudhari
                    </h3>
                    <p className="text-xs font-bold text-[#7A4DFF] mt-1 uppercase tracking-wider">
                      Co-Founder | Business Strategy & Growth
                    </p>
                  </div>
                  <div className="p-3 bg-[#34164F] text-[#F7B71D] rounded-full shadow-md">
                    <Mail size={20} />
                  </div>
                </div>
                <p className="text-[#6B7280] leading-relaxed text-base font-['Manrope',sans-serif]">
                  With extensive experience in hospitality, sales, and business development, Anil brings strategic thinking and customer-centric insight to Rah Pixels. His expertise helps businesses move beyond good design to build sustainable growth and lasting relationships with their customers.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 10. INTERACTIVE VIDEO MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#1F2430] rounded-3xl overflow-hidden shadow-2xl border border-[#7A4DFF]/40">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[#F7B71D] hover:text-[#34164F] transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full flex items-center justify-center bg-[#34164F] p-8 text-center">
              <div className="flex flex-col items-center">
                <Play size={64} className="text-[#F7B71D] mb-4 animate-pulse fill-current" />
                <h3 className="text-2xl font-bold text-white mb-2 font-['Sora',sans-serif]">
                  Rah Pixels Brand Story
                </h3>
                <p className="text-[#F5F5F7]/80 max-w-md text-sm font-['Manrope',sans-serif]">
                  Experience how we empower startups and small business owners through strategic branding and digital design.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}