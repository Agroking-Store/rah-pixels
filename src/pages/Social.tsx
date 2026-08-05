"use client"
import { motion, type Variants } from "framer-motion";
import { Trophy, KeyRound, Rocket, Eye, CheckCircle2, Play } from "lucide-react";

export default function Social() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans overflow-hidden">

      {/* Hero Section (Blue Background inspired by [source: 2]) */}
      <section className="relative pt-32 md:pt-25 pb-64 px-6 bg-blue-600">
        {/* Floating Geometric Shapes & Icons */}
        <div className="absolute top-20 left-1/4 text-white/20">
          <Trophy size={50} />
        </div>
        <div className="absolute top-32 right-1/4 text-white/20">
          <KeyRound size={58} />
        </div>
        <div className="absolute top-40 right-1/3 w-4 h-4 rounded-full border-2 border-white/20" />
        <div className="absolute top-24 left-1/3 w-3 h-3 rounded-full bg-white/20" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-semibold text-sm mb-4 backdrop-blur-md">
            Community & Social
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-7xl font-extrabold text-white mb-6">
            Designing brands. Empowering entrepreneurs.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            At Rah Pixels, branding has always been about more than design. We believe every entrepreneur deserves the opportunity to build a brand they're proud of.
          </motion.p>
        </motion.div>
      </section>

      {/* Overlapping Image Grid (Inspired by [source: 2]) */}
      <section className="relative px-6 -mt-40 z-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            ].map((imgSrc, index) => (
              <motion.div
                key={imgSrc}
                variants={fadeUp}
                className={`relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
              >
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800">
                  <img
                    src={imgSrc}
                    alt={`Rah Pixels Community ${index + 1}`}
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment & Initiatives Story Section */}
      <section className="px-6 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
              Our Commitment to Growth
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 md:gap-16 text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-left"
          >
            <motion.p variants={fadeUp}>
              That's why we've consistently supported women entrepreneurs, startups, and small businesses with guidance, mentoring, and design support. During challenging times, we offered over 50 brand identities completely free to help small businesses establish themselves.
            </motion.p>
            <motion.p variants={fadeUp}>
              Watching many of those businesses grow continues to be one of our greatest achievements. Beyond client work, we regularly conduct workshops, webinars, mentoring sessions, and community events to help entrepreneurs understand branding, digital presence, and business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Journey Stats Grid */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { title: "10+", subtitle: "Years of Experience" },
              { title: "1,400+", subtitle: "Brands Designed" },
              { title: "Awards", subtitle: "Multiple Industry Honors" },
              { title: "Thousands", subtitle: "Entrepreneurs Guided" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 rounded-3xl text-center border border-slate-200/80 dark:border-slate-800 shadow-sm"
              >
                <h3 className="text-3xl md:text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">{stat.title}</h3>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{stat.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-6 py-24 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white dark:border-slate-950">
              <img src="https://images.unsplash.com/photo-1531538606149-de649915fc84?auto=format&fit=crop&w=800&q=80" alt="Vision Collaboration"  className="object-cover"  />
            </div>
            <div className="absolute bottom-0 right-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white dark:border-slate-950">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Ecosystem Growth"  className="object-cover"  />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] [background-size:12px_12px] opacity-30 z-0"></div>
          </motion.div>

          {/* Right: Vision Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl shadow-inner">
                  <Eye size={28} />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">Vision</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Building a Supportive Ecosystem</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
                To build a supportive ecosystem where entrepreneurs—especially women and first-time founders—have the knowledge, confidence, and tools to grow meaningful businesses.
              </p>
              <ul className="space-y-4">
                {['Empowering Women Entrepreneurs', 'First-Time Founder Mentoring', 'Inclusive Business Tools'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium text-lg">
                    <CheckCircle2 size={24} className="text-indigo-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mission Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col order-2 lg:order-1"
          >
            <motion.div variants={fadeUp} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-xl shadow-inner">
                  <Rocket size={28} />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Empowering 100,000 Founders</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
                To digitally educate and empower 100,000 entrepreneurs through branding, design education, and community initiatives.
              </p>
              <ul className="space-y-4">
                {['Digital Branding Education', 'Community Workshops & Webinars', 'Sustainable Growth Initiatives'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium text-lg">
                    <CheckCircle2 size={24} className="text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] w-full order-1 lg:order-2"
          >
            <div className="absolute top-0 right-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-slate-50 dark:border-slate-900">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" alt="Mission Execution"  className="object-cover"  />
            </div>
            <div className="absolute bottom-0 left-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-slate-50 dark:border-slate-900">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" alt="Workshops"  className="object-cover"  />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#6366f1_2px,transparent_2px)] [background-size:12px_12px] opacity-30 z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Founders Section */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Leadership & Founders</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg">The minds driving Rah Pixels forward.</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Founder: Sudeepa Chaudhari */}
            <motion.div variants={fadeUp} className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Sudeepa Chaudhari</h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-wider">
                  Founder | Global Brand Designer & Strategist
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-6 text-base">
                  A software engineer by education and a brand designer by passion, Sudeepa has spent the last decade helping more than 1,400 businesses build brands with purpose. Her work combines strategy, creativity, and empathy to create identities that truly reflect the people behind the business. Beyond design, she is committed to mentoring startups and women entrepreneurs through workshops and community initiatives.
                </p>
              </div>
            </motion.div>

            {/* Co-Founder: Anil Chaudhari */}
            <motion.div variants={fadeUp} className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Anil Chaudhari</h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-wider">
                  Co-Founder | Business Strategy & Growth
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-6 text-base">
                  With extensive experience in hospitality, sales, and business development, Anil brings strategic thinking and customer-centric insight to Rah Pixels. His expertise helps businesses move beyond good design to build sustainable growth and lasting relationships with their customers.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}