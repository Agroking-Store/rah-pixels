import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sparkles,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star
} from 'lucide-react'
import FaqAccordion from '../components/common/FaqAccordion'
import { FAQS } from '../data/serviceData'

gsap.registerPlugin(ScrollTrigger)

export const ContactUs = () => {
  const [selectedService, setSelectedService] = useState<string>('Brand Identity')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP Entrance Animations
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        }
      )
    }

    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.info-card')
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="w-full min-h-screen bg-[#F5F5F7] pt-24 pb-20 px-4 sm:px-8 lg:px-12">
      
      {/* 1. HERO HEADER */}
      <section ref={headerRef} className="max-w-5xl mx-auto text-center space-y-5 py-15">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#34164F]/5 border border-[#34164F]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#7A4DFF] font-sora">
          <Sparkles className="w-3.5 h-3.5 text-[#F7B71D]" />
          <span>LET'S START A CONVERSATION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-sora text-[#34164F] tracking-tight leading-[1.1]">
          Have a Project in Mind? <span className="text-[#7A4DFF]">Let’s Talk.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#6B7280] font-manrope max-w-2xl mx-auto leading-relaxed">
          Fill out the project brief below or reach out directly. We analyze your requirements and return with a customized strategy proposal within 24 hours.
        </p>
      </section>

      {/* 2. MAIN FORM & SIDEBAR SECTION */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-15">
        
        {/* Left Side: Interactive Project Inquiry Form */}
        <div ref={formRef} className="lg:col-span-8 rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-12 shadow-xl space-y-8">
          
          <div className="border-b border-gray-100 pb-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sora text-[#34164F]">
              Start Your Project Brief
            </h2>
            <p className="text-sm text-[#6B7280] font-manrope">
              Select your required service and budget range to help us prepare a tailored proposal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Service Selection Tags */}
            <div className="space-y-3">
              <label className="block text-xs font-extrabold font-sora uppercase text-[#34164F] tracking-wider">
                What service do you need?
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  'Brand Identity',
                  'Graphic Design',
                  'Website Design',
                  'Digital Marketing',
                  'Printing Solutions',
                  'Full Brand Retainer'
                ].map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSelectedService(s)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold font-sora transition-all cursor-pointer ${
                      selectedService === s
                        ? 'bg-[#34164F] text-[#F7B71D] shadow-md shadow-[#34164F]/20'
                        : 'bg-gray-100/80 text-[#1F2430] hover:bg-gray-200/80'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <label className="block text-xs font-bold font-sora text-[#34164F]">Your Name <span className="text-[#a042ff]">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Laxman Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-2xl bg-[#F5F5F7] border border-gray-200 px-4 py-3.5 text-sm font-manrope text-[#1F2430] focus:bg-white focus:border-[#34164F] focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold font-sora text-[#34164F]">Email Address <span className="text-[#a042ff]">*</span></label>
                <input
                  type="email"
                  required
                  placeholder="e.g. laxman@brand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-2xl bg-[#F5F5F7] border border-gray-200 px-4 py-3.5 text-sm font-manrope text-[#1F2430] focus:bg-white focus:border-[#34164F] focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold font-sora text-[#34164F]">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 90093 59407"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-2xl bg-[#F5F5F7] border border-gray-200 px-4 py-3.5 text-sm font-manrope text-[#1F2430] focus:bg-white focus:border-[#34164F] focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold font-sora text-[#34164F]">Company / Website</label>
                <input
                  type="text"
                  placeholder="e.g. Indux Technology"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-2xl bg-[#F5F5F7] border border-gray-200 px-4 py-3.5 text-sm font-manrope text-[#1F2430] focus:bg-white focus:border-[#34164F] focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-2">
              <label className="block text-xs font-bold font-sora text-[#34164F]">Project Details & Goals <span className="text-[#a042ff]">*</span></label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your brand vision, target timeline, or specific deliverables needed..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-2xl bg-[#F5F5F7] border border-gray-200 p-4 text-sm font-manrope text-[#1F2430] focus:bg-white focus:border-[#34164F] focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-[#34164F] hover:bg-[#1F2430] text-[#F7B71D] px-9 py-4 font-extrabold text-sm font-sora uppercase tracking-wider transition-all cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01]"
            >
              <Send className="w-4 h-4 text-[#F7B71D]" />
              <span>Send Project Brief</span>
            </button>
          </form>

        </div>

        {/* Right Side: Direct Contact Info Sidebar */}
        <div ref={cardsRef} className="lg:col-span-4 space-y-6">
          
          <div className="info-card rounded-3xl bg-[#34164F] text-white p-8 space-y-6 shadow-xl relative overflow-hidden border border-[#7A4DFF]/30">
            <div className="space-y-2 relative z-10">
              <span className="text-xs font-extrabold font-sora text-[#F7B71D] uppercase">Direct Access</span>
              <h3 className="text-2xl font-extrabold font-sora text-white">Contact Information</h3>
              <p className="text-xs text-gray-300 font-manrope leading-relaxed">
                Connect directly with our senior creative strategists for instant consultations.
              </p>
            </div>

            <div className="space-y-5 relative z-10 pt-2">
              
              <a href="mailto:info@rahpixels.design" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-[#F7B71D] group-hover:bg-[#F7B71D] group-hover:text-[#34164F] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase block font-sora">Email Us</span>
                  <span className="text-sm font-bold text-white font-sora group-hover:text-[#F7B71D] transition-colors">info@rahpixels.design</span>
                </div>
              </a>

              <a href="tel:+919009359407" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-[#F7B71D] group-hover:bg-[#F7B71D] group-hover:text-[#34164F] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase block font-sora">Direct Phone</span>
                  <span className="text-sm font-bold text-white font-sora group-hover:text-[#F7B71D] transition-colors">+91 90093 59407 / +91 84461 34413</span>
                </div>
              </a>

              <a
                href="https://wa.me/?text=Hello%20Rah%20Pixels!%20I%20want%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase block font-sora">WhatsApp Chat</span>
                  <span className="text-sm font-bold text-emerald-400 font-sora">Instant WhatsApp Response</span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-[#F7B71D]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase block font-sora">Studio Location</span>
                  <span className="text-sm font-bold text-white font-sora">Rah Pixels Studio, Pune, Maharashtra, India</span>
                </div>
              </div>

            </div>
          </div>

          {/* Guarantees Box */}
          <div className="info-card rounded-3xl bg-white border border-gray-200/80 p-6 space-y-4 shadow-sm">
            <h4 className="text-base font-extrabold font-sora text-[#34164F]">The Rah Pixels Promise</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-semibold font-manrope text-[#6B7280]">
                <Clock className="w-4 h-4 text-[#F7B71D]" />
                <span>Proposal returned within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold font-manrope text-[#6B7280]">
                <ShieldCheck className="w-4 h-4 text-[#F7B71D]" />
                <span>100% Vector Master Source File Rights</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold font-manrope text-[#6B7280]">
                <Star className="w-4 h-4 text-[#F7B71D]" />
                <span>Zero Hidden Fees or Asset Lock-in</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 3. GOOGLE MAPS PUNE LOCATION SECTION */}
      <section className="max-w-7xl mx-auto py-15">
        <div className="rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-extrabold font-sora text-[#7A4DFF] uppercase tracking-wider block">
                VISIT OUR STUDIO
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-sora text-[#34164F]">
                Our Headquarters in Pune, India
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold font-sora text-[#34164F] bg-[#F5F5F7] px-4 py-2 rounded-xl border border-gray-200">
              <MapPin className="w-4 h-4 text-[#F7B71D]" />
              <span>Pune, Maharashtra 411001</span>
            </div>
          </div>

          <div className="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-gray-200 relative shadow-inner">
            <iframe
              title="Rah Pixels Studio Location Pune India"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.023259837943!2d73.8567437!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION SECTION */}
      <section className=" py-15">
        <FaqAccordion
          title="Got Questions? We Have Answers."
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about starting a project with Rah Pixels."
          items={FAQS}
        />
      </section>

      {/* 4. SUCCESS SUBMISSION MODAL */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-[#1F2430]/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 sm:p-12 max-w-md w-full text-center space-y-6 shadow-2xl border border-gray-200">
            <div className="w-16 h-16 rounded-full bg-[#F7B71D]/20 text-[#34164F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#F7B71D]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold font-sora text-[#34164F]">Brief Received!</h3>
              <p className="text-sm text-[#6B7280] font-manrope leading-relaxed">
                Thank you, <strong className="text-[#34164F]">{formData.name || 'Friend'}</strong>. Our senior design team is reviewing your project brief. We will send your custom proposal to <strong className="text-[#7A4DFF]">{formData.email}</strong> within 24 hours.
              </p>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full rounded-2xl bg-[#34164F] text-[#F7B71D] py-3.5 text-xs font-extrabold font-sora uppercase tracking-wider shadow-md cursor-pointer hover:bg-[#1F2430]"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default ContactUs
