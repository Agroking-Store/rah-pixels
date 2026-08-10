import { motion, type Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const FoundersSection = () => {
  return (
    <section className="bg-[#F5F5F7] py-32 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Sora:wght@400;500;600;700;800&display=swap');
      `}</style>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="text-[#F7B71D] font-['Manrope'] text-[16px] font-normal tracking-widest uppercase mb-4 block">
            The Visionaries
          </span>
          <h2 className="text-[32px] font-['Sora'] font-extrabold tracking-tighter text-[#34164F]">
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
            <div className="w-full md:w-4/5 lg:w-[38%] mx-auto aspect-[4/5] bg-white border border-[#1F2430]/10 rounded-none flex items-center justify-center relative overflow-hidden group shadow-2xl">
              <div className="text-[#6B7280] font-['Manrope'] text-[16px] uppercase tracking-widest">Image Placeholder</div>
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2430]/5 to-transparent pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F7B71D]/10 rounded-full blur-3xl group-hover:bg-[#F7B71D]/20 transition-all duration-700" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[58%] space-y-8">
              <div>
                <h3 className="text-[28px] font-['Sora'] font-semibold text-[#1F2430] mb-3 tracking-tight">Sudeepa Chaudhari</h3>
                <p className="text-[#34164F] font-['Sora'] text-[22px] font-medium tracking-wider">
                  Founder | Global Brand Designer & Strategist
                </p>
              </div>
              
              <div className="w-16 h-[2px] bg-[#F7B71D]" />
              
              <div className="space-y-6 text-[18px] font-['Manrope'] font-normal text-[#6B7280] leading-relaxed">
                <p>
                  A software engineer by education and a brand designer by passion, Sudeepa has spent the last decade helping more than <strong className="text-[#1F2430] font-medium">1,400 businesses</strong> build brands with purpose.
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
            <div className="w-full md:w-4/5 lg:w-[38%] mx-auto aspect-[4/5] bg-white border border-[#1F2430]/10 rounded-none flex items-center justify-center relative overflow-hidden group shadow-2xl">
              <div className="text-[#6B7280] font-['Manrope'] text-[16px] uppercase tracking-widest">Image Placeholder</div>
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2430]/5 to-transparent pointer-events-none" />
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#7A4DFF]/10 rounded-full blur-3xl group-hover:bg-[#7A4DFF]/20 transition-all duration-700" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[58%] space-y-8">
              <div>
                <h3 className="text-[28px] font-['Sora'] font-semibold text-[#1F2430] mb-3 tracking-tight">Anil Chaudhari</h3>
                <p className="text-[#34164F] font-['Sora'] text-[22px] font-medium tracking-wider">
                  Co-Founder | Business Strategy & Growth
                </p>
              </div>
              
              <div className="w-16 h-[2px] bg-[#F7B71D]" />
              
              <div className="space-y-6 text-[18px] font-['Manrope'] font-normal text-[#6B7280] leading-relaxed">
                <p>
                  With extensive experience in hospitality, sales, and business development, Anil brings <strong className="text-[#1F2430] font-medium">strategic thinking</strong> and customer-centric insight to Rah Pixels.
                </p>
                <p>
                  His expertise helps businesses move beyond good design to build sustainable growth and lasting relationships with their customers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stat Cards */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full pt-10 md:pt-20 border-t border-[#1F2430]/10"
          >
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "1,400+", label: "Brands Designed" },
              { number: "50+", label: "Industry Awards" },
              { number: "1000+", label: "Entrepreneurs Guided" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#1F2430]/5 shadow-xl flex flex-col items-center justify-center text-center space-y-4 group hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-[40px] md:text-[48px] font-['Sora'] font-extrabold text-[#34164F] group-hover:text-[#F7B71D] transition-colors duration-300 leading-none">
                  {stat.number}
                </h4>
                <div className="w-10 h-[2px] bg-[#F7B71D]/50 group-hover:bg-[#F7B71D] group-hover:w-16 transition-all duration-300" />
                <p className="text-[16px] md:text-[18px] font-['Manrope'] font-medium text-[#6B7280]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
