import type { SlideData, FrameStep } from '../types/hugeTypes';

export const FRAME_STEPS: FrameStep[] = [
  { index: 1, label: 'Hero Overview', progress: 0.0, description: 'Huge title "What we do —" centered in bold display typography' },
  { index: 2, label: 'Scroll Trigger', progress: 0.12, description: 'Title moves off-screen; blurred subtext enters from bottom right' },
  { index: 3, label: 'Focus Reveal', progress: 0.25, description: 'Subtext unblurs into crisp focus ("We make things that matter...")' },
  { index: 4, label: 'Text Drift', progress: 0.38, description: 'Focused statement slides left across viewport' },
  { index: 5, label: 'Section Shift', progress: 0.52, description: 'Subtext exits top left as screen clears' },
  { index: 6, label: 'White Transition', progress: 0.65, description: 'Minimalist white space buffer with sleek scroll indicators' },
  { index: 7, label: 'Section 01 Entrance', progress: 0.82, description: 'Giant "Brand strategy & design 01" typography enters from right' },
  { index: 8, label: 'Section 01 Complete', progress: 1.0, description: 'Full showcase collage and "Explore ↗" action fully aligned' },
];

export const SLIDES: SlideData[] = [
  {
    id: 'brand-strategy',
    sectionNumber: '01',
    title: 'Brand strategy & design',
    bodyText: 'We build living brand systems that create long-term differentiation and business value.',
    category: 'BRANDING',
    tags: ['Brand Identity', 'Design Systems', 'Positioning', 'Visual Culture'],
  },
  {
    id: 'marketing-content',
    sectionNumber: '02',
    title: 'Marketing & content',
    bodyText: 'We drive cultural resonance through data-backed content engines and omnichannel campaigns.',
    category: 'MARKETING',
    tags: ['Content Strategy', 'Campaign Engine', 'Social Velocity', 'Creative Tech'],
  },
  {
    id: 'products-platforms',
    sectionNumber: '03',
    title: 'Products & platforms',
    bodyText: 'We craft digital flagship products and scalable user platforms that delight millions daily.',
    category: 'PRODUCT DESIGN',
    tags: ['UX/UI Design', 'Design Systems', 'Mobile Apps', 'Platform Architecture'],
  },
];
