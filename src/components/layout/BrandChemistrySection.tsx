import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// ============================================================================
// Palette: sage/olive the page opens on, transitioning into the dark studio
// background as the Venn diagram assembles. Circle stroke + center overlap
// square both use the same sage-gray sampled from the reference design.
// ============================================================================
const SAGE = '#767c66'
const DARK = '#1c1d1a'
const DIAGRAM_SAGE = '#565E55'

// Thin radiating lines for the sunburst.
const HATCH_LINE_COUNT = 20
const rayAngles = Array.from({ length: HATCH_LINE_COUNT }, (_, i) => (i * 360) / HATCH_LINE_COUNT)

export const BrandChemistrySection = () => {
  const containerRef = useRef<HTMLElement>(null)

  // Track the scroll progress of this specific section.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // ----------------------------------------------------------------------------
  // Scroll-Driven Animation Timelines
  // ----------------------------------------------------------------------------

  // Section background: sage -> dark
  const backgroundColor = useTransform(scrollYProgress, [0, 0.15], [SAGE, DARK])

  // Opening dashed circle fades in, scales, then fades out
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.2, 0.25], [0, 1, 1, 0])
  const titleScale = useTransform(scrollYProgress, [0.05, 0.25], [0.85, 1.08])

  // Radiating sunburst behind the shape
  const raysOpacity = useTransform(scrollYProgress, [0.35, 0.4, 0.45], [0, 0.14, 0])
  const raysRotate = useTransform(scrollYProgress, [0.35, 0.45], [-8, 4])

  // Four main circles translating out from the center & scaling up
  const circleOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1])
  const circleScale = useTransform(scrollYProgress, [0.2, 0.4], [0.9, 1])
  const leftX = useTransform(scrollYProgress, [0.2, 0.4], [155, 0])
  const rightX = useTransform(scrollYProgress, [0.2, 0.4], [-155, 0])
  const topY = useTransform(scrollYProgress, [0.2, 0.4], [155, 0])
  const bottomY = useTransform(scrollYProgress, [0.2, 0.4], [-155, 0])

  // Hatched adjacent-pair overlaps + solid center square
  const overlapOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])

  // Outer curved annotation labels (finishes around 0.66)
  const labelTopOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1])
  const labelRightOpacity = useTransform(scrollYProgress, [0.52, 0.62], [0, 1])
  const labelBottomOpacity = useTransform(scrollYProgress, [0.54, 0.64], [0, 1])
  const labelLeftOpacity = useTransform(scrollYProgress, [0.56, 0.66], [0, 1])

  // Three Feature Cards entry AFTER the Venn Diagram is fully formed
  const card1Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1])
  const card1Y = useTransform(scrollYProgress, [0.8, 0.9], [30, 0])

  const card2Opacity = useTransform(scrollYProgress, [0.82, 0.92], [0, 1])
  const card2Y = useTransform(scrollYProgress, [0.82, 0.92], [30, 0])

  const card3Opacity = useTransform(scrollYProgress, [0.84, 0.94], [0, 1])
  const card3Y = useTransform(scrollYProgress, [0.84, 0.94], [30, 0])

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="text-[#e3e3dc] w-full font-sans relative"
    >
      {/* ================= 1. BRAND CHEMISTRY VENN DIAGRAM ================= */}
      <div className="h-[300vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-center">
            <div className="relative w-[340px] h-[340px] sm:w-[560px] sm:h-[560px] md:w-[640px] md:h-[640px]">
              <motion.svg
              viewBox="0 0 1000 1000"
              className="absolute inset-0 w-full h-full overflow-visible"
            >
              <defs>
                <pattern
                  id="brandChemHatch"
                  width="14"
                  height="14"
                  patternTransform="rotate(45)"
                  patternUnits="userSpaceOnUse"
                >
                  <line x1="0" y1="0" x2="0" y2="14" stroke="#8f9384" strokeWidth="1" opacity="0.5" />
                </pattern>
                <clipPath id="brandChemClipTop">
                  <circle cx="500" cy="345" r="225" />
                </clipPath>
                <clipPath id="brandChemClipBottom">
                  <circle cx="500" cy="655" r="225" />
                </clipPath>
                <clipPath id="brandChemClipLeft">
                  <circle cx="345" cy="500" r="225" />
                </clipPath>
                <clipPath id="brandChemClipRight">
                  <circle cx="655" cy="500" r="225" />
                </clipPath>

                {/* Guide paths for the curved outer labels */}
                <path id="brandChemArcTop" d="M 253.7 279 A 255 255 0 0 1 746.3 279" fill="none" />
                <path id="brandChemArcRight" d="M 721 253.7 A 255 255 0 0 1 721 746.3" fill="none" />
                <path id="brandChemArcBottom" d="M 253.7 721 A 255 255 0 0 0 746.3 721" fill="none" />
                <path id="brandChemArcLeft" d="M 279 746.3 A 255 255 0 0 1 279 253.7" fill="none" />
              </defs>

              {/* Opening dashed circle with "Brand Chemistry" */}
              <motion.g style={{ opacity: titleOpacity, scale: titleScale, transformOrigin: '500px 500px' }}>
                <circle
                  cx="500"
                  cy="500"
                  r="225"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />
                <text
                  x="500"
                  y="500"
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-white font-sans"
                  style={{ fontSize: 34, fontWeight: 300 }}
                >
                  Brand Chemistry
                </text>
              </motion.g>

              {/* Radiating sunburst lines */}
              <motion.g style={{ opacity: raysOpacity, rotate: raysRotate, transformOrigin: '500px 500px' }}>
                {rayAngles.map((angle) => {
                  const rad = (angle * Math.PI) / 180
                  const x2 = 500 + Math.cos(rad) * 460
                  const y2 = 500 + Math.sin(rad) * 460
                  return (
                    <line key={angle} x1="500" y1="500" x2={x2} y2={y2} stroke="#ffffff" strokeWidth="1" />
                  )
                })}
              </motion.g>

              {/* TOP CIRCLE - BRAND */}
              <motion.g style={{ y: topY, opacity: circleOpacity, scale: circleScale, transformOrigin: '500px 345px' }}>
                <circle cx="500" cy="345" r="225" fill="none" stroke="#8f9384" strokeWidth="2" />
                <text
                  x="500"
                  y="230"
                  textAnchor="middle"
                  className="fill-white font-sans font-bold"
                  style={{ fontSize: 56 }}
                >
                  Br
                </text>
                <text
                  x="500"
                  y="272"
                  textAnchor="middle"
                  className="fill-white/70 font-mono uppercase"
                  style={{ fontSize: 20, letterSpacing: 2 }}
                >
                  Brand
                </text>
              </motion.g>

              {/* BOTTOM CIRCLE - MARKETING */}
              <motion.g style={{ y: bottomY, opacity: circleOpacity, scale: circleScale, transformOrigin: '500px 655px' }}>
                <circle cx="500" cy="655" r="225" fill="none" stroke="#8f9384" strokeWidth="2" />
                <text
                  x="500"
                  y="785"
                  textAnchor="middle"
                  className="fill-white font-sans font-bold"
                  style={{ fontSize: 56 }}
                >
                  Ma
                </text>
                <text
                  x="500"
                  y="820"
                  textAnchor="middle"
                  className="fill-white/70 font-mono uppercase"
                  style={{ fontSize: 20, letterSpacing: 2 }}
                >
                  Marketing
                </text>
              </motion.g>

              {/* LEFT CIRCLE - PURPOSE */}
              <motion.g style={{ x: leftX, opacity: circleOpacity, scale: circleScale, transformOrigin: '345px 500px' }}>
                <circle cx="345" cy="500" r="225" fill="none" stroke="#8f9384" strokeWidth="2" />
                <text
                  x="220"
                  y="510"
                  textAnchor="middle"
                  className="fill-white font-sans font-bold"
                  style={{ fontSize: 56 }}
                >
                  Pu
                </text>
                <text
                  x="220"
                  y="548"
                  textAnchor="middle"
                  className="fill-white/70 font-mono uppercase"
                  style={{ fontSize: 20, letterSpacing: 2 }}
                >
                  Purpose
                </text>
              </motion.g>

              {/* RIGHT CIRCLE - PRODUCT */}
              <motion.g style={{ x: rightX, opacity: circleOpacity, scale: circleScale, transformOrigin: '655px 500px' }}>
                <circle cx="655" cy="500" r="225" fill="none" stroke="#8f9384" strokeWidth="2" />
                <text
                  x="780"
                  y="510"
                  textAnchor="middle"
                  className="fill-white font-sans font-bold"
                  style={{ fontSize: 56 }}
                >
                  Pr
                </text>
                <text
                  x="780"
                  y="548"
                  textAnchor="middle"
                  className="fill-white/70 font-mono uppercase"
                  style={{ fontSize: 20, letterSpacing: 2 }}
                >
                  Product
                </text>
              </motion.g>

              {/* Hatched adjacent-pair overlaps + solid center square */}
              <motion.g style={{ opacity: overlapOpacity }}>
                <g clipPath="url(#brandChemClipTop)">
                  <g clipPath="url(#brandChemClipLeft)">
                    <rect x="0" y="0" width="1000" height="1000" fill={DIAGRAM_SAGE} opacity="0.15" />
                    <rect x="0" y="0" width="1000" height="1000" fill="url(#brandChemHatch)" />
                  </g>
                </g>
                <g clipPath="url(#brandChemClipTop)">
                  <g clipPath="url(#brandChemClipRight)">
                    <rect x="0" y="0" width="1000" height="1000" fill={DIAGRAM_SAGE} opacity="0.15" />
                    <rect x="0" y="0" width="1000" height="1000" fill="url(#brandChemHatch)" />
                  </g>
                </g>
                <g clipPath="url(#brandChemClipBottom)">
                  <g clipPath="url(#brandChemClipLeft)">
                    <rect x="0" y="0" width="1000" height="1000" fill={DIAGRAM_SAGE} opacity="0.15" />
                    <rect x="0" y="0" width="1000" height="1000" fill="url(#brandChemHatch)" />
                  </g>
                </g>
                <g clipPath="url(#brandChemClipBottom)">
                  <g clipPath="url(#brandChemClipRight)">
                    <rect x="0" y="0" width="1000" height="1000" fill={DIAGRAM_SAGE} opacity="0.15" />
                    <rect x="0" y="0" width="1000" height="1000" fill="url(#brandChemHatch)" />
                  </g>
                </g>
                <rect x="435" y="435" width="130" height="130" rx="14" fill={DIAGRAM_SAGE} />
              </motion.g>

              {/* Outer curved annotation labels */}
              <motion.text
                style={{ opacity: labelTopOpacity }}
                className="fill-white/60 font-mono uppercase"
                fontSize="15"
                letterSpacing="1"
              >
                <textPath href="#brandChemArcTop" startOffset="50%" textAnchor="middle">
                  Relatable &amp; Relevant | Differentiated | Influence
                </textPath>
              </motion.text>
              <motion.text
                style={{ opacity: labelRightOpacity }}
                className="fill-white/60 font-mono uppercase"
                fontSize="15"
                letterSpacing="1"
              >
                <textPath href="#brandChemArcRight" startOffset="50%" textAnchor="middle">
                  Dream Outcome | Proof | Effort &amp; Time
                </textPath>
              </motion.text>
              <motion.text
                style={{ opacity: labelBottomOpacity }}
                className="fill-white/60 font-mono uppercase"
                fontSize="15"
                letterSpacing="1"
              >
                <textPath href="#brandChemArcBottom" startOffset="50%" textAnchor="middle">
                  Unmet Need | Growing Trend | Value to Market
                </textPath>
              </motion.text>
              <motion.text
                style={{ opacity: labelLeftOpacity }}
                className="fill-white/60 font-mono uppercase"
                fontSize="15"
                letterSpacing="1"
              >
                <textPath href="#brandChemArcLeft" startOffset="50%" textAnchor="middle">
                  Mission | Vision | Values
                </textPath>
              </motion.text>
            </motion.svg>
          </div>
        </div>
      </div>
    </div>

      {/* ================= 2. STAGGERED CARDS SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-28 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">

          {/* Card 1: Lowest position */}
          <motion.div style={{ opacity: card1Opacity, y: card1Y }} className="md:mt-32">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-transparent border border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-12 transition-all duration-300"
            >
              <h3 className="text-3xl font-normal text-white leading-tight">
                Strategy Before<br />Aesthetics
              </h3>
              <p className="text-xs text-white/60 font-mono leading-loose">
                Most studios start with moodboards. We start with questions. Before a single color is chosen or a typeface is pulled, we run a deep brand workshop — mapping your positioning, your audience, your competitors, and the white space nobody else is occupying. The visual identity that comes out the other side isn't decorated. It's argued.
              </p>
            </motion.div>
          </motion.div>

          {/* Card 2: Middle position */}
          <motion.div style={{ opacity: card2Opacity, y: card2Y }} className="md:mt-16">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-transparent border border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-12 transition-all duration-300"
            >
              <h3 className="text-3xl font-normal text-white leading-tight">
                Identity as a<br />System
              </h3>
              <p className="text-xs text-white/60 font-mono leading-loose">
                A logo is not a brand. A brand is every touchpoint working as one coherent world — from a business card to a billboard, from a product UI to a piece of merchandise. We design identities that scale without breaking and flex without losing character. Every element earns its place because every element was designed to work together.
              </p>
            </motion.div>
          </motion.div>

          {/* Card 3: Highest position */}
          <motion.div style={{ opacity: card3Opacity, y: card3Y }} className="mt-0">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-transparent border border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-12 transition-all duration-300"
            >
              <h3 className="text-3xl font-normal text-white leading-tight">
                Built to Be<br />Felt
              </h3>
              <p className="text-xs text-white/60 font-mono leading-loose">
                The best brands don't explain themselves — they're experienced. We work until the identity does something that strategy documents and competitor audits can never do: make someone feel something before they read a single word. That's the standard we hold every project to, and it's why the work looks the way it does.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}

export default BrandChemistrySection