import { useState } from 'react'
import { X, Check, Send, Sparkles, AlertCircle } from 'lucide-react'
import { SERVICES_DATA } from '../../data/serviceData'
import type { ServiceItem } from '../../data/serviceData'

interface ProjectEstimatorModalProps {
  initialService?: ServiceItem | null
  onClose: () => void
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  initialService,
  onClose,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    initialService ? [initialService.id] : ['brand-identity-design']
  )
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [projectDetails, setProjectDetails] = useState('')
  const [timeline, setTimeline] = useState('Standard (2-3 Weeks)')
  const [submitted, setSubmitted] = useState(false)

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const selectedServices = SERVICES_DATA.filter((s) => selectedIds.includes(s.id))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const sendWhatsApp = () => {
    const serviceTitles = selectedServices.map((s) => s.title).join(', ')
    const message = `*NEW PROJECT INQUIRY - RAH PIXELS*\n\n` +
      `*Name:* ${clientName || 'N/A'}\n` +
      `*Phone:* ${clientPhone || 'N/A'}\n` +
      `*Email:* ${clientEmail || 'N/A'}\n` +
      `*Timeline:* ${timeline}\n` +
      `*Selected Services:* ${serviceTitles}\n\n` +
      `*Project Description:*\n${projectDetails || 'I would like a custom quote for the selected services.'}`

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2430]/75 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden my-6 border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#34164F] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F7B71D]/20 px-3 py-1 text-xs font-bold text-[#F7B71D] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROJECT SCOPE BUILDER</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-sora">Get Custom Package Quote</h2>
          <p className="text-sm text-gray-300 font-manrope mt-1">
            Select your required services to receive a tailored timeline and bundled package proposal.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Services */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#34164F] mb-3 font-sora">
                  1. Select Required Services (Choose 1 or more)
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES_DATA.map((service) => {
                    const isSelected = selectedIds.includes(service.id)
                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`cursor-pointer rounded-xl p-3.5 border transition-all flex items-start justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#34164F]/5 border-[#34164F] ring-1 ring-[#34164F]'
                            : 'bg-[#F5F5F7] border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div>
                          <p className="text-sm font-bold text-[#1F2430] font-sora">{service.title}</p>
                          <p className="text-xs text-[#6B7280] mt-0.5">{service.badgeText}</p>
                        </div>

                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                            isSelected
                              ? 'bg-[#F7B71D] border-[#F7B71D] text-[#34164F]'
                              : 'bg-white border-gray-300'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    )
                  })}
                </div>
                {selectedIds.length === 0 && (
                  <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> Please select at least one service.
                  </p>
                )}
              </div>

              {/* Step 2: Contact Info */}
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#34164F] mb-1 font-sora">
                  2. Your Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#1F2430] placeholder-gray-400 focus:border-[#34164F] focus:ring-1 focus:ring-[#34164F] outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp *"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#1F2430] placeholder-gray-400 focus:border-[#34164F] focus:ring-1 focus:ring-[#34164F] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#1F2430] placeholder-gray-400 focus:border-[#34164F] focus:ring-1 focus:ring-[#34164F] outline-none"
                  />
                </div>

                <div>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#1F2430] focus:border-[#34164F] focus:ring-1 focus:ring-[#34164F] outline-none"
                  >
                    <option value="Urgent (1 Week)">Urgent Launch (1 Week)</option>
                    <option value="Standard (2-3 Weeks)">Standard Timeline (2-3 Weeks)</option>
                    <option value="Flexible (1+ Month)">Flexible (1+ Month)</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your business or specific goals..."
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#1F2430] placeholder-gray-400 focus:border-[#34164F] focus:ring-1 focus:ring-[#34164F] outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={selectedIds.length === 0}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#34164F] hover:bg-[#1F2430] py-3 text-sm font-semibold text-white transition-all disabled:opacity-50 cursor-pointer shadow-md"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 text-[#F7B71D]" />
                </button>

                <button
                  type="button"
                  onClick={sendWhatsApp}
                  disabled={selectedIds.length === 0}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7B71D] hover:bg-[#e0a416] py-3 text-sm font-semibold text-[#34164F] transition-all disabled:opacity-50 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F7B71D]/20 text-[#34164F] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-[#34164F] stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold font-sora text-[#34164F]">Inquiry Received!</h3>
              <p className="text-sm text-[#6B7280] max-w-md mx-auto">
                Thank you {clientName || 'for reaching out'}. Our strategy team will review your selection of ({selectedServices.map(s => s.title).join(', ')}) and respond within 24 hours.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={sendWhatsApp}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7B71D] px-6 py-3 text-sm font-semibold text-[#34164F] hover:bg-[#e0a416] transition-all cursor-pointer shadow-md"
                >
                  <span>Open WhatsApp Directly</span>
                </button>
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-100 px-6 py-3 text-sm font-semibold text-[#1F2430] hover:bg-gray-200 transition-all cursor-pointer"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectEstimatorModal
