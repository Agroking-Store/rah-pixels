import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-primary text-white py-20 px-6 sm:px-12 md:px-20 text-center flex flex-col items-center shadow-2xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            Start Your Brand <span className="text-accent-gold">Evolution</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Upgrade your brand identity, unlock deep market insights, and boost engagement through our tailored design and strategy services—empowering you to make smarter decisions and achieve sustainable growth.
          </p>
          
          <div className="pt-8">
            <button className="inline-flex items-center gap-3 bg-accent-gold hover:bg-[#e5a819] text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(247,183,29,0.3)] group cursor-pointer">
              <span className="bg-primary text-accent-gold w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
              Book a free consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
