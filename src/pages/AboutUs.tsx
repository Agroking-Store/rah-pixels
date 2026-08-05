import React from 'react'
import { FaInstagram, FaLinkedin, FaXTwitter, FaAward } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { Globe as MagicGlobe } from "../components/ui/globe"
import { NumberTicker } from "../components/ui/number-ticker"

const awards = [
  { year: '2008', title: '1X AGENCY OF THE YEAR', status: 'Winner' },
  { year: '2009', title: '3X CREATIVE AWARD', status: 'Awarded' },
  { year: '2011', title: '2X FEATURED DESIGN', status: 'Mentioned' },
  { year: '2016', title: '5X HONORABLE MENTIONED', status: 'Mentioned' },
  { year: '2022', title: '8X BEST DESIGN OF THE DAY', status: 'Winner' },
  { year: '2025', title: '3X MOBILE EXCELLENCE AWARD', status: 'Awarded' },
]

const AboutUs = () => {
  return (
    <div className="w-full overflow-hidden">
      
      {/* 0. NEW AESTHETIC HERO (FULL WIDTH) */}
      <div className="w-full relative bg-primary pt-32 pb-[320px] px-4 flex flex-col items-center overflow-hidden">
        {/* Floating Aesthetic Elements */}
        <div className="absolute top-12 right-[20%] text-[#F7B71D] opacity-90 hidden md:block">
           <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="currentColor" className="scale-50 translate-x-4 -translate-y-4"/>
             <circle cx="45" cy="15" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
             <circle cx="50" cy="25" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
           </svg>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-extrabold text-[#F7B71D] mb-6 relative z-10"
        >
          About us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[#F7B71D]/90 font-sans text-center max-w-2xl mx-auto mb-12 relative z-10 text-lg md:text-xl"
        >
          Rah Pixels is an award-winning branding and design studio with over 10 years of experience helping businesses build memorable brands.
        </motion.p>

        {/* Wavy Curve SVG at the bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
             <path d="M0,120 C320,250 640,-20 1440,120 L1440,200 L0,200 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* OVERLAPPING GALLERY */}
      <div className="w-full relative -mt-[220px] z-20 px-4 md:px-12 lg:px-24 mb-48 max-w-[1600px] mx-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch justify-center h-[300px] md:h-[280px]">
           {/* Image 1 */}
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-full h-full bg-gray-200 rounded-3xl object-cover shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center text-sm text-gray-400">IMG 1</motion.div>
           {/* Image 2 (shifted down) */}
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="w-full h-full bg-gray-300 rounded-3xl object-cover shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transform md:translate-y-8 flex items-center justify-center text-sm text-gray-400">IMG 2</motion.div>
           {/* Image 3 */}
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="w-full h-full bg-gray-200 rounded-3xl object-cover shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center text-sm text-gray-400">IMG 3</motion.div>
           {/* Image 4 (shifted up) */}
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="w-full h-full bg-gray-300 rounded-3xl object-cover shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transform md:-translate-y-8 flex items-center justify-center text-sm text-gray-400">IMG 4</motion.div>
         </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="px-4 md:px-12 lg:px-24 w-full max-w-[1600px] mx-auto">
      
      {/* WHY & IMPACT SECTION */}
      <div className="w-full mb-64">
         {/* Top "Why" Part */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-64"
         >
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary max-w-3xl mb-12 leading-tight">
               We make sure your idea & creation delivered properly
            </h2>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
               <p className="text-body-text font-sans text-lg leading-relaxed flex-1">
                 Our digital solutions transcend borders. From dynamic startups to established enterprises, we build memorable brands and scalable designs that connect the world and drive international growth.
               </p>
               <p className="text-body-text font-sans text-lg leading-relaxed flex-1">
                 Through strategy and empathy, our team creates identities that truly reflect the people behind the business. We take pride in mentoring and guiding thousands of entrepreneurs to digital success.
               </p>
            </div>
         </motion.div>

         {/* Bottom "Impact" Part */}
         <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            {/* Impact Image */}
            <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7 }}
               className="w-full lg:w-1/2 relative h-[400px] bg-gray-200 rounded-[2rem] overflow-visible shadow-xl flex-shrink-0"
            >
               {/* Play Button Overlay */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer hover:scale-110 transition-transform">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" className="text-primary fill-primary"/></svg>
                  </div>
               </div>
               {/* Floating Card */}
               <div className="absolute -bottom-8 left-8 md:left-12 bg-white rounded-2xl p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] min-w-[280px]">
                  <p className="font-heading font-bold text-primary text-lg mb-1">"Making an impact, together"</p>
                  <p className="font-sans text-sm text-gray-500 font-medium">Socialy Founder</p>
               </div>
            </motion.div>
            
            {/* Impact Text */}
            <motion.div 
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7 }}
               className="w-full lg:w-1/2 pt-12 lg:pt-0"
            >
               <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6 leading-tight">
                  We empower small business owners
               </h2>
               <p className="text-body-text font-sans text-lg leading-relaxed mb-8">
                 We believe that every great business starts with a small step. Our mission is to provide the exact tools, branding, and strategic consulting needed to empower you.
               </p>
               <div className="border-l-4 border-[#FCE277] pl-6 italic text-gray-600 font-sans text-lg leading-relaxed bg-[#FCE277]/5 p-6 rounded-r-2xl">
                 "We create identities that truly reflect the people behind the business, focusing on empathy and creativity."
               </div>
            </motion.div>
         </div>
      </div>

      {/* 2. Meet the Founders Section (Card Layout based on Image) */}
      <div className="mb-72 pt-16">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Meet the Founders
          </h2>
          <p className="text-body-text mt-3 font-sans">
            The strategic minds behind our award-winning designs
          </p>
        </div>

        <div className="flex flex-col gap-56">
          
          {/* Sudeepa Chaudhari - Image Left, Text Right */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center gap-12 lg:gap-20"
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative flex justify-center">
              <div className="aspect-[4/5] w-full max-w-sm mx-auto md:mr-0 bg-gray-200 rounded-[2rem] relative overflow-hidden shadow-2xl">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-sans text-lg">
                  Image Placeholder
                </div>
              </div>
              
              {/* Submerged Social Links (Bottom Right of Image) */}
              <div className="absolute bottom-12 right-0 md:-right-8 translate-x-4 md:translate-x-0 translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex gap-2 z-10">
                <a href="#" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-accent-purple hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-accent-purple hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-accent-purple hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <FaXTwitter size={20} />
                </a>
              </div>
            </div>
            
            {/* Text Side */}
            <div className="w-full md:w-1/2 pt-8 md:pt-0">
              <h3 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-3">
                Sudeepa Chaudhari
              </h3>
              <p className="text-accent-purple font-sans font-semibold tracking-wide text-sm uppercase mb-8">
                Founder | Global Brand Designer & Strategist
              </p>
              <p className="text-body-text font-sans text-lg leading-relaxed mb-6">
                A software engineer by education and a brand designer by passion, Sudeepa has spent the last decade helping more than 1,400 businesses build brands with purpose.
              </p>
              <p className="text-body-text font-sans text-lg leading-relaxed">
                Her work combines strategy, creativity, and empathy to create identities that truly reflect the people behind the business. Beyond design, she is committed to mentoring startups and women entrepreneurs through workshops and community initiatives.
              </p>
            </div>
          </motion.div>

          {/* Anil Chaudhari - Text Left, Image Right */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20"
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative flex justify-center">
              <div className="aspect-[4/5] w-full max-w-sm mx-auto md:ml-0 bg-gray-200 rounded-[2rem] relative overflow-hidden shadow-2xl">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-sans text-lg">
                  Image Placeholder
                </div>
              </div>
              
              {/* Submerged Social Links (Bottom Left of Image) */}
              <div className="absolute bottom-12 left-0 md:-left-8 -translate-x-4 md:translate-x-0 translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex gap-2 z-10">
                <a href="#" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-accent-gold hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-accent-gold hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-accent-gold hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <FaXTwitter size={20} />
                </a>
              </div>
            </div>
            
            {/* Text Side */}
            <div className="w-full md:w-1/2 pt-8 md:pt-0">
              <h3 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-3">
                Anil Chaudhari
              </h3>
              <p className="text-accent-gold font-sans font-semibold tracking-wide text-sm uppercase mb-8">
                Co-Founder | Business Strategy & Growth
              </p>
              <p className="text-body-text font-sans text-lg leading-relaxed mb-6">
                With extensive experience in hospitality, sales, and business development, Anil brings strategic thinking and customer-centric insight to Rah Pixels.
              </p>
              <p className="text-body-text font-sans text-lg leading-relaxed">
                His expertise helps businesses move beyond good design to build sustainable growth and lasting relationships with their customers.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. Awards & Recognition (Flowchart Layout) */}
      <div className="mb-48 pt-16">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary">
            Awards & Recognition
          </h2>
          <p className="text-body-text mt-4 font-sans text-lg">
            A history of delivering excellence
          </p>
        </div>
        
        {/* Desktop Flowchart Timeline (>= md) */}
        <div className="hidden md:block relative w-[800px] mx-auto h-[1150px]">
          {awards.map((award, i) => {
            const isLeft = i % 2 === 0;
            const topOffset = i * 180;
            return (
               <React.Fragment key={i}>
                 {/* CARD */}
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   className={`absolute w-[350px] ${isLeft ? 'left-0' : 'right-0'}`} 
                   style={{ top: `${topOffset}px`, zIndex: 10 }}>
                   <div className="bg-white/80 backdrop-blur-xl rounded-[32px] p-2.5 pr-6 flex items-stretch border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow">
                      <div className={`w-14 flex-shrink-0 rounded-[24px] flex items-center justify-center overflow-hidden
                           ${award.status === 'Winner' ? 'bg-primary' : 'bg-secondary'}`}>
                           <span className="text-white font-sans font-bold text-sm tracking-widest whitespace-nowrap -rotate-90">
                             {award.year}
                           </span>
                      </div>
                      <div className="pl-6 py-5 flex-grow">
                          <div className="flex items-center gap-3 mb-3">
                             {award.status === 'Winner' ? (
                               <div className="w-8 h-8 rounded-full bg-accent-gold/15 flex items-center justify-center text-[#d4990b]">
                                 <FaAward size={16} />
                               </div>
                             ) : (
                               <div className="w-8 h-8 rounded-full bg-accent-purple/15 flex items-center justify-center text-accent-purple">
                                 <FaAward size={16} />
                               </div>
                             )}
                             <span className="text-sm font-sans font-bold text-gray-500 uppercase tracking-wide">
                               {award.status}
                             </span>
                          </div>
                          <h3 className="text-lg font-heading font-bold text-primary leading-snug">
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
                               d="M 0,0 L 245,0 Q 275,0 275,30 L 275,175" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6"/>
                             <polyline points="270,170 275,175 280,170" fill="none" stroke="#CBD5E1" strokeWidth="2"/>
                           </>
                         ) : (
                           <>
                             <motion.path 
                               animate={{ strokeDashoffset: [0, -12] }}
                               transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                               d="M 275,0 L 30,0 Q 0,0 0,30 L 0,175" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6"/>
                             <polyline points="-5,170 0,175 5,170" fill="none" stroke="#CBD5E1" strokeWidth="2"/>
                           </>
                         )}
                       </svg>
                   </div>
                 )}
               </React.Fragment>
            )
          })}
        </div>

        {/* Mobile Timeline (< md) */}
        <div className="md:hidden flex flex-col gap-6 relative px-2">
          {awards.map((award, i) => (
             <div key={i} className="relative w-full z-10">
                <div className="bg-white rounded-[24px] p-2 pr-4 flex items-stretch border border-gray-100 shadow-sm">
                   <div className={`w-10 flex-shrink-0 rounded-[16px] flex items-center justify-center overflow-hidden
                        ${award.status === 'Winner' ? 'bg-primary' : 'bg-secondary'}`}>
                        <span className="text-white font-sans font-bold text-xs tracking-widest whitespace-nowrap -rotate-90">
                          {award.year}
                        </span>
                   </div>
                   <div className="pl-4 py-3 flex-grow">
                       <div className="flex items-center gap-2 mb-2">
                          {award.status === 'Winner' ? (
                            <FaAward size={14} className="text-[#F7B71D]" />
                          ) : (
                            <FaAward size={14} className="text-[#7A4DFF]" />
                          )}
                          <span className="text-xs font-sans font-bold text-gray-500 uppercase tracking-wide">
                            {award.status}
                          </span>
                       </div>
                       <h3 className="text-base font-heading font-bold text-primary leading-snug">
                          {award.title}
                       </h3>
                   </div>
                </div>
                {/* Simple Vertical Arrow for mobile */}
                {i < awards.length - 1 && (
                  <div className="w-full flex justify-center py-2 text-gray-300">
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
      </div> {/* End Main Content Wrapper */}

      {/* 4. Journey / Impact Section - FULL WIDTH */}
      <div className="w-full bg-[#f8fafc] border-y border-gray-100 overflow-hidden mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative w-full max-w-[1600px] mx-auto py-16 px-4 md:px-12 lg:px-24">
          
          {/* Left Side: Content & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6 leading-tight">
              Trusted by Businesses <br className="hidden lg:block"/> Across the Globe
            </h2>
            <p className="text-body-text font-sans text-lg leading-relaxed mb-12 max-w-lg">
              Our creative solutions transcend borders. From dynamic startups to established enterprises, we build memorable brands and scalable designs that connect the world and drive international growth.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4">
              {/* Stat 1 */}
              <div className="flex flex-col border-l-4 border-accent-gold pl-4">
                <span className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2 whitespace-nowrap">
                  <NumberTicker value={10} className="text-primary" />+
                </span>
                <span className="text-sm font-sans font-semibold text-gray-500 uppercase tracking-wider">Years of<br/>Experience</span>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col border-l-4 border-accent-purple pl-4">
                <span className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2 whitespace-nowrap">
                  <NumberTicker value={1400} className="text-primary" />+
                </span>
                <span className="text-sm font-sans font-semibold text-gray-500 uppercase tracking-wider">Brands<br/>Designed</span>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col border-l-4 border-accent-gold pl-4">
                <span className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2 whitespace-nowrap">
                  <NumberTicker value={2000} className="text-primary" />+
                </span>
                <span className="text-sm font-sans font-semibold text-gray-500 uppercase tracking-wider">Founders<br/>Guided</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Magic UI Globe */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center lg:justify-end"
          >
             <div className="relative w-full max-w-[500px] aspect-square">
               <MagicGlobe className="w-full h-full" />
               <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0_0_80px_20px_#f8fafc]"></div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* 5. Final CTA */}
      <div className="px-4 md:px-12 lg:px-24 pb-16 w-full max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center bg-primary rounded-3xl p-12 text-white shadow-xl relative overflow-hidden"
        >
          {/* Aesthetic glow effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 relative z-20 block">
            Ready to build your brand?
          </h2>
          <p className="font-sans text-lg text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
            Let's work together to create a brand that people trust, remember, and recommend.
          </p>
          <button className="relative z-10 bg-accent-gold cursor-pointer text-secondary font-sans font-bold text-base px-8 py-3 rounded-md hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300">
            Work With Us
          </button>
        </motion.div>
      </div>

    </div>
  )
}

export default AboutUs
