import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Calendar, X, BookOpen, ArrowLeft } from "lucide-react";

import sudeepaImg from "@/assets/founder/Sudeepa.png";
import anilImg from "@/assets/founder/Anil.png";

interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "quote" | "faq";
  text?: string;
  items?: string[];
  faqItems?: { question: string; answer: string }[];
}

interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  shortDescription: string;
  image: string;
  blocks: ContentBlock[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: "how-to-build-a-strong-brand-identity",
    category: "Branding",
    date: "August 12, 2026",
    readTime: "8 min read",
    title: "How to Build a Strong Brand Identity for Your Business",
    shortDescription: "Learn how to build a strong brand identity for your business, from defining your audience and positioning to choosing colours, typography and visual elements.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Sudeepa Chaudhari",
      role: "Founder & Creative Lead",
      avatar: sudeepaImg
    },
    blocks: [
      {
        type: "paragraph",
        text: "A strong brand identity doesn't begin with choosing a colour. It begins with understanding the business."
      },
      {
        type: "paragraph",
        text: "Before designing a logo, choosing fonts or creating Instagram templates, you need to answer a few important questions:"
      },
      {
        type: "list",
        items: [
          "Who are you?",
          "Who are you trying to reach?",
          "Why should customers choose you?",
          "How do you want your business to be perceived?"
        ]
      },
      {
        type: "paragraph",
        text: "Once these questions are clear, your visual identity becomes much easier to build. Here is a practical process for creating a strong brand identity."
      },
      {
        type: "heading",
        text: "Step 1: Define Your Brand"
      },
      {
        type: "paragraph",
        text: "Start with the foundation. Ask yourself: What does my business offer? Who is my ideal customer? What problem do I solve? What makes my business different? What are my values? What should customers feel when they interact with my brand?"
      },
      {
        type: "paragraph",
        text: "Your answers become the foundation for your branding strategy. Without this clarity, design becomes decoration."
      },
      {
        type: "heading",
        text: "Step 2: Understand Your Target Audience"
      },
      {
        type: "paragraph",
        text: "Your brand isn't designed for everyone. It is designed for the people you want to attract. A brand targeting teenagers may use a completely different visual language from a premium corporate consulting firm."
      },
      {
        type: "paragraph",
        text: "Consider factors such as: Age, Lifestyle, Buying behaviour, Preferences, Expectations, Problems, Price sensitivity, and Aspirations. The better you understand your audience, the more relevant your branding becomes."
      },
      {
        type: "heading",
        text: "Step 3: Define Your Brand Positioning"
      },
      {
        type: "paragraph",
        text: "Positioning answers an important question: \"Where do I want my business to sit in the customer's mind?\" For example, do you want to be perceived as Affordable? Premium? Innovative? Traditional? Friendly? Expert-led? Minimal? Luxurious? Playful?"
      },
      {
        type: "quote",
        text: "You cannot communicate everything at once. A strong brand chooses a clear direction."
      },
      {
        type: "heading",
        text: "Step 4: Create Your Visual Direction"
      },
      {
        type: "paragraph",
        text: "Now the design process can begin. This is where you explore moodboards, visual references, colour directions, typography styles, photography styles, and graphic elements."
      },
      {
        type: "paragraph",
        text: "A moodboard can help establish the overall personality before finalizing the visual identity. For example:"
      },
      {
        type: "list",
        items: [
          "Luxury brand: refined, minimal, sophisticated",
          "Children's brand: playful, energetic, colourful",
          "Wellness brand: calm, natural, balanced"
        ]
      },
      {
        type: "paragraph",
        text: "The design should support the positioning."
      },
      {
        type: "heading",
        text: "Step 5: Design the Logo"
      },
      {
        type: "paragraph",
        text: "Now comes one of the most visible parts of your brand identity: the logo. Your logo should reflect the brand direction established earlier."
      },
      {
        type: "paragraph",
        text: "The process should ideally consider: Concept, Typography, Symbolism, Composition, Scalability, Versatility, and Competitive differentiation."
      },
      {
        type: "quote",
        text: "Don't design a logo simply because a particular style is trending. Trends change. Your business needs to last longer than the trend."
      },
      {
        type: "heading",
        text: "Step 6: Choose Your Brand Colours"
      },
      {
        type: "paragraph",
        text: "Colour is one of the strongest recognition tools in visual branding. But choosing colours should involve more than saying: \"I like blue.\""
      },
      {
        type: "paragraph",
        text: "Ask yourself: What does this colour communicate? Does it suit my audience? Does it differentiate me from competitors? Does it work digitally and in print? Does it support the personality of my brand?"
      },
      {
        type: "paragraph",
        text: "Your brand should ideally have a defined colour palette rather than using random colours across different designs."
      },
      {
        type: "heading",
        text: "Step 7: Choose Your Typography"
      },
      {
        type: "paragraph",
        text: "Typography is often underestimated. The fonts you use can dramatically change how your business feels. A serif font can feel traditional or sophisticated, a clean sans-serif can feel modern, and a handwritten font can feel personal."
      },
      {
        type: "paragraph",
        text: "But typography isn't just about choosing attractive fonts. You also need to define: Heading fonts, Body fonts, Font hierarchy, Sizes, Spacing, and Usage rules. This creates consistency."
      },
      {
        type: "heading",
        text: "Step 8: Build Supporting Visual Elements"
      },
      {
        type: "paragraph",
        text: "A strong identity usually needs more than a logo and colour palette. Supporting elements help make the brand recognizable even when the logo isn't visible. These elements may include: Patterns, Icons, Illustrations, Shapes, Textures, Image treatments, Social media layouts, and Packaging elements."
      },
      {
        type: "heading",
        text: "Step 9: Create Brand Guidelines"
      },
      {
        type: "paragraph",
        text: "Imagine hiring a new social media designer tomorrow. How will they know: Which logo to use? Which colours are correct? Which fonts should be used? How much space should surround the logo? What should Instagram posts look like? How should images be treated?"
      },
      {
        type: "paragraph",
        text: "That's what brand guidelines help solve. A brand guideline document creates a reference point for everyone working with your brand."
      },
      {
        type: "heading",
        text: "Step 10: Apply the Identity Everywhere"
      },
      {
        type: "paragraph",
        text: "Your branding isn't complete when the logo is delivered. It needs to work in the real world. Apply your identity across relevant touchpoints such as: Website, Instagram, Packaging, Business cards, Brochures, Presentations, Signage, Advertisements, Email communication, and Marketing materials."
      },
      {
        type: "paragraph",
        text: "This is where a visual identity becomes a real brand experience."
      },
      {
        type: "heading",
        text: "The Biggest Branding Mistake"
      },
      {
        type: "paragraph",
        text: "One of the biggest mistakes businesses make is designing each marketing piece separately. Today the Instagram post is pink. Tomorrow it's blue. The website uses another font. The brochure uses another style. Individually, each design may look fine. Together, the brand feels inconsistent."
      },
      {
        type: "quote",
        text: "Consistency creates recognition."
      },
      {
        type: "heading",
        text: "How Long Does It Take to Build a Brand Identity?"
      },
      {
        type: "paragraph",
        text: "The timeline depends on the scope. A simple identity may take a few weeks. A more strategic branding project involving research, positioning, multiple applications and guidelines can take longer."
      },
      {
        type: "paragraph",
        text: "The important thing is not speed. It is the quality of thinking behind the identity."
      },
      {
        type: "heading",
        text: "Final Thoughts"
      },
      {
        type: "paragraph",
        text: "A strong brand identity doesn't happen because someone picked a beautiful logo. It happens because every visual decision has a reason. Your colours have a purpose. Your typography has a purpose. Your logo has a concept. Your imagery has a direction. And all of these elements work together to communicate one clear message. That is what turns design into branding."
      },
      {
        type: "faq",
        faqItems: [
          {
            question: "What is a brand identity?",
            answer: "Brand identity is the collection of visual and communication elements a business uses to represent itself, including its logo, colours, typography, imagery and supporting design system."
          },
          {
            question: "How do I create a brand identity?",
            answer: "Start by defining your audience, positioning, values and personality. Then develop your logo, colour palette, typography, visual elements and brand guidelines."
          },
          {
            question: "Why are brand guidelines important?",
            answer: "Brand guidelines help maintain consistency across different designers, platforms and marketing materials."
          },
          {
            question: "Can a small business have a professional brand identity?",
            answer: "Absolutely. A strong brand identity isn't only for large companies. Small businesses can benefit significantly from having a clear and consistent visual identity."
          },
          {
            question: "Should I design my brand identity myself?",
            answer: "Basic DIY branding is possible, especially during the early stages of a business. However, professional branding can help ensure strategic consistency, differentiation and scalability."
          }
        ]
      }
    ]
  },
  {
    id: "branding-mistakes-small-businesses-should-avoid",
    category: "UX/UI Design",
    date: "August 15, 2026",
    readTime: "6 min read",
    title: "7 Common Branding Mistakes Small Businesses Should Avoid",
    shortDescription: "Avoid these 7 common branding mistakes that can make your small business look inconsistent, forgettable or unprofessional—and learn what to do instead.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Anil Chaudhari",
      role: "Technical Lead",
      avatar: anilImg
    },
    blocks: [
      {
        type: "paragraph",
        text: "You don't need a massive marketing budget to build a strong brand. But you do need consistency and clarity."
      },
      {
        type: "paragraph",
        text: "Many small businesses make branding mistakes that have nothing to do with money. They use too many colours, change their logo constantly, copy competitors, design everything separately, or focus entirely on how their logo looks without thinking about the bigger brand."
      },
      {
        type: "paragraph",
        text: "Here are seven common branding mistakes—and what you can do instead."
      },
      {
        type: "heading",
        text: "1. Treating the Logo as the Entire Brand"
      },
      {
        type: "paragraph",
        text: "This is probably the most common mistake. A business gets a logo and assumes the branding is finished. But your brand includes every interaction customers have with your business: your website, packaging, Instagram, advertisements, general communication, and overall customer experience."
      },
      {
        type: "paragraph",
        text: "Your logo is important, but it is only one part of the system."
      },
      {
        type: "quote",
        text: "What to do instead: Build a complete visual identity around your logo, including colours, typography, imagery and supporting design elements."
      },
      {
        type: "heading",
        text: "2. Copying Your Competitors"
      },
      {
        type: "paragraph",
        text: "It's natural to look at competitors for inspiration. But there is a difference between researching your market and copying it. If every salon in your area uses the same pink logo, every café uses the same handwritten typography, and every real estate company uses the same skyline icon, your brand becomes difficult to distinguish."
      },
      {
        type: "quote",
        text: "What to do instead: Study your competitors to understand the market. Then ask: \"How can we look relevant without looking identical?\" Differentiation is one of the most valuable parts of branding."
      },
      {
        type: "heading",
        text: "3. Using Too Many Colours and Fonts"
      },
      {
        type: "paragraph",
        text: "More doesn't always mean better. Some businesses use five fonts, seven colours and multiple design styles across their marketing. The result? Visual noise."
      },
      {
        type: "paragraph",
        text: "A strong brand usually has a defined system containing: Primary colour, Secondary colours, Heading font, Body font, and Supporting visual elements."
      },
      {
        type: "quote",
        text: "What to do instead: Create a limited and intentional visual system. Your brand should feel recognizable even when customers see different pieces of content."
      },
      {
        type: "heading",
        text: "4. Changing the Brand for Every Social Media Post"
      },
      {
        type: "paragraph",
        text: "Social media encourages businesses to experiment. Experimentation is good. But completely changing your visual identity every week isn't. If every Instagram post has a different colour, font and design style, your audience may not immediately recognize your content."
      },
      {
        type: "quote",
        text: "What to do instead: Create a flexible set of templates and visual rules. Your content can evolve while your brand remains recognizable."
      },
      {
        type: "heading",
        text: "5. Choosing Design Based Only on Personal Taste"
      },
      {
        type: "paragraph",
        text: "This happens often. A business owner says: \"I don't like this colour.\" Or: \"I love this font.\" Personal preference matters, but branding decisions should not be based only on personal preference."
      },
      {
        type: "paragraph",
        text: "The more important question is: \"Does this work for my target customer and positioning?\" You may personally love a particular colour that doesn't communicate the premium, professional or youthful personality your business needs."
      },
      {
        type: "quote",
        text: "What to do instead: Balance personal preference with: Audience, Positioning, Industry, Competition, Brand personality, and Business goals."
      },
      {
        type: "heading",
        text: "6. Ignoring the Customer Experience"
      },
      {
        type: "paragraph",
        text: "Branding isn't only visual. Imagine a business with beautiful branding but: slow responses, confusing communication, poor packaging, unprofessional service, or a difficult purchasing process."
      },
      {
        type: "paragraph",
        text: "The visual identity may attract the customer. But the experience determines what they remember."
      },
      {
        type: "quote",
        text: "What to do instead: Look at the entire customer journey. Ask: \"Does the experience match the promise our brand is making?\" Your brand should be reflected in both appearance and experience."
      },
      {
        type: "heading",
        text: "7. Trying to Look Like Everyone Else"
      },
      {
        type: "paragraph",
        text: "This is perhaps the biggest mistake. Business owners often say: \"I want something like that brand.\" But if you always try to look like successful businesses, you may lose the opportunity to build your own identity."
      },
      {
        type: "paragraph",
        text: "Your business has its own story, its own strengths, its own audience, and its own personality. Your branding should bring those things together."
      },
      {
        type: "quote",
        text: "What to do instead: Instead of asking: \"What is trending?\", ask: \"What should be timeless and ownable for our business?\""
      },
      {
        type: "heading",
        text: "Bonus: Don't Forget Consistency"
      },
      {
        type: "paragraph",
        text: "Even a great brand identity can become weak if it isn't used consistently. Create simple brand rules and make sure everyone working on your marketing follows them. Consistency across multiple touchpoints helps build recognition over time."
      },
      {
        type: "heading",
        text: "How Do You Know If Your Branding Needs Improvement?"
      },
      {
        type: "list",
        items: [
          "Does my business look different on every platform?",
          "Can customers recognize my content without seeing my logo?",
          "Do I use consistent colours?",
          "Do I use the same typography?",
          "Does my website look like my social media?",
          "Does my packaging look like my brand?",
          "Does my visual identity match my target audience?",
          "Do I look different from my competitors?"
        ]
      },
      {
        type: "paragraph",
        text: "If you answered \"no\" to several questions, your brand may need more than a logo refresh. It may need a stronger identity system."
      },
      {
        type: "heading",
        text: "Final Thoughts"
      },
      {
        type: "paragraph",
        text: "Good branding isn't about following every design trend. It is about creating a clear identity and consistently communicating it. You don't need to look bigger than you are. You need to look clear, credible and unmistakably you. And that starts with making intentional branding decisions."
      },
      {
        type: "faq",
        faqItems: [
          {
            question: "What are the most common branding mistakes?",
            answer: "Some of the most common mistakes include inconsistent branding, copying competitors, using too many fonts and colours, focusing only on the logo and failing to understand the target audience."
          },
          {
            question: "How can I make my small business look more professional?",
            answer: "Start with consistent branding across your logo, website, social media, colours, typography and marketing materials. Professional communication and customer experience are equally important."
          },
          {
            question: "Should I rebrand my business?",
            answer: "A rebrand may make sense if your current identity no longer reflects your business, target audience, positioning or growth plans. Sometimes a brand refresh is enough; other times a complete rebrand is more appropriate."
          },
          {
            question: "How often should a business rebrand?",
            answer: "There is no fixed timeline. Businesses should consider a rebrand when there is a meaningful change in strategy, audience, market positioning or business direction—not simply because a design trend has changed."
          },
          {
            question: "Can consistent branding help a small business?",
            answer: "Yes. Consistency can make a business easier to recognize and can create a more professional and trustworthy impression across customer touchpoints."
          }
        ]
      }
    ]
  },
  {
    id: "logo-design-vs-brand-identity",
    category: "Strategy",
    date: "August 18, 2026",
    readTime: "5 min read",
    title: "Logo Design vs. Brand Identity: What's the Difference?",
    shortDescription: "Confused between logo design and brand identity? Learn the difference, what each includes and why your business may need more than just a logo.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Sudeepa Chaudhari",
      role: "Founder & Creative Lead",
      avatar: sudeepaImg
    },
    blocks: [
      {
        type: "paragraph",
        text: "One of the most common questions business owners ask is: \"I need branding. Should I just get a logo?\""
      },
      {
        type: "paragraph",
        text: "The short answer is: not always. A logo is important, but it is only one part of a complete brand identity."
      },
      {
        type: "quote",
        text: "Think of it this way: Your logo is your signature. Your brand identity is your entire appearance, personality and visual language."
      },
      {
        type: "paragraph",
        text: "Understanding the difference can help you make a better branding investment."
      },
      {
        type: "heading",
        text: "What Is Logo Design?"
      },
      {
        type: "paragraph",
        text: "A logo is a visual symbol that identifies your business. It may be: A wordmark, Lettermark, Symbol, Combination mark, Emblem, or Typography-based logo."
      },
      {
        type: "paragraph",
        text: "A good logo should be: Recognizable, Appropriate for your industry, Legible, Scalable, Distinctive, and Functional across different applications."
      },
      {
        type: "paragraph",
        text: "Your logo may appear on your website, social media, packaging, visiting cards, signage and marketing material. But a logo alone cannot communicate everything about your business."
      },
      {
        type: "heading",
        text: "What Is Brand Identity?"
      },
      {
        type: "paragraph",
        text: "Brand identity is the complete visual system used to represent your business. It can include:"
      },
      {
        type: "list",
        items: [
          "Logo: Your primary visual identifier.",
          "Colours: A carefully selected colour palette that creates consistency and communicates personality.",
          "Typography: Fonts and typographic hierarchy that determine how your brand looks.",
          "Imagery: Photography, illustrations, icons and visual styles.",
          "Graphic Elements: Patterns, shapes, textures and supporting design elements.",
          "Brand Guidelines: Rules that explain how the brand should be used consistently.",
          "Brand Applications: Examples of how your identity works on social media, packaging, stationery, websites, etc."
        ]
      },
      {
        type: "heading",
        text: "The Difference in Simple Terms"
      },
      {
        type: "paragraph",
        text: "Imagine opening a restaurant. Your logo could be the name \"The Green Table\" designed in a beautiful typeface. But your brand identity would determine:"
      },
      {
        type: "list",
        items: [
          "What colours the restaurant uses",
          "What fonts appear on the menu",
          "How the packaging looks",
          "How Instagram posts are designed",
          "What the signage looks like",
          "How photographs are styled",
          "What tone the captions use",
          "How the website looks"
        ]
      },
      {
        type: "paragraph",
        text: "The logo identifies the restaurant. The brand identity creates the experience around it."
      },
      {
        type: "heading",
        text: "Why Businesses Often Need More Than a Logo"
      },
      {
        type: "paragraph",
        text: "A business rarely communicates with customers through its logo alone. Customers interact with your brand through multiple touchpoints. For example: Instagram -> Website -> WhatsApp -> Packaging -> Product -> Customer Service."
      },
      {
        type: "paragraph",
        text: "If every touchpoint looks completely different, your brand can feel disconnected. A brand identity creates consistency across these interactions."
      },
      {
        type: "heading",
        text: "When Is a Logo Enough?"
      },
      {
        type: "paragraph",
        text: "A standalone logo may be suitable if you are: Starting with a very small budget, Testing a business idea, Creating a temporary project, Working on a personal side project, or Not yet ready for a complete identity system."
      },
      {
        type: "paragraph",
        text: "However, if you're building a serious long-term business, investing in a broader identity can be more useful."
      },
      {
        type: "heading",
        text: "When Should You Invest in a Complete Brand Identity?"
      },
      {
        type: "paragraph",
        text: "Consider a complete brand identity if: You are launching a serious business, Your business is growing, You are entering a competitive market, You are repositioning your brand, Your existing branding looks inconsistent, You are targeting a premium audience, You are expanding into new products or locations, or You want your business to look more established."
      },
      {
        type: "heading",
        text: "What Makes a Good Logo?"
      },
      {
        type: "paragraph",
        text: "A good logo isn't necessarily complicated. In fact, some of the strongest logos are remarkably simple."
      },
      {
        type: "paragraph",
        text: "A good logo should work: Small (on a mobile screen), Large (on signage), In colour (and preferably in black and white), and Across different formats (from websites to packaging)."
      },
      {
        type: "paragraph",
        text: "Most importantly, it should be relevant to the business. A logo doesn't need to literally show what you sell. A strong concept can communicate much more than an obvious symbol."
      },
      {
        type: "heading",
        text: "What Makes a Strong Brand Identity?"
      },
      {
        type: "paragraph",
        text: "A strong brand identity has consistency and purpose. Every visual element should work together. For example: Logo + Colours + Typography + Imagery + Layout + Messaging = Brand Experience."
      },
      {
        type: "paragraph",
        text: "When these elements are strategically designed, your business becomes easier to recognize."
      },
      {
        type: "heading",
        text: "Common Mistake: Changing Your Logo Everywhere"
      },
      {
        type: "paragraph",
        text: "Another common mistake is believing that every new campaign needs a completely different visual identity. Your campaigns can look fresh without destroying your brand consistency."
      },
      {
        type: "paragraph",
        text: "Instead of changing everything, create a flexible brand system. This allows your business to remain recognizable while still producing interesting content."
      },
      {
        type: "heading",
        text: "Logo or Brand Identity: Which Should You Choose?"
      },
      {
        type: "paragraph",
        text: "There isn't one answer for every business. If you only need a professional business logo, a logo design package may be enough."
      },
      {
        type: "paragraph",
        text: "If you're building a business that will grow across multiple platforms, a complete brand identity is usually the smarter long-term investment. The goal isn't simply to make your business look good. The goal is to create a visual identity that people can recognize, remember and trust."
      },
      {
        type: "faq",
        faqItems: [
          {
            question: "Is logo design part of brand identity?",
            answer: "Yes. A logo is usually one of the most important elements of a brand identity, but it is not the entire identity."
          },
          {
            question: "How much does professional logo design cost?",
            answer: "Logo design costs vary depending on the designer, scope, research, concepts and deliverables involved. Businesses should compare the process and value offered rather than only comparing prices."
          },
          {
            question: "Can I create a brand identity without changing my logo?",
            answer: "Yes. An existing logo can sometimes be retained while the rest of the visual identity is improved or standardized."
          },
          {
            question: "Do startups need a complete brand identity?",
            answer: "Not every startup needs a large branding system immediately. However, a clear and scalable identity can be valuable when entering a competitive market or preparing for growth."
          },
          {
            question: "What files should I receive with my logo?",
            answer: "A professional logo package commonly includes formats such as PNG, JPEG, PDF and vector files such as SVG or AI/EPS, depending on the designer and package."
          }
        ]
      }
    ]
  },
  {
    id: "why-branding-is-important-for-small-businesses",
    category: "Tech & UX",
    date: "August 19, 2026",
    readTime: "5 min read",
    title: "Why Branding Is Important for Small Businesses in 2026",
    shortDescription: "Discover why branding matters for small businesses in 2026 and how a strong brand identity can build trust, attract customers and help your business stand out.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Anil Chaudhari",
      role: "Technical Lead",
      avatar: anilImg
    },
    blocks: [
      {
        type: "paragraph",
        text: "Starting a business has never been easier. Today, a small business can create an Instagram page, launch a website, sell online and reach customers across the country without having a huge office or marketing team."
      },
      {
        type: "paragraph",
        text: "But there is one problem. Your customers have too many choices. When several businesses offer similar products or services, customers don't always choose based on price. They choose the business that feels trustworthy, professional and memorable."
      },
      {
        type: "quote",
        text: "That is where branding comes in. Branding for small businesses is not simply about having a beautiful logo. It is about creating a consistent identity that tells people who you are, what you stand for and why they should choose you."
      },
      {
        type: "heading",
        text: "What Is Branding?"
      },
      {
        type: "paragraph",
        text: "Branding is the process of creating a recognizable identity and perception for your business. It includes much more than your logo."
      },
      {
        type: "paragraph",
        text: "Your branding can include: Logo design, Brand colours, Typography, Packaging, Social media design, Website design, Brand messaging, Photography style, Marketing materials, Customer experience, and Overall visual identity."
      },
      {
        type: "paragraph",
        text: "Think about the brands you instantly recognize. You may recognize them from their colours, packaging, typography or even the way they communicate. That consistency is branding."
      },
      {
        type: "heading",
        text: "1. Branding Helps You Build Trust"
      },
      {
        type: "paragraph",
        text: "People naturally feel more comfortable buying from businesses that look professional. Imagine two businesses selling the same product."
      },
      {
        type: "paragraph",
        text: "One has inconsistent graphics, random colours and an outdated-looking social media page. The other has a clear logo, consistent colours, professional packaging and a polished website."
      },
      {
        type: "paragraph",
        text: "Even before comparing the products, most customers will form an opinion. A professional brand creates the perception that the business is serious about what it does."
      },
      {
        type: "quote",
        text: "Good branding doesn't guarantee a great product—but it helps customers believe there is a great business behind it."
      },
      {
        type: "heading",
        text: "2. Branding Helps You Stand Out"
      },
      {
        type: "paragraph",
        text: "Your competitors may offer similar services. So why should someone choose you? Your branding can help answer that question visually and emotionally."
      },
      {
        type: "paragraph",
        text: "A strong brand gives your business a recognizable personality. For example, a luxury salon shouldn't necessarily look like a budget salon. A children's brand shouldn't communicate like a corporate financial company. A premium café shouldn't look like every other local café. Your visual identity should communicate your positioning."
      },
      {
        type: "heading",
        text: "3. Branding Makes Your Business Memorable"
      },
      {
        type: "paragraph",
        text: "Customers see hundreds of advertisements, social media posts and businesses every day. If your business looks different every time they see it, remembering you becomes difficult. Consistent branding creates recognition."
      },
      {
        type: "paragraph",
        text: "When your logo, colours, fonts, imagery and communication style remain consistent, customers begin to associate those elements with your business. And recognition can eventually lead to recall."
      },
      {
        type: "paragraph",
        text: "When they need the product or service you offer, you want your brand to be one of the first names they remember."
      },
      {
        type: "heading",
        text: "4. Branding Allows You to Charge for Value"
      },
      {
        type: "paragraph",
        text: "This is one of the most important reasons to invest in branding. A strong brand can help move your business away from competing only on price."
      },
      {
        type: "paragraph",
        text: "If your business looks and communicates like a premium brand, customers may perceive greater value in what you offer. This doesn't mean you should artificially increase your prices simply because you have a new logo."
      },
      {
        type: "paragraph",
        text: "It means your branding should accurately communicate the value you are already providing. Your brand should look as valuable as the experience you deliver."
      },
      {
        type: "heading",
        text: "5. Branding Creates Consistency"
      },
      {
        type: "paragraph",
        text: "As your business grows, you may use your brand across: Instagram, Website, Packaging, Visiting cards, Brochures, Presentations, Advertisements, Signage, Email marketing, and WhatsApp communication."
      },
      {
        type: "paragraph",
        text: "Without brand guidelines, everything can start looking different. A brand identity gives you a visual system."
      },
      {
        type: "paragraph",
        text: "Instead of asking, \"What colour should we use here?\" every time you create something, you already have a clear direction. This saves time and makes your business look more professional."
      },
      {
        type: "heading",
        text: "6. Branding Builds an Emotional Connection"
      },
      {
        type: "paragraph",
        text: "People don't always buy products purely because of features. They buy feelings. A brand can make customers feel: Safe, Excited, Premium, Comfortable, Confident, Inspired, and Connected."
      },
      {
        type: "paragraph",
        text: "This is why two businesses selling similar products can create completely different customer experiences. Your brand gives people a reason to feel something about your business."
      },
      {
        type: "heading",
        text: "How Much Should a Small Business Invest in Branding?"
      },
      {
        type: "paragraph",
        text: "There is no single number that works for every business. Your investment should depend on: Stage of your business, Industry, Target audience, Business goals, Competition, Number of brand touchpoints, and Future growth plans."
      },
      {
        type: "quote",
        text: "The important thing is not to spend the maximum. It is to invest strategically."
      },
      {
        type: "paragraph",
        text: "A business that plans to grow should think beyond just getting a logo. It should consider creating a brand identity that can grow with the business."
      },
      {
        type: "heading",
        text: "What Should a Small Business Include in Its Brand Identity?"
      },
      {
        type: "paragraph",
        text: "A professional brand identity may include: Primary logo, Secondary logo variations, Colour palette, Typography system, Brand guidelines, Graphic elements, Social media direction, Packaging or stationery applications, and Brand messaging."
      },
      {
        type: "paragraph",
        text: "Not every business needs all of them. The right brand identity depends on your business."
      },
      {
        type: "heading",
        text: "Final Thoughts"
      },
      {
        type: "paragraph",
        text: "Branding isn't about making your business look fancy. It is about making your business recognizable, trustworthy and relevant to the right audience."
      },
      {
        type: "paragraph",
        text: "In 2026, customers are constantly discovering businesses through Instagram, Google, websites, packaging and recommendations. Every interaction is an opportunity to communicate your brand."
      },
      {
        type: "paragraph",
        text: "So instead of asking: \"Do I really need branding?\" Ask: \"What is my business communicating before I even speak to my customer?\" Because your customers are already forming an opinion. The question is whether you are intentionally shaping it."
      },
      {
        type: "faq",
        faqItems: [
          {
            question: "Is branding important for a small business?",
            answer: "Yes. Strong branding can help a small business build trust, improve recognition and differentiate itself from competitors."
          },
          {
            question: "Is a logo the same as branding?",
            answer: "No. A logo is one part of your brand identity. Branding includes the complete visual and communication system surrounding your business."
          },
          {
            question: "When should a small business invest in branding?",
            answer: "Ideally, branding should be considered early, especially before investing heavily in packaging, websites, advertising or social media."
          },
          {
            question: "Can branding help me attract more customers?",
            answer: "Strong branding can improve how customers perceive and remember your business. However, branding works best alongside a good product, service and marketing strategy."
          },
          {
            question: "How often should a business update its branding?",
            answer: "A brand doesn't need to be redesigned every year. Businesses should consider a refresh when their positioning, audience, offerings or market have significantly changed."
          }
        ]
      }
    ]
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

                <p className="text-[#6B7280] text-sm sm:text-base font-sans leading-relaxed mb-6 flex-grow line-clamp-3">
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

                {/* Dynamic Block-based Content */}
                <div className="font-sans text-base sm:text-lg text-[#6B7280] leading-relaxed space-y-6">
                  {selectedBlog.blocks.map((block, idx) => {
                    if (block.type === "paragraph" && block.text) {
                      // Apply dropcap style to first paragraph in the blog
                      const isFirstParagraph = idx === 0 || (idx > 0 && selectedBlog.blocks[idx - 1].type === "heading" && !selectedBlog.blocks.slice(0, idx).some(b => b.type === "paragraph"));
                      if (isFirstParagraph) {
                        return (
                          <p key={idx} className="first-letter:text-4xl first-letter:font-black first-letter:text-[#34164F] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                            {block.text}
                          </p>
                        );
                      }
                      return <p key={idx}>{block.text}</p>;
                    }
                    if (block.type === "heading" && block.text) {
                      return (
                        <h2 key={idx} className="text-xl sm:text-2xl font-heading font-black text-[#34164F] pt-6 pb-2 uppercase tracking-tight">
                          {block.text}
                        </h2>
                      );
                    }
                    if (block.type === "list" && block.items) {
                      return (
                        <ul key={idx} className="list-disc pl-6 space-y-2 my-4 text-base sm:text-lg text-[#6B7280]">
                          {block.items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "quote" && block.text) {
                      return (
                        <blockquote key={idx} className="border-l-4 border-[#F7B71D] bg-[#FAF9F6] p-6 md:p-8 my-8 font-heading italic text-lg md:text-xl font-bold text-[#34164F] leading-relaxed">
                          "{block.text}"
                        </blockquote>
                      );
                    }
                    if (block.type === "faq" && block.faqItems) {
                      return (
                        <div key={idx} className="mt-12 pt-10 border-t border-[#dedad5]">
                          <h3 className="text-2xl font-heading font-black text-[#34164F] mb-6 uppercase tracking-tight">
                            Frequently Asked Questions
                          </h3>
                          <div className="space-y-4">
                            {block.faqItems.map((faq, faqIdx) => (
                              <div key={faqIdx} className="bg-[#FAF9F6] p-6 border border-[#dedad5]">
                                <h4 className="font-heading font-bold text-base md:text-lg text-[#34164F] mb-2">
                                  {faq.question}
                                </h4>
                                <p className="font-sans text-sm md:text-base text-[#6B7280] leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
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
