import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { FAQ_ITEMS } from '../../lib/constants';
import { useTranslation } from 'react-i18next';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation(['portfolio', 'common']);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = FAQ_ITEMS.map((item) => ({
    ...item,
    translatedQuestion: t(`faq.items.${item.id}.question`, item.question),
    translatedAnswer: t(`faq.items.${item.id}.answer`, item.answer)
  })).filter((item) =>
    item.translatedQuestion.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.translatedAnswer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-violet-400 border border-blue-600/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('faq.badge', 'Frequently Asked Questions')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t('faq.title', 'Got Questions?')}{' '}
            <span className="gradient-text-primary">{t('faq.highlight', 'Answers')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t('faq.subtitle', 'Everything you need to know about working with me.')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md mx-auto">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('faq.searchPlaceholder', 'Search questions...')}
            className="w-full pl-10 pr-4 py-3 rounded-2xl glass-card text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-slate-200 dark:border-slate-800"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-violet-400 transition-colors"
                >
                  <span>{faq.translatedQuestion}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-violet-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 pt-4">
                        {faq.translatedAnswer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
