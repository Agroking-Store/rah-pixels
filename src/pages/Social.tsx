import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Rocket, Award, GraduationCap, Briefcase, HeartHandshake } from "lucide-react";
import { FaAward } from "react-icons/fa6";
import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";

const awards = [
  { year: '2008', title: '1X AGENCY OF THE YEAR', status: 'Winner' },
  { year: '2009', title: '3X CREATIVE AWARD', status: 'Awarded' },
  { year: '2011', title: '2X FEATURED DESIGN', status: 'Mentioned' },
  { year: '2016', title: '5X HONORABLE MENTIONED', status: 'Mentioned' },
  { year: '2022', title: '8X BEST DESIGN OF THE DAY', status: 'Winner' },
  { year: '2025', title: '3X MOBILE EXCELLENCE AWARD', status: 'Awarded' },
];

const connoisseurAwards = [
  {
    num: "2008",
    name: "1X AGENCY OF THE YEAR",
    clipId: "clip-pixels",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "2009",
    name: "3X CREATIVE AWARD",
    clipId: "clip-hexagons",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "2011",
    name: "2X FEATURED DESIGN",
    clipId: "clip-pixels",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "2016",
    name: "5X HONORABLE MENTIONED",
    clipId: "clip-pixels",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "2022",
    name: "8X BEST DESIGN OF THE DAY",
    clipId: "clip-hexagons",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "2025",
    name: "3X MOBILE EXCELLENCE AWARD",
    clipId: "clip-pixels",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const stats = [
  { value: "10+", label: "Years of Experience", icon: Briefcase },
  { value: "1,400+", label: "Brands Designed", icon: Rocket },
  { value: "Multiple", label: "Industry Awards", icon: Award },
  { value: "1000s", label: "Entrepreneurs Guided", icon: Users },
];

const Social = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div ref={containerRef} className="bg-[#F5F5F7] min-h-screen text-[#1F2430] pt-32 pb-24 overflow-hidden selection:bg-[#34164F] selection:text-white relative">
      
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
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280]">Social</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-heading-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-12 text-[#1F2430]">
            <span className="block mb-2">Designing brands.</span>
            <span className="text-[#34164F] block">Empowering entrepreneurs.</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 text-[17px] leading-relaxed text-[#6B7280] font-sans max-w-5xl text-left mt-8">
            <motion.p variants={fadeUp} className="flex-1">
              At Rah Pixels, branding has always been about more than design. We believe every entrepreneur deserves the opportunity to build a brand they're proud of. That's why we've consistently supported women entrepreneurs, startups, and small businesses with guidance, mentoring, and design support.
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-6 flex-1">
              <p>
                During challenging times, we offered over <strong className="text-[#1F2430]">50 brand identities completely free</strong> to help small businesses establish themselves. Watching many of those businesses grow continues to be one of our greatest achievements.
              </p>
              <p>
                Beyond client work, we regularly conduct workshops, webinars, mentoring sessions, and community events to help entrepreneurs understand branding, digital presence, and business growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission Split */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24 mb-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-[#1F2430] p-10 md:p-14"
          >
            <Target size={40} className="text-[#F7B71D] mb-8" />
            <h3 className="text-heading2 text-white mb-4">Our Vision</h3>
            <p className="text-[#F5F5F7] opacity-90 text-body-main">
              To build a supportive ecosystem where entrepreneurs—especially women and first-time founders—have the knowledge, confidence, and tools to grow meaningful businesses.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-[#34164F] p-10 md:p-14"
          >
            <GraduationCap size={40} className="text-[#7A4DFF] mb-8" />
            <h3 className="text-heading2 text-white mb-4">Our Mission</h3>
            <p className="text-[#F5F5F7] opacity-90 text-body-main">
              To digitally educate and empower <strong className="text-white font-bold">100,000</strong> entrepreneurs through branding, design education, and community initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Seminars & Awards Gallery */}
      <section className="bg-black py-20 border-t border-[#e2ddd8]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-heading-extrabold text-4xl md:text-5xl text-white">
              Captured Moments
            </h2>
            <p className="text-gray-400 mt-4 font-sans text-lg max-w-2xl mx-auto">
              Seminars, workshops, and awards from around the world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {[
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
              "https://images.unsplash.com/photo-1556761175-5973dc0f32b7",
              "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
              "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
              "https://images.unsplash.com/photo-1561489422-45de3d015e3e",
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
              "https://images.unsplash.com/photo-1552664730-d307ca884978",
              "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
              "https://images.unsplash.com/photo-1544928147-79a2dbc1f389",
              "https://images.unsplash.com/photo-1475721025505-1113af716964",
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
                   className={`relative group overflow-hidden bg-[#F5F5F7] ${spanClasses}`}
                 >
                   <img 
                     src={`${url}?auto=format&fit=crop&q=80&w=800`} 
                     alt={`Gallery image ${i + 1}`}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

      {/* 3. Awards & Recognition (Flowchart Layout) */}
      <div className="bg-[#F5F5F7] mb-10 pt-10 max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-[#1F2430]">
            Awards & Recognition
          </h2>
          <p className="text-[#6B7280] mt-4 font-sans text-lg">
            A history of delivering excellence
          </p>
        </div>
        
        {/* Desktop Flowchart Timeline (>= md) */}
        <div className="hidden md:block relative w-full max-w-[800px] mx-auto h-[1150px]">
          {awards.map((award, i) => {
            const isLeft = i % 2 === 0;
            const topOffset = i * 180;
            return (
               <div key={i}>
                 {/* CARD */}
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                   className={`absolute w-[350px] ${isLeft ? 'left-0' : 'right-0'}`} 
                   style={{ top: `${topOffset}px`, zIndex: 10 }}>
                   <div className="bg-white p-2.5 pr-6 flex items-stretch border border-[#dedad5] shadow-sm hover:border-[#1F2430] transition-colors">
                      <div className={`w-14 flex-shrink-0 flex items-center justify-center overflow-hidden
                           ${award.status === 'Winner' ? 'bg-[#34164F]' : 'bg-[#1F2430]'}`}>
                           <span className="text-white font-sans font-bold text-sm tracking-widest whitespace-nowrap -rotate-90">
                             {award.year}
                           </span>
                      </div>
                      <div className="pl-6 py-5 flex-grow">
                          <div className="flex items-center gap-3 mb-3">
                             {award.status === 'Winner' ? (
                               <div className="w-8 h-8 flex items-center justify-center text-[#34164F]">
                                 <FaAward size={16} />
                               </div>
                             ) : (
                               <div className="w-8 h-8 flex items-center justify-center text-[#1F2430]">
                                 <FaAward size={16} />
                               </div>
                             )}
                             <span className="text-sm font-sans font-bold text-[#6B7280] uppercase tracking-wide">
                               {award.status}
                             </span>
                          </div>
                          <h3 className="text-lg font-heading font-bold text-[#1F2430] leading-snug">
                             {award.title}
                          </h3>
                      </div>
                   </div>
                 </motion.div>

                 {/* CONNECTOR TO NEXT CARD */}
                 {i < awards.length - 1 && (
                   <div className="absolute w-[275px] h-[180px] pointer-events-none" 
                        style={{ top: `${topOffset + 60}px`, left: isLeft ? '350px' : '175px', zIndex: 0 }}>
                       <svg width="100%" height="100%" className="overflow-visible">
                         {isLeft ? (
                           <>
                             <motion.path 
                               animate={{ strokeDashoffset: [0, -12] }}
                               transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                               d="M 0,0 L 245,0 Q 275,0 275,30 L 275,175" fill="none" stroke="#dedad5" strokeWidth="2" strokeDasharray="6 6"/>
                             <polyline points="270,170 275,175 280,170" fill="none" stroke="#dedad5" strokeWidth="2"/>
                           </>
                         ) : (
                           <>
                             <motion.path 
                               animate={{ strokeDashoffset: [0, -12] }}
                               transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                               d="M 275,0 L 30,0 Q 0,0 0,30 L 0,175" fill="none" stroke="#dedad5" strokeWidth="2" strokeDasharray="6 6"/>
                             <polyline points="-5,170 0,175 5,170" fill="none" stroke="#dedad5" strokeWidth="2"/>
                           </>
                         )}
                       </svg>
                   </div>
                 )}
               </div>
            )
          })}
        </div>

        {/* Mobile Timeline (< md) */}
        <div className="md:hidden flex flex-col gap-6 relative px-2">
          {awards.map((award, i) => (
             <div key={i} className="relative w-full z-10">
                <div className="bg-white p-2 pr-4 flex items-stretch border border-[#dedad5] shadow-sm">
                   <div className={`w-10 flex-shrink-0 flex items-center justify-center overflow-hidden
                        ${award.status === 'Winner' ? 'bg-[#34164F]' : 'bg-[#1F2430]'}`}>
                        <span className="text-white font-sans font-bold text-xs tracking-widest whitespace-nowrap -rotate-90">
                          {award.year}
                        </span>
                   </div>
                   <div className="pl-4 py-3 flex-grow">
                       <div className="flex items-center gap-2 mb-2">
                          <FaAward size={14} className={award.status === 'Winner' ? 'text-[#34164F]' : 'text-[#1F2430]'} />
                          <span className="text-xs font-sans font-bold text-[#6B7280] uppercase tracking-wide">
                            {award.status}
                          </span>
                       </div>
                       <h3 className="text-base font-heading font-bold text-[#1F2430] leading-snug">
                          {award.title}
                       </h3>
                   </div>
                </div>
                {/* Simple Vertical Arrow for mobile */}
                {i < awards.length - 1 && (
                  <div className="w-full flex justify-center py-2 text-[#dedad5]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="0" x2="12" y2="20" strokeDasharray="4 4" />
                      <polyline points="8,16 12,20 16,16" />
                    </svg>
                  </div>
                )}
             </div>
          ))}
        </div>
      </div>

      {/* Connoisseur Stack Awards Section */}
      <section className="relative z-10 w-full mb-20 border-t border-[#e2ddd8]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24 pt-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-[#1F2430]">
              Creative Accolades
            </h2>
            <p className="text-[#6B7280] mt-4 font-sans text-lg">
              Visualizing our major milestones and awards
            </p>
          </div>
        </div>
        <ConnoisseurStackInteractor items={connoisseurAwards} />
      </section>

      {/* The Journey Stats */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-10 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-[#34164F] font-bold tracking-widest uppercase text-sm mb-4 block">The Journey</span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-[#1F2430]">Impact by the numbers</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 border border-[#e2ddd8] flex flex-col items-center text-center group hover:border-[#1F2430] transition-colors"
            >
              <stat.icon size={24} className="text-[#34164F] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading text-4xl md:text-5xl font-black text-[#1F2430] mb-2">{stat.value}</h4>
              <p className="text-[#6B7280] text-sm uppercase tracking-wider font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Social;
