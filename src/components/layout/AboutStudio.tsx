import React, { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import Lanyard from './Lanyard'

import rahPixelsCardFront from '@/assets/lanyard/rah_pixels_card.png';
import rahPixelsBand from '@/assets/lanyard/rah_pixels_band.png';

// --- Framer Motion Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}


// --- Helper Component: Individual Scroll Word Scrub ---
interface WordProps {
  children: string
  progress: any
  range: [number, number]
  activeColor?: string
}

const ScrollWord: React.FC<WordProps> = ({
  children,
  progress,
  range,
  activeColor = '#E5E7EB', // Lighter color for black background
}) => {
  const opacity = useTransform(progress, range, [0.25, 1])
  const color = useTransform(progress, range, ['#4B5563', activeColor])

  return (
    <span className="relative inline-block mr-[0.28em] select-none">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  )
}

// --- Helper Component: Scroll Reveal Paragraph ---
interface ScrollRevealParagraphProps {
  text: string
  className?: string
  activeColor?: string
}

const ScrollRevealParagraph: React.FC<ScrollRevealParagraphProps> = ({
  text,
  className = '',
  activeColor = '#F3F4F6',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.5'],
  })

  const words = text.split(' ')

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        const start = index / words.length
        const end = start + 1 / words.length
        return (
          <ScrollWord
            key={`p-${word}-${index}`}
            progress={scrollYProgress}
            range={[start, end]}
            activeColor={activeColor}
          >
            {word}
          </ScrollWord>
        )
      })}
    </p>
  )
}

// --- Main AboutStudio Component ---
const AboutStudio = () => {
  const p1Text =
    "Rah Pixels is an award-winning branding and design studio with over 10 years of experience in shaping meaningful brand identities. Over the years, we have worked with more than 1400 brands across national and international markets, helping businesses build identities that are clear, memorable and consistent."

  const p2Text =
    "Our approach is simple — understand the idea behind the business and translate it into thoughtful design that truly represents the brand."

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden z-10 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: 3D Hanging Identity Card (Lanyard) */}
          <div className="relative w-full h-[600px] lg:h-[800px] bg-black/50 rounded-3xl overflow-hidden border border-white/5 flex justify-center items-center">
             <Lanyard
               position={[0, 0, 24]}
               gravity={[0, -40, 0]}
               frontImage={rahPixelsCardFront}
               imageFit="cover"
               lanyardImage={rahPixelsBand}
               lanyardWidth={1.2}
             />
          </div>

          {/* Right Column: Text Content and Stat Cards */}
          <div className="relative z-10 p-4 sm:p-8 space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
                  <span className="text-xs font-mono font-medium tracking-widest text-accent-purple uppercase">
                    [ 01 // ABOUT OUR STUDIO ]
                  </span>
                  <span className="text-xs font-mono text-gray-500">[ EST. 2014 ]</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">About Our Agency</h2>
                <p className="text-xl text-accent-purple font-medium font-sans">Social marketing & advertising.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <ScrollRevealParagraph
                  text={p1Text}
                  className="text-lg md:text-xl font-normal font-sans leading-relaxed text-gray-300"
                  activeColor="#FFFFFF"
                />
                <ScrollRevealParagraph
                  text={p2Text}
                  className="text-lg md:text-xl font-normal font-sans leading-relaxed text-gray-300"
                  activeColor="#FFFFFF"
                />
                
                <div className="pt-4">
                  <a href="#" className="inline-flex items-center gap-2 text-white hover:text-accent-purple font-mono text-sm uppercase tracking-wider transition-colors">
                    More About Us
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </motion.div>

              {/* Founder Tag with Hover Interactivity */}
              <motion.div
                whileHover="hover"
                initial="rest"
                className="pt-8 border-t border-white/10 flex items-center gap-4 cursor-pointer group w-fit"
              >
                <motion.div
                  variants={{
                    rest: { height: 40, backgroundColor: 'rgba(122, 77, 255, 0.4)' },
                    hover: { height: 52, backgroundColor: '#7A4DFF' },
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-1 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold font-heading text-white group-hover:text-accent-purple transition-colors duration-300">
                    Sudeepa Chaudhari
                  </p>
                  <p className="text-xs font-mono text-gray-400 group-hover:tracking-wider group-hover:text-white transition-all duration-300">
                    Founder & Principal Strategist
                  </p>
                </div>
              </motion.div>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStudio