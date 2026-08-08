export interface SlideData {
  id: string;
  sectionNumber: string;
  title: string;
  subtitle?: string;
  bodyText: string;
  category?: string;
  exploreUrl?: string;
  tags?: string[];
  mockupImages?: {
    id: string;
    url: string;
    title: string;
    tag: string;
    bgColor?: string;
  }[];
}

export type ScrollMode = 'scroll' | 'scrub' | 'autoplay';

export interface FrameStep {
  index: number;
  label: string;
  progress: number;
  description: string;
}
