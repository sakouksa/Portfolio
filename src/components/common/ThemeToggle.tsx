import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { ThemeMode } from '../../types/portfolio.types';
import { useTranslation } from 'react-i18next';

export const ThemeToggle: React.FC = () => {
  const { themeMode, setThemeMode, theme } = usePortfolioStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const THEMES: { id: ThemeMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'light', label: t('theme.light', 'Light'), icon: Sun },
    { id: 'dark', label: t('theme.dark', 'Dark'), icon: Moon },
    { id: 'system', label: t('theme.system', 'System'), icon: Laptop },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-800/80 rounded-xl transition-colors flex items-center justify-center"
        aria-label="Toggle Theme"
        title={`Current theme: ${themeMode}`}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-violet-400 transition-transform duration-300" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500 transition-transform duration-300 rotate-0 hover:rotate-90" />
        )}
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-40 glass-card bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-1.5 z-50 space-y-1"
          >
            {THEMES.map((item) => {
              const Icon = item.icon;
              const isSelected = themeMode === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setThemeMode(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
