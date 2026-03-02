import { LucideIcon } from 'lucide-react';

export interface ResourceLink {
  title: string;
  url: string;
}

export interface TutorialStep {
  title: string;
  content: string[];
  note?: string; // Optional warning or tip
  icon?: string; // String identifier for the icon to be rendered
  images?: string[]; // Optional array of image URLs
}

export interface TutorialModule {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string; // Tailwind color class for accents
  steps: TutorialStep[];
  links?: ResourceLink[];
  videos?: ResourceLink[];
}

export type ViewState = 'dashboard' | 'tutorial';