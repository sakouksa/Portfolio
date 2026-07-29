import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { modalVariants } from '../../lib/framer-variants';
import { TechTagBadge } from '../../components/common/TechTagBadge';

export const ProjectDetailModal: React.FC = () => {
  const { selectedProject, setSelectedProject } = usePortfolioStore();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { t } = useTranslation(['portfolio', 'common']);

  // Lock body scroll when modal is open to prevent double scrollbars
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setActiveImageIndex(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  if (!selectedProject) return null;

  const galleryImages = selectedProject.gallery && selectedProject.gallery.length > 0
    ? selectedProject.gallery
    : [selectedProject.image];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Localized fields
  const title = t(`projects.items.${selectedProject.id}.title`, { defaultValue: selectedProject.title });
  const description = t(`projects.items.${selectedProject.id}.description`, { defaultValue: selectedProject.description });
  const architecture = t(`projects.items.${selectedProject.id}.architecture`, { defaultValue: selectedProject.architecture });

  const rawChallenges = t(`projects.items.${selectedProject.id}.challenges`, { returnObjects: true, defaultValue: selectedProject.challenges });
  const challenges: string[] = Array.isArray(rawChallenges) ? rawChallenges : (selectedProject.challenges || []);

  const rawSolutions = t(`projects.items.${selectedProject.id}.solutions`, { returnObjects: true, defaultValue: selectedProject.solutions });
  const solutions: string[] = Array.isArray(rawSolutions) ? rawSolutions : (selectedProject.solutions || []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        
        {/* Backdrop click to dismiss */}
        <div 
          className="fixed inset-0"
          onClick={() => setSelectedProject(null)} 
        />

        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-20">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-violet-400 border border-blue-600/20">
                {selectedProject.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                {title}
              </h2>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl bg-slate-100 dark:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 space-y-8 overflow-y-auto">
            
            {/* Gallery Image Display */}
            <div className="space-y-3">
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group bg-slate-950/20">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={galleryImages[activeImageIndex]}
                    alt={title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {galleryImages.length > 1 && (
                  <>
                    {/* Left Arrow Button */}
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/60 hover:bg-blue-600 text-white backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 hover:scale-110 shadow-lg border border-white/10 z-10"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Right Arrow Button */}
                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/60 hover:bg-blue-600 text-white backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 hover:scale-110 shadow-lg border border-white/10 z-10"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Counter Badge */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950/70 text-white backdrop-blur-md border border-white/10 z-10">
                      {activeImageIndex + 1} / {galleryImages.length}
                    </div>
                  </>
                )}
              </div>

              {galleryImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        activeImageIndex === idx
                          ? 'border-blue-600 dark:border-violet-500 scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description & Action Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                {t('projects.overviewTitle')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl shadow-lg shadow-blue-500/25 flex items-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('projects.liveDemo')}
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl flex items-center gap-2 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    {t('projects.sourceCode')}
                  </a>
                )}
              </div>
            </div>

            {/* Performance Metrics Badges */}
            {selectedProject.metrics && selectedProject.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric.label} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center">
                    <span className="block text-2xl font-extrabold font-heading text-blue-600 dark:text-violet-400">
                      {metric.value}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {t(`projects.items.${selectedProject.id}.metrics.${metric.label}`, { defaultValue: metric.label })}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Architecture Details */}
            {architecture && (
              <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-slate-800/40 border border-blue-200/50 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-blue-600 dark:text-violet-400 font-heading font-bold text-base">
                  <Layers className="w-5 h-5" />
                  <span>{t('projects.architectureTitle')}</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {architecture}
                </p>
              </div>
            )}

            {/* Engineering Challenges & Solutions */}
            {challenges.length > 0 && solutions.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-heading font-bold text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{t('projects.challengesTitle')}</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                    {challenges.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-heading font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t('projects.solutionsTitle')}</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                    {solutions.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="space-y-3 pt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                {t('projects.techUsed')}
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <TechTagBadge key={tag} tag={tag} size="md" />
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
