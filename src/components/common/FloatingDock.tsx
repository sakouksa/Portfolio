import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Code, 
  FolderGit2, 
  Wrench, 
  Award, 
  MessageSquare, 
  FileText 
} from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';

const DOCK_ITEMS = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'services', label: 'Services', icon: Wrench },
  { id: 'experience', label: 'Experience', icon: Award },
  { id: 'contact', label: 'Contact', icon: MessageSquare },
];

export const FloatingDock: React.FC = () => {
  const activeSection = useActiveSection(DOCK_ITEMS.map(i => i.id));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:block">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', damping: 20 }}
        className="glass-dock px-3 py-2 rounded-2xl flex items-center gap-2 border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl"
      >
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <div key={item.id} className="relative group">
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                {item.label}
              </div>

              <motion.button
                whileHover={{ scale: 1.25, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`p-3 rounded-xl flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-gradient-to-tr from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70'
                }`}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
