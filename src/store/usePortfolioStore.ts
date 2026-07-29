import { create } from 'zustand';
import { 
  Theme, 
  ProjectItem, 
  BlogPost, 
  ServiceItem, 
  SkillCategory, 
  ProjectCategory, 
  VisitorAnalytics 
} from '../types/portfolio.types';

interface PortfolioState {
  theme: Theme;
  commandPaletteOpen: boolean;
  soundEnabled: boolean;
  selectedProject: ProjectItem | null;
  selectedBlog: BlogPost | null;
  selectedService: ServiceItem | null;
  activeSkillCategory: SkillCategory;
  projectFilter: ProjectCategory;
  searchQuery: string;
  visitorAnalytics: VisitorAnalytics;

  // Actions
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setCommandPaletteOpen: (open: boolean) => void;
  toggleCommandPalette: () => void;
  setSoundEnabled: (enabled: boolean) => void;
  setSelectedProject: (project: ProjectItem | null) => void;
  setSelectedBlog: (blog: BlogPost | null) => void;
  setSelectedService: (service: ServiceItem | null) => void;
  setActiveSkillCategory: (category: SkillCategory) => void;
  setProjectFilter: (filter: ProjectCategory) => void;
  setSearchQuery: (query: string) => void;
  incrementVisitorCount: () => void;
  incrementMessageCount: () => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  theme: (typeof window !== 'undefined' && localStorage.getItem('portfolio-theme') as Theme) || 'dark',
  commandPaletteOpen: false,
  soundEnabled: true,
  selectedProject: null,
  selectedBlog: null,
  selectedService: null,
  activeSkillCategory: 'All',
  projectFilter: 'All',
  searchQuery: '',
  visitorAnalytics: {
    totalVisitors: 14850,
    activeNow: 24,
    systemUptime: '99.98%',
    apiLatencyMs: 28,
    messagesSent: 142,
    topCountry: 'United States'
  },

  setTheme: (theme: Theme) => {
    localStorage.setItem('portfolio-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    set({ theme });
  },

  toggleTheme: () => {
    set((state) => {
      const nextTheme: Theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', nextTheme);
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { theme: nextTheme };
    });
  },

  setCommandPaletteOpen: (open: boolean) => set({ commandPaletteOpen: open }),
  toggleCommandPalette: () => set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen })),
  setSoundEnabled: (enabled: boolean) => set({ soundEnabled: enabled }),
  setSelectedProject: (project: ProjectItem | null) => set({ selectedProject: project }),
  setSelectedBlog: (blog: BlogPost | null) => set({ selectedBlog: blog }),
  setSelectedService: (service: ServiceItem | null) => set({ selectedService: service }),
  setActiveSkillCategory: (category: SkillCategory) => set({ activeSkillCategory: category }),
  setProjectFilter: (filter: ProjectCategory) => set({ projectFilter: filter }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),

  incrementVisitorCount: () => set((state) => ({
    visitorAnalytics: {
      ...state.visitorAnalytics,
      totalVisitors: state.visitorAnalytics.totalVisitors + 1,
    }
  })),

  incrementMessageCount: () => set((state) => ({
    visitorAnalytics: {
      ...state.visitorAnalytics,
      messagesSent: state.visitorAnalytics.messagesSent + 1,
    }
  }))
}));
