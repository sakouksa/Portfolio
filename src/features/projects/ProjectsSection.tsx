import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Sparkles,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { PROJECT_ITEMS } from '../../lib/constants';
import { ProjectCategory } from '../../types/portfolio.types';
import { usePortfolioStore } from '../../store/usePortfolioStore';

const CATEGORIES: ProjectCategory[] = ['All', 'Full Stack', 'Mobile', 'Frontend'];
const ITEMS_PER_PAGE = 3;

// Page transition variants — simple fade + slight Y shift, no scale
const pageVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const ProjectsSection: React.FC = () => {
  const { setSelectedProject } = usePortfolioStore();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation(['portfolio', 'common']);

  const filteredProjects = PROJECT_ITEMS.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageProjects = filteredProjects.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  // Reset page when category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-600/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t('projects.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t('projects.title')}{' '}
            <span className="gradient-text-primary">{t('projects.highlight')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs with active pill spring animation */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    isSelected
                      ? 'text-white shadow-lg shadow-blue-500/25 scale-105'
                      : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="active-project-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    {cat === 'All' ? t('common:buttons.allCategories', 'All Categories') : cat}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t('projects.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

        </div>

        {/* Page count & total items label */}
        {filteredProjects.length > 0 && (
          <div className="flex items-center justify-between mb-6 px-1">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {t('skills.showing', {
                from: startIdx + 1,
                to: Math.min(startIdx + ITEMS_PER_PAGE, filteredProjects.length),
                total: filteredProjects.length,
              })}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {t('skills.page', { current: currentPage, total: totalPages })}
            </p>
          </div>
        )}

        {/* Projects Grid — smooth crossfade between pages */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {t('projects.noResults')}
            </p>
          </div>
        ) : (
          <div className="relative min-h-[440px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeCategory}-${searchQuery}-page-${currentPage}`}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {pageProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden glow-card group flex flex-col justify-between"
                  >
                    <div>
                      {/* Project Image Header */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/90 text-white backdrop-blur-md border border-white/10">
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/90 text-white backdrop-blur-md flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Featured
                            </span>
                          )}
                        </div>

                        <div className="absolute top-4 right-4 flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl bg-slate-900/80 text-white hover:bg-blue-600 transition-colors backdrop-blur-md"
                            aria-label="GitHub Repository"
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl bg-slate-900/80 text-white hover:bg-blue-600 transition-colors backdrop-blur-md"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 space-y-3">
                        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-colors flex items-center justify-between">
                          <span>{t(`projects.items.${project.id}.title`, { defaultValue: project.title })}</span>
                          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>

                        <p className="text-xs text-blue-600 dark:text-violet-400 font-medium">
                          {t(`projects.items.${project.id}.subtitle`, { defaultValue: project.subtitle })}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                          {t(`projects.items.${project.id}.description`, { defaultValue: project.description })}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Tech Tags */}
                    <div className="px-6 pb-6 pt-2 space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 transition-colors"
                      >
                        {t('common:buttons.viewCaseStudy', 'View Case Study & Architecture')}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-12">
            {/* Prev */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page number buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`relative w-9 h-9 rounded-xl text-xs font-bold transition-all duration-200 ${
                  page === currentPage
                    ? 'text-white shadow-lg shadow-blue-500/25 scale-110'
                    : 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {page === currentPage && (
                  <motion.span
                    layoutId="page-project-active"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{page}</span>
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
