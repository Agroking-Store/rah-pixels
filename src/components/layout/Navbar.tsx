import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Social', path: '/social' },
    { name: 'About Studio', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#34164F]/10 bg-white/90 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo - Royal Purple & Premium Gold */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 rounded-2xl bg-[#34164F] flex items-center justify-center text-[#F7B71D] font-extrabold text-xl shadow-md shadow-[#34164F]/20 group-hover:scale-105 group-hover:bg-[#1F2430] transition-all duration-300 font-sora border border-[#F7B71D]/30">
            R
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#F7B71D] animate-ping opacity-75" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#F7B71D]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-extrabold tracking-tight text-[#34164F] font-sora group-hover:text-[#7A4DFF] transition-colors whitespace-nowrap">
                Rah Pixels
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F7B71D]" />
            </div>
            <span className="text-[9px] font-bold tracking-widest text-[#6B7280] uppercase font-sora whitespace-nowrap">
              Brand & Digital Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Perfectly Balanced */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F5F5F7] p-1.5 rounded-full border border-gray-200/80 shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/services' && location.pathname === '/')
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 font-sora whitespace-nowrap ${
                  isActive
                    ? 'bg-[#34164F] text-white shadow-md shadow-[#34164F]/20'
                    : 'text-[#1F2430] hover:text-[#34164F] hover:bg-white/80'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Right CTA Section */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#34164F]/5 border border-[#34164F]/10 text-[11px] font-bold text-[#34164F] font-sora whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for New Projects</span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F7B71D] hover:bg-[#e0a416] px-4.5 py-2.5 text-xs font-extrabold text-[#34164F] transition-all cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.02] font-sora uppercase tracking-wider whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#34164F]" />
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden rounded-2xl bg-[#F5F5F7] p-2.5 text-[#34164F] hover:bg-gray-200 transition-colors border border-gray-200 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white/98 backdrop-blur-xl px-6 pt-4 pb-8 space-y-3 animate-fadeIn shadow-2xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/services' && location.pathname === '/')
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-2xl px-5 py-3 text-sm font-extrabold font-sora transition-colors ${
                  isActive
                    ? 'bg-[#34164F] text-white shadow-md'
                    : 'text-[#1F2430] hover:bg-[#F5F5F7]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <div className="pt-3 border-t border-gray-100">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F7B71D] py-3.5 text-sm font-extrabold text-[#34164F] font-sora uppercase tracking-wider shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar