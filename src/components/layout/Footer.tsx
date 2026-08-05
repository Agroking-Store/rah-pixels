import { Link } from 'react-router-dom'
import { Sparkles, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-[#34164F] text-white pt-20 pb-12 border-t border-[#7A4DFF]/30 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7A4DFF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#F7B71D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F7B71D] flex items-center justify-center text-[#34164F] font-extrabold text-2xl font-sora shadow-lg shadow-[#F7B71D]/20">
                R
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold font-sora text-white">Rah Pixels</span>
                <span className="text-xs text-[#F7B71D] font-sora font-semibold tracking-wider uppercase">
                  Brand Identity & Digital Studio
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm font-manrope leading-relaxed max-w-md">
              Build a brand that people remember, trust, and choose. We create strategic brand identities, responsive web experiences, and high-converting marketing collateral.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-[#F7B71D] border border-white/10 font-sora">
                <Sparkles className="w-3.5 h-3.5" /> Premium Brand & Web Studio
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-extrabold font-sora text-[#F7B71D] mb-5 uppercase tracking-widest">
              Core Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-300 font-manrope">
              <li>
                <Link to="/services" className="hover:text-[#F7B71D] transition-colors flex items-center gap-1 group">
                  <span>Brand Identity Design</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F7B71D]" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F7B71D] transition-colors flex items-center gap-1 group">
                  <span>Graphic Design</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F7B71D]" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F7B71D] transition-colors flex items-center gap-1 group">
                  <span>Website Design</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F7B71D]" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F7B71D] transition-colors flex items-center gap-1 group">
                  <span>Digital Marketing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F7B71D]" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F7B71D] transition-colors flex items-center gap-1 group">
                  <span>Printing Solutions</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F7B71D]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Links */}
          <div>
            <h4 className="text-xs font-extrabold font-sora text-[#F7B71D] mb-5 uppercase tracking-widest">
              Studio & Work
            </h4>
            <ul className="space-y-3 text-sm text-gray-300 font-manrope">
              <li>
                <Link to="/services" className="hover:text-[#F7B71D] transition-colors">Our 5 Divisions</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F7B71D] transition-colors">About Rah Pixels</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#F7B71D] transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F7B71D] transition-colors">Book Strategy Call</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-extrabold font-sora text-[#F7B71D] mb-5 uppercase tracking-widest">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-300 font-manrope">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F7B71D] flex-shrink-0" />
                <span className="hover:text-white transition-colors">hello@rahpixel.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F7B71D] flex-shrink-0" />
                <span className="hover:text-white transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F7B71D] flex-shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">Creative Studio, Metro Plaza, Suite 402</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-manrope">
          <p>&copy; {new Date().getFullYear()} Rah Pixels Studio. All rights reserved.</p>
          <p className="flex items-center gap-2 text-gray-300 font-sora">
            <span>Designed for Impact</span>
            <span className="text-[#F7B71D]">★</span>
            <span>Built for Conversion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
