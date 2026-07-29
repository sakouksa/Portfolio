import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, DollarSign, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../../lib/constants';
import { PricingTier } from '../../types/portfolio.types';

export const PricingSection: React.FC = () => {
  const scrollToContact = (tier: PricingTier) => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Transparent Project Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Flexible Freelance & <span className="gradient-text-primary">Consultancy</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Fixed-rate packages engineered for speed, clean architecture, and total transparency.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 glow-card relative flex flex-col justify-between ${
                tier.popular ? 'gradient-border' : ''
              }`}
            >
              <div>
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular Choice
                  </span>
                )}

                <div className="mb-6 pt-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {tier.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
                    {tier.price}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    /{tier.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </span>
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToContact(tier)}
                className={`w-full py-3.5 px-4 rounded-2xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:scale-[1.02]'
                    : 'bg-slate-900 text-white dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20'
                }`}
              >
                {tier.ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
