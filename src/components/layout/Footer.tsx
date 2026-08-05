import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section - Light Background */}
      <div className="bg-background py-16 px-6 md:px-12 lg:px-20 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Column 1: Brand & About */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-extrabold font-heading text-primary">
                  RAH PIXELS
                </h2>
                <p className="text-sm font-semibold text-accent-purple mt-1 uppercase tracking-wide">
                  Crafting Distinct Voices
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold font-heading text-primary">
                  About Us
                </h3>
                <p className="text-body-text text-sm leading-relaxed">
                  We help businesses build brands that feel authentic, look professional, and leave a lasting impression on their audience.
                </p>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-lg font-bold font-heading text-primary mb-6">
                Services
              </h3>
              <ul className="space-y-4">
                {[
                  { label: 'Brand Strategy', path: '/services' },
                  { label: 'Visual Identity', path: '/services' },
                  { label: 'UI/UX Design', path: '/services' },
                  { label: 'Packaging', path: '/services' },
                  { label: 'User Testing', path: '/services' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-body-text text-sm hover:text-accent-gold transition-colors font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold transition-colors shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-lg font-bold font-heading text-primary mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  { label: 'Who We Are', path: '/about' },
                  { label: 'Our Services', path: '/services' },
                  { label: 'Our Projects', path: '/projects' },
                  { label: 'Social', path: '/social' },
                  { label: 'Contact Us', path: '/contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-body-text text-sm hover:text-accent-gold transition-colors font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold transition-colors shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Newsletter */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold font-heading text-primary mb-4">
                  Contact Us
                </h3>
                <div className="space-y-3 text-sm text-body-text">
                  <p>
                    <span className="font-bold text-primary block">Call:</span>
                    +91 9009359407
                  </p>
                  <p>
                    <span className="font-bold text-primary block">Email:</span>
                    info@rahpixels.design
                  </p>
                  <div className="w-8 h-1 bg-accent-gold mt-4 rounded-full" />
                </div>
              </div>

              <div>
                <h4 className="text-primary font-bold font-heading mb-3 text-sm uppercase tracking-wider">Newsletter</h4>
                <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-accent-purple/30 transition-shadow shadow-sm">
                  <input
                    type="email"
                    placeholder="Enter email..."
                    className="w-full px-4 py-2.5 text-sm outline-none text-secondary bg-transparent placeholder:text-gray-400"
                  />
                  <button className="bg-primary hover:bg-accent-gold transition-colors text-white px-4 flex items-center justify-center shrink-0">
                    <FaPaperPlane className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-primary font-bold font-heading mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
                <div className="flex gap-3">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-body-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar - Dark Background */}
      <div className="bg-secondary py-5 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p className="order-2 md:order-1">
            &copy; {new Date().getFullYear()} Rah Pixels. All rights reserved.
          </p>
          <div className="flex gap-6 items-center order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="w-px h-3 bg-gray-700" />
            <a href="#" className="hover:text-white transition-colors">Our History</a>
            <span className="w-px h-3 bg-gray-700" />
            <a href="#" className="hover:text-white transition-colors">What We Do</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
