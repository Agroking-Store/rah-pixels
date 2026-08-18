import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="bg-white text-black py-15 px-6 md:px-12 lg:px-20 border-t border-gray-200 relative overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#34164F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32 relative z-10">

        {/* Left Column - Sticky Context */}
        <div className="lg:w-5/12 flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
          <div className="flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[32px] font-sora font-bold uppercase tracking-tight text-[#34164F]"
            >
              About Our Studio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-[22px] font-sora font-medium leading-[1.4] text-gray-900"
            >
              We turn businesses into brands people remember.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-[18px] font-manrope text-gray-700 font-normal leading-[1.7]"
          >
            At <strong className="text-black font-semibold">Rah Pixels</strong>, we believe a brand should do more than look good. It should <strong className="text-black font-semibold">command attention, build trust, and leave a lasting impression.</strong>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-[18px] font-manrope text-gray-700 font-normal leading-[1.7]"
          >
            We combine <strong className="text-black font-semibold">strategy, design, and storytelling</strong> to create distinctive brands that are clear in their purpose, confident in their presence, and built for growth.
          </motion.p>
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-7/12 flex flex-col pt-4 lg:pt-0">

          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col">
              <h3 className="text-[32px] font-sora font-bold uppercase text-[#34164F]">Our Journey</h3>

              <p className="text-[22px] font-sora font-medium leading-[1.4] text-gray-900">
                Built on design. Driven by purpose.
              </p>
            </div>

            <p className="text-[18px] font-manrope text-gray-700 leading-[1.8] font-normal">
              Over the years, Rah Pixels has evolved from a passion for design into a <strong className="text-black font-semibold">full-service branding and creative studio</strong> helping businesses build brands with meaning and impact.
            </p>

            <p className="text-[18px] font-manrope text-gray-700 leading-[1.8] font-normal">
              With <strong className="text-black font-semibold">10+ years of experience and 1,400+ brands designed</strong>, we've worked with businesses across India and international markets—each with a different story, ambition, and vision.
            </p>

            <p className="text-[18px] font-manrope text-gray-700 leading-[1.8] font-normal">
              And we don't believe in one-size-fits-all branding.
            </p>

            <p className="text-[18px] font-manrope text-gray-700 leading-[1.8] font-normal">
              We start by understanding <strong className="text-black font-semibold">what makes your business different</strong>, then turn that essence into a brand people can recognise, trust, and remember.
            </p>

            <p className="text-[18px] font-manrope text-black leading-[1.8] font-semibold mt-4">
              Because great branding isn't decoration. It's perception, positioning, and personality—designed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
