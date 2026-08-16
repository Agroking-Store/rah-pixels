import React, { useState } from "react";
import { cn } from "../../lib/utils";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface FaqAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: FaqItem[];
  title?: string;
  eyebrow?: string;
  subtitle?: string;
}

export function FaqAccordion({
  items = [],
  title = "Got Questions? We Have Answers.",
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  subtitle = "Everything you need to know about our design process, deliverables, vector source files, and project timelines.",
  className,
  ...props
}: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto py-8 relative font-sans space-y-8", className)} {...props}>
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
        {eyebrow && (
          <span className="inline-block rounded-full bg-[#34164F]/5 border border-[#34164F]/10 px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-[#7A4DFF] font-sora">
            {eyebrow}
          </span>
        )}
        
        {title && (
          <h2 className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#34164F] font-sora tracking-tight">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-base text-[#6B7280] font-manrope max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Accordion List */}
      <ul className="w-full mx-auto list-none p-0 flex flex-col rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 bg-white">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <li
              key={index}
              className={cn(
                "w-full relative transition-all duration-300 ease-in-out",
                "border-b border-gray-100",
                "last:border-b-0",
                isActive ? "border-b border-gray-200" : ""
              )}
            >
              <button
                className={cn(
                  "flex flex-row items-center justify-start w-full min-h-[64px] py-4 relative m-0 px-4 pl-14 md:pl-16 cursor-pointer",
                  "border-l-[6px] md:border-l-[10px] transition-colors duration-200 text-left outline-none text-base md:text-lg font-sora",
                  isActive
                    ? "border-l-[#F7B71D] bg-[#34164F]/5 text-[#34164F] font-extrabold"
                    : "border-l-gray-200 bg-transparent text-[#1F2430] hover:border-l-[#7A4DFF]/50 hover:text-[#34164F] hover:bg-gray-50/80"
                )}
                onClick={() => toggleItem(index)}
                aria-expanded={isActive}
              >
                {/* Plus/Minus Icon */}
                <span
                  className={cn(
                    "absolute left-4 md:left-5 top-1/2 -translate-y-1/2 transition-all duration-200 leading-none select-none font-sora",
                    isActive ? "text-[32px] md:text-[38px] font-bold text-[#F7B71D]" : "text-[24px] md:text-[28px] font-normal text-gray-400"
                  )}
                >
                  {isActive ? "−" : "+"}
                </span>

                <span className="pr-10">{item.question}</span>

                {/* Chevron */}
                <span
                  className={cn(
                    "absolute right-6 block w-2.5 h-2.5 border-t-[3px] border-r-[3px] transition-transform duration-200 ease-in-out",
                    isActive ? "rotate-[-44deg] border-[#34164F]" : "rotate-[133deg] border-gray-400"
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out w-full",
                  "border-l-[6px] md:border-l-[10px]",
                  isActive
                    ? "grid-rows-[1fr] border-l-[#F7B71D] bg-[#34164F]/5 opacity-100"
                    : "grid-rows-[0fr] border-l-gray-200 bg-transparent opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-row items-start justify-start w-full px-4 pl-14 md:pl-16 pb-6 pt-2 text-sm md:text-base font-normal font-manrope text-[#6B7280] leading-relaxed">
                    <span className="opacity-95">{item.answer}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FaqAccordion;
