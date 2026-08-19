import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Calendar, X, BookOpen, ArrowLeft } from "lucide-react";

import sudeepaImg from "@/assets/founder/Sudeepa.png";
import anilImg from "@/assets/founder/Anil.png";

interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  shortDescription: string;
  image: string;
  content: string[];
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: "visual-storytelling",
    category: "Branding",
    date: "August 12, 2026",
    readTime: "5 min read",
    title: "The Power of Visual Storytelling in Branding",
    shortDescription: "Discover how colors, typography, and visual consistency combine to create a compelling brand narrative that builds long-term trust.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    quote: "Design is the silent ambassador of your brand.",
    content: [
      "In a world saturated with digital noise, a brand can no longer survive on product specifications alone. Today's consumers make decisions based on emotional connection and shared values. That connection is built through visual storytelling—the art of using typography, colors, and layouts to communicate a brand's core identity instantly.",
      "Every font choice, color shade, and graphical element tells a story. For example, a deep royal purple hue might suggest luxury, creativity, and wisdom, while golden tones convey optimism, warmth, and premium quality. When these visual elements are aligned with a strategic message, they form an invisible thread of trust that hooks the audience's emotions.",
      "Consistency is the final pillar of visual storytelling. Whether a customer views your brand on Instagram, receives a business card, or opens your web application, the visual language must remain unified. A unified brand identity makes your business recognizable, memorable, and ultimately, irreplaceable."
    ],
    author: {
      name: "Sudeepa Chaudhari",
      role: "Founder & Creative Lead",
      avatar: sudeepaImg
    }
  },
  {
    id: "micro-interactions",
    category: "UX/UI Design",
    date: "August 15, 2026",
    readTime: "4 min read",
    title: "Why Micro-Interactions Define Modern Web Experience",
    shortDescription: "Subtle animations and UI feedback might seem minor, but they are the secret sauce behind sticky user interfaces and intuitive navigation.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    quote: "The details are not the details. They make the design.",
    content: [
      "Have you ever noticed the subtle bounce when you click a 'Like' button, or the smooth loading spinner that lets you know the app is active? These are micro-interactions. Though small, they define the transition between a static screen and a responsive, living digital product.",
      "Micro-interactions serve three primary purposes: providing feedback, giving users a sense of control, and guiding them through complex workflows. When designed thoughtfully, they reduce cognitive load by explaining what is happening on the screen without cluttering the layout with text instructions.",
      "At Rah Pixels, we focus on crafting delightful micro-animations that feel natural and fluid. The goal is never to distract the user, but rather to enhance their journey. By adding micro-interactions to buttons, hover states, and transitions, you make your website feel premium, satisfying, and easy to navigate."
    ],
    author: {
      name: "Anil Chaudhari",
      role: "Technical Lead",
      avatar: anilImg
    }
  },
  {
    id: "democratizing-design",
    category: "Strategy",
    date: "August 18, 2026",
    readTime: "6 min read",
    title: "Democratizing Design: Empowering Small Businesses",
    shortDescription: "Professional design shouldn't be an exclusive luxury for large enterprises. Here is how startups can leverage premium design to scale.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    quote: "Good design is good business.",
    content: [
      "For a long time, world-class branding and design were reserved for Fortune 500 companies with massive marketing budgets. Startups and local businesses had to settle for generic templates. But in the digital-first economy, design has become the ultimate equalizer.",
      "A small business with a premium, polished brand and website can immediately establish credibility, competing head-to-head with industry giants. Design is not an expense—it is a high-return investment that directly influences how much customers are willing to pay and whether they trust you with their business.",
      "Democratizing design means making high-impact branding and web design accessible, clear, and action-oriented. By focusing on core brand values and building scalable design assets, emerging startups can launch with the confidence of an established industry leader."
    ],
    author: {
      name: "Sudeepa Chaudhari",
      role: "Founder & Creative Lead",
      avatar: sudeepaImg
    }
  },
  {
    id: "inclusive-design",
    category: "Tech & UX",
    date: "August 19, 2026",
    readTime: "5 min read",
    title: "Inclusive Design: Accessibility Meets Aesthetics",
    shortDescription: "Designing websites that are accessible to everyone doesn't mean sacrificing beauty. Learn how to balance compliance with art.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
    quote: "Accessibility is not a feature; it is a fundamental aspect of design.",
    content: [
      "Web accessibility (a11y) is often treated as a checklist of legal compliance rules. Designers sometimes fear that following contrast and text-size guidelines will make their beautiful layouts look sterile or boring. But inclusive design is actually an opportunity for creative innovation.",
      "Designing for accessibility means ensuring that your digital products are usable by people with varying abilities, screen sizes, and environments. This includes maintaining proper color contrast ratios, designing clear focus states, and organizing layouts logically.",
      "A truly premium website integrates accessibility into its aesthetic DNA. Accessible fonts, spacious gaps, and high-contrast color choices naturally improve usability for all visitors. Balancing accessibility with creative aesthetics is how we design a better, more inclusive web."
    ],
    author: {
      name: "Anil Chaudhari",
      role: "Technical Lead",
      avatar: anilImg
    }
  }
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedBlog]);

  const categories = ["All", "Branding", "UX/UI Design", "Strategy", "Tech & UX"];

  const filteredPosts = activeFilter === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <div className="bg-[#F5F5F7] min-h-screen text-[#1F2430] pt-24 md:pt-32 pb-16 md:pb-24 selection:bg-[#34164F] selection:text-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-[#34164F]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[60%] -right-64 w-[600px] h-[600px] bg-[#F7B71D]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <header className="mb-12 md:mb-16 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#dedad5] mb-6 shadow-sm"
          >
            <BookOpen size={14} className="text-[#34164F]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280]">Insights & Stories</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-none mb-6 text-[#34164F]"
          >
            The Rah Journal
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-base sm:text-lg md:text-xl text-[#6B7280] font-sans max-w-2xl leading-relaxed text-center"
          >
            Thought leadership, design principles, and strategic insights curated by the creative minds at Rah Pixels.
          </motion.p>
        </header>

        {/* SEO Tag Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#6B7280] font-sans justify-center"
        >
          <span className="font-bold text-[#34164F] uppercase tracking-wider text-[10px]">Keywords:</span>
          {["Branding Studio Pune", "UI/UX Design Agency", "Custom Website Design", "Responsive Layouts", "Brand Strategy for Startups", "Graphic Design Services", "Inclusive Web Accessibility"].map((kw) => (
            <span key={kw} className="bg-white px-3 py-1 border border-[#dedad5] text-[#6B7280] text-[10px] uppercase font-bold tracking-wide">
              {kw}
            </span>
          ))}
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 font-sans font-bold uppercase text-[11px] md:text-[12px] tracking-wider transition-all duration-300 shadow-sm border ${
                activeFilter === cat
                  ? "bg-[#34164F] text-white border-[#34164F]"
                  : "bg-white text-[#6B7280] border-[#dedad5] hover:text-[#34164F] hover:border-[#34164F]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              onClick={() => setSelectedBlog(post)}
              className="bg-white border border-[#dedad5] flex flex-col h-full group cursor-pointer hover:border-[#34164F] transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              {/* Image Block */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100 border-b border-[#dedad5]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Card Meta & Header */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-4 font-sans">
                  <span className="text-[#34164F]">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#1F2430] leading-snug group-hover:text-[#34164F] transition-colors mb-4 uppercase">
                  {post.title}
                </h3>

                <p className="text-[#6B7280] text-sm sm:text-base font-sans leading-relaxed mb-6 flex-grow">
                  {post.shortDescription}
                </p>

                {/* Footer Info */}
                <div className="border-t border-[#dedad5] pt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#dedad5]"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#1F2430]">{post.author.name}</h4>
                      <p className="text-[10px] text-[#6B7280] uppercase tracking-wide">{post.author.role}</p>
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-[#34164F] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View <ArrowRight size={12} className="text-[#F7B71D]" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-white border border-[#dedad5] shadow-sm">
            <p className="text-lg text-[#6B7280]">No blog posts found matching this category.</p>
          </div>
        )}
      </div>

      {/* Full Article Modal Overlay */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#1F2430]/60 backdrop-blur-sm flex items-center justify-end"
          >
            {/* Slide-over Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="w-full max-w-4xl h-full bg-white shadow-2xl overflow-y-auto flex flex-col"
              data-lenis-prevent
            >
              {/* Sticky Top Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-[#dedad5] py-4 px-6 sm:px-10 flex items-center justify-between z-10">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="flex items-center gap-2 cursor-pointer font-sans font-bold uppercase text-[11px] tracking-widest text-[#6B7280] hover:text-[#34164F] transition-colors"
                >
                  <ArrowLeft size={16} /> Back to journal
                </button>

                <button
                  onClick={() => setSelectedBlog(null)}
                  className="w-10 h-10 border border-[#dedad5] hover:border-[#34164F] flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X size={20} className="text-[#34164F]" />
                </button>
              </div>

              {/* Main Content Area */}
              <article className="px-6 py-10 sm:px-12 md:px-16 flex-grow">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-6 font-sans">
                  <span className="text-[#34164F]">{selectedBlog.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1"><Calendar size={12} /> {selectedBlog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1"><Clock size={12} /> {selectedBlog.readTime}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight uppercase text-[#34164F] mb-8">
                  {selectedBlog.title}
                </h1>

                {/* Feature Image */}
                <div className="w-full aspect-video overflow-hidden border border-[#dedad5] mb-10">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Author Card */}
                <div className="flex items-center gap-4 border-b border-[#dedad5] pb-8 mb-10">
                  <img
                    src={selectedBlog.author.avatar}
                    alt={selectedBlog.author.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#dedad5]"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2430]">{selectedBlog.author.name}</h3>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wider font-semibold">{selectedBlog.author.role}</p>
                  </div>
                </div>

                {/* Article Content */}
                <div className="font-sans text-base sm:text-lg text-[#6B7280] leading-relaxed space-y-6">
                  {selectedBlog.content.map((p, idx) => (
                    <p key={idx} className="first-letter:text-4xl first-letter:font-black first-letter:text-[#34164F] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      {idx === 0 ? p : p.replace(/^./, p[0])}
                    </p>
                  ))}
                </div>

                {/* Quote section */}
                <blockquote className="border-l-4 border-[#F7B71D] bg-[#FAF9F6] p-6 md:p-8 my-10 font-heading italic text-lg md:text-xl font-bold text-[#34164F] leading-relaxed">
                  "{selectedBlog.quote}"
                </blockquote>

                {/* Paragraphs detail */}
                <div className="font-sans text-base sm:text-lg text-[#6B7280] leading-relaxed space-y-6">
                  <p>
                    Effective design solutions are built on this exact methodology. By treating every interface, interaction, and piece of content as a story, we ensure that digital platforms not only convert but build lasting loyalty. We look forward to exploring these trends further in upcoming issues of the Rah Journal.
                  </p>
                </div>
              </article>

              {/* Bottom Sticky Close Footer */}
              <div className="bg-[#FAF9F6] border-t border-[#dedad5] py-8 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedBlog.author.avatar}
                    alt={selectedBlog.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-sans font-bold text-[#1F2430]">Written by {selectedBlog.author.name}</span>
                </div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="bg-[#34164F] cursor-pointer text-white px-6 py-3 font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#F7B71D] hover:text-[#34164F] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
