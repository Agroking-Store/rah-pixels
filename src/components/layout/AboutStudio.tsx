import React, { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'

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

// Card Hover Animation
const cardHoverProps = {
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' as const },
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
  activeColor = '#34164F',
}) => {
  const opacity = useTransform(progress, range, [0.25, 1])
  const color = useTransform(progress, range, ['#9CA3AF', activeColor])

  return (
    <span className="relative inline-block mr-[0.28em] select-none">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  )
}

// --- Helper Component: Scroll Reveal Heading ---
const ScrollRevealHeading = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.4'],
  })

  const words = text.split(' ')

  return (
    <h2
      ref={containerRef}
      className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.18] tracking-tight max-w-5xl flex flex-wrap"
    >
      {words.map((word, index) => {
        const start = index / words.length
        const end = start + 1 / words.length
        return (
          <ScrollWord
            key={`heading-${word}-${index}`}
            progress={scrollYProgress}
            range={[start, end]}
            activeColor="#34164F"
          >
            {word}
          </ScrollWord>
        )
      })}
    </h2>
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
  activeColor = '#1F2430',
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
  const quoteText =
    "We don’t just shape logos. We architect enduring identities that connect, scale, and outlast trends."

  const p1Text =
    "Rah Pixels is an award-winning branding and design studio. Over the last decade, we’ve partnered with over 1,400 ambitious businesses across India and around the globe."

  const p2Text =
    "Great design is rooted in deep strategy. Every identity system we craft starts by uncovering your core story, target audience, and long-term vision—translating complex business goals into clean, iconic, and scalable visual languages."

  return (
    <section className="py-28 px-6 md:px-12 lg:px-20 bg-white border-y border-gray-200/70 relative overflow-hidden z-10">
      {/* Background Decorative Grid Line Accent */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200/50 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* HEADER: Technical Tag + Scroll Word Reveal Quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="space-y-6"
        >
          {/* Micro Technical Tag */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-widest text-accent-purple uppercase">
              [ 01 // ABOUT OUR STUDIO ]
            </span>
            <span className="text-xs font-mono text-gray-400">[ EST. 2014 ]</span>
          </motion.div>

          {/* Heading Text Reveal */}
          <ScrollRevealHeading text={quoteText} />
        </motion.div>

        {/* CONTENT GRID: Narrative + Stats & Philosophy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-gray-100"
        >
          {/* Left Column: Narrative Paragraphs (Scroll Scrubbed) */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-8">
            <ScrollRevealParagraph
              text={p1Text}
              className="text-xl font-medium font-heading leading-relaxed"
              activeColor="#34164F"
            />

            <ScrollRevealParagraph
              text={p2Text}
              className="text-base font-normal font-sans leading-relaxed"
              activeColor="#4B5563"
            />

            {/* Founder Tag with Hover Interactivity */}
            <motion.div
              whileHover="hover"
              initial="rest"
              className="pt-4 flex items-center gap-4 cursor-pointer group w-fit"
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
                <p className="text-sm font-semibold font-heading text-primary group-hover:text-accent-purple transition-colors duration-300">
                  Sudeepa Chaudhari
                </p>
                <p className="text-xs font-mono text-accent-purple group-hover:tracking-wider transition-all duration-300">
                  Founder & Principal Strategist
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 2x2 Interactive Metadata Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeInUp}
              {...cardHoverProps}
              className="p-6 rounded-2xl bg-background border border-gray-200/80 shadow-sm hover:shadow-xl hover:shadow-accent-purple/10 hover:border-accent-purple/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 rounded-full blur-xl group-hover:bg-accent-purple/15 transition-all duration-500" />
              <span className="text-xs font-mono text-gray-400 block mb-2 group-hover:text-accent-purple transition-colors">
                [ EXPERIENCE ]
              </span>
              <div className="text-3xl font-bold font-heading text-primary group-hover:text-accent-purple group-hover:scale-105 transition-all duration-300 origin-left">
                10+ <span className="text-lg font-normal text-accent-purple">Yrs</span>
              </div>
              <p className="text-xs font-sans text-gray-500 mt-2 group-hover:text-gray-700 transition-colors">
                Crafting digital & print brand systems.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeInUp}
              {...cardHoverProps}
              className="p-6 rounded-2xl bg-background border border-gray-200/80 shadow-sm hover:shadow-xl hover:shadow-accent-gold/10 hover:border-accent-gold/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 rounded-full blur-xl group-hover:bg-accent-gold/15 transition-all duration-500" />
              <span className="text-xs font-mono text-gray-400 block mb-2 group-hover:text-accent-gold transition-colors">
                [ GLOBAL REACH ]
              </span>
              <div className="text-3xl font-bold font-heading text-primary group-hover:text-accent-gold group-hover:scale-105 transition-all duration-300 origin-left">
                1,400+
              </div>
              <p className="text-xs font-sans text-gray-500 mt-2 group-hover:text-gray-700 transition-colors">
                Brands empowered worldwide.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeInUp}
              {...cardHoverProps}
              className="p-6 rounded-2xl bg-background border border-gray-200/80 shadow-sm hover:shadow-xl hover:shadow-accent-gold/10 hover:border-accent-gold/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 rounded-full blur-xl group-hover:bg-accent-gold/15 transition-all duration-500" />
              <span className="text-xs font-mono text-gray-400 block mb-2 group-hover:text-accent-gold transition-colors">
                [ RECOGNITION ]
              </span>
              <div className="text-3xl font-bold font-heading text-primary group-hover:text-accent-gold group-hover:scale-105 transition-all duration-300 origin-left">
                Awards
              </div>
              <p className="text-xs font-sans text-gray-500 mt-2 group-hover:text-gray-700 transition-colors">
                Multiple industry design accolades.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={fadeInUp}
              {...cardHoverProps}
              className="p-6 rounded-2xl bg-background border border-gray-200/80 shadow-sm hover:shadow-xl hover:shadow-accent-purple/10 hover:border-accent-purple/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 rounded-full blur-xl group-hover:bg-accent-purple/15 transition-all duration-500" />
              <span className="text-xs font-mono text-gray-400 block mb-2 group-hover:text-accent-purple transition-colors">
                [ IMPACT ]
              </span>
              <div className="text-3xl font-bold font-heading text-primary group-hover:text-accent-purple group-hover:scale-105 transition-all duration-300 origin-left">
                1,000s
              </div>
              <p className="text-xs font-sans text-gray-500 mt-2 group-hover:text-gray-700 transition-colors">
                Founders mentored & guided.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutStudio