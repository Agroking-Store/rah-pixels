import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="bg-white text-black py-32 px-6 md:px-12 lg:px-20 border-t border-gray-200 relative overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#34164F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32 relative z-10">

        {/* Left Column - Sticky Context */}
        <div className="lg:w-5/12 flex flex-col gap-10 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-[#F7B71D]" />
            <span className="text-[#F7B71D] text-[16px] font-['Manrope'] uppercase tracking-[0.2em] font-semibold">
              About Our Studio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-[32px] font-['Sora'] font-bold leading-[1.3] tracking-tight text-gray-900"
          >
            We turn businesses into brands people remember.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-[18px] font-['Manrope'] text-gray-600 font-normal leading-[1.6]"
          >
            At Rah Pixels, we believe a brand should do more than look good.It should command attention, build trust, and leave a lasting impression.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-[18px] font-['Manrope'] text-gray-600 font-normal leading-[1.6]"
          >
            We combine strategy, design, and storytelling to create distinctive brands that are clear in their purpose, confident in their presence, and built for growth.
          </motion.p>
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-7/12 flex flex-col gap-24 pt-4 lg:pt-16">

          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-[28px] font-['Sora'] font-semibold mb-8 text-gray-900">Our Journey</h3>
            <p className="text-[18px] font-['Manrope'] text-gray-700 leading-[1.8] mb-6">
              Built on design. Driven by purpose.
            </p>
            <p className="text-[18px] font-['Manrope'] text-gray-700 leading-[1.8]">
              Over the years, Rah Pixels has evolved from a passion for design into a full-service branding and creative studio helping businesses build brands with meaning and impact.
            </p>
            <p className="text-[18px] font-['Manrope'] text-gray-700 leading-[1.8]">
              With 10+ years of experience and 1,400+ brands designed, we've worked with businesses across India and international markets—each with a different story, ambition, and vision.
              And we don't believe in one-size-fits-all branding.
            </p>
            <p className="text-[18px] font-['Manrope'] text-gray-700 leading-[1.8]">
              We start by understanding what makes your business different, then turn that essence into a brand people can recognise, trust, and remember.

            </p>
            <p className="text-[18px] font-['Manrope'] text-gray-700 leading-[1.8] mt-6">
              Because great branding isn't decoration.It's perception, positioning, and personality—designed.
            </p>
          </motion.div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-[22px] font-['Sora'] font-medium mb-4 text-gray-900">Brand Identity</h4>
              <p className="text-[16px] font-['Manrope'] text-gray-600 leading-[1.7]">
                We create brand identities that give your business a strong, consistent, and memorable presence across every touchpoint.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-[22px] font-['Sora'] font-medium mb-4 text-gray-900">Brand Collateral</h4>
              <p className="text-[16px] font-['Manrope'] text-gray-600 leading-[1.7]">
                From business essentials to marketing materials, we design professional collateral that strengthens your brand and builds credibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-[22px] font-['Sora'] font-medium mb-4 text-gray-900">Brand Communication</h4>
              <p className="text-[16px] font-['Manrope'] text-gray-600 leading-[1.7]">
                Creative visuals that help your brand communicate effectively across digital and print platforms.
              </p>
            </motion.div>
          </div>

          {/* Stats / Trust */}
          <motion.div
            className="border-t border-gray-200 pt-16 flex flex-col sm:flex-row gap-16 sm:gap-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex-1">
              <span className="text-[#F7B71D] text-[16px] font-['Sora'] uppercase tracking-widest font-bold mb-3 block">Trusted</span>
              <h4 className="text-[32px] font-['Sora'] font-bold mb-3 text-gray-900">1,400+</h4>
              <p className="text-[16px] font-['Manrope'] text-gray-600">Proudly partnering with brands worldwide.</p>
            </div>

            <div className="flex-1">
              <span className="text-[#F7B71D] text-[16px] font-['Sora'] uppercase tracking-widest font-bold mb-3 block">Clients</span>
              <h4 className="text-[22px] font-['Sora'] font-medium mb-3 text-gray-900">Real Partnerships.</h4>
              <p className="text-[16px] font-['Manrope'] text-gray-600">Meaningful brands. Lasting relationships.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
