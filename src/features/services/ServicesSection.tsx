import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Layout, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Wrench 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SERVICE_ITEMS } from '../../lib/constants';
import { ServiceItem } from '../../types/portfolio.types';
import { usePortfolioStore } from '../../store/usePortfolioStore';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  Bot,
  Layout,
};

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation(['portfolio', 'common']);
  const setSelectedService = usePortfolioStore((state) => state.setSelectedService);

  const scrollToContact = (service: ServiceItem) => {
    setSelectedService(service);
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="scroll-mt-24 pt-28 pb-20 sm:pt-36 sm:pb-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Wrench className="w-3.5 h-3.5" />
            <span>{t('services.badge', 'Services & Solutions')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t('services.title', 'High-Impact Engineering')}{' '}
            <span className="gradient-text-primary">{t('services.highlight', 'Services')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t('services.subtitle', 'From initial product MVP architecture to full-stack scaling, AI integration, and design systems.')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SERVICE_ITEMS.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName] || Globe;
            const translatedTitle = t(`services.items.${service.id}.title`, { defaultValue: service.title });
            const translatedDesc = t(`services.items.${service.id}.description`, { defaultValue: service.fullDesc });
            
            // Get translated features list or fallback
            const rawFeatures = t(`services.items.${service.id}.features`, { returnObjects: true, defaultValue: service.features });
            const featuresList = Array.isArray(rawFeatures) ? rawFeatures : service.features;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`p-6 sm:p-8 rounded-3xl border shadow-xl shadow-slate-900/5 glow-card relative flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 ${
                  service.popular
                    ? 'bg-gradient-to-br from-blue-500/15 via-violet-500/15 to-indigo-500/15 dark:from-blue-950/50 dark:via-violet-950/50 dark:to-indigo-950/50 border-violet-500/30 dark:border-violet-500/40 ring-1 ring-violet-500/20 shadow-violet-500/10'
                    : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    {/* Top Bar with Icon & Popular Badge */}
                    <div className="flex items-center justify-between mb-6 min-h-[56px]">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 shrink-0">
                        <Icon className="w-7 h-7" />
                      </div>

                      {service.popular ? (
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-600/20 flex items-center gap-1.5 shadow-sm">
                          <Sparkles className="w-3.5 h-3.5" />
                          {t('services.mostRequested', 'Most Requested')}
                        </span>
                      ) : (
                        <div className="h-7" />
                      )}
                    </div>

                    {/* Title & Description with uniform vertical alignment */}
                    <div className="mb-6">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2.5 min-h-[36px] flex items-center">
                        {translatedTitle}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed min-h-[52px] sm:min-h-[56px] flex items-start">
                        {translatedDesc}
                      </p>
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-3 mb-8 pt-5 border-t border-slate-200/60 dark:border-slate-800/60">
                      <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                        {t('services.capabilities', 'Key Scope & Capabilities:')}
                      </span>
                      <div className="space-y-2.5">
                        {featuresList.map((feature: string) => (
                          <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <button
                    onClick={() => scrollToContact(service)}
                    className="w-full py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 border border-slate-800 dark:border-white/10 transition-colors flex items-center justify-center gap-2 group text-center mt-auto"
                  >
                    <span className="truncate">{t('services.inquireBtn', 'Inquire About This Service')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
