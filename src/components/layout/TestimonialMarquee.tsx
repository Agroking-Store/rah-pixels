"use client";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
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
    name: "Drake Holloway",
    role: "CTO",
    company: "Infinitum",
    content: "Working with Rah Pixels has transformed our brand presence. The team is truly exceptional! Their attention to detail and logic-driven creativity helped us close 40% more on cold traffic.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Natalie Kingston",
    role: "Managing",
    company: "Agency",
    content: "Alexandr did an outstanding job on our identity! He's incredibly responsive, fully dedicated, and went above and beyond to ensure we achieved the perfect aesthetic result.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Liana Whitmore",
    role: "COO",
    company: "Veridian",
    content: "Aesthetic, brilliant, and completely unique. They didn't just give us a template; they built a scalable design system that we will use for the next decade.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 4,
    name: "John Carter",
    role: "Founder",
    company: "TechPro",
    content: "I didn't want what every other tech company does. I wanted unique. Rah Pixels delivered an identity that builds instant trust and makes customers feel understood.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 5,
    name: "Emma Wilson",
    role: "Marketing Director",
    company: "Global Brands",
    content: "Their strategic discovery phase blew my mind. They helped us scale faster and increase profitability beyond expectations by just refining our visual communication.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "CEO",
    company: "InnovateX",
    content: "Outstanding collaboration and measurable growth results. If you are looking for a studio that understands both art and business, this is it. Highly recommended!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    id: 7,
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "Nexus",
    content: "We needed a design language that communicated trust and speed. Rah Pixels nailed it in record time, transforming our interface into something truly world-class.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 8,
    name: "David Chen",
    role: "VP of Engineering",
    company: "CloudSync",
    content: "A brilliant team that fundamentally understands product design. They bridged the gap between our technical capabilities and our users' needs seamlessly.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 9,
    name: "Jessica Alba",
    role: "Creative Director",
    company: "Studio 54",
    content: "The level of polish and aesthetic refinement they bring is unparalleled. It's rare to find an agency that cares as much about the micro-interactions as the big picture.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 10,
    name: "Robert Fox",
    role: "Lead Designer",
    company: "Ascend",
    content: "I am constantly inspired by the work Rah Pixels puts out. Their execution on our most recent project has set a new benchmark for all our future digital products.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    id: 11,
    name: "Emily Davis",
    role: "CMO",
    company: "Elevate",
    content: "From the initial wireframes to the final handoff, the process was immaculate. They just 'get' how to make a product look incredibly premium while staying highly functional.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 12,
    name: "William Parker",
    role: "Founder",
    company: "Velocity",
    content: "Our conversion rates doubled after the redesign. They didn't just make it look pretty; they strategically improved the entire user journey. Best investment we've made.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
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
      className={`py-24 overflow-hidden bg-[#fafafa] text-black ${className || ""}`}
    >
      <div className="px-4 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="flex flex-col items-center text-center space-y-6 mb-16"
        >
          {badgeText && (
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-[16px] font-manrope font-semibold bg-[#34164F]/10 text-[#34164F]">
              <Star className="mr-1.5 h-4 w-4 fill-[#34164F] text-[#34164F]" />
              <span>{badgeText}</span>
            </div>
          )}

          <h2 className="text-[32px] font-sora font-bold tracking-tight text-gray-900">
            {title}
          </h2>

          <p className="max-w-[700px] text-gray-500 text-[22px] font-sora font-medium leading-relaxed">
            {subtitle}
          </p>
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
          <div className="overflow-hidden px-2 pt-10 pb-8 -mx-2" ref={containerRef}>
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
                    <p className="text-gray-600 text-[18px] font-manrope font-normal leading-relaxed flex-1 mb-8 relative z-0">
                      {testimonial.content}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="h-12 w-12 rounded-full object-cover border border-gray-100" 
                      />
                      <div>
                        <h3 className="font-manrope font-semibold text-gray-900 text-[16px]">{testimonial.name}</h3>
                        <p className="text-[16px] text-gray-500 font-manrope font-normal mt-0.5">
                          {testimonial.role}, {testimonial.company}
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
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
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