import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setIsError(true);
    } else {
      setIsError(false);
      setEmail('');
      // Success logic can go here
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#13071C] text-white pt-24 pb-12 px-4 md:px-8 lg:px-12 font-sans border-t border-white/10">
      <div className="w-full mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
        
        {/* Left Column: CTA & Newsletter */}
        <div className="flex-1 max-w-[420px]">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-12 leading-[1.1] text-white">
            Get to know more<br/>about our work.
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full relative">
            
            <div className="flex flex-col w-full relative group">
              <div className={`border-[2px] transition-colors duration-300 ${isError ? 'border-[#F7B71D]' : 'border-white/60 group-focus-within:border-white'} bg-transparent p-1`}>
                <div className="relative w-full h-[60px]">
                  <input
                    type="text"
                    id="email-input"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (isError) setIsError(false);
                    }}
                    placeholder="Email Address *"
                    className="peer w-full h-full bg-transparent text-white px-4 outline-none placeholder-transparent"
                  />
                  <label 
                    htmlFor="email-input"
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg pointer-events-none transition-all duration-300
                      peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500
                      peer-focus:-top-8 peer-focus:-translate-y-0 peer-focus:text-sm peer-focus:left-1
                      ${email ? '-top-8 -translate-y-0 text-sm left-1 text-gray-400' : ''}
                      ${isError ? 'text-[#F7B71D]' : 'peer-focus:text-[#F7B71D]'}
                    `}
                  >
                    Email Address <span className="text-[#F7B71D]">*</span>
                  </label>
                </div>
              </div>
              
              <div className={`overflow-hidden transition-all duration-300 ${isError ? 'max-h-10 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
                <p className="text-[#F7B71D] text-[15px] font-medium">
                  Must be valid email. example@yourdomain.com
                </p>
              </div>
            </div>
            
            <button type="submit" className="bg-white cursor-pointer text-black text-lg font-semibold py-4 w-[240px] hover:bg-gray-200 transition-colors">
              Submit
            </button>
            
            <p className="text-white text-lg mt-4 leading-relaxed max-w-sm">
              Learn more about how your information will be used in our <a href="#" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-100 after:h-[1px] after:-bottom-[2px] after:left-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-0 hover:text-white transition-colors">Privacy Policy</a>.
            </p>
          </form>
        </div>

        {/* Right Columns: Links Container */}
        <div className="flex-[1.5] w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-16 text-[1.1rem] md:text-[1.15rem] font-medium pt-4 text-gray-300 [&_a]:transition-colors [&_a:hover]:text-white [&_a]:relative [&_a]:w-max [&_a::after]:content-[''] [&_a::after]:absolute [&_a::after]:w-full [&_a::after]:scale-x-0 [&_a::after]:h-[1px] [&_a::after]:bottom-0 [&_a::after]:left-0 [&_a::after]:bg-white [&_a::after]:origin-left [&_a::after]:transition-transform [&_a::after]:duration-300 [&_a:hover::after]:scale-x-100">
          
          {/* Channels */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-xl font-medium tracking-wide mb-2">Channels</h3>
            <a href="#">Newsletter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">X</a>
          </div>

          {/* Office (Customized for Rah Pixels) */}
          <div className="flex flex-col gap-8">
            <h3 className="text-white text-xl font-medium tracking-wide mb-[-12px]">Office</h3>
            
            <div className="text-white leading-relaxed space-y-1">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                <span className="text-white">Rah Pixels</span>
                <span>Pune, Maharashtra</span>
                <span>India</span>
              </a>
            </div>
          </div>

           {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-xl font-medium tracking-wide mb-2">Contact</h3>
              <a href="mailto:info@rahpixels.design">info@rahpixels.design</a>
              <a href="tel:+919009359407">+91 9009359407</a>
              <a href="tel:+918446134413">+91 8446134413</a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full mx-auto mt-32 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-white">
        <p>Copyright © 2026 Rah Pixels. All rights reserved.</p>
        <button 
          onClick={scrollToTop}
          className="mt-6 cursor-pointer md:mt-0 px-8 py-4 border border-white/40 hover:border-white hover:text-white transition-all flex items-center gap-3 rounded-none group"
        >
          Back to top 
          <span className="text-lg  leading-none transform group-hover:-translate-y-1 transition-transform">↑</span>
        </button>
      </div>
    </footer>
  );
}
