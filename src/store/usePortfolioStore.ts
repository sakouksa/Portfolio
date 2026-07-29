import { create } from 'zustand';
import { 
  ThemeMode,
  Theme, 
  ProjectItem, 
  BlogPost, 
  ServiceItem, 
  SkillCategory, 
  ProjectCategory, 
  VisitorAnalytics 
} from '../types/portfolio.types';

interface PortfolioState {
  themeMode: ThemeMode;
  theme: Theme; // Resolved actual theme ('dark' | 'light')
  commandPaletteOpen: boolean;
  soundEnabled: boolean;
  selectedProject: ProjectItem | null;
  selectedBlog: BlogPost | null;
  selectedService: ServiceItem | null;
  activeSkillCategory: SkillCategory | 'All';
  projectFilter: ProjectCategory;
  searchQuery: string;
  visitorAnalytics: VisitorAnalytics;

  // Actions
  setThemeMode: (mode: ThemeMode) => void;
  toggleCommandPalette: () => void;
  setCommandPaletteOpen: (open: boolean) => void;
  setSoundEnabled: (enabled: boolean) => void;
  setSelectedProject: (project: ProjectItem | null) => void;
  setSelectedBlog: (blog: BlogPost | null) => void;
  setSelectedService: (service: ServiceItem | null) => void;
  setActiveSkillCategory: (category: SkillCategory | 'All') => void;
  setProjectFilter: (filter: ProjectCategory) => void;
  setSearchQuery: (query: string) => void;
  incrementVisitorCount: () => void;
  incrementMessageCount: () => void;
}

const getInitialThemeMode = (): ThemeMode => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('portfolio-theme-mode') as ThemeMode;
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      return saved;
    }
  }
  return 'dark';
};

const resolveTheme = (mode: ThemeMode): Theme => {
  if (mode === 'system') {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return mode;
};

const applyThemeToDOM = (mode: ThemeMode) => {
  const actualTheme = resolveTheme(mode);
  localStorage.setItem('portfolio-theme-mode', mode);
  
  if (actualTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
  return actualTheme;
};

const initialMode = getInitialThemeMode();
const initialResolved = applyThemeToDOM(initialMode);

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  themeMode: initialMode,
  theme: initialResolved,
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
    topCountry: 'Cambodia'
  },

  setThemeMode: (mode: ThemeMode) => {
    const resolvedTheme = applyThemeToDOM(mode);
    set({ themeMode: mode, theme: resolvedTheme });
  },

  setCommandPaletteOpen: (open: boolean) => set({ commandPaletteOpen: open }),
  toggleCommandPalette: () => set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen })),
  setSoundEnabled: (enabled: boolean) => set({ soundEnabled: enabled }),
  setSelectedProject: (project: ProjectItem | null) => set({ selectedProject: project }),
  setSelectedBlog: (blog: BlogPost | null) => set({ selectedBlog: blog }),
  setSelectedService: (service: ServiceItem | null) => set({ selectedService: service }),
  setActiveSkillCategory: (category: SkillCategory | 'All') => set({ activeSkillCategory: category }),
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
