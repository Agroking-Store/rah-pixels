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
    id: "ahg-resort",
    label: "Luxury meets legacy",
    quote:
      '"A brand that commands presence across 12 international hotel locations — architecture in every pixel."',
    name: "Asia Hospitality Group",
    role: "Brand Identity",
    platform: "AHG Resorts & Villas",
    // 5 images for the 5-cell grid (tall-left + 2-top-right + 2-bottom-right)
    images: [
      "https://indux.cloud/wp-content/uploads/2026/03/ahg_asset-2-1.5x-A1agVE6Kj5Fb7yOn.avif",
      "https://indux.cloud/wp-content/uploads/2026/03/mb_asset-1-1.5x-Yan2eXGBBBfEbOo2.avif",
      "https://indux.cloud/wp-content/uploads/2026/03/lgh_asset-1-1.5x-YrDLOe0o3lSRV4V1.avif",
      "https://indux.cloud/wp-content/uploads/2026/03/pcf_asset-3-1.5x-AE0q3l9pPeSnWKRZ.avif",
      "https://indux.cloud/wp-content/uploads/2026/03/sac_asset-2-1.5x-YyvkejaowQUErJln.avif",
    ],
    colors: ["#C8973E", "#B8832A", "#D4A035", "#B0634A"],
  },
  {
    id: "re-agency",
    label: "A foray into improbable pairings",
    quote: '"If they can get you asking the wrong questions, they don\'t have to worry about answers."',
    name: "Rah Pixels Rebrand",
    role: "Website & Branding",
    platform: "Rah Pixels",
    images: [
      "https://picsum.photos/seed/rah1/800/600",
      "https://picsum.photos/seed/rah2/800/600",
      "https://picsum.photos/seed/rah3/800/600",
      "https://picsum.photos/seed/rah4/800/600",
      "https://picsum.photos/seed/rah5/800/600",
    ],
    colors: ["#C28723", "#946313", "#B57A18", "#7D510C"],
  },
  {
    id: "fabrik-portfolio",
    label: "Elevating creative portfolios",
    quote: '"The details are not the details. They make the design. Innovation distinguishes between a leader and a follower."',
    name: "Fabrik Showcase",
    role: "Digital Platform",
    platform: "Fabrik App",
    images: [
      "https://picsum.photos/seed/fab1/800/600",
      "https://picsum.photos/seed/fab2/800/600",
      "https://picsum.photos/seed/fab3/800/600",
      "https://picsum.photos/seed/fab4/800/600",
      "https://picsum.photos/seed/fab5/800/600",
    ],
    colors: ["#1B4332", "#081C15", "#2D6A4F", "#40916C"],
  },
  {
    id: "tts-logistics",
    label: "A fleet identity built to move",
    quote:
      '"500+ vehicles, one unified brand — recognisable from the highway and trusted at the doorstep."',
    name: "Top Transport Solutions",
    role: "Packaging & Print",
    platform: "TTS Freight Logistics",
    images: [
      "https://picsum.photos/seed/tts1/800/600",
      "https://picsum.photos/seed/tts2/800/600",
      "https://picsum.photos/seed/tts3/800/600",
      "https://picsum.photos/seed/tts4/800/600",
      "https://picsum.photos/seed/tts5/800/600",
    ],
    colors: ["#C83E76", "#B82A5D", "#D43588", "#B04A76"],
  },
];

/* ─────────────────────────────────────────────────────────
   Decorative shapes — gold diamonds + copper zigzag
   Positioned in the CENTER of the page between text & devices,
   exactly as seen in the reference image
───────────────────────────────────────────────────────── */
function DecorShapes({ activeIndex, images }: { activeIndex: number, images: string[] }) {
  const currentBgImage = images[0];

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
          key={currentBgImage}
          src={currentBgImage}
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
function DeviceGroup({ images, projectName, id }: { images: string[]; projectName: string; id: string }) {
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

        {/* 5-cell image grid matching the reference exactly:
            [  tall  ] [ top-right      ]
            [  left  ] [  br1  ] [ br2  ]
                       [  br3  ] [ br4  ]  ← no, reference has 2 rows on right
            Actually: left col = 1 tall, right col = top half + bottom 2-col split */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: `${TABLET_H * 0.54}px ${TABLET_H * 0.46}px`,
            gap: 3,
            background: "#dedad5",
            height: TABLET_H,
          }}
        >
          {/* Left — tall image spanning both rows */}
          <div style={{ gridRow: "1 / 3", overflow: "hidden", position: "relative" }}>
            <img
              src={images[0]}
              alt={projectName}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="eager"
              fetchPriority="high"
            />
            {/* Name overlay bottom-left */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 8,
                background: "rgba(20,18,16,0.72)",
                backdropFilter: "blur(6px)",
                borderRadius: 6,
                padding: "5px 9px",
              }}
            >
              <div style={{ fontSize: 8, color: "#F7B71D", fontWeight: 700, fontFamily: "sans-serif" }}>Rah Pixels</div>
              <div style={{ fontSize: 10, color: "#fff", fontWeight: 600, fontFamily: "sans-serif", marginTop: 1 }}>
                {projectName}
              </div>
            </div>
          </div>

          {/* Top-right — single wide image */}
          <div style={{ overflow: "hidden" }}>
            <img
              src={images[1]}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Bottom-right — two side-by-side images */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, overflow: "hidden" }}>
            <div style={{ overflow: "hidden" }}>
              <img src={images[2]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="eager" />
            </div>
            <div style={{ overflow: "hidden" }}>
              <img src={images[3]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="eager" />
            </div>
          </div>
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

        {/* 2×2 image grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#dedad5" }}>
          {images.slice(0, 4).map((src, i) => (
            <div key={i} style={{ aspectRatio: "7/10", overflow: "hidden" }}>
              <img
                src={src}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          ))}
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
  const total = PROJECTS.length;
  const project = PROJECTS[active];
  
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isSmallMobile = useMediaQuery("(max-width: 500px)");

  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

  /* Auto-cycle every 5s */
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

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
      <DecorShapes activeIndex={active} images={project.images} />

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
                fontSize: 80,
                fontWeight: 700,
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
                fontSize: 18,
                fontWeight: 400,
                color: "#77736e",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 320,
              }}
            >
              Rah Pixels supports and celebrates great creative leaders from the design community.
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
              {/* Bold label — e.g. "A foray into improbable pairings" */}
              <p
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 22,
                  fontWeight: 500,
                  color: "#2b2926",
                  margin: "0 0 8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {project.label}
              </p>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#585450",
                  lineHeight: 1.65,
                  margin: "0 0 20px",
                  maxWidth: 320,
                }}
              >
                {project.quote}
              </p>

              {/* Thin divider */}
              <div style={{ width: 40, height: 1, background: "#d5d0cb", marginBottom: 16 }} />

              {/* Name / Role / Platform */}
              <p style={{ margin: 0, fontFamily: "'Sora', sans-serif", fontSize: 28, fontWeight: 600, color: "#2b2926" }}>
                {project.name}
              </p>
              <p style={{ margin: "4px 0 0", fontFamily: "'Manrope', sans-serif", fontSize: 16, fontWeight: 400, color: "#77736e" }}>
                {project.role}
              </p>
              <p style={{ margin: "2px 0 0", fontFamily: "'Manrope', sans-serif", fontSize: 16, fontWeight: 400, color: "#aaa8a5" }}>
                {project.platform}
              </p>

              {/* View link */}
              <Link
                to="/projects"
                id={`show-tell-view-${project.id}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 20,
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#34164F",
                  textDecoration: "none",
                }}
              >
                View all projects
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
          <DeviceGroup images={project.images} projectName={project.name} id={project.id} />
        </div>

      </div>
    </section>
  );
}
