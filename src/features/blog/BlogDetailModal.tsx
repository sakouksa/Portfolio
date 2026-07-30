import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Tag, Sparkles } from 'lucide-react';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { modalVariants } from '../../lib/framer-variants';
import { useTranslation } from 'react-i18next';

export const BlogDetailModal: React.FC = () => {
  const { selectedBlog, setSelectedBlog } = usePortfolioStore();
  const { t } = useTranslation(['portfolio', 'common']);

  if (!selectedBlog) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <div 
          className="fixed inset-0"
          onClick={() => setSelectedBlog(null)} 
        />

        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[85vh] flex flex-col"
        >
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-20">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-600/20">
                {selectedBlog.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                {t(`blog.items.${selectedBlog.id}.title`, selectedBlog.title)}
              </h2>
            </div>

            <button
              onClick={() => setSelectedBlog(null)}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl bg-slate-100 dark:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-6 overflow-y-auto">
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {t(`blog.items.${selectedBlog.id}.date`, selectedBlog.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {t(`blog.items.${selectedBlog.id}.readTime`, selectedBlog.readTime)}
              </span>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <img src={selectedBlog.coverImage} alt={selectedBlog.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-4">
              <p className="font-semibold text-lg leading-relaxed text-slate-900 dark:text-white">
                {t(`blog.items.${selectedBlog.id}.summary`, selectedBlog.summary)}
              </p>
              <p className="leading-relaxed">
                {t(`blog.items.${selectedBlog.id}.content`, selectedBlog.content)}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
              {selectedBlog.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
