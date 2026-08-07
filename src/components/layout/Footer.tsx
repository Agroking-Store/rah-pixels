import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import footerVideo from '@/assets/Rahpixel_footer.mp4';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    let tl: gsap.core.Timeline;

    if (!container || !video) return;

    const setupScrollTrigger = () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === container) {
          t.kill();
        }
      });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1, 
        },
      });

      const proxy = { progress: 0 };
      tl.to(proxy, {
        progress: 1,
        ease: 'none',
        onUpdate: () => {
          if (video.duration) {
            video.currentTime = proxy.progress * video.duration;
          }
        }
      });
    };

    if (video.readyState >= 1) { 
      setupScrollTrigger();
    } else {
      video.addEventListener('loadedmetadata', setupScrollTrigger);
    }

    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === container) {
          t.kill();
        }
      });
      video.removeEventListener('loadedmetadata', setupScrollTrigger);
    };
  }, []);

  return (
    <footer ref={containerRef} className="relative w-full min-h-[80vh] h-auto bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-end">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
          <video
            ref={videoRef}
            src={footerVideo}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        {/* Footer Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between pt-16 px-6 md:px-12 lg:px-20">
          
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Newsletter & Brand */}
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-white max-w-md leading-tight">
                Get to know more about our work.
              </h2>
              <div className="space-y-4 max-w-sm mt-8">
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-[4px] border-white/70 text-white placeholder:text-gray-400 py-3 px-4 outline-none focus:border-[#9b51e0] transition-colors rounded-none"
                />
                <button className="custom-submit-btn w-max mt-4">
                  Submit
                </button>
               
              </div>
            </div>

            {/* Right Columns: Links & Contact */}
            <div className="flex-[1.5] grid grid-cols-2 md:grid-cols-3 gap-8 mt-4 md:mt-0">
              {/* Services */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Services</h3>
                <ul className="space-y-4">
                  {['Brand Strategy', 'Visual Identity', 'UI/UX Design', 'Packaging'].map((item) => (
                    <li key={item}>
                      <Link to="/services" className="text-gray-300 text-xl font-semibold hover:text-[#9b51e0] transition-colors block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials / Explore */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Explore</h3>
                <div className="flex flex-col gap-3">
                  {['Instagram', 'LinkedIn', 'Youtube' , 'X'].map((item) => (
                    <a key={item} href="#" className="inline-flex text-lg font-semibold items-center justify-center px-4 py-1.5 rounded-full border border-white/20 text-gray-300 hover:border-[#9b51e0] hover:bg-[#9b51e0] hover:text-white transition-all w-fit">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Contact</h3>
                <div className="space-y-4 text-xl font-bold text-gray-300">
                  <p>
                    <a href="mailto:info@rahpixels.design" className="hover:text-[#9b51e0] transition-colors">info@rahpixels.design</a>
                  </p>
                  <p>
                    <a href="tel:+919009359407" className="block hover:text-[#9b51e0] transition-colors">+91 9009359407</a>
                    <a href="tel:+918446134413" className="block mt-1 hover:text-[#9b51e0] transition-colors">+91 8446134413</a>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Giant Typography & Sub-footer */}
          <div className="w-full mt-auto pt-16 flex flex-col items-center">
            {/* Mega Text */}
            <h1 className="text-[10vw] cursor-pointer font-black font-heading text-white leading-none tracking-tighter w-full text-center hover:text-[#9b51e0]/90 transition-colors duration-500 cursor-default select-none">
              RahPixels . Design
            </h1>
            
            {/* Sub-footer */}
            <div className="w-full max-w-7xl font-bold mx-auto flex flex-col md:flex-row justify-between items-center py-6 text-sm text-white mt-2">
              <p>
                ©2026 Rahpixels Design. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>

        </div>
    </footer>
  )
}
