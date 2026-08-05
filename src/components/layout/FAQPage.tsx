import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqItems = [
    {
        question: "How long does a branding project take?",
        answer: "Each branding project timeline depends on scale. A typical identity project takes 4 to 6 weeks."
    },
    {
        question: "Do you work with startups?",
        answer: "Yes, we collaborate with ambitious startups of all sizes, helping them build strong brand foundations from day one."
    },
    {
        question: "Can you redesign an existing brand?",
        answer: "Absolutely. We specialize in brand refreshes and full redesigns, ensuring your identity evolves alongside your business goals."
    },
    {
        question: "Do you print the collateral you design?",
        answer: "While we handle all print preparation and print-ready file deliverables, we partner with trusted local and global printers for physical production."
    },
    {
        question: "What industries do you work with?",
        answer: "We work across diverse sectors including tech, fintech, lifestyle, retail, and SaaS—adapting our approach to each market context."
    }
];

export default function FAQComponent() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        // Changed: Used w-full and removed max-w-6xl constraint
        <section className="w-full p-8 md:p-16 bg-[#F5F6F9] rounded-3xl shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                {/* Left Column: Heading & Info */}
                <div className="lg:col-span-5 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C2340] leading-tight">
                        Frequently Asked <br />
                        <span className="text-[#F2B52B]">Questions</span>
                    </h2>
                    <p className="text-[#646A7E] text-sm md:text-base leading-relaxed max-w-md">
                        We're here to help you get your brand refreshing new ideas into building right measures, here we answers to some of the most common questions our clients ask.
                    </p>
                </div>

                {/* Right Column: Accordion */}
                <div className="lg:col-span-7">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border-b border-gray-200 py-5 transition-colors"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base md:text-lg font-bold text-[#1C2340] pr-6">
                                        {item.question}
                                    </span>

                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                        className="flex-shrink-0 text-[#1C2340]"
                                    >
                                        <Plus className="w-5 h-5 stroke-[2.5]" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pt-3 pb-1 text-sm md:text-base text-[#646A7E] leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}