import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Sun, 
  Moon, 
  User, 
  Code, 
  FolderGit2, 
  Mail, 
  Briefcase, 
  FileText, 
  ArrowRight,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { modalVariants } from '../../lib/framer-variants';

export const CommandPalette: React.FC = () => {
  const { commandPaletteOpen, setCommandPaletteOpen, theme, toggleTheme } = usePortfolioStore();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
      if (e.key === 'Escape' && commandPaletteOpen) {
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, setCommandPaletteOpen]);

  if (!commandPaletteOpen) return null;

  const ACTIONS = [
    {
      id: 'nav-about',
      title: 'Navigate to About Me',
      category: 'Navigation',
      icon: User,
      action: () => scrollToSection('about')
    },
    {
      id: 'nav-skills',
      title: 'View Technical Skills Matrix',
      category: 'Navigation',
      icon: Code,
      action: () => scrollToSection('skills')
    },
    {
      id: 'nav-projects',
      title: 'Browse Featured Projects Showcase',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => scrollToSection('projects')
    },
    {
      id: 'nav-services',
      title: 'Explore Services & Consultancy',
      category: 'Navigation',
      icon: Briefcase,
      action: () => scrollToSection('services')
    },
    {
      id: 'nav-contact',
      title: 'Send Message / Hire Me',
      category: 'Navigation',
      icon: Mail,
      action: () => scrollToSection('contact')
    },
    {
      id: 'theme-toggle',
      title: `Switch Theme to ${theme === 'dark' ? 'Light Mode' : 'Dark Mode'}`,
      category: 'Settings',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'github-link',
      title: 'Open GitHub Profile',
      category: 'Socials',
      icon: ExternalLink,
      action: () => {
        window.open('https://github.com', '_blank');
        setCommandPaletteOpen(false);
      }
    }
  ];

  const scrollToSection = (id: string) => {
    setCommandPaletteOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const filteredActions = ACTIONS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm">
        {/* Backdrop click dismiss */}
        <div 
          className="absolute inset-0"
          onClick={() => setCommandPaletteOpen(false)} 
        />

        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 border-b border-slate-200 dark:border-slate-800">
            <Search className="w-5 h-5 text-slate-400 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search section..."
              className="w-full py-4 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
              autoFocus
            />
            <button
              onClick={() => setCommandPaletteOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-2">
            {filteredActions.length === 0 ? (
              <div className="py-12 text-center text-slate-500 dark:text-slate-400">
                No matching command found for "{query}"
              </div>
            ) : (
              <div className="space-y-1">
                {filteredActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.id}
                      onClick={action.action}
                      className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800/80 text-left transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-violet-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-violet-400">
                            {action.title}
                          </span>
                          <span className="text-xs text-slate-400">
                            {action.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-all" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[10px]">
                ESC
              </kbd>
              <span>to close</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[10px]">
                ⌘K
              </kbd>
              <span>Command Palette</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
