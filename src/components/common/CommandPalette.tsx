import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Sparkles, 
  User, 
  Code2, 
  FolderGit2, 
  Wrench, 
  Award, 
  MessageSquare,
  Sun,
  Moon,
  Mail
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../../store/usePortfolioStore';

export const CommandPalette: React.FC = () => {
  const { 
    commandPaletteOpen, 
    setCommandPaletteOpen, 
    searchQuery, 
    setSearchQuery,
    setThemeMode
  } = usePortfolioStore();

  const { t } = useTranslation(['portfolio', 'common']);

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

  const scrollToSection = (id: string) => {
    setCommandPaletteOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const COMMAND_SECTIONS = [
    {
      group: t('command.navigation', 'Navigation'),
      items: [
        { label: t('common:nav.home', 'Home'), icon: Sparkles, action: () => scrollToSection('hero') },
        { label: t('common:nav.about', 'About Me'), icon: User, action: () => scrollToSection('about') },
        { label: t('common:nav.skills', 'Skills Matrix'), icon: Code2, action: () => scrollToSection('skills') },
        { label: t('common:nav.projects', 'Projects Showcase'), icon: FolderGit2, action: () => scrollToSection('projects') },
        { label: t('common:nav.services', 'Services & Pricing'), icon: Wrench, action: () => scrollToSection('services') },
        { label: t('common:nav.experience', 'Career Timeline'), icon: Award, action: () => scrollToSection('experience') },
        { label: t('common:nav.contact', 'Contact & Hire'), icon: MessageSquare, action: () => scrollToSection('contact') },
      ]
    },
    {
      group: t('command.settings', 'Settings'),
      items: [
        { label: `${t('common:theme.light', 'Light')} Theme`, icon: Sun, action: () => setThemeMode('light') },
        { label: `${t('common:theme.dark', 'Dark')} Theme`, icon: Moon, action: () => setThemeMode('dark') },
      ]
    },
    {
      group: t('command.socials', 'Socials'),
      items: [
        { label: 'GitHub Profile', icon: FaGithub, action: () => window.open('https://github.com/sakouksa', '_blank') },
        { label: 'LinkedIn Profile', icon: FaLinkedin, action: () => window.open('https://linkedin.com/in/sakousa', '_blank') },
        { label: 'Send Direct Email', icon: Mail, action: () => window.open('mailto:sakousa.dev@gmail.com', '_blank') },
      ]
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setCommandPaletteOpen(false)}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
        />

        {/* Command Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl glass-card bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header Search Bar */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder={t('command.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            <button
              onClick={() => setCommandPaletteOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Command Items */}
          <div className="max-h-96 overflow-y-auto p-4 space-y-6">
            {COMMAND_SECTIONS.map((section) => {
              const items = section.items.filter((item) =>
                item.label.toLowerCase().includes(searchQuery.toLowerCase())
              );

              if (items.length === 0) return null;

              return (
                <div key={section.group} className="space-y-2">
                  <h4 className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {section.group}
                  </h4>
                  <div className="space-y-1">
                    {items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.label}
                          onClick={item.action}
                          className="w-full flex items-center justify-between p-3 rounded-xl text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                            <span>{item.label}</span>
                          </div>
                          <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                            Jump
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Keyboard Hint */}
          <div className="p-3 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800">ESC</kbd> {t('command.escToClose')}</span>
            <span>{t('command.paletteTitle')}</span>
          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
};
