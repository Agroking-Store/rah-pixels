import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';
import { getSocialAdminTemplate, getSocialUserTemplate } from '../../utils/emailTemplates';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SocialContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />

      {/* Right Drawer */}
      <motion.div
        data-lenis-prevent="true"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 right-0 bottom-0 w-full md:w-[750px] z-[999] bg-[#13071C] border-l border-white/10 text-white overflow-y-auto overscroll-contain pointer-events-auto shadow-2xl"
      >
        <div className="px-6 md:px-10 py-8">

          {/* TOP NAV */}
          <div className="flex justify-between items-center mt-2 md:mt-4 gap-4">
            <h2 className="text-[24px] md:text-[32px] font-sora font-bold tracking-tight text-white leading-tight">Let's Start a Conversation</h2>

            <button
              onClick={onClose}
              className="flex items-center group cursor-pointer shrink-0"
            >
              <div className="hidden sm:flex bg-[#1C1C1C] h-12 md:h-14 px-6 items-center justify-center text-[14px] md:text-[16px] font-manrope font-normal transition-colors group-hover:bg-[#2A2A2A] text-white">
                Close
              </div>
              <div className="bg-white h-12 w-12 md:h-14 md:w-14 flex items-center justify-center text-black text-xl transition-transform group-hover:scale-95">
                ✕
              </div>
            </button>
          </div>

          {/* FORM SECTION */}
          <div className="w-full max-w-4xl mt-16 md:mt-24 mb-20">
            <form className="flex flex-col gap-6" onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData as any);

              // Basic validation before sending
              if (!data.name || !data.email || !data.reason || !data.about || !data.focus) {
                toast.error("Please fill out all required fields.");
                return;
              }

              const adminPromise = fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  service_id: 'service_omsyqbn',
                  template_id: 'template_6t3ttnp',
                  user_id: 'glsS5l2vf6lVc8lLa',
                  template_params: {
                    to_email: 'connect@rahpixels.design', // Send to admin
                    reply_to: data.email,
                    subject: `New Social Inquiry from ${data.name}`,
                    html_content: getSocialAdminTemplate(data as any)
                  }
                }),
              });

              const userPromise = fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  service_id: 'service_omsyqbn',
                  template_id: 'template_6t3ttnp',
                  user_id: 'glsS5l2vf6lVc8lLa',
                  template_params: {
                    to_email: data.email, // Send to user
                    subject: 'We received your inquiry - Rah Pixels',
                    html_content: getSocialUserTemplate(data as any)
                  }
                }),
              });

              const submitPromise = Promise.all([adminPromise, userPromise]).then(async (responses) => {
                for (const res of responses) {
                  if (!res.ok) {
                    const err = await res.text();
                    throw new Error(err || 'Failed to submit form.');
                  }
                }
                return { message: 'Inquiry sent successfully!' };
              });

              toast.promise(submitPromise, {
                loading: 'Sending your inquiry...',
                success: (res) => {
                  e.target.reset(); // clear form
                  setTimeout(() => onClose(), 2000); // close modal after 2 seconds
                  return res.message || 'Inquiry sent successfully!';
                },
                error: (err) => err.message || 'Failed to send inquiry.'
              });
            }}>
              <InputField name="name" label="Your Name" placeholder="What should I call you?" isRequired />
              <InputField name="email" label="Email Address" placeholder="Where can I reach you?" type="email" isRequired />
              <InputField name="social" label="Instagram / LinkedIn" placeholder="Your profile link" />
              <SelectField
                name="reason"
                label="What brings you here?"
                placeholder="Select a reason"
                isRequired
                options={[
                  "I'd love a 1:1 session",
                  "I want to learn from you",
                  "I'd like to collaborate",
                  "I'd love to be part of the community",
                  "I have an idea to discuss",
                  "Something else"
                ]}
              />
              <InputField name="about" label="Tell me a little about yourself" placeholder="What do you do, what are you working on, or what would you like to talk about?" isTextArea isRequired />
              <InputField name="focus" label="What would you like our session to focus on?" placeholder="Tell me what you'd love to discuss, learn, or explore together." isTextArea isRequired />

              <SelectField
                name="format"
                label="Preferred Session Format"
                placeholder="Select format"
                options={["Online", "In-person", "Either works"]}
              />

              <InputField name="extra" label="Anything else you'd like me to know?" placeholder="Feel free to share anything that might help me understand you better." isTextArea />

              <div className="mt-8">
                <button type="submit" className="bg-white text-black font-manrope font-semibold text-[16px] px-14 py-5 hover:bg-gray-200 transition-colors w-full md:w-auto cursor-pointer">
                  Submit
                </button>
              </div>
            </form>

            <p className="mt-8 text-white/80 text-[18px] font-manrope font-normal">
              Learn more about how your information will be used in our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy.</a>
            </p>
          </div>

          {/* FOOTER */}
          <div className="mt-16 md:mt-24 pb-8 pt-8 md:pt-12 border-t border-white/10">
            <h3 className="text-[24px] md:text-[28px] font-sora font-semibold mb-8 md:mb-12 text-white">How else can we help?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 lg:gap-20 text-[16px] font-manrope font-normal tracking-wide">

              <div>
                <p className="text-white/60 mb-1">Email us.</p>
                <a href="mailto:connect@rahpixels.design" className="hover:underline transition-all">connect@rahpixels.design</a>
              </div>
              <div>
                <p className="text-white/60 mb-1">Call us.</p>
                <a href="tel:+919504093093" className="hover:underline transition-all block">+91 9504093093</a>
              </div>
              <div>
                <p className="text-white/60 mb-1">Alternative.</p>
                <a href="tel:+919009359407" className="hover:underline transition-all block">+91 9009359407</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>,
    document.body
  );
}

function InputField({ name, label, placeholder, type = "text", pattern, isTextArea = false, isRequired = false }: { name?: string, label: string, placeholder?: string, type?: string, pattern?: string, isTextArea?: boolean, isRequired?: boolean }) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  const validate = (val: string) => {
    if (isRequired && !val) {
      return "This field is required.";
    }
    if (type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      return "Please enter a valid email address.";
    }
    if (type === "tel" && val && pattern && !new RegExp(pattern).test(val)) {
      return "Please enter a valid phone number (min 10 digits).";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let newVal = e.target.value;

    // Strict numeric restriction for phone fields
    if (type === "tel") {
      newVal = newVal.replace(/[^0-9+\-\s()]/g, '');
    }

    setValue(newVal);
    if (touched) {
      setError(validate(newVal));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validate(value));
  };

  const borderClass = error ? "border-red-500" : "border-white/20 focus:border-[#F7B71D]";

  return (
    <div className="relative flex flex-col w-full gap-2">
      <label className="text-[14px] md:text-[16px] text-white/90 font-manrope font-semibold flex items-center gap-1">
        {label} {isRequired && <span className="text-[#a042ff] text-lg leading-none mt-1">*</span>}
      </label>

      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full bg-[#13071C] border ${borderClass} p-4 md:p-5 text-white focus:outline-none transition-colors h-32 md:h-40 resize-none text-[16px] md:text-[18px] font-manrope font-normal placeholder:text-white/30`}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full bg-[#13071C] border ${borderClass} p-4 md:p-5 text-white focus:outline-none transition-colors h-[60px] md:h-[72px] text-[16px] md:text-[18px] font-manrope font-normal placeholder:text-white/30`}
        />
      )}

      {error && (
        <span className="text-red-500 text-[13px] font-manrope font-medium">
          {error}
        </span>
      )}
    </div>
  );
}

function SelectField({ name, label, placeholder, options, isRequired = false }: { name?: string, label: string, placeholder?: string, options: string[], isRequired?: boolean }) {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [touched, setTouched] = useState(false);

  const error = touched && isRequired && !value ? "This field is required." : "";

  const toggleOpen = () => {
    if (isOpen) {
      setTouched(true);
    }
    setIsOpen(!isOpen);
  };

  const borderClass = error ? "border-red-500" : (isOpen ? "border-[#F7B71D]" : "border-white/20");

  return (
    <div className="relative flex flex-col w-full gap-2 group">
      <label className="text-[14px] md:text-[16px] text-white/90 font-manrope font-semibold flex items-center gap-1">
        {label} {isRequired && <span className="text-[#a042ff] text-lg leading-none mt-1">*</span>}
      </label>

      <div className="relative w-full" onClick={toggleOpen}>
        {name && <input type="hidden" name={name} value={value} />}
        <div className={`w-full bg-[#13071C] border ${borderClass} p-4 md:p-5 text-white transition-colors h-[60px] md:h-[72px] text-[16px] md:text-[18px] font-manrope font-normal cursor-pointer flex items-center justify-between`}>
          <span className={!value ? 'text-white/30' : 'text-white'}>
            {value || placeholder || "Select an option"}
          </span>
          <span className={`text-white/40 text-[12px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>

        {/* Custom Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-[#1C1C1C] border border-white/10 shadow-2xl z-50 flex flex-col max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <div
                key={opt}
                className="p-4 text-[16px] font-manrope text-white/80 hover:text-black hover:bg-[#F7B71D] cursor-pointer transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setValue(opt);
                  setTouched(true);
                  setIsOpen(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      {error && (
        <span className="text-red-500 text-[13px] font-manrope font-medium">
          {error}
        </span>
      )}
    </div>
  );
}
