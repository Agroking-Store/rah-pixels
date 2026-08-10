import { motion, type Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const FoundersSection2 = () => {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="text-[#F7B71D] font-mono text-sm tracking-widest uppercase mb-4 block">
            The Visionaries
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
            Meet the Founders
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-40">

          {/* Sudeepa Chaudhari */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* Image Placeholder */}
            <div className="w-full md:w-4/5 lg:w-[38%] mx-auto aspect-[4/5] bg-[#0a0a0a] border border-white/10 rounded-none flex items-center justify-center relative overflow-hidden group shadow-2xl">
              <div className="text-neutral-600 font-mono text-sm uppercase tracking-widest">Image Placeholder</div>
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F7B71D]/5 rounded-full blur-3xl group-hover:bg-[#F7B71D]/15 transition-all duration-700" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[58%] space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Sudeepa Chaudhari</h3>
                <p className="text-[#F7B71D] font-mono text-sm tracking-wider uppercase">
                  Founder | Global Brand Designer & Strategist
                </p>
              </div>

              <div className="w-16 h-[1px] bg-white/20" />

              <div className="space-y-6 text-xl text-neutral-400 leading-relaxed font-light">
                <p>
                  A software engineer by education and a brand designer by passion, Sudeepa has spent the last decade helping more than <strong className="text-white font-medium">1,400 businesses</strong> build brands with purpose.
                </p>
                <p>
                  Her work combines strategy, creativity, and empathy to create identities that truly reflect the people behind the business. Beyond design, she is committed to mentoring startups and women entrepreneurs through workshops and community initiatives.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Anil Chaudhari */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
          >
            {/* Image Placeholder */}
            <div className="w-full md:w-4/5 lg:w-[38%] mx-auto aspect-[4/5] bg-[#0a0a0a] border border-white/10 rounded-none flex items-center justify-center relative overflow-hidden group shadow-2xl">
              <div className="text-neutral-600 font-mono text-sm uppercase tracking-widest">Image Placeholder</div>
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-all duration-700" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[58%] space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Anil Chaudhari</h3>
                <p className="text-[#F7B71D] font-mono text-sm tracking-wider uppercase">
                  Co-Founder | Business Strategy & Growth
                </p>
              </div>

              <div className="w-16 h-[1px] bg-white/20" />

              <div className="space-y-6 text-xl text-neutral-400 leading-relaxed font-light">
                <p>
                  With extensive experience in hospitality, sales, and business development, Anil brings <strong className="text-white font-medium">strategic thinking</strong> and customer-centric insight to Rah Pixels.
                </p>
                <p>
                  His expertise helps businesses move beyond good design to build sustainable growth and lasting relationships with their customers.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
