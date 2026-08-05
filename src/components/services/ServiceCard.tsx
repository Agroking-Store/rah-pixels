import { ArrowRight, Clock, Sparkles } from 'lucide-react'
import type { ServiceItem } from '../../data/serviceData'

interface ServiceCardProps {
  service: ServiceItem
  onSelect: (service: ServiceItem) => void
  onEstimate: (service: ServiceItem) => void
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, onEstimate }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#34164F]/10 border border-gray-100 hover:border-[#F7B71D]/50">
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#34164F] via-[#7A4DFF] to-[#F7B71D] rounded-t-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Badge & Category Row */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#34164F]/5 px-3 py-1 text-xs font-semibold text-[#34164F]">
            {service.badgeText}
          </span>
          <div className="flex items-center gap-1 text-xs font-medium text-[#6B7280]">
            <Clock className="w-3.5 h-3.5 text-[#7A4DFF]" />
            <span>{service.turnaround}</span>
          </div>
        </div>

        {/* Heading 28px Sora */}
        <h2 className="text-2xl lg:text-3xl font-bold font-sora text-[#34164F] tracking-tight mb-2 group-hover:text-[#34164F]">
          {service.title}
        </h2>

        {/* Subhead italic */}
        <p className="text-[#34164F]/80 italic text-sm font-medium font-sora mb-6 leading-relaxed border-l-2 border-[#F7B71D] pl-3">
          "{service.subhead}"
        </p>

        {/* Quick Highlights Bullet List (Client Spec format) */}
        <div className="space-y-3 mb-8">
          {service.quickHighlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-[#1F2430]">
              <span className="flex-shrink-0 text-[#F7B71D] font-bold text-base">✔️</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <button
          onClick={() => onSelect(service)}
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#34164F] hover:text-[#7A4DFF] transition-colors py-2 group/btn cursor-pointer"
        >
          <span>→ Learn More & Inclusions</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-[#F7B71D]" />
        </button>

        <button
          onClick={() => onEstimate(service)}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#F5F5F7] hover:bg-[#F7B71D] hover:text-[#34164F] px-3.5 py-2 text-xs font-semibold text-[#1F2430] transition-all cursor-pointer shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#7A4DFF] group-hover:text-[#34164F]" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
