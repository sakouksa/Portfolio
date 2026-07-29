import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Code2, 
  Zap, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DEVELOPER_PROFILE } from '../../lib/constants';
import { fadeIn, staggerContainer } from '../../lib/framer-variants';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation(['portfolio']);

  const CORE_VALUES = [
    {
      icon: Code2,
      title: t('about.val1Title'),
      description: t('about.val1Desc')
    },
    {
      icon: Zap,
      title: t('about.val2Title'),
      description: t('about.val2Desc')
    },
    {
      icon: ShieldCheck,
      title: t('about.val3Title'),
      description: t('about.val3Desc')
    },
    {
      icon: Sparkles,
      title: t('about.val4Title'),
      description: t('about.val4Desc')
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-violet-400 border border-blue-600/20">
            <User className="w-3.5 h-3.5" />
            <span>{t('about.sectionTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t('about.mainHeading')}{' '}
            <span className="gradient-text-primary">{t('about.highlight')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Story & Statistics Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20"
        >
          {/* Left Text Narrative */}
          <motion.div variants={fadeIn('right', 0.2)} className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
              {t('about.bioTitle')}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {t('about.bioParagraph1')}
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {t('about.bioParagraph2')}
            </p>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
                <span className="block text-xs text-slate-400 font-semibold uppercase">{t('about.locationLabel')}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {t('hero.location')}
                </span>
              </div>
              <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
                <span className="block text-xs text-slate-400 font-semibold uppercase">{t('about.degreeLabel')}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {t('about.degreeValue')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Statistics Counter Card */}
          <motion.div variants={fadeIn('left', 0.3)} className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 gradient-border">
              <h4 className="font-heading font-bold text-xl text-slate-900 dark:text-white pb-4 border-b border-slate-200 dark:border-slate-800">
                {t('about.metricsTitle')}
              </h4>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-600 dark:text-violet-400">
                    {DEVELOPER_PROFILE.yearsExperience}+
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                    {t('about.metricYears')}
                  </span>
                </div>

                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-violet-600 dark:text-cyan-400">
                    {DEVELOPER_PROFILE.completedProjects}+
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                    {t('about.metricProjects')}
                  </span>
                </div>

                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-cyan-500 dark:text-emerald-400">
                    {DEVELOPER_PROFILE.happyClients}+
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                    {t('about.metricClients')}
                  </span>
                </div>

                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-500 dark:text-blue-400">
                    {DEVELOPER_PROFILE.githubStars}+
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                    {t('about.metricStars')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Engineering Values Cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t('about.principlesTitle')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 glow-card hover:-translate-y-2 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600/10 to-violet-600/10 text-blue-600 dark:text-violet-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
