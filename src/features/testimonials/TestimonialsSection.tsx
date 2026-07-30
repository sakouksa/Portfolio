import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIAL_ITEMS } from '../../lib/constants';
import { useTranslation } from 'react-i18next';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation(['portfolio', 'common']);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIAL_ITEMS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIAL_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIAL_ITEMS[currentIndex];

  return (
    <section id="testimonials" className="py-20 pb-32 sm:pb-36 relative bg-grid-pattern overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('testimonials.badge', 'Client Recommendations')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-normal leading-tight">
            {t('testimonials.title', 'Trusted by Leaders &')}{' '}
            <span className="gradient-text-primary">{t('testimonials.highlight', 'Founders')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-snug sm:leading-normal">
            {t('testimonials.subtitle', 'What product leaders, CTOs, and designers say about my engineering impact.')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative glass-card p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          <Quote className="absolute top-6 right-8 w-24 h-24 text-blue-600/10 dark:text-violet-500/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-6 relative z-10"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-lg sm:text-2xl font-medium font-heading text-slate-800 dark:text-slate-200 italic leading-relaxed">
                "{t(`testimonials.items.${current.id}.content`, current.content)}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-600 dark:border-violet-500 shrink-0"
                />
                <div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    {current.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {t(`testimonials.items.${current.id}.role`, current.role)} at <span className="font-semibold text-blue-600 dark:text-violet-400">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            
            {/* Indicators */}
            <div className="flex gap-2">
              {TESTIMONIAL_ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx
                      ? 'w-8 bg-gradient-to-r from-blue-600 to-violet-600'
                      : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
