import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const { scrollY } = useScroll()

  // --- Home Page Scroll Transformations ---
  const linksOpacity = useTransform(scrollY, [100, 200], [0, 1])
  const linksY = useTransform(scrollY, [100, 200], [-10, 0])
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0])

  // Morphing Big Title transforms (Only used on Home)
  const logoScale = useTransform(scrollY, [0, 220], [1, 0.32])
  const logoY = useTransform(scrollY, [0, 220], [110, 18])

  const navLinks = [
    { name: '[ Home ]', path: '/' },
    { name: '[ Services ]', path: '/services' },
    { name: '[ Projects ]', path: '/projects' },
    { name: '[ Social ]', path: '/social' },
    { name: '[ About Us ]', path: '/about' },
    { name: '[ Contact Us ]', path: '/contact' },
  ]

  return (
    <>
      {/* 1. Dynamic Header Backdrop */}
      <motion.header
        style={{
          // Fades in on home scroll, always solid on other pages
          opacity: isHome ? useTransform(scrollY, [120, 220], [0, 1]) : 1,
        }}
        className={`fixed top-0 left-0 right-0 h-20 bg-background/90 backdrop-blur-md z-40 border-b border-gray-200/50 ${
          !isHome ? 'shadow-sm' : ''
        }`}
      />

      {/* 2. Brand Title / Logo */}
      {isHome ? (
        /* HOME PAGE: Large title that morphs into the top navbar on scroll */
        <motion.div
          style={{
            scale: logoScale,
            y: logoY,
            transformOrigin: 'left top',
          }}
          className="fixed top-0 left-6 md:left-12 lg:left-20 z-50 pointer-events-auto cursor-pointer"
        >
          <Link to="/" className="block">
            <span className="font-heading font-extrabold text-primary tracking-tight text-5xl md:text-7xl lg:text-8xl select-none">
              RAH PIXELS
            </span>
          </Link>
        </motion.div>
      ) : (
        /* OTHER PAGES: Clean, static small logo in the top left corner */
        <div className="fixed top-5 left-6 md:left-12 lg:left-20 z-50">
          <Link to="/" className="block">
            <span className="font-heading font-extrabold text-primary tracking-tight text-2xl md:text-3xl select-none">
              RAH PIXELS
            </span>
          </Link>
        </div>
      )}

      {/* 3. Navigation Links Container */}
      <nav className="fixed top-0 left-0 right-0 h-20 z-50 pointer-events-none flex items-center justify-between px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Spacer for docked logo area */}
        <div className="w-48" />

        {/* Links: Hidden initially on Home (fades in on scroll), ALWAYS visible on other pages */}
        <motion.ul
          style={{
            opacity: isHome ? linksOpacity : 1,
            y: isHome ? linksY : 0,
          }}
          className="hidden md:flex gap-6 pointer-events-auto"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="font-sans text-[16px] font-semibold text-primary hover:text-accent-purple transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Hero Scroll Down Indicator (Home page ONLY) */}
        {isHome && (
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="hidden md:block text-xs font-mono text-body-text uppercase tracking-widest pointer-events-none absolute right-12 lg:right-20 top-36"
          >
            [ SCROLL DOWN ]
          </motion.div>
        )}
      </nav>
    </>
  )
}

export default Navbar