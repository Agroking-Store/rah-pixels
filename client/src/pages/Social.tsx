import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import ContactModal from "@/components/layout/ContactModal";
import { Users, HeartHandshake, MessageCircle, Mic, Lightbulb, MonitorPlay, Network } from "lucide-react";
import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";
import { Counter } from "@/components/ui/StatCards";

import award3 from "@/assets/awards/Award 3 Mompreneur.png";
import award4 from "@/assets/awards/Award 4.png";
import award5 from "@/assets/awards/Award 5.png";
import award7 from "@/assets/awards/Award 7.jpg";
import award8 from "@/assets/awards/Award 8.jpg";
import award11 from "@/assets/awards/Award 11.jpg";
import award12 from "@/assets/awards/Award 12.jpg";
import award13 from "@/assets/awards/Award 13.jpg";
import award14 from "@/assets/awards/Award 14.jpg";
import award15 from "@/assets/awards/Award 15.jpg";
import awardNew from "@/assets/awards/484554417_9487056118043598_660960719857039055_n.jpg";

import seminar1 from "@/assets/seminar/Seminar.jpeg";
import seminar2 from "@/assets/seminar/Seminar 2.jpeg";
import seminar3 from "@/assets/seminar/Seminar 3.jpg";
import seminar4 from "@/assets/seminar/Seminar 4.jpg";
import seminar5 from "@/assets/seminar/Seminar 5.png";
import seminar6 from "@/assets/seminar/Seminar 6.jpg";
import oneOnOne from "@/assets/seminar/1 on 1.png";
import feature from "@/assets/seminar/Feature.jpg";
import fbLive from "@/assets/seminar/Facebook-live.png";
import fbLive2022 from "@/assets/seminar/Facebook-live-2022.png";

const connoisseurAwards = [
  {
    num: "01",
    name: "Women face of the year 2023 by Fox story",
    clipId: "clip-pixels",
    image: award12
  },
  {
    num: "02",
    name: "Nation worldwide excellence award 2022",
    clipId: "clip-hexagons",
    image: award13
  },
  {
    num: "03",
    name: "Pune Achiever’s platinum award 2024",
    clipId: "clip-pixels",
    image: award8
  },
  {
    num: "04",
    name: "Excel Bright Awards 2021",
    clipId: "clip-hexagons",
    image: award4
  },
  {
    num: "05",
    name: "Mompreneur 2022",
    clipId: "clip-pixels",
    image: award3
  },
  {
    num: "06",
    name: "Pune Ratna 2023",
    clipId: "clip-hexagons",
    image: award5
  },
  {
    num: "07",
    name: "Women of Substance 2026",
    clipId: "clip-pixels",
    image: award11
  },
  {
    num: "08",
    name: "Best designer of the year Pune, 2025",
    clipId: "clip-hexagons",
    image: award14
  },
  {
    num: "09",
    name: "India’s most sparkling star award 2022",
    clipId: "clip-pixels",
    image: award7
  },
  {
    num: "10",
    name: "Certificate of Appreciation by Pune TV 2022",
    clipId: "clip-hexagons",
    image: award15
  },
  {
    num: "11",
    name: "Distinguished Brand By Arena Institute 2026",
    clipId: "clip-pixels",
    image: awardNew
  }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Social = () => {
  const containerRef = useRef(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen text-[#1F2430] pt-24 md:pt-32 overflow-hidden selection:bg-[#34164F] selection:text-white relative">

      {/* Decorative Parallax Background Elements */}
      <motion.div style={{ y: bgY1 }} className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-[#34164F]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <motion.div style={{ y: bgY2 }} className="absolute top-[60%] -right-64 w-[600px] h-[600px] bg-[#F7B71D]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24 mb-16 md:mb-32 relative z-10 flex flex-col items-center">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#dedad5] mb-8">
            <HeartHandshake size={14} className="text-[#34164F]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280]">COMMUNITY & IMPACT</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-heading-extrabold text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-12 text-[#1F2430]">
            <span className="block mb-2">Giving Back.</span>
            <span className="text-[#34164F] block">Growing Together.</span>
          </motion.h1>

          <div className="flex flex-col gap-6 text-base md:text-lg leading-relaxed text-[#6B7280] font-sans max-w-4xl text-center mt-4">
            <motion.p variants={fadeUp}>
              At Rah Pixels, we believe our work goes beyond building brands.
            </motion.p>
            <motion.p variants={fadeUp}>
              Over the years, we've had the opportunity to learn from hundreds of entrepreneurs and businesses. Today, we believe in sharing that knowledge back with the community — especially with women entrepreneurs, startups and emerging businesses.
            </motion.p>
            <motion.p variants={fadeUp}>
              Through guidance, mentoring, speaking and knowledge-sharing, we help entrepreneurs gain clarity, build confidence and move forward.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#1F2430] font-semibold text-xl md:text-2xl mt-4">
              Because when one entrepreneur grows, the ecosystem grows with them.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 4. Seminars & Awards Gallery */}
      <section className="bg-white py-12 md:py-20 border-t border-[#e2ddd8]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-heading-extrabold text-4xl md:text-5xl text-[#34164F]">
              Captured Moments
            </h2>
            <p className="text-[#6B7280] mt-4 font-sans text-lg max-w-2xl mx-auto">
              Seminars, workshops, and awards from around the world.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              seminar1,
              seminar2,
              seminar3,
              seminar4,
              seminar5,
              fbLive2022,
              oneOnOne,
              feature,
              fbLive,
              seminar6,
            ].map((imgUrl, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 4) * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-[140px] xs:h-[180px] sm:h-[220px] md:h-[260px] max-w-full relative group overflow-hidden bg-white border border-[#dedad5] flex-shrink-0"
                >
                  <img
                    src={imgUrl}
                    alt={`Gallery image ${i + 1}`}
                    className="h-full w-auto max-w-full block transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#34164F]/0 group-hover:bg-[#34164F]/40 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                      <HeartHandshake size={32} className="text-[#F7B71D]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. How We Give Back */}
      <section className="bg-gradient-to-br from-[#FAF9F6] via-[#F3F0ED] to-[#EAE7E2] py-16 md:py-28 relative z-10 overflow-hidden">
        {/* Soft decorative glow background shapes */}
        <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-[#7A4DFF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-[#F7B71D]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="text-[#7A4DFF] font-bold tracking-[0.2em] uppercase text-xs mb-3 block"
            >
              Our Social Initiatives
            </motion.span>
            <motion.h2 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="font-heading font-black text-3xl md:text-5xl text-[#34164F] mb-6 tracking-tight uppercase"
            >
              How We Give Back
            </motion.h2>
            <div className="w-12 h-1 bg-[#F7B71D] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {[
              {
                icon: MessageCircle,
                title: "One-to-One Guidance",
                desc: "Personalised conversations to help entrepreneurs navigate branding, business and growth challenges.",
                grad: "from-[#FF8F70] to-[#F7B71D]",
                shadow: "shadow-[#F7B71D]/15"
              },
              {
                icon: Mic,
                title: "Seminars & Workshops",
                desc: "Practical sessions on branding, marketing, visibility and entrepreneurship.",
                grad: "from-[#7A4DFF] to-[#A070FF]",
                shadow: "shadow-[#7A4DFF]/15"
              },
              {
                icon: Lightbulb,
                title: "Mentoring & Knowledge Sessions",
                desc: "Sharing real-world experiences, insights and lessons from years of working with businesses.",
                grad: "from-[#FF6B97] to-[#F7B71D]",
                shadow: "shadow-[#F7B71D]/15"
              },
              {
                icon: MonitorPlay,
                title: "Webinars & Social Lives",
                desc: "Making business and branding knowledge accessible through digital conversations and interactive sessions.",
                grad: "from-[#34164F] to-[#5D2BB3]",
                shadow: "shadow-[#34164F]/15"
              },
              {
                icon: Users,
                title: "Community Speaking",
                desc: "Speaking at women entrepreneur groups, startup communities, networking platforms and business events.",
                grad: "from-[#10B981] to-[#059669]",
                shadow: "shadow-[#10B981]/15"
              },
              {
                icon: Network,
                title: "Collaborative Learning",
                desc: "Creating opportunities for entrepreneurs to connect, exchange ideas and learn from one another.",
                grad: "from-[#06B6D4] to-[#3B82F6]",
                shadow: "shadow-[#06B6D4]/15"
              }
            ].map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group bg-white/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-none border border-[#dedad5] hover:border-[#34164F]/30 hover:shadow-2xl hover:shadow-[#34164F]/5 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Glowing Icon Wrapper */}
                    <div className={`w-14 h-14 rounded-none flex items-center justify-center bg-gradient-to-tr ${item.grad} text-white shadow-lg ${item.shadow} mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                      <IconComp size={24} strokeWidth={2.2} />
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-[#2b2926] mb-4 group-hover:text-[#34164F] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#585450] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Premium Callout Banner */}
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="bg-gradient-to-r from-[#200B3B] via-[#34164F] to-[#4C2087] text-white p-6 sm:p-10 md:p-16 mb-16 md:mb-24 flex flex-col gap-6 md:gap-10 rounded-none border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Soft decorative background spot for the banner */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Centered Heading */}
            <div className="w-full text-center relative z-10">
              <h3 className="text-[#F7B71D] font-bold tracking-[0.25em] uppercase text-xs">EMPOWERING WOMEN. SUPPORTING STARTUPS.</h3>
            </div>

            {/* 2-Column content */}
            <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
              <div className="md:w-1/2">
                <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
                  We believe entrepreneurs don't always need more information. Sometimes, they simply need the right conversation, the right guidance and someone willing to share what they know.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-10 md:border-l border-white/15">
                <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
                  Our goal is to make that support more accessible — helping entrepreneurs build stronger brands, make better decisions and grow with confidence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Metric Stats Banner */}
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="mb-16 md:mb-24 bg-white/40 backdrop-blur-md rounded-none border border-[#dedad5] p-6 sm:p-8 md:p-14"
          >
            <div className="text-center mb-14">
              <span className="text-[#7A4DFF] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">From Knowledge to Impact</span>
              <h4 className="text-xl font-heading font-extrabold text-[#2b2926] uppercase tracking-wide">Every number represents a connection and a step forward.</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 text-center">
              <div className="p-4 sm:p-6">
                <div className="text-4xl md:text-5xl font-heading font-black text-[#F7B71D] mb-3">
                  <Counter to={5500} suffix="+" />
                </div>
                <div className="text-xs font-bold text-[#585450] tracking-[0.1em] uppercase">Entrepreneurs Guided</div>
              </div>
              <div className="p-4 sm:p-6 border-t sm:border-t-0 sm:border-l border-gray-200/60">
                <div className="text-4xl md:text-5xl font-heading font-black text-[#7A4DFF] mb-3">
                  <Counter to={25} suffix="+" />
                </div>
                <div className="text-xs font-bold text-[#585450] tracking-[0.1em] uppercase">Sessions & Workshops</div>
              </div>
              <div className="p-4 sm:p-6 border-t sm:border-l-0 md:border-l md:border-t-0 border-gray-200/60">
                <div className="text-4xl md:text-5xl font-heading font-black text-[#34164F] mb-3">
                  <Counter to={15} suffix="+" />
                </div>
                <div className="text-xs font-bold text-[#585450] tracking-[0.1em] uppercase">Communities Reached</div>
              </div>
              <div className="p-4 sm:p-6 border-t sm:border-l md:border-t-0 border-gray-200/60">
                <div className="text-4xl md:text-5xl font-heading font-black text-[#F7B71D] mb-3">
                  <Counter to={20} suffix="+" />
                </div>
                <div className="text-xs font-bold text-[#585450] tracking-[0.1em] uppercase">Speaking Sessions</div>
              </div>
            </div>
          </motion.div>

          {/* Collaborate Callout Box */}
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="bg-white border border-[#dedad5] rounded-none p-6 sm:p-12 md:p-20 text-center shadow-lg relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-none bg-[#FAF9F6] border border-[#dedad5] flex items-center justify-center mx-auto mb-8 shadow-sm">
              <HeartHandshake className="w-8 h-8 text-[#F7B71D]" />
            </div>
            <span className="text-[#7A4DFF] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">OUR BIGGER VISION</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#2b2926] mb-6 max-w-3xl mx-auto leading-tight uppercase">
              Building a Community Where Entrepreneurs Don't Have to Build Alone.
            </h2>
            <p className="text-[#585450] text-base sm:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
              What started with individual conversations is growing into a bigger vision — a community where entrepreneurs can learn, connect, collaborate and grow together.
            </p>
            <p className="text-[#585450] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              This is our way of giving back.<br/>And this is just the beginning.
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#34164F] text-white px-8 py-4 rounded-xl font-bold tracking-[0.1em] uppercase text-sm hover:bg-[#F7B71D] hover:text-[#2b2926] transition-all duration-300 shadow-md shadow-[#34164F]/10 hover:shadow-lg hover:-translate-y-0.5"
            >
              Collaborate With Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Accolades & Journey Stats Section */}
      <section className="bg-[#13071C] dark py-16 md:py-24 border-t border-[#e2ddd8] relative z-10 w-full">

        {/* Creative Accolades Sub-section */}
        <div className="w-full">
          <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white">
                Creative Accolades
              </h2>
              <p className="text-[#F5F5F7] opacity-90 mt-4 font-sans text-base md:text-lg">
                Visualizing our major milestones and awards
              </p>
            </div>
          </div>
          <ConnoisseurStackInteractor items={connoisseurAwards} />
        </div>

      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default Social;
