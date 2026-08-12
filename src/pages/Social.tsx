import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Rocket, Award, GraduationCap, Briefcase, HeartHandshake, MessageCircle, Mic, Lightbulb, MonitorPlay, Network } from "lucide-react";
import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";
import { StatCards } from "@/components/ui/StatCards";

const connoisseurAwards = [
  {
    num: "2008",
    name: "1X AGENCY OF THE YEAR",
    clipId: "clip-pixels",
    image: "/awards/Award%2012.jpg"
  },
  {
    num: "2009",
    name: "3X CREATIVE AWARD",
    clipId: "clip-hexagons",
    image: "/awards/Award%2013.jpg"
  },
  {
    num: "2011",
    name: "2X FEATURED DESIGN",
    clipId: "clip-pixels",
    image: "/awards/Award%203%20Mompreneur.png"
  },
  {
    num: "2016",
    name: "5X HONORABLE MENTIONED",
    clipId: "clip-pixels",
    image: "/awards/Award%204.png"
  },
  {
    num: "2022",
    name: "8X BEST DESIGN OF THE DAY",
    clipId: "clip-hexagons",
    image: "/awards/Award%205.png"
  },
  {
    num: "2025",
    name: "3X MOBILE EXCELLENCE AWARD",
    clipId: "clip-pixels",
    image: "/awards/Award%208.jpg"
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
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen text-[#1F2430] pt-32 overflow-hidden selection:bg-[#34164F] selection:text-white relative">

      {/* Decorative Parallax Background Elements */}
      <motion.div style={{ y: bgY1 }} className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-[#34164F]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <motion.div style={{ y: bgY2 }} className="absolute top-[60%] -right-64 w-[600px] h-[600px] bg-[#F7B71D]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24 mb-32 relative z-10 flex flex-col items-center">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#dedad5] mb-8">
            <HeartHandshake size={14} className="text-[#34164F]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280]">COMMUNITY & IMPACT</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-heading-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-12 text-[#1F2430]">
            <span className="block mb-2">Giving Back.</span>
            <span className="text-[#34164F] block">Growing Together.</span>
          </motion.h1>

          <div className="flex flex-col gap-6 text-[17px] md:text-[19px] leading-relaxed text-[#6B7280] font-sans max-w-4xl text-center mt-4">
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
      <section className="bg-white py-20 border-t border-[#e2ddd8]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-heading-extrabold text-4xl md:text-5xl text-[#34164F]">
              Captured Moments
            </h2>
            <p className="text-[#6B7280] mt-4 font-sans text-lg max-w-2xl mx-auto">
              Seminars, workshops, and awards from around the world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {[
              "/seminar/Seminar.jpeg",
              "/seminar/Seminar%202.jpeg",
              "/seminar/Seminar%203.jpg",
              "/seminar/Seminar%204.jpg",
              "/seminar/Seminar%205.png",
              "/seminar/Seminar%206.jpg",
              "/seminar/1%20on%201.png",
              "/seminar/Feature.jpg",
              "/seminar/Award%2011.jpg",
              "/seminar/Award%2014.jpg",
            ].map((url, i) => {
              // Assign dynamic column and row spans for a masonry/bento look
              let spanClasses = "";
              if (i === 0) spanClasses = "col-span-2 row-span-2";
              else if (i === 3) spanClasses = "col-span-2 row-span-1";
              else if (i === 6) spanClasses = "col-span-2 row-span-2";
              else if (i === 9) spanClasses = "col-span-2 row-span-1";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 4) * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative group overflow-hidden bg-white ${spanClasses}`}
                >
                  <img
                    src={url}
                    alt={`Gallery image ${i + 1}`}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${url.includes('Award%2014.jpg') ? 'object-contain bg-white p-2' : 'object-cover'}`}
                  />
                  <div className="absolute inset-0 bg-[#34164F]/0 group-hover:bg-[#34164F]/40 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
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
      <section className="bg-[#F8F9FA] py-24 relative z-10">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-heading-extrabold text-4xl md:text-5xl text-[#34164F] mb-6 uppercase">
              How We Give Back
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 border border-[#dedad5] shadow-sm hover:shadow-md transition-shadow">
              <MessageCircle className="text-[#F7B71D] w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-[#1F2430] mb-3">One-to-One Guidance</h3>
              <p className="text-[#6B7280]">Personalised conversations to help entrepreneurs navigate branding, business and growth challenges.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 border border-[#dedad5] shadow-sm hover:shadow-md transition-shadow">
              <Mic className="text-[#7A4DFF] w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-[#1F2430] mb-3">Seminars & Workshops</h3>
              <p className="text-[#6B7280]">Practical sessions on branding, marketing, visibility and entrepreneurship.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 border border-[#dedad5] shadow-sm hover:shadow-md transition-shadow">
              <Lightbulb className="text-[#F7B71D] w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-[#1F2430] mb-3">Mentoring & Knowledge Sessions</h3>
              <p className="text-[#6B7280]">Sharing real-world experiences, insights and lessons from years of working with businesses.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 border border-[#dedad5] shadow-sm hover:shadow-md transition-shadow">
              <MonitorPlay className="text-[#34164F] w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-[#1F2430] mb-3">Webinars & Social Media Lives</h3>
              <p className="text-[#6B7280]">Making business and branding knowledge accessible through digital conversations and interactive sessions.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 border border-[#dedad5] shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-[#F7B71D] w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-[#1F2430] mb-3">Community Speaking</h3>
              <p className="text-[#6B7280]">Speaking at women entrepreneur groups, startup communities, networking platforms and business events.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 border border-[#dedad5] shadow-sm hover:shadow-md transition-shadow">
              <Network className="text-[#7A4DFF] w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-[#1F2430] mb-3">Collaborative Learning</h3>
              <p className="text-[#6B7280]">Creating opportunities for entrepreneurs to connect, exchange ideas and learn from one another.</p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#34164F] text-white p-12 md:p-16 mb-24 flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="md:w-1/2">
              <h3 className="text-[#F7B71D] font-bold tracking-widest uppercase text-sm mb-4">EMPOWERING WOMEN. SUPPORTING STARTUPS.</h3>
              <p className="text-2xl md:text-3xl font-heading font-black leading-tight">
                We believe entrepreneurs don't always need more information. Sometimes, they simply need the right conversation, the right guidance and someone willing to share what they know.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-10 md:border-l border-white/20">
              <p className="text-white/90 text-lg">
                Our goal is to make that support more accessible — helping entrepreneurs build stronger brands, make better decisions and grow with confidence.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24">
            <div className="text-center mb-12">
              <span className="text-[#34164F] font-bold tracking-widest uppercase text-sm mb-2 block">FROM KNOWLEDGE TO IMPACT</span>
              <p className="text-[#6B7280] max-w-2xl mx-auto">Every number represents a conversation, a connection and a step forward.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#F7B71D] mb-2">5000+</div>
                <div className="text-sm font-bold text-[#1F2430] uppercase">Entrepreneurs Guided</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#7A4DFF] mb-2">25+</div>
                <div className="text-sm font-bold text-[#1F2430] uppercase">Sessions & Workshops</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#34164F] mb-2">15+</div>
                <div className="text-sm font-bold text-[#1F2430] uppercase">Communities Reached</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#F7B71D] mb-2">20+</div>
                <div className="text-sm font-bold text-[#1F2430] uppercase">Speaking Sessions</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border border-[#dedad5] p-12 md:p-20 text-center">
            <HeartHandshake className="w-16 h-16 text-[#F7B71D] mx-auto mb-6" />
            <span className="text-[#6B7280] font-bold tracking-widest uppercase text-sm mb-4 block">OUR BIGGER VISION</span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-[#1F2430] mb-6 max-w-3xl mx-auto">
              Building a Community Where Entrepreneurs Don't Have to Build Alone.
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-4">
              What started with individual conversations is growing into a bigger vision — a community where entrepreneurs can learn, connect, collaborate and grow together.
            </p>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-10">
              This is our way of giving back.<br/>And this is just the beginning.
            </p>
            <button className="bg-[#34164F] text-white px-8 py-4 font-bold tracking-wider uppercase text-sm hover:bg-[#F7B71D] hover:text-[#1F2430] transition-colors">
              Collaborate With Us
            </button>
          </motion.div>
        </div>
      </section>


      {/* Accolades & Journey Stats Section */}
      <section className="bg-[#13071C] py-24 border-t border-[#e2ddd8] relative z-10 w-full">

        {/* Creative Accolades Sub-section */}
        <div className="mb-32 w-full">
          <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white">
                Creative Accolades
              </h2>
              <p className="text-[#F5F5F7] opacity-90 mt-4 font-sans text-lg">
                Visualizing our major milestones and awards
              </p>
            </div>
          </div>
          <ConnoisseurStackInteractor items={connoisseurAwards} />
        </div>

        {/* The Journey Stats Sub-section */}
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-[#F7B71D] font-bold tracking-widest uppercase text-sm mb-4 block">The Journey</span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white">Impact by the numbers</h2>
          </motion.div>

          <StatCards />
        </div>
      </section>
    </div>
  );
};

export default Social;
