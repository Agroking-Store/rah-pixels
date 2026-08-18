import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  X,
  Award
} from 'lucide-react'
import LogoMarquee from '../components/layout/LogoMarquee'

gsap.registerPlugin(ScrollTrigger)

export interface ProjectItem {
  id: string
  title: string
  client: string
  category: 'Brand Identity' | 'Web & UI/UX' | 'Digital Marketing' | 'Packaging & Print'
  image: string
  description: string
  deliverables: string[]
  year: string
  impact: string
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ahg-resort',
    title: 'Asia Hospitality Group',
    client: 'AHG Resorts & Villas',
    category: 'Brand Identity',
    image: 'https://indux.cloud/wp-content/uploads/2026/03/ahg_asset-2-1.5x-A1agVE6Kj5Fb7yOn.avif',
    description: 'Complete brand architecture and luxury resort visual identity system crafted for 12 international hotel locations across South Asia.',
    deliverables: ['Brand Guidelines', 'Logo System', 'Stationery', 'Signage Architecture', 'Vector Master Files'],
    year: '2025',
    impact: '+140% Direct Booking Revenue'
  },
  {
    id: 'mb-corporate',
    title: 'Master Brands Global',
    client: 'Master Brands Ltd',
    category: 'Brand Identity',
    image: 'https://indux.cloud/wp-content/uploads/2026/03/mb_asset-1-1.5x-Yan2eXGBBBfEbOo2.avif',
    description: 'Unified brand identity and executive typography system for a multi-sector conglomerate operating across retail and FMCG.',
    deliverables: ['Corporate Identity', 'Brand Assets', '3D Packaging Preview', 'Stationery Kit'],
    year: '2025',
    impact: 'Rebranded 18 Subsidiary Units'
  },
  {
    id: 'ods-enterprise',
    title: 'Overseas Digital Solutions',
    client: 'ODS Cloud Platform',
    category: 'Web & UI/UX',
    image: 'https://indux.cloud/wp-content/uploads/2026/03/ods_asset-2-1.5x-d95ENJOgNGHPqB0X.avif',
    description: 'End-to-end enterprise SaaS interface design and marketing website with high-performance responsive component design system.',
    deliverables: ['Design System', 'UI/UX Design', 'Interactive Prototypes', 'Next.js Frontend'],
    year: '2025',
    impact: '3.4x Faster Onboarding Flow'
  },
  {
    id: 'pcf-craft-foods',
    title: 'Premium Craft Foods',
    client: 'PCF Organic Brands',
    category: 'Packaging & Print',
    image: 'https://indux.cloud/wp-content/uploads/2026/03/pcf_asset-3-1.5x-AE0q3l9pPeSnWKRZ.avif',
    description: 'Eco-friendly biodegradable packaging suite and retail shelf display design for an organic food and beverage producer.',
    deliverables: ['Eco Packaging', 'Labeling System', 'Print Collateral', 'Point-of-Sale Displays'],
    year: '2024',
    impact: 'Featured in 350+ Retail Outlets'
  },
  {
    id: 'sac-advisory',
    title: 'Strategic Advisory Corp',
    client: 'SAC Global Finance',
    category: 'Digital Marketing',
    image: 'https://indux.cloud/wp-content/uploads/2026/03/sac_asset-2-1.5x-YyvkejaowQUErJln.avif',
    description: 'Omnichannel digital growth strategy, lead acquisition campaigns, and interactive investor relation web experiences.',
    deliverables: ['Digital Growth Strategy', 'Ad Creatives', 'Landing Page Design', 'Conversion Funnels'],
    year: '2024',
    impact: '₹12.5 Cr Investor Leads Generated'
  },
  {
    id: 'tmt-industrial',
    title: 'Tech Motion Tools',
    client: 'TMT Robotics & IoT',
    category: 'Web & UI/UX',
    image: 'https://indux.cloud/wp-content/uploads/2026/03/tmt_asset-1-1.5x-A1agVE6Jkwu3232A.avif',
    description: 'Industrial IoT monitoring dashboard UI and high-tech branding for automated manufacturing platforms.',
    deliverables: ['IoT Dashboard UI', 'Design System', 'Vector Icons', 'Web Portal'],
    year: '2025',
    impact: 'Zero Latency Analytics View'
  },
  {
    id: 'tts-logistics',
    title: 'Top Transport Solutions',
    client: 'TTS Freight Logistics',
    category: 'Packaging & Print',
    image: 'https://indux.cloud/wp-content/uploads/2026/03/tts_asset-3-1.5x-Yan2eXGBJMi714MZ.avif',
    description: 'Fleet livery branding, driver app UI, and national logistics documentation template suite.',
    deliverables: ['Fleet Livery Design', 'Mobile App UI', 'Corporate Collateral', 'Vector Assets'],
    year: '2024',
    impact: '500+ Vehicle Fleet Branded'
  },
  {
    id: 'di-analytics',
    title: 'Digital Innovations',
    client: 'DI AI Labs',
    category: 'Digital Marketing',
    image: 'https://indux.cloud/wp-content/uploads/2026/03/di_asset-1-1.5x-dJoGxMpJN5heQooE.avif',
    description: 'High-converting social ad campaigns, motion graphic teasers, and brand positioning for AI analytics startup.',
    deliverables: ['Motion Graphic Video', 'Social Media Suite', 'Ad Design', 'Marketing Assets'],
    year: '2025',
    impact: '4.8M Organic Impressions'
  },
  {
    id: 'lgh-luxury',
    title: 'Luxury Global Holdings',
    client: 'LGH Estate Portfolio',
    category: 'Brand Identity',
    image: 'https://indux.cloud/wp-content/uploads/2026/03/lgh_asset-1-1.5x-YrDLOe0o3lSRV4V1.avif',
    description: 'Ultra-luxurious foil-stamped corporate stationery, brand book, and VIP client welcome kits.',
    deliverables: ['Bespoke Brand Book', 'Gold Foil Packaging', 'Luxury Stationery', 'Vector Source Rights'],
    year: '2024',
    impact: 'Exclusively Curated for VIPs'
  }
]



const CATEGORIES = ['All Works', 'Brand Identity', 'Web & UI/UX', 'Digital Marketing', 'Packaging & Print'] as const

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Works')
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null)

  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProjects = selectedCategory === 'All Works'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory)

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top bottom-=10%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.project-card')
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }, [selectedCategory])

  return (
    <div className="w-full min-h-screen bg-[#F5F5F7] pt-15 pb-20 px-4 sm:px-8 lg:px-12">

      {/* 1. HERO HEADER SECTION */}
      <section ref={headerRef} className="max-w-7xl mx-auto space-y-6 text-center py-15">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#34164F]/5 border border-[#34164F]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#7A4DFF] font-sora">
          <Sparkles className="w-3.5 h-3.5 text-[#F7B71D]" />
          <span>PORTFOLIO & CASE STUDIES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-sora text-[#34164F] tracking-tight leading-[1.08] max-w-5xl mx-auto">
          Crafting Brands People <span className="text-[#7A4DFF]">Remember & Trust</span>
        </h1>

        <p className="text-base sm:text-xl text-[#6B7280] font-manrope max-w-3xl mx-auto leading-relaxed">
          Explore our portfolio of strategic brand identities, digital web platforms, marketing collateral, and packaging systems created for 1,400+ clients worldwide.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold font-sora transition-all cursor-pointer ${isActive
                  ? 'bg-[#34164F] text-[#F7B71D] shadow-lg shadow-[#34164F]/20 scale-105'
                  : 'bg-white text-[#1F2430] border border-gray-200/90 hover:bg-gray-100/80 hover:text-[#34164F]'
                  }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </section>



      {/* 3. PROJECT SHOWCASE GRID */}
      <section className="max-w-7xl mx-auto py-15">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="project-card rounded-3xl bg-white border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100 flex items-center justify-center p-6 border-b border-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-extrabold font-sora bg-[#34164F] text-[#F7B71D] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-10 h-10 rounded-full bg-[#F7B71D] text-[#34164F] flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-5 h-5 font-bold" />
                  </span>
                </div>
              </div>

              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#7A4DFF] font-sora">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold font-sora text-[#34164F] group-hover:text-[#7A4DFF] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B7280] font-manrope leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverables.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold font-manrope bg-[#34164F]/5 text-[#34164F] px-2.5 py-0.5 rounded-md"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-extrabold font-sora text-[#34164F]">
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#F7B71D]" />
                      <span>{project.impact}</span>
                    </span>
                    <span className="text-[#7A4DFF] group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      Case Study <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LOGO TICKER / MARQUEE SECTION */}
      <section className=" py-15">
        <LogoMarquee />
      </section>

      {/* 5. CASE STUDY DETAIL MODAL */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-[#1F2430]/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 relative p-6 sm:p-10 space-y-6">

            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F5F5F7] hover:bg-[#34164F] text-[#34164F] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-12">
              <span className="text-xs font-extrabold font-sora bg-[#F7B71D] text-[#34164F] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
                {activeModalProject.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-sora text-[#34164F]">
                {activeModalProject.title}
              </h2>
              <p className="text-sm font-bold text-[#7A4DFF] font-sora">
                Client: {activeModalProject.client} ({activeModalProject.year})
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 p-8 flex items-center justify-center border border-gray-200">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="max-h-72 object-contain"
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-extrabold font-sora text-[#34164F]">Project Overview</h4>
              <p className="text-sm sm:text-base text-[#6B7280] font-manrope leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-extrabold font-sora text-[#34164F]">Included Deliverables</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModalProject.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold font-manrope text-[#1F2430]">
                    <CheckCircle2 className="w-4 h-4 text-[#F7B71D]" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#34164F] text-white p-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold font-sora text-[#F7B71D] uppercase">Verified Business Impact</span>
                <h5 className="text-xl font-extrabold font-sora text-white">{activeModalProject.impact}</h5>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-[#F7B71D] text-[#34164F] text-xs font-extrabold font-sora uppercase hover:bg-white transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Projects
