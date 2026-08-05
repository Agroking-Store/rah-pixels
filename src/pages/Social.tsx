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
  X,
  ArrowUpRight,
  CheckCircle,
  GraduationCap,
  Home,
  Star,
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
    <div className="min-h-screen bg-white text-[#6B7280] font-['Manrope',sans-serif] overflow-x-hidden">
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
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
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

      {/* 8. WHO WE ARE / BENTO GRID SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-white w-full border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Bento Images & Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {/* Top Large Image */}
            <motion.div variants={fadeUp} className="col-span-2 h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Community Workshop"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Bottom Left: Stat Box */}
            <motion.div variants={fadeUp} className="col-span-1 h-48 md:h-56 bg-[#CEFA7B] rounded-[2rem] flex flex-col items-center justify-center text-center p-6 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:bg-white/40 transition-colors"></div>
              <div className="w-10 h-10 bg-[#34164F] rounded-full flex items-center justify-center text-white mb-3 shadow-md z-10">
                <CheckCircle size={20} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-[#34164F] font-['Sora',sans-serif] z-10">1,400+</h3>
              <p className="text-[#34164F]/80 text-xs sm:text-sm mt-1 font-bold font-['Manrope',sans-serif] leading-tight z-10">
                Brands Designed <br /> With Purpose
              </p>
            </motion.div>

            {/* Bottom Right: Image */}
            <motion.div variants={fadeUp} className="col-span-1 h-48 md:h-56 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600&q=80"
                alt="Women Entrepreneur"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#34164F] rounded-full"></span>
              <span className="text-[#6B7280] font-bold text-xs uppercase tracking-widest font-['Manrope',sans-serif]">Our Journey</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A3439] mb-6 leading-[1.15] font-['Sora',sans-serif] tracking-tight">
              Empowering entrepreneurs through strategic branding
            </h2>

            <p className="text-[#6B7280] mb-8 leading-relaxed text-sm md:text-base font-['Manrope',sans-serif]">
              Branding is more than design. We believe every entrepreneur deserves a brand they're proud of. We've consistently supported women entrepreneurs, startups, and small businesses with guidance, mentoring, and even free brand identities to help them establish themselves.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <button className="flex items-center gap-3 cursor-pointer bg-white border border-[#CEFA7B] pl-6 pr-2 py-2 rounded-full font-bold text-[#34164F] hover:bg-[#CEFA7B] transition-colors shadow-sm group">
                <span className="text-sm">Read our story</span>
                <span className="w-8 h-8 bg-[#CEFA7B] group-hover:bg-[#34164F] group-hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Sudeepa Chaudhari"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#34164F] text-sm font-['Sora',sans-serif]">Sudeepa Chaudhari</h4>
                  <span className="text-[#6B7280] text-xs font-semibold uppercase tracking-wider">Founder & Strategist</span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100 mb-8"></div>

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-black text-[#34164F] font-['Sora',sans-serif]">10+</span>
                </div>
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mt-2 block">Years of Experience</span>
              </div>

              <div>
                <span className="text-sm font-bold text-[#34164F] block mb-3 font-['Sora',sans-serif]">Core Focus</span>
                <div className="flex flex-wrap gap-3 max-w-[250px]">
                  {["BRAND STRATEGY", "IDENTITY DESIGN", "MENTORING", "WORKSHOPS"].map((skill) => (
                    <span key={skill} className="text-[9px] font-bold text-[#6B7280] uppercase tracking-widest leading-none">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 9. WHO WE'RE BUILDING FOR (NEW SECTION) */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#F9FAFB] w-full">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F2430] font-['Sora',sans-serif]">
              Who We're Building For
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-['Manrope',sans-serif]">
              This community is tailored for every woman looking to learn, create, earn, and thrive on her own terms.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Card 1: College Girls */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex flex-col grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default"
            >
              <div className="w-full h-52 md:h-60 mb-6 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                  alt="College Girls"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#7A4DFF]/10 p-2.5 rounded-xl text-[#7A4DFF]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2430] font-['Sora',sans-serif]">
                  College Girls
                </h3>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-8 flex-grow font-['Manrope',sans-serif]">
                Dreaming big, exploring new skills, learning core competencies, and prepping early for a standout future.
              </p>
              <div className="mt-auto">
                <span className="inline-block bg-[#7A4DFF]/10 text-[#7A4DFF] text-xs font-bold font-['Sora',sans-serif] px-4 py-2 rounded-full">
                  Future Leaders
                </span>
              </div>
            </motion.div>

            {/* Card 2: Housewives */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex flex-col grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default"
            >
              <div className="w-full h-52 md:h-60 mb-6 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
                  alt="Housewives"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#7A4DFF]/10 p-2.5 rounded-xl text-[#7A4DFF]">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2430] font-['Sora',sans-serif]">
                  Housewives
                </h3>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-8 flex-grow font-['Manrope',sans-serif]">
                Balancing daily life, managing homes with grace, and ready to rediscover passions and build something extraordinary.
              </p>
              <div className="mt-auto">
                <span className="inline-block bg-[#7A4DFF]/10 text-[#7A4DFF] text-xs font-bold font-['Sora',sans-serif] px-4 py-2 rounded-full">
                  Limitless Potential
                </span>
              </div>
            </motion.div>

            {/* Card 3: Aspiring Entrepreneurs */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex flex-col grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default"
            >
              <div className="w-full h-52 md:h-60 mb-6 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                  alt="Aspiring Entrepreneurs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#7A4DFF]/10 p-2.5 rounded-xl text-[#7A4DFF]">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2430] font-['Sora',sans-serif]">
                  Aspiring Entrepreneurs
                </h3>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-8 flex-grow font-['Manrope',sans-serif]">
                Armed with raw ideas, bubbling creativity, and the inner drive to build and scale something meaningful from scratch.
              </p>
              <div className="mt-auto">
                <span className="inline-block bg-[#7A4DFF]/10 text-[#7A4DFF] text-xs font-bold font-['Sora',sans-serif] px-4 py-2 rounded-full">
                  Visionary Makers
                </span>
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