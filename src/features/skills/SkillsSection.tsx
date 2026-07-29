import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  Globe, 
  Settings, 
  Smartphone, 
  Laptop, 
  Database, 
  Sparkles,
  Code2
} from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiAntdesign,
  SiVite,
  SiJquery,
  SiSpringboot,
  SiSpring,
  SiLaravel,
  SiNodedotjs,
  SiDotnet,
  SiDjango,
  SiFlutter,
  SiDart,
  SiSharp,
  SiPython,
  SiPhp,
  SiC,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiIntellijidea,
  SiPhpstorm,
  SiAndroidstudio,
  SiPostman,
  SiVercel
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import { TbDatabase } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import { SKILL_ITEMS } from '../../lib/constants';
import { SkillCategory } from '../../types/portfolio.types';

// Map Tech Name to Brand Icon
const TECH_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  JAVASCRIPT: SiJavascript,
  TYPESCRIPT: SiTypescript,
  REACT: SiReact,
  HTML5: SiHtml5,
  CSS: SiCss,
  'TAILWIND CSS': SiTailwindcss,
  BOOTSTRAP: SiBootstrap,
  'ANT DESIGN': SiAntdesign,
  VITE: SiVite,
  JQUERY: SiJquery,
  'SPRING BOOT': SiSpringboot,
  'SPRING FRAMEWORK': SiSpring,
  LARAVEL: SiLaravel,
  'NODE.JS': SiNodedotjs,
  'ASP.NET CORE': SiDotnet,
  'ASP.NET': SiDotnet,
  DJANGO: SiDjango,
  FLUTTER: SiFlutter,
  DART: SiDart,
  JAVA: FaJava,
  'C#': SiSharp,
  PYTHON: SiPython,
  PHP: SiPhp,
  C: SiC,
  'C++': SiCplusplus,
  MYSQL: SiMysql,
  POSTGRESQL: SiPostgresql,
  'SQL SERVER': TbDatabase,
  GIT: SiGit,
  'VS CODE': VscVscode,
  'INTELLIJ IDEA': SiIntellijidea,
  PHPSTORM: SiPhpstorm,
  'ANDROID STUDIO': SiAndroidstudio,
  POSTMAN: SiPostman,
  VERCEL: SiVercel,
};

const CATEGORIES_CONFIG: { 
  id: SkillCategory; 
  title: string; 
  icon: React.ComponentType<{ className?: string }> 
}[] = [
  { id: 'Frontend & UI Ecosystem', title: 'Frontend & UI', icon: Globe },
  { id: 'Backend Frameworks & Systems', title: 'Backend & Systems', icon: Settings },
  { id: 'Mobile Development', title: 'Mobile Dev', icon: Smartphone },
  { id: 'Programming Languages & Desktop', title: 'Languages & Desktop', icon: Laptop },
  { id: 'Databases', title: 'Databases', icon: Database },
  { id: 'DevTools & Platforms', title: 'DevTools & Platforms', icon: Wrench },
];

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory | 'All'>('All');
  const { t } = useTranslation(['portfolio', 'common']);

  const filteredSkills = activeFilter === 'All'
    ? SKILL_ITEMS
    : SKILL_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern bg-slate-50/50 dark:bg-slate-950/80 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-600/20 shadow-sm">
            <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{t('skills.sectionBadge')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-slate-900 dark:text-white">
            {t('skills.title')}{' '}
            <span className="gradient-text-primary">{t('skills.highlight')}</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <button
            onClick={() => setActiveFilter('All')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'All'
                ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t('common:buttons.allSkills', 'All Skills')} ({SKILL_ITEMS.length})
          </button>

          {CATEGORIES_CONFIG.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Proficiency Bars Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const BrandIcon = TECH_ICON_MAP[skill.name] || Code2;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 glow-card relative overflow-hidden flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-md transition-transform group-hover:scale-110"
                          style={{ 
                            backgroundColor: `${skill.bgColor}20`,
                            color: skill.bgColor === '#000000' ? '#3B82F6' : skill.bgColor
                          }}
                        >
                          <BrandIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      {skill.featured && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Core
                        </span>
                      )}
                    </div>

                    {/* Progress Bar Score */}
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center text-xs font-semibold">
                        <span className="text-slate-600 dark:text-slate-400">{t('skills.level')}</span>
                        <span className="font-bold font-mono text-blue-600 dark:text-violet-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats Row */}
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span>{skill.years}+ {t('skills.yrsExp')}</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {skill.level >= 90 ? t('skills.mastery') : t('skills.coreStack')}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
