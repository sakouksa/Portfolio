import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Command, 
  Menu, 
  X, 
  Briefcase, 
  User, 
  Code2, 
  FolderGit2, 
  Mail, 
  Sparkles
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  const { toggleCommandPalette } = usePortfolioStore();
  const scrollProgress = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation(['common']);

  const NAV_ITEMS = [
    { id: 'hero', label: t('nav.home', 'Home'), icon: Sparkles },
    { id: 'about', label: t('nav.about', 'About'), icon: User },
    { id: 'skills', label: t('nav.skills', 'Skills'), icon: Code2 },
    { id: 'projects', label: t('nav.projects', 'Projects'), icon: Briefcase },
    { id: 'services', label: t('nav.services', 'Services'), icon: Sparkles },
    { id: 'experience', label: t('nav.experience', 'Experience'), icon: Briefcase },
    { id: 'github', label: t('nav.openSource', 'Open Source'), icon: FolderGit2 },
    { id: 'contact', label: t('nav.contact', 'Contact'), icon: Mail },
  ];

  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-200 dark:bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Glass Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 glass-navbar bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 xl:gap-8">
          
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group text-left shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold font-heading text-lg shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform shrink-0">
              SO
            </div>
            <div className="whitespace-nowrap">
              <span className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-colors">
                {t('devName', 'Mr. Sak Ousa')}
              </span>
              <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                Software Architect
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-white/90 dark:bg-slate-900/80 p-1 xl:p-1.5 rounded-full border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full shadow-md shadow-blue-500/20"
                      transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Cmd + K Command Palette Trigger */}
            <button
              onClick={toggleCommandPalette}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors shadow-sm whitespace-nowrap"
              title="Open Command Palette (Cmd + K)"
            >
              <Command className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t('nav.search', 'Search')}</span>
              <kbd className="hidden sm:inline bg-slate-200 dark:bg-slate-900 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 dark:text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Language Switcher Dropdown */}
            <LanguageSwitcher />

            {/* Dark / Light / System Theme Toggle Dropdown */}
            <ThemeToggle />

            {/* Resume / Hire Me Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 min-w-fit"
            >
              {t('nav.hireMe', 'Hire Me')}
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-30 lg:hidden glass-card border-b border-slate-200 dark:border-slate-800 p-6 shadow-2xl bg-white/95 dark:bg-slate-900/95"
          >
            <div className="grid grid-cols-2 gap-3">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-left text-sm font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <div className="flex gap-3">
                <a
                  href="https://github.com/sakouksa"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-xl hover:text-blue-600"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/sakousa"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-xl hover:text-blue-600"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl shadow-md whitespace-nowrap"
              >
                {t('nav.hireMe', 'Hire Me')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
