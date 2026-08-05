import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane } from 'react-icons/fa6'

export default function Footer() {
  const companyNavLinks = [
    { name: 'About', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Our Clients', path: '/projects' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Pricing', path: '/pricing' }
  ]
  return (
    <footer className="w-full">
      {/* Top Section - Light Background */}
      <div className="bg-background py-16 px-6 md:px-12 lg:px-20 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

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
              <p className="text-body-text text-sm leading-relaxed max-w-xs">
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
              {['Brand Strategy', 'Visual Identity', 'UI/UX Design', 'Packaging', 'User Testing'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-body-text text-sm hover:text-accent-gold transition-colors font-medium flex items-center gap-2 before:content-['•'] before:text-accent-gold/50">
                    {item}
                  </a>
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
              {companyNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-body-text text-sm hover:text-accent-gold transition-colors font-medium flex items-center gap-2 before:content-['•'] before:text-accent-gold/50"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold font-heading text-primary mb-6">
                Contact us
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
                <div className="w-8 h-1 bg-accent-gold mt-4"></div>
              </div>
            </div>

            <div>
              <div className="flex bg-white border border-gray-200 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-accent-purple/30 transition-shadow">
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="w-full px-4 py-2 text-sm outline-none text-secondary bg-transparent placeholder:text-gray-400"
                />
                <button className="bg-primary hover:bg-accent-gold transition-colors text-white px-4 flex items-center justify-center">
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-primary font-bold font-heading mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-body-text hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Dark Background */}
      <div className="bg-secondary py-4 px-6 md:px-12 lg:px-20 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="w-px h-3 bg-gray-700"></span>
            <a href="#" className="hover:text-white transition-colors">Our History</a>
            <span className="w-px h-3 bg-gray-700"></span>
            <a href="#" className="hover:text-white transition-colors">What We Do</a>
          </div>
          <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Rah Pixels. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
