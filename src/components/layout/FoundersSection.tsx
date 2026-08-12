import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { StatCards } from '../ui/StatCards';

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
          <h2 className="text-[32px] font-['Sora'] font-extrabold tracking-tighter text-[#34164F] mb-4">
            Meet the Founders
          </h2>
          <p className="text-[#1F2430] font-['Sora'] text-[20px] font-semibold mb-3">
            Two minds. Two strengths. One creative vision.
          </p>
          <p className="text-[#6B7280] font-['Manrope'] text-[18px] font-normal max-w-3xl mx-auto leading-relaxed">
            Rah Pixels brings together creative thinking and real-world business experience to help ambitious businesses build brands with clarity, character, and purpose.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-40">
          
          {/* Sudeepa Chaudhari */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20"
          >
            {/* Image Placeholder replaced with Sample Image */}
            <div className="w-full md:w-4/5 lg:w-[38%] mx-auto aspect-[4/5] bg-white border border-[#1F2430]/10 rounded-none relative overflow-hidden group shadow-2xl">
              <img 
                src="/sample.jpg" 
                alt="Sudeepa Chaudhari"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2430]/5 to-transparent pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F7B71D]/10 rounded-full blur-3xl group-hover:bg-[#F7B71D]/20 transition-all duration-700 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[58%] space-y-8">
              <div>
                <h3 className="text-[28px] font-['Sora'] font-semibold text-[#1F2430] mb-3 tracking-tight">SUDEEPA CHAUDHARI</h3>
                <p className="text-[#34164F] font-['Sora'] text-[22px] font-medium tracking-wider">
                  Founder | Global Brand Designer & Strategist
                </p>
              </div>
              
              <div className="w-16 h-[2px] bg-[#F7B71D]" />
              
              <div className="space-y-6 text-[18px] font-['Manrope'] font-normal text-[#6B7280] leading-relaxed">
                <p className="text-[#1F2430] font-medium text-[20px]">
                  Turning ideas into brands people remember.
                </p>
                <p>
                  A software engineer by education and a brand designer by passion, Sudeepa has spent 10+ years building brands for entrepreneurs and businesses across India and international markets.
                </p>
                <p>
                  Through her creative work, she has helped 1,400+ businesses transform ideas into distinctive brand identities—from strategy and visual identity to the creative details that shape how a business is perceived.
                </p>
                <p>
                  Her work goes beyond making things look beautiful. She guides businesses through the branding journey, helping them discover what makes them different and translating that into a brand that feels authentic, professional, and memorable.
                </p>
                <p className="italic">
                  <strong className="not-italic font-semibold text-[#1F2430]">Her belief:</strong><br />
                  Every business has a story. Great branding gives that story a voice.
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
            className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-20"
          >
            {/* Image Placeholder replaced with Sample Image 2 */}
            <div className="w-full md:w-4/5 lg:w-[38%] mx-auto aspect-[4/5] bg-white border border-[#1F2430]/10 rounded-none relative overflow-hidden group shadow-2xl">
              <img 
                src="/sample2.jpg" 
                alt="Anil Chaudhari"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2430]/5 to-transparent pointer-events-none" />
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#7A4DFF]/10 rounded-full blur-3xl group-hover:bg-[#7A4DFF]/20 transition-all duration-700 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[58%] space-y-8">
              <div>
                <h3 className="text-[28px] font-['Sora'] font-semibold text-[#1F2430] mb-3 tracking-tight">ANIL CHAUDHARI</h3>
                <p className="text-[#34164F] font-['Sora'] text-[22px] font-medium tracking-wider">
                  Co-Founder | Strategic Partner
                </p>
              </div>
              
              <div className="w-16 h-[2px] bg-[#F7B71D]" />
              
              <div className="space-y-6 text-[18px] font-['Manrope'] font-normal text-[#6B7280] leading-relaxed">
                <p className="text-[#1F2430] font-medium text-[20px]">
                  Bringing business thinking to creative vision.
                </p>
                <p>
                  With 20+ years of experience in the hotel and hospitality industry, Anil brings a deep understanding of business, customers, operations, and market realities.
                </p>
                <p>
                  As a strategic partner at Rah Pixels, he brings a commercial and practical perspective to the creative process—helping connect ideas with business objectives and ensuring that branding is not just visually compelling, but meaningful and relevant to the market.
                </p>
                <p>
                  His experience helps Rah Pixels look beyond design and understand the bigger picture behind every business we work with.
                </p>
                <p className="italic">
                  <strong className="not-italic font-semibold text-[#1F2430]">His belief:</strong><br />
                  Great creative work becomes powerful when it understands the business behind it.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Beyond Rah Pixels / Zostro Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full bg-[#13071C] rounded-none overflow-hidden relative shadow-2xl"
          >
            <div className="p-10 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 items-center">
              {/* Left Side: Beyond Rah Pixels */}
              <div className="space-y-6">
                <span className="text-[#7A4DFF] font-['Manrope'] text-[16px] font-bold tracking-[0.2em] uppercase block">
                  Beyond Rah Pixels
                </span>
                <h3 className="text-[32px] md:text-[40px] font-['Sora'] font-extrabold text-white leading-tight tracking-tight">
                  Building businesses.<br className="hidden md:block" /> Creating possibilities.
                </h3>
                <div className="w-16 h-[2px] bg-[#F7B71D]" />
                <div className="space-y-4 text-[18px] font-['Manrope'] font-normal text-white/70 leading-relaxed">
                  <p>
                    Rah Pixels is one part of our entrepreneurial journey.
                  </p>
                  <p>
                    Together, we also build and explore ventures in different industries—bringing our combined strengths in creativity, strategy, hospitality, and business to create opportunities beyond the world of design.
                  </p>
                </div>
              </div>

              {/* Right Side: Zostro */}
              <div className="bg-white/[0.03] border border-white/10 rounded-none p-8 md:p-10 relative overflow-hidden transition-colors duration-500 hover:bg-white/[0.05]">
                <div className="relative z-10 space-y-6">
                  <h4 className="text-[36px] font-['Sora'] font-bold text-white tracking-wider inline-flex items-center gap-3 cursor-pointer group/link hover:opacity-80 transition-opacity">
                    ZOSTRO
                    <ArrowUpRight className="w-8 h-8 text-[#F7B71D] transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </h4>
                  <p className="text-[#F7B71D] font-['Sora'] text-[20px] font-semibold leading-snug">
                    A venture built around hospitality, accommodation, and business solutions.
                  </p>
                  <p className="text-[16px] font-['Manrope'] font-normal text-white/60 leading-relaxed">
                    Zostro represents our entrepreneurial side beyond Rah Pixels—where industry experience, business strategy, and execution come together to create meaningful hospitality solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="w-full flex flex-col">
            {/* Stat Cards */}
            <StatCards className="pt-[54px] md:pt-[70px]" />
          </div>

        </div>
      </div>
    </section>
  );
};
