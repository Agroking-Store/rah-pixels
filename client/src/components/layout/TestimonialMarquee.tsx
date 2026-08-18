"use client";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

export interface Testimonial {
  id: number;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface AnimatedTestimonialsProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials?: Testimonial[];
  autoRotateInterval?: number;
  className?: string;
}

const reviewsData: Testimonial[] = [
  {
    id: 1,
    role: "Founder & CEO",
    company: "Kodak",
    content: "Rah Pixels helped us look at our brand and social media presence with a fresh perspective. They noticed several small details that we had overlooked and gave us practical suggestions that actually helped improve our overall visibility and reach.",
    rating: 5,
  },
  {
    id: 2,
    role: "Managing Director",
    company: "Missy N Baby",
    content: "The experience with Rah Pixels was genuinely wonderful. I had a very clear idea in my mind for the logo, and they took the time to understand exactly what I wanted. The final design came together beautifully and was very close to what I had imagined.",
    rating: 5,
  },
  {
    id: 3,
    role: "Director",
    company: "Eduvational Acad",
    content: "Rah Pixels worked with us on our logo redesign and the important pages for our upcoming calligraphy course. They were very patient throughout the process and handled every round of feedback carefully. The attention to detail made a real difference.",
    rating: 5,
  },
  {
    id: 4,
    role: "Managing Director",
    company: "Beizz IT Tech",
    content: "We had a very positive experience working with Rah Pixels on our logo and brochure. What stood out to me was their calm and professional way of handling the entire process. The final work was well thought out, and we are very pleased with the result.",
    rating: 5,
  },
  {
    id: 5,
    role: "Founder",
    company: "Aagam Jewellers",
    content: "The logo turned out beautifully, especially the colour combination and overall design. It has a very elegant and refined look, which was exactly what we wanted for our brand. Really pleased with how Rah Pixels brought the premium feel into the final identity.",
    rating: 5,
  },
  {
    id: 6,
    role: "Owner",
    company: "The Thread Story",
    content: "A big thank you to Sudeepa for creating such a beautiful logo for my brand. I was working with a very tight launch timeline, but she understood the urgency and completed everything on time without compromising on the quality. Truly grateful for the support.",
    rating: 5,
  },
  {
    id: 7,
    role: "Dr. Maitry, Founder",
    company: "S.D. Clinic",
    content: "I really enjoyed working with Rah Pixels for our dental clinic branding. Before getting started, they took the time to understand what our clinic represents and the kind of identity we wanted to build. That understanding clearly reflected in the final design.",
    rating: 5,
  },
  {
    id: 8,
    role: "Owner",
    company: "Feast n Flavors",
    content: "We approached Rah Pixels when we were planning to relaunch our vegetarian catering brand. We wanted something that felt modern, fresh, and different from the usual catering brands. They understood the direction well and gave our brand a much stronger identity.",
    rating: 5,
  },
  {
    id: 9,
    role: "Principal Designer",
    company: "Elite Turnkey",
    content: "Rah Pixels was a great fit for our interior firm's rebranding project. They understood the kind of image we wanted to create and handled the design process very smoothly. Overall, it was a good experience and I would definitely recommend them for branding work.",
    rating: 5,
  },
  {
    id: 10,
    role: "Founder & CEO",
    company: "KoshaYog",
    content: "Right from the first discussion, Rah Pixels understood what I wanted KoshaYog to communicate. The logo options captured the connection between yoga, nature, and earthy elements beautifully. I loved how thoughtfully the identity came together.",
    rating: 5,
  },
  {
    id: 11,
    role: "Founder",
    company: "ZKC Salon",
    content: "Rah Pixels has worked on the branding for both ZKC Salon and Hill Road Fashion Store, and I have been really happy with the transformation. They understood the ideas behind both brands and translated them into identities that feel much more polished and professional.",
    rating: 5,
  },
  {
    id: 12,
    role: "Owner",
    company: "TIITH",
    content: "Our experience with Rah Pixels for TIITH was really good. As a startup, we had a specific budget to work with, and they were able to understand our requirements and suggest a design direction that worked well within it. The final branding feels just right for us.",
    rating: 5,
  },
];

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 4000,
  className,
}: AnimatedTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= itemsPerView || isHovered) return;

    const interval = setInterval(handleNext, autoRotateInterval);
    return () => clearInterval(interval);
  }, [autoRotateInterval, testimonials.length, itemsPerView, isHovered, handleNext]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`pt-2 pb-10 overflow-hidden bg-[#fafafa] text-black ${className || ""}`}
    >
      <div className="px-4 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="flex flex-col items-center text-center space-y-4 mb-8"
        >
          {badgeText && (
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-[16px] font-manrope font-semibold bg-[#34164F]/10 text-[#34164F]">
              <Star className="mr-1.5 h-4 w-4 fill-[#34164F] text-[#34164F]" />
              <span>{badgeText}</span>
            </div>
          )}

          <div className="flex flex-col">
            <h2 className="text-[28px] md:text-[32px] font-sora font-bold tracking-tight text-gray-900">
              {title}
            </h2>

            <p className="max-w-[700px] text-gray-500 text-[16px] md:text-[22px] font-sora font-medium leading-relaxed">
              {subtitle}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="relative max-w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons (Sides) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 lg:-left-12 z-10 hidden sm:block">
            <button
              onClick={handlePrev}
              className="cursor-pointer bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 lg:-right-12 z-10 hidden sm:block">
            <button
              onClick={handleNext}
              className="cursor-pointer bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Carousel Track Wrapper */}
          <div className="overflow-hidden px-2 pt-4 pb-4 -mx-2" ref={containerRef}>
            <motion.div
              className="flex"
              animate={{
                x: `calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem)`
              }}
              style={{
                width: `100%`,
                gap: '1.5rem'
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${(1.5 * (itemsPerView - 1)) / itemsPerView}rem)`
                  }}
                >
                  <div className="bg-white rounded-none p-8 h-full flex flex-col border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative mt-4">

                    {/* Floating Quote Badge */}
                    <div className="absolute -top-6 left-6 bg-[#34164F] h-12 w-12 rounded-full flex items-center justify-center shadow-xl z-10">
                      <Quote className="h-6 w-6 text-[#F7B71D] fill-[#F7B71D] rotate-180" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-5 mt-2">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#ff8c6b] text-[#ff8c6b]" />
                        ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-600 text-[15px] md:text-[18px] font-manrope font-normal leading-relaxed flex-1 mb-8 relative z-0">
                      {testimonial.content}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="h-12 w-12 rounded-full border border-[#34164F]/10 bg-[#34164F]/5 flex items-center justify-center text-[#34164F] font-sora font-bold text-[18px] uppercase tracking-wider shrink-0">
                        {testimonial.company.substring(0, 2)}
                      </div>
                      <div>
                        <h3 className="font-manrope font-semibold text-gray-900 text-[16px] leading-tight">
                          {testimonial.company}
                        </h3>
                        <p className="text-[14px] text-gray-500 font-manrope font-medium mt-0.5">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx
                  ? "w-8 bg-[#34164F]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation (Visible only on small screens) */}
          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <button
              onClick={handlePrev}
              className="cursor-pointer bg-white border border-gray-200 text-gray-800 rounded-full p-2.5 shadow-sm active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="cursor-pointer bg-white border border-gray-200 text-gray-800 rounded-full p-2.5 shadow-sm active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function TestimonialMarquee() {
  return (
    <AnimatedTestimonials
      title="Trusted by industry leaders."
      subtitle="See what our amazing clients have to say about the experiences we've crafted for them. Real stories, real results."
      badgeText="Client Stories"
      testimonials={reviewsData}
    />
  );
}