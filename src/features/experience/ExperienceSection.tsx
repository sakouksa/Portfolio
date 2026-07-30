import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TIMELINE_ITEMS } from '../../lib/constants';
import { TechTagBadge } from '../../components/common/TechTagBadge';

export const ExperienceSection: React.FC = () => {
  const { t } = useTranslation(['portfolio', 'common']);
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = TIMELINE_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section id="experience" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-600/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t('experience.badge', 'Career History & Education')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t('experience.title', 'Track Record of')}{' '}
            <span className="gradient-text-primary">{t('experience.highlight', 'Leadership')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t('experience.subtitle', 'Senior roles, technical accomplishments, and academic specialization.')}
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center mb-16">
          <div className="glass-card p-1.5 rounded-2xl flex items-center gap-1 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('experience.tabs.all', 'All Timeline')}
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              {t('experience.tabs.work', 'Work Experience')}
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              {t('experience.tabs.education', 'Education')}
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-violet-600 to-cyan-500 -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = item.type === 'experience' ? Briefcase : GraduationCap;

              const translatedTitle = t(`experience.items.${item.id}.title`, { defaultValue: item.title });
              const translatedOrg = t(`experience.items.${item.id}.organization`, { defaultValue: item.organization });
              const translatedDesc = t(`experience.items.${item.id}.description`, { defaultValue: item.description });
              const translatedLocation = t(`experience.items.${item.id}.location`, { defaultValue: item.location });

              const rawAchievements = t(`experience.items.${item.id}.achievements`, { returnObjects: true, defaultValue: item.achievements });
              const achievementsList = Array.isArray(rawAchievements) ? rawAchievements : item.achievements;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Node Circle */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 z-10 w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 border-4 border-slate-50 dark:border-slate-950">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Card Box Content */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-right sm:pr-0' : 'sm:pl-0'
                  }`}>
                    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 glow-card space-y-4">
                      
                      {/* Period Badge & Location */}
                      <div className={`flex flex-wrap items-center gap-3 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-violet-400 border border-blue-600/20 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {translatedLocation}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <div>
                        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                          {translatedTitle}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 dark:text-violet-400">
                          {translatedOrg}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {translatedDesc}
                      </p>

                      {/* Achievements List */}
                      {achievementsList && achievementsList.length > 0 && (
                        <div className="space-y-2 pt-2 text-left">
                          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {t('experience.accomplishments', 'Key Accomplishments:')}
                          </span>
                          {achievementsList.map((ach: string, i: number) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      {item.technologies && (
                        <div className={`flex flex-wrap gap-1.5 pt-2 ${
                          isEven ? 'sm:justify-end' : 'justify-start'
                        }`}>
                          {item.technologies.map((tech) => (
                            <TechTagBadge key={tech} tag={tech} size="sm" />
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
