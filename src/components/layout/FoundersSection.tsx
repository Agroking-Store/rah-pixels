import { motion, type Variants } from 'framer-motion';
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

          <div className="w-full flex flex-col">
            {/* Stat Cards */}
            <StatCards className="pt-[54px] md:pt-[70px]" />
          </div>

        </div>
      </div>
    </section>
  );
};
