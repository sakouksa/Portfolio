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
    <section id="services" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Wrench className="w-3.5 h-3.5" />
            <span>Services & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            High-Impact Engineering <span className="gradient-text-primary">Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            From initial product MVP architecture to full-stack scaling, AI integration, and design systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_ITEMS.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 glow-card relative flex flex-col justify-between ${
                  service.popular ? 'gradient-border' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Popular Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Icon className="w-7 h-7" />
                    </div>

                    {service.popular && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-600/20 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Most Requested
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Key Scope & Capabilities:
                    </span>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => scrollToContact(service)}
                  className="w-full py-3.5 px-4 rounded-2xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 border border-slate-800 dark:border-white/10 transition-colors flex items-center justify-center gap-2 group"
                >
                  Inquire About {service.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
