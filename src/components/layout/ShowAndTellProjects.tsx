import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────────────────
   Custom Hook for Responsive Design
───────────────────────────────────────────────────────── */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

/* ─────────────────────────────────────────────────────────
   Real project data — portfolio images (avif from indux.cloud)
───────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "maay",
    label: "Rooted Innovation",
    desc1: "MaayMati came to us with a simple brief — take their unique cow-dung and certified mitti products and create the best possible brand expression.",
    desc2: "Transforming traditional materials into a distinctive, contemporary identity.",
    desc3: "The identity balances India’s earthy heritage with a refined visual language built for a modern, conscious audience.",
    name: "MaayMati",
    role: "Brand Identity",
    platform: "Earth-Based Products",
    visualDirection: "Earthy · Refined · Cultural",
    brandExperience: "Traditional & Contemporary",
    linkText: "View brand identity",
    tabImage: "/projects/Maay%20tab%201.png",
    phoneImage: "/projects/Maay%20phone%201.png",
    colors: ["#34164F", "#F7B71D", "#E5B13A", "#4A1A6D"],
  },
  {
    id: "neptune",
    label: "Rooted in Design",
    desc1: "Neptune is an exclusive planter brand shaped around refined forms, natural materials, and a calm contemporary aesthetic for modern living spaces.",
    desc2: "Thoughtfully designed forms, rooted in a quieter relationship with nature.",
    desc3: "The identity balances understated elegance with organic character, creating a visual language that feels timeless, tactile, and distinctly premium.",
    name: "Neptune",
    role: "Brand Identity",
    platform: "Exclusive Planter Brand",
    visualDirection: "Minimal · Organic · Refined",
    brandExperience: "Premium · Serene · Modern",
    linkText: "View the identity",
    tabImage: "/projects/Neptune%20tab%202.png",
    phoneImage: "/projects/Neptune%20phone%202.png",
    colors: ["#1E3A8A", "#3B82F6", "#1D4ED8", "#60A5FA"],
  },
  {
    id: "ivy-baker",
    label: "Crafted Identity",
    desc1: "IVY Bakehouse approached us to create a premium, aesthetic brand identity that could give their bakery a distinctive and memorable presence.",
    desc2: "Creating a refined identity with purpose, not just another beautiful design.",
    desc3: "Every detail was thoughtfully developed to balance warmth, elegance and the handcrafted character of a modern bakehouse.",
    name: "IVY BAKER",
    role: "Brand Identity",
    platform: "Bakery & Bakehouse",
    visualDirection: "Premium · Warm · Minimal",
    brandExperience: "Elegant & Memorable",
    linkText: "View brand identity",
    tabImage: "/projects/IVY_Baker%20tab%203.png",
    phoneImage: "/projects/IVY_BAKER%20phone%203.png",
    colors: ["#B45309", "#F59E0B", "#D97706", "#FCD34D"],
  },
  {
    id: "bay-bee",
    label: "Adorable Comfort",
    desc1: "A kidswear identity built around comfort, playful character and a premium visual language, creating a clean and memorable brand experience for little ones.",
    desc2: "Comfort, expressed through a playful and polished identity.",
    desc3: "The design balances childlike charm with refined simplicity, keeping every touchpoint warm, modern and thoughtfully crafted.",
    name: "Bay bee",
    role: "Brand Identity",
    platform: "Kids Clothing",
    visualDirection: "Playful Premium",
    brandExperience: "Comfort & Charm",
    linkText: "View brand identity",
    tabImage: "/projects/Bay%20bee%20tab%204.png",
    phoneImage: "/projects/Bay%20bee%20phone%204.png",
    colors: ["#047857", "#10B981", "#059669", "#34D399"],
  },
  {
    id: "arthavardhan-designs",
    label: "Harmonious Identity",
    desc1: "ArthaVardhan Designs is an interior design firm creating aesthetic, Vastu-compliant spaces through a refined visual language rooted in balance, warmth and modern elegance.",
    desc2: "Designing spaces where aesthetics and harmony coexist.",
    desc3: "The identity translates Vastu principles into a calm, contemporary design expression.",
    desc3Italic: true,
    name: "ArthaVardhan Designs",
    role: "Brand Identity",
    platform: "Interior Design + Vastu",
    visualDirection: "Soft, Refined, Organic",
    brandExperience: "Elegant Spatial Harmony",
    linkText: "View project",
    tabImage: "/projects/ArthaVardhan%20Designs%20tab%205.png",
    phoneImage: "/projects/ArthaVardhan%20Designs%20phone%205.png",
    colors: ["#4338CA", "#6366F1", "#4F46E5", "#818CF8"],
  },
  {
    id: "corpstellar",
    label: "Global Advisory Identity",
    desc1: "Corpstellar is a global advisory company delivering CA, CS, finance and strategic corporate expertise. The identity balances international perspective with trust, precision and executive-level professionalism.",
    desc2: "A refined identity built around trust, clarity and global perspective.",
    desc3: "The visual language combines deep navy and refined gold to express authority, confidence and lasting value.",
    name: "Corpstellar",
    role: "Brand Identity",
    platform: "Global Financial Advisory",
    visualDirection: "Premium · Corporate · Refined",
    brandExperience: "Trust · Precision · Global",
    linkText: "View brand identity",
    tabImage: "/projects/Corpstellar%20tab%206.png",
    phoneImage: "/projects/Corpstellar%20phone%206.png",
    colors: ["#1E293B", "#475569", "#334155", "#64748B"],
  },
  {
    id: "dalchini",
    label: "Refined Indian Identity",
    desc1: "Dalchini is a German restaurant celebrated for its Indian thalis, expressed through a refined identity that balances Indian character with contemporary European elegance.",
    desc2: "A warm, sophisticated identity rooted in Indian culinary culture.",
    desc3: "Tradition, distilled into a modern visual language with quiet elegance.",
    desc3Italic: true,
    name: "DalChini",
    role: "Brand Identity",
    platform: "Indian Restaurant",
    visualDirection: "Warm · Minimal · Refined",
    brandExperience: "Elegant Indian Dining",
    linkText: "View brand identity",
    tabImage: "/projects/DalChini%20Tab%207.png",
    phoneImage: "/projects/Dalchini%20phone%207.png",
    colors: ["#B45309", "#854D0E", "#92400E", "#D97706"],
  },
  {
    id: "koshayog",
    label: "Quietly Balanced",
    desc1: "KoshaYOG is a yoga training institute shaped around calm, peace and mindful practice. The identity uses a restrained visual language to create a refined, serene experience.",
    desc2: "A quiet identity designed to feel grounded, balanced and timeless.",
    desc3: "The visual approach embraces simplicity, allowing space, softness and natural harmony to lead the experience.",
    name: "KoshaYOG",
    role: "Brand Identity",
    platform: "Yoga Training Institute",
    visualDirection: "Calm · Minimal · Refined",
    brandExperience: "Peaceful · Mindful · Elegant",
    linkText: "View project",
    tabImage: "/projects/Koshayog%20tab%208.png",
    phoneImage: "/projects/Koshayog%20phone%208.png",
    colors: ["#065F46", "#047857", "#0F766E", "#14B8A6"],
  },
  {
    id: "traso",
    label: "Corporate Mobility",
    desc1: "A refined identity for a corporate car and cab rental service, designed around dependable movement, professional trust, and a clean, modern visual language.",
    desc2: "A confident identity built for seamless corporate travel.",
    desc3: "The design balances structured geometry with understated elegance, creating a brand presence that feels reliable, contemporary, and effortless.",
    name: "traso",
    role: "Brand Identity",
    platform: "Corporate Car & Cab Rental",
    visualDirection: "Modern · Refined · Professional",
    brandExperience: "Reliable Corporate Mobility",
    linkText: "View the identity",
    tabImage: "/projects/traso%20tab%209.png",
    phoneImage: "/projects/traso%20phone%209.png",
    colors: ["#3730A3", "#4338CA", "#4F46E5", "#6366F1"],
  },
  {
    id: "little-star",
    label: "Playful Identity",
    desc1: "A modern preschool identity designed to feel welcoming for both children and parents, balancing playful expression with a clean, contemporary visual language.",
    desc2: "Playful design, thoughtfully shaped for little ones and their parents.",
    desc3: "The identity blends child-friendly warmth with a refined, trend-conscious approach to visual design.",
    name: "Little Star",
    role: "Brand Identity",
    platform: "Preschool",
    visualDirection: "Playful · Modern · Clean",
    brandExperience: "Parent & Kid Friendly",
    linkText: "Explore the identity",
    tabImage: "/projects/Little%20star%20tab%2010.png",
    phoneImage: "/projects/Little%20star%20phone%2010.png",
    colors: ["#9333EA", "#A855F7", "#7E22CE", "#C084FC"],
  },
];

/* ─────────────────────────────────────────────────────────
   Decorative shapes — gold diamonds + copper zigzag
   Positioned in the CENTER of the page between text & devices,
   exactly as seen in the reference image
───────────────────────────────────────────────────────── */
function DecorShapes({ activeIndex, bgImage }: { activeIndex: number, bgImage: string }) {

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1, // Strictly in the background
        overflow: "hidden",
      }}
    >
      {/* Sliding background project image */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={bgImage}
          src={bgImage}
          initial={{ x: "10%", opacity: 0 }}
          animate={{ x: "0%", opacity: 0.6 }} // Adjust opacity to control how strongly it appears in the background
          exit={{ x: "-10%", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(4px)", // Adds a premium depth-of-field feel to the background
          }}
        />
      </AnimatePresence>

      {/* The uploaded shape image acting as an overlay/mask */}
      <motion.div
        animate={{ filter: `hue-rotate(${activeIndex * 120}deg)` }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          inset: 0,
          background: `url("/header-bg.webp") no-repeat center top`,
          backgroundSize: "cover",
          mixBlendMode: "screen", // Makes the black background transparent!
          opacity: 0.9,
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Tablet Frame
   Reference layout: 5-cell grid
   • Left col  = 1 tall image spanning full height
   • Right col = top-large + 2×2 bottom grid
   Phone overlaps the TOP-RIGHT corner of the tablet
───────────────────────────────────────────────────────── */
function DeviceGroup({ tabImage, phoneImage, projectName, id }: { tabImage: string; phoneImage: string; projectName: string; id: string }) {
  // Increased sizes to make the overlays bigger
  const TABLET_W = 580;
  const TABLET_H = 370; // inner image area
  const PHONE_W  = 190;

  return (
    /* Outer wrapper — gives phone a reference to position against */
    <div style={{ position: "relative", display: "inline-flex", flexShrink: 0 }}>

      {/* ════ TABLET (Realistic White iPad) ════ */}
      <div
        style={{
          width: TABLET_W,
          borderRadius: 24,
          background: "#fff", // White faceplate
          padding: "24px 20px", // Top/bottom and side bezels
          boxShadow: "inset 0 0 0 2px #f0f0f0, inset 0 0 0 4px #dcdcdc, inset 0 0 0 5px #a0a0a0, 0 24px 70px rgba(30,28,26,0.18), 0 6px 20px rgba(30,28,26,0.08)",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Tablet Front Camera */}
        <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 6, height: 6, borderRadius: "50%", background: "#222", border: "1px solid #000" }} />

        {/* Screen Container */}
        <div style={{ 
          width: "100%", 
          height: "100%", 
          background: "#111", 
          overflow: "hidden", 
          border: "1px solid #e2ddd8",
          boxShadow: "inset 0 0 4px rgba(0,0,0,0.1)",
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={id + "-tablet-screen"}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}
            >
          {/* Top bar */}
        <div
          style={{
            background: "#f3f0ed",
            borderBottom: "1px solid #dedad5",
            padding: "9px 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 5,
              background: "#34164F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#F7B71D", fontSize: 8, fontWeight: 800, fontFamily: "sans-serif" }}>RP</span>
          </div>
          <span style={{ fontSize: 10, color: "#8a8480", fontFamily: "sans-serif", fontWeight: 600, letterSpacing: "0.03em" }}>
            {projectName}
          </span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 5 }}>
            {["#d5d0cb", "#b0acA8", "#7a7672"].map((c, i) => (
              <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
            ))}
          </div>
        </div>

        {/* Single full-screen image for Tablet */}
        <div
          style={{
            background: "#dedad5",
            height: TABLET_H,
            overflow: "hidden",
            position: "relative"
          }}
        >
          <img
            src={tabImage}
            alt={projectName}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            background: "#f3f0ed",
            borderTop: "1px solid #dedad5",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          {["in", "f", "ig"].map((icon) => (
            <div
              key={icon}
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#e2ddd8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
                fontWeight: 700,
                color: "#585450",
                fontFamily: "sans-serif",
              }}
            >
              {icon}
            </div>
          ))}
          <span style={{ marginLeft: "auto", fontSize: 9, color: "#aaa8a5", fontFamily: "sans-serif" }}>
            rahpixels.design
          </span>
        </div>
        
            </motion.div>
          </AnimatePresence>
        {/* End Screen Container */}
        </div>
      </div>

      {/* ════ PHONE (Realistic White iPhone) overlaps RIGHT side of tablet ════ */}
      <div
        style={{
          position: "absolute",
          bottom: -15,           // slightly below tablet bottom
          right: -(PHONE_W * 0.45), // half-overlapping the right edge
          width: PHONE_W,
          borderRadius: 24,
          background: "#fff", // White faceplate
          padding: "36px 8px 38px 8px", // Large top and bottom bezels
          boxShadow: "inset 0 0 0 2px #f0f0f0, inset 0 0 0 4px #dcdcdc, inset 0 0 0 5px #a0a0a0, 0 16px 44px rgba(30,28,16,0.22), 0 4px 12px rgba(30,28,16,0.1)",
          zIndex: 10,
        }}
      >
        {/* Phone Top Speaker & Camera */}
        <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#222" }} />
          <div style={{ width: 24, height: 4, borderRadius: 2, background: "#222" }} />
        </div>

        {/* Phone Home Button */}
        <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 22, height: 22, borderRadius: "50%", border: "2px solid #e0e0e0", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)" }} />

        {/* Screen Container */}
        <div style={{ 
          width: "100%", 
          height: "100%", 
          background: "#111", 
          overflow: "hidden", 
          border: "1px solid #e2ddd8",
          boxShadow: "inset 0 0 3px rgba(0,0,0,0.1)",
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={id + "-phone-screen"}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}
            >
          {/* Phone top bar */}
        <div
          style={{
            background: "#f3f0ed",
            borderBottom: "1px solid #dedad5",
            padding: "6px 10px",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 4,
              background: "#34164F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#F7B71D", fontSize: 7, fontWeight: 800, fontFamily: "sans-serif" }}>RP</span>
          </div>
          {/* yellow star accent — like Fabrik's yellow star icon */}
          <div
            style={{
              marginLeft: "auto",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#F7B71D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
            }}
          >
            ★
          </div>
        </div>

        {/* Single full-screen image for Phone */}
        <div style={{ flex: 1, background: "#dedad5", overflow: "hidden" }}>
          <img
            src={phoneImage}
            alt={projectName}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Phone bottom */}
        <div
          style={{
            background: "#f3f0ed",
            borderTop: "1px solid #dedad5",
            padding: "6px 10px",
            display: "flex",
            justifyContent: "center",
            gap: 5,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: i === 0 ? 16 : 5,
                height: 5,
                borderRadius: 3,
                background: i === 0 ? "#34164F" : "#d5d0cb",
                transition: "width 0.3s",
              }}
            />
          ))}
        </div>
        
            </motion.div>
          </AnimatePresence>
        {/* End Screen Container */}
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Section
───────────────────────────────────────────────────────── */
export default function ShowAndTellProjects() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = PROJECTS.length;
  const project = PROJECTS[active];
  
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isSmallMobile = useMediaQuery("(max-width: 500px)");

  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

  /* Auto-cycle every 5s if not paused */
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, isPaused]);

  return (
    <section
      id="show-and-tell-projects"
      style={{
        position: "relative",
        /* Reference background = very light warm white, almost pure white */
        background: "#f5f4f2",
        overflow: "hidden",
        padding: "72px 0 88px",
      }}
    >
      <DecorShapes activeIndex={active} bgImage={project.tabImage} />

      {/* ── Main flex container ── */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          gap: 0,
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* ══════════════════════════════════════════
            LEFT COLUMN — narrow, flush left
            Top: heading + subtitle
            Bottom: project info + nav
        ══════════════════════════════════════════ */}
        <div
          style={{
            width: 400,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignSelf: "stretch",
            minHeight: 360,
          }}
        >
          {/* TOP — heading + subtitle */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 32,
                fontWeight: 800,
                color: "#201f1e",
                lineHeight: 1.05,
                margin: "0 0 16px",
                letterSpacing: "-0.02em",
              }}
            >
              Projects Delivered
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 15,
                fontWeight: 400,
                color: "#77736e",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 340,
              }}
            >
              Rah Pixels supports and celebrates great<br />creative leaders from the design community.
            </motion.p>
          </div>

          {/* BOTTOM — project info block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id + "-info"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Name */}
              <p style={{ margin: 0, fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 800, color: "#2b2926", letterSpacing: "-0.02em", textTransform: "uppercase" }}>
                {project.name}
              </p>
              
              {/* Label */}
              <p style={{ margin: "4px 0 12px", fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 700, color: "#a044d0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {project.label}
              </p>

              {/* Description paragraphs (with bold/italic styles) */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "0 0 16px", maxWidth: 320 }}>
                {project.desc1 && (
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13.5, fontWeight: 400, color: "#585450", lineHeight: 1.6, margin: 0 }}>
                    {project.desc1}
                  </p>
                )}
                {project.desc2 && (
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13.5, fontWeight: 700, color: "#2b2926", lineHeight: 1.6, margin: 0 }}>
                    {project.desc2}
                  </p>
                )}
                {project.desc3 && (
                  <p style={{ 
                    fontFamily: "'Manrope', sans-serif", 
                    fontSize: 13.5, 
                    fontWeight: 400, 
                    color: "#585450", 
                    lineHeight: 1.6, 
                    margin: 0,
                    fontStyle: project.desc3Italic ? "italic" : "normal"
                  }}>
                    {project.desc3}
                  </p>
                )}
              </div>

              {/* Thin divider */}
              <div style={{ width: 40, height: 1, background: "#d5d0cb", marginBottom: 14 }} />

              {/* Project Details list (horizontal layout matching the original alignment) */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                <div style={{ display: "flex", fontSize: 12.5, fontFamily: "'Manrope', sans-serif" }}>
                  <span style={{ width: 120, color: "#2b2926", fontWeight: 700 }}>Brand Identity</span>
                  <span style={{ color: "#585450", fontWeight: 400 }}>{project.platform}</span>
                </div>
                {project.visualDirection && (
                  <div style={{ display: "flex", fontSize: 12.5, fontFamily: "'Manrope', sans-serif" }}>
                    <span style={{ width: 120, color: "#2b2926", fontWeight: 700 }}>Visual Direction</span>
                    <span style={{ color: "#585450", fontWeight: 400 }}>{project.visualDirection}</span>
                  </div>
                )}
                {project.brandExperience && (
                  <div style={{ display: "flex", fontSize: 12.5, fontFamily: "'Manrope', sans-serif" }}>
                    <span style={{ width: 120, color: "#2b2926", fontWeight: 700 }}>Brand Experience</span>
                    <span style={{ color: "#585450", fontWeight: 400 }}>{project.brandExperience}</span>
                  </div>
                )}
              </div>

              {/* View link */}
              <Link
                to="/projects"
                id={`show-tell-view-${project.id}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 4,
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#34164F",
                  textDecoration: "none",
                }}
              >
                {project.linkText || "View all projects"}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* ── Prev / Next + dots ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 28 }}>
            <button
              id="show-tell-prev"
              onClick={prev}
              aria-label="Previous"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1.5px solid #d5d0cb",
                background: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#585450",
                transition: "all 0.2s",
                padding: 0,
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = "#34164F";
                b.style.borderColor = "#34164F";
                b.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = "#fff";
                b.style.borderColor = "#d5d0cb";
                b.style.color = "#585450";
              }}
            >
              <ChevronLeft size={15} />
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: 5 }}>
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  id={`show-tell-dot-${i}`}
                  onClick={() => setActive(i)}
                  aria-label={`Project ${i + 1}`}
                  style={{
                    width: i === active ? 18 : 5,
                    height: 5,
                    borderRadius: 3,
                    background: i === active ? "#34164F" : "#d5d0cb",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              id="show-tell-next"
              onClick={next}
              aria-label="Next"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1.5px solid #d5d0cb",
                background: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#585450",
                transition: "all 0.2s",
                padding: 0,
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = "#34164F";
                b.style.borderColor = "#34164F";
                b.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = "#fff";
                b.style.borderColor = "#d5d0cb";
                b.style.color = "#585450";
              }}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SPACER — decorative shapes live here in bg
        ══════════════════════════════════════════ */}
        {!isMobile && <div style={{ flex: "0 0 120px" }} />}

        {/* ══════════════════════════════════════════
            RIGHT — Device group (tablet + phone corner)
        ══════════════════════════════════════════ */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ 
            flex: 1, 
            display: "flex", 
            justifyContent: isMobile ? "center" : "flex-end", 
            alignItems: isMobile ? "center" : "flex-end", 
            alignSelf: isMobile ? "center" : "flex-end", 
            paddingRight: 0, 
            paddingBottom: 0, 
            margin: isMobile ? "20px 0 0 0" : "0 -48px -40px 0",
            transform: isSmallMobile ? "scale(0.6)" : isMobile ? "scale(0.85)" : "scale(1.1)",
            transformOrigin: isMobile ? "center top" : "right bottom",
            width: isMobile ? "100%" : "auto"
          }}
        >
          <DeviceGroup tabImage={project.tabImage} phoneImage={project.phoneImage} projectName={project.name} id={project.id} />
        </div>

      </div>
    </section>
  );
}
