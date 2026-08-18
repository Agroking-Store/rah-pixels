export interface ServiceItem {
  id: string
  title: string
  category: 'branding' | 'graphic' | 'website' | 'marketing' | 'printing'
  subhead: string
  shortDescription: string
  quickHighlights: string[]
  detailedInclusions: {
    sectionName?: string
    items: string[]
  }[]
  sourceFiles: string[]
  badgeText: string
  turnaround: string
  popular?: boolean
  gradientBg?: string
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'brand-identity-design',
    title: 'Brand Identity Design',
    category: 'branding',
    subhead: 'Build a brand people recognise and remember.',
    shortDescription: 'We create strategic brand identities that go beyond beautiful logos. Every brand is designed to reflect your vision, attract your ideal audience, and help your business stand out in a competitive market.',
    popular: true,
    badgeText: 'Most Popular',
    turnaround: '2 - 3 Weeks',
    quickHighlights: [
      'Brand Strategy',
      'Logo Design',
      'Brand Identity',
      'Brand Guidelines',
      'Stationery Design',
      'Social Media Kit'
    ],
    detailedInclusions: [
      {
        sectionName: 'Core Identity & Strategy',
        items: [
          'Brand Strategy & Positioning',
          'Custom Logo Design',
          'Logo Variations (Horizontal, Vertical, Monogram)',
          'Brand Color Palette (HEX, RGB, CMYK, Pantone)',
          'Typography Selection & Font Pairings',
          'Brand Pattern & Visual Graphic Elements',
          'Comprehensive Brand Guidelines Book (PDF)'
        ]
      },
      {
        sectionName: 'Collateral & Digital Kit',
        items: [
          'Stationery Design (Visiting Card, Letterhead, Envelope)',
          'Social Media Brand Kit (Profile & Banner Templates)',
          'High-Resolution Brand Mockups',
          'Print-Ready Production Files (300 DPI)',
          'Full Vector Source Files (AI, SVG, PDF, PNG, JPG)'
        ]
      }
    ],
    sourceFiles: ['AI', 'SVG', 'PDF', 'PNG', 'JPG', 'EPS']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'graphic',
    subhead: 'Visual communication that captures attention and elevates brand presence.',
    shortDescription: 'Instead of hiding marketing collateral inside general branding, we deliver high-impact graphic design tailored for corporate presentations, marketing collateral, event displays, and retail graphics.',
    turnaround: '3 - 7 Business Days',
    badgeText: 'Creative Collateral',
    quickHighlights: [
      'Brochures & Catalogues',
      'Company Profiles & Flyers',
      'Posters & Signage Design',
      'Packaging Design & Labels',
      'Corporate Presentations',
      'Exhibition Stall Graphics'
    ],
    detailedInclusions: [
      {
        sectionName: 'Marketing & Corporate Collateral',
        items: [
          'Brochures (Bi-fold, Tri-fold, Multi-page)',
          'Company Profiles & Annual Reports',
          'Product Catalogues & Magazines',
          'Flyers, Leaflets & Pamphlets',
          'Posters & Wall Graphics',
          'Corporate Pitch Decks & Presentations'
        ]
      },
      {
        sectionName: 'Packaging & Retail Displays',
        items: [
          'Packaging Design & Box Mockups',
          'Product Labels & Stickers',
          'Menu Cards & Tent Cards',
          'Hoardings & Billboards',
          'Exhibition Stall Graphics & Backdrop Walls',
          'Indoor & Outdoor Signage Design'
        ]
      }
    ],
    sourceFiles: ['AI', 'PSD', 'PDF', 'INDD', 'PNG', 'JPG']
  },
  {
    id: 'website-design',
    title: 'Website Design',
    category: 'website',
    subhead: 'Beautiful, fast and responsive websites built to convert visitors into customers.',
    shortDescription: 'Your website is your digital storefront. We design clean, responsive, and conversion-focused websites that not only look premium but also help generate leads and build credibility.',
    popular: true,
    badgeText: 'High Conversion',
    turnaround: '2 - 4 Weeks',
    quickHighlights: [
      'Business Websites',
      'Hotel Websites',
      'E-commerce',
      'WordPress',
      'SEO Ready',
      'Mobile Friendly'
    ],
    detailedInclusions: [
      {
        sectionName: 'Design & UX Engineering',
        items: [
          'Figma UI/UX Interface Design',
          '100% Mobile Responsive Layouts',
          'High-Converting Landing Pages',
          'Corporate & Business Websites',
          'Portfolio & Showcase Websites',
          'Hotel & Hospitality Booking Websites'
        ]
      },
      {
        sectionName: 'Development & Technical Setup',
        items: [
          'WordPress Development & Custom CMS',
          'E-commerce Storefronts (WooCommerce/Shopify)',
          'Speed Optimization & Core Web Vitals Audit',
          'Lead Generation Contact & Inquiry Forms',
          'Basic On-Page SEO Setup',
          'Google Maps & Location Integration',
          'Direct WhatsApp Chat Integration',
          'Complete Website Training & Ongoing Support'
        ]
      }
    ],
    sourceFiles: ['Figma', 'HTML/CSS/JS', 'WordPress Pack', 'Asset Bundle']
  },
  {
    id: 'social-media-digital-marketing',
    title: 'Social Media & Digital Marketing',
    category: 'marketing',
    subhead: 'Creative content and performance marketing that helps your business grow online.',
    shortDescription: 'Grow your online presence with creative content and strategic marketing that helps your brand reach the right audience and convert casual followers into loyal paying customers.',
    badgeText: 'Growth & ROI',
    turnaround: 'Monthly Retainer / Ongoing',
    quickHighlights: [
      'Social Media Management',
      'Content Design',
      'Meta Ads',
      'Google Ads',
      'SEO',
      'Lead Generation'
    ],
    detailedInclusions: [
      {
        sectionName: 'Social Media Management',
        items: [
          'Social Media Strategy & Audience Profiling',
          'Instagram Grid & Post Design',
          'Facebook Ad Creatives & Banner Design',
          'LinkedIn Corporate Creatives',
          'Reels Cover & Short-Form Video Editing',
          'Instagram & Facebook Story Templates',
          'Monthly Content Calendar & Caption Copywriting',
          'High-Converting Carousel Posts'
        ]
      },
      {
        sectionName: 'Digital Marketing & Growth',
        items: [
          'Meta Ads (Facebook & Instagram Ad Campaigns)',
          'Google Ads (Search, Display & Shopping)',
          'Search Engine Optimization (Local & Global SEO)',
          'Performance Marketing & Conversion Funnels',
          'High-Volume Lead Generation Campaigns',
          'Email Marketing Workflows & Newsletters',
          'WhatsApp Automated Marketing',
          'Detailed Analytics & Monthly Performance Reporting'
        ]
      }
    ],
    sourceFiles: ['PSD', 'CANVA', 'MP4', 'PDF Reports', 'Analytics Dashboard']
  },
  {
    id: 'printing-solutions',
    title: 'Printing Solutions',
    category: 'printing',
    subhead: 'High-quality print production that turns digital designs into tangible touchpoints.',
    shortDescription: 'Complete printing and production management for business cards, collateral, packaging, and large-format promotional materials with premium paper finishes and crisp color reproduction.',
    badgeText: 'Premium Print',
    turnaround: '3 - 5 Days',
    quickHighlights: [
      'Visiting Cards & Letterheads',
      'Brochures & Flyers Printing',
      'Packaging & Product Labels',
      'Standees & Banners',
      'Stickers & Decals',
      'Promotional Gifts'
    ],
    detailedInclusions: [
      {
        sectionName: 'Business & Office Printing',
        items: [
          'Visiting Cards (Matt, Gloss, Velvet Touch, Gold Foil)',
          'Letterheads & Official Stationery',
          'Brochures, Pamphlets & Flyers Printing',
          'Envelopes & Corporate Folders'
        ]
      },
      {
        sectionName: 'Packaging & Promotional Displays',
        items: [
          'Packaging Box Printing & Structural Mockups',
          'Custom Product Stickers & Roll Labels',
          'Roll-up Standees & Event Display Boards',
          'Large Format Vinyl Banners & Hoardings',
          'Promotional Merchandise & Corporate Gifts',
          'End-to-End Quality Inspection & Doorstep Delivery'
        ]
      }
    ],
    sourceFiles: ['Press-Ready PDF', 'CMYK Files', 'Die-Line Vector Specs']
  }
]

export const WHY_CHOOSE_US = [
  {
    title: 'Strategic Brand Thinking',
    description: 'We don’t just draw pretty logos. We analyze your market and design identity systems that build trust and command premium pricing.',
    icon: 'BrainCircuit'
  },
  {
    title: 'Pixel-Perfect Craftsmanship',
    description: 'Every font, color code, spacing unit, and CTA button is engineered to maintain crisp brand consistency across digital and print.',
    icon: 'Sparkles'
  },
  {
    title: '100% Ownership & Source Files',
    description: 'You get full copyright ownership and open vector source files (AI, SVG, PDF, PNG, Figma) with zero hidden license fees.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Fast Turnaround & Support',
    description: 'Structured timelines, quick communication via WhatsApp, and dedicated post-launch guidance for seamless implementation.',
    icon: 'Zap'
  }
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Briefing',
    description: 'We dive deep into your business goals, target audience, brand vision, and project requirements through an interactive briefing.'
  },
  {
    number: '02',
    title: 'Strategy & Concepting',
    description: 'We develop custom design concepts, color stories, wireframes, and strategic angles tailored to outshine competitors.'
  },
  {
    number: '03',
    title: 'Refinement & Feedback',
    description: 'We work closely with you to tweak, polish, and perfect every detail until the designs exceed your expectations.'
  },
  {
    number: '04',
    title: 'Delivery & Launch',
    description: 'We package all final print-ready and digital source files, launch your website, and provide full brand assets training.'
  }
]

export const FAQS = [
  {
    question: 'How long does a typical Brand Identity or Website Design project take?',
    answer: 'Brand Identity projects typically take 2-3 weeks, depending on revision speeds. Custom Website Design takes 2-4 weeks. For urgent requirements, we also offer accelerated timeline options.'
  },
  {
    question: 'What source files will I receive upon project completion?',
    answer: 'You will receive full master source files in Adobe Illustrator (.AI), Photoshop (.PSD), Vector SVG, High-Res PDF, PNG with transparent background, JPG, and Figma project links for web designs.'
  },
  {
    question: 'Can I combine multiple services into a custom package?',
    answer: 'Absolutely! Most of our clients bundle Brand Identity Design + Website Design + Social Media Starter Kits for a cohesive launch. Use our Project Scope Builder tool below to request a tailored package discount.'
  },
  {
    question: 'Do you assist with printing and physical deliverable production?',
    answer: 'Yes! Through our dedicated Printing Solutions division, we handle end-to-end printing for visiting cards, brochures, packaging, standees, and signage with doorstep delivery.'
  },
  {
    question: 'What if I need ongoing changes or website maintenance after launch?',
    answer: 'We provide 30 days of complimentary post-launch support with all website and branding projects, plus website training videos so you can edit content easily. We also offer affordable monthly retainer plans.'
  }
]
