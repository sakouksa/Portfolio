export type ThemeMode = 'light' | 'dark' | 'system';
export type Theme = 'dark' | 'light';

export interface DeveloperProfile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter?: string;
  medium?: string;
  leetcode?: string;
  resumeUrl: string;
  avatarUrl: string;
  yearsExperience: number;
  completedProjects: number;
  happyClients: number;
  githubStars: number;
  totalCommits: number;
}

export type SkillCategory = 
  | 'All'
  | 'Frontend & UI Ecosystem' 
  | 'Backend Frameworks & Systems' 
  | 'Mobile Development' 
  | 'Programming Languages & Desktop' 
  | 'Databases' 
  | 'DevTools & Platforms';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: number; // 0 - 100
  bgColor: string;
  textColor: string;
  years: number;
  featured?: boolean;
}

export type ProjectCategory = 'All' | 'Full Stack' | 'Frontend' | 'Mobile' | 'AI / Data' | 'Cloud / Systems';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  gallery?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  architecture?: string;
  challenges?: string[];
  solutions?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  popular?: boolean;
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string; // Position or Degree
  organization: string; // Company or University
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  coverImage: string;
  tags: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Development' | 'Freelance' | 'Tech Stack';
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  budget?: string;
  service?: string;
  message: string;
}

export interface VisitorAnalytics {
  totalVisitors: number;
  activeNow: number;
  systemUptime: string;
  apiLatencyMs: number;
  messagesSent: number;
  topCountry: string;
}
