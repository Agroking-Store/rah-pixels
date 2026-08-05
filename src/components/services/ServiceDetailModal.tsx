import { X, CheckCircle2, FileCode, Clock, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react'
import type { ServiceItem } from '../../data/serviceData'

interface ServiceDetailModalProps {
  service: ServiceItem | null
  onClose: () => void
  onOpenEstimator: (service: ServiceItem) => void
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenEstimator,
}) => {
  if (!service) return null

  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(
      `Hello Rah Pixels! I am interested in your "${service.title}" service and would like to discuss my project requirements.`
    )
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2430]/70 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl overflow-hidden my-8 border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-[#34164F] p-6 sm:p-8 text-white">
          <div className="absolute top-0 right-0 p-6">
            <button
              onClick={onClose}
              className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="rounded-full bg-[#F7B71D] px-3 py-1 text-xs font-bold text-[#34164F] uppercase tracking-wider">
              {service.badgeText}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#F7B71D]" />
              {service.turnaround} Turnaround
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-sora mb-2">{service.title}</h2>
          <p className="text-[#F7B71D] italic font-sora text-base sm:text-lg">"{service.subhead}"</p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#7A4DFF] mb-2 font-sora">
              Service Overview
            </h3>
            <p className="text-[#6B7280] text-base leading-relaxed">{service.shortDescription}</p>
          </div>

          {/* Detailed Inclusions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#34164F] mb-4 font-sora flex items-center gap-2">
              <span>What's Included</span>
              <span className="h-0.5 flex-grow bg-gray-100" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.detailedInclusions.map((group, idx) => (
                <div key={idx} className="rounded-xl bg-[#F5F5F7] p-5 border border-gray-100">
                  {group.sectionName && (
                    <h4 className="text-base font-bold text-[#34164F] mb-3 font-sora border-b border-gray-200/80 pb-2">
                      {group.sectionName}
                    </h4>
                  )}
                  <ul className="space-y-2.5">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-[#1F2430]">
                        <CheckCircle2 className="w-4 h-4 text-[#F7B71D] flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverable File Formats */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#34164F] mb-3 font-sora flex items-center gap-2">
              <FileCode className="w-4 h-4 text-[#7A4DFF]" />
              <span>Master Deliverables & Source Files</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.sourceFiles.map((fmt, idx) => (
                <span
                  key={idx}
                  className="rounded-lg bg-[#34164F]/5 border border-[#34164F]/10 px-3.5 py-1.5 text-xs font-bold text-[#34164F]"
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>

          {/* Rah Pixels Quality Guarantee */}
          <div className="rounded-2xl bg-gradient-to-r from-[#34164F]/5 to-[#7A4DFF]/10 p-5 flex items-start gap-4 border border-[#7A4DFF]/20">
            <ShieldCheck className="w-8 h-8 text-[#F7B71D] flex-shrink-0" />
            <div>
              <h4 className="text-base font-bold text-[#34164F] font-sora">
                100% Satisfaction & Full Ownership Guarantee
              </h4>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                You receive full commercial usage rights, print-ready files, and editable open vector master files upon completion.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="bg-[#F5F5F7] p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose()
              onOpenEstimator(service)
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#34164F] hover:bg-[#1F2430] px-6 py-3 text-sm font-semibold text-white transition-all shadow-md cursor-pointer"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4 text-[#F7B71D]" />
          </button>

          <button
            onClick={handleWhatsAppConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7B71D] hover:bg-[#e0a416] px-6 py-3 text-sm font-semibold text-[#34164F] transition-all cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailModal
