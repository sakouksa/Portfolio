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
            <span>Technical Proficiency</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-slate-900 dark:text-white">
            Skill & Tech Stack <span className="gradient-text-primary">Proficiency</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Detailed proficiency scores and years of hands-on field experience across frameworks, databases, and core tooling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <button
            onClick={() => setActiveFilter('All')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'All'
                ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                : 'glass-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
            }`}
          >
            All Skills ({SKILL_ITEMS.length})
          </button>
          {CATEGORIES_CONFIG.map((cat) => {
            const Icon = cat.icon;
            const count = SKILL_ITEMS.filter(s => s.category === cat.id).length;
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'glass-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4 text-blue-600 dark:text-violet-400" />
                <span>{cat.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Proficiency Bars Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = TECH_ICON_MAP[skill.name];
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 glow-card relative overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xl shadow-md transition-transform group-hover:scale-105"
                          style={{ backgroundColor: skill.bgColor, color: skill.textColor }}
                        >
                          {IconComponent ? <IconComponent className="w-6 h-6" /> : skill.name.slice(0, 2)}
                        </div>
                        <div>
                          <h3 className="font-heading font-extrabold text-base text-slate-900 dark:text-white tracking-wide">
                            {skill.name}
                          </h3>
                          <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      {/* Years Exp Badge */}
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-600/20 shrink-0">
                        {skill.years} Yrs Exp
                      </span>
                    </div>

                    {/* Progress Bar & Percentage */}
                    <div className="space-y-2.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px]">Proficiency Level</span>
                        <span className="text-blue-600 dark:text-violet-400 font-mono text-sm">{skill.level}%</span>
                      </div>

                      <div className="h-3 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                          className="h-full rounded-full shadow-md"
                          style={{ 
                            backgroundColor: skill.bgColor,
                            boxShadow: `0 0 10px ${skill.bgColor}80` 
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Core Stack Indicator Pill */}
                  {skill.featured && (
                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5 text-amber-500 dark:text-amber-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        Core Production Stack
                      </span>
                      <span className="text-slate-400 dark:text-slate-500">Expert Mastery</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
