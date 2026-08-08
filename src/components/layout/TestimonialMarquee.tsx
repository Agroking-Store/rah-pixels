"use client";

import { Quote, Star } from "lucide-react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  trustedCompanies?: string[];
  trustedCompaniesTitle?: string;
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
    role: "Managing Partner",
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
];

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotateInterval, testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`py-24 overflow-hidden bg-black text-white ${className || ""}`}>
      <div className="px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-16 w-full md:grid-cols-2 lg:gap-24 items-center"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white">
                  <Star className="mr-1 h-3.5 w-3.5 fill-white text-white" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{title}</h2>

              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed">{subtitle}</p>

              <div className="flex items-center gap-3 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? "w-10 bg-white" : "w-2.5 bg-gray-600"
                      }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="relative h-full w-full min-h-[400px] md:min-h-[450px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0 flex items-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0, pointerEvents: activeIndex === index ? "auto" : "none" }}
              >
                <div className="bg-[#111] border border-white/10 shadow-2xl rounded-2xl p-8 lg:p-12 h-auto w-full flex flex-col">
                  <div className="mb-6 flex gap-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                  </div>

                  <div className="relative mb-6 flex-1">
                    <Quote className="absolute -top-3 -left-3 h-10 w-10 text-white/5 rotate-180" />
                    <p className="relative z-10 text-lg md:text-xl font-medium leading-relaxed text-gray-200">"{testimonial.content}"</p>
                  </div>

                  <hr className="my-6 border-white/10" />

                  <div className="flex items-center gap-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-14 w-14 rounded-full border border-white/20 object-cover" />
                    <div>
                      <h3 className="font-semibold text-white text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} initial="hidden" animate={controls} className="mt-24 text-center">
            <h3 className="text-sm font-medium text-gray-500 mb-8">{trustedCompaniesTitle}</h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {trustedCompanies.map((company) => (
                <div key={company} className="text-2xl font-semibold text-gray-700">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default function TestimonialMarquee() {
  return (
    <AnimatedTestimonials
      title="Trusted by industry leaders."
      subtitle="See what our amazing clients have to say about the experiences we've crafted for them."
      badgeText="Client Stories"
      testimonials={reviewsData}
    />
  );
}