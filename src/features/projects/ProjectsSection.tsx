import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Layers
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { PROJECT_ITEMS } from '../../lib/constants';
import { ProjectCategory } from '../../types/portfolio.types';
import { usePortfolioStore } from '../../store/usePortfolioStore';

const CATEGORIES: ProjectCategory[] = ['All', 'Full Stack', 'Frontend', 'Mobile', 'AI / Data', 'Cloud / Systems'];

export const ProjectsSection: React.FC = () => {
  const { projectFilter, setProjectFilter, searchQuery, setSearchQuery, setSelectedProject } = usePortfolioStore();

  const filteredProjects = PROJECT_ITEMS.filter((project) => {
    const matchesCategory = projectFilter === 'All' || project.category === projectFilter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-violet-400 border border-blue-600/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Crafted with Precision & <span className="gradient-text-primary">Performance</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Explore my latest enterprise applications, open source libraries, and AI solutions.
          </p>
        </div>

        {/* Controls Bar: Search & Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  projectFilter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or name..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-slate-200 dark:border-slate-800"
            />
          </div>

        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400">
            No projects match your current search criteria.
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 glow-card overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Project Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                      {/* Category Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white border border-white/20 backdrop-blur-md">
                        {project.category}
                      </span>

                      {/* Top Action Icons */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl bg-slate-900/80 text-white hover:bg-blue-600 transition-colors backdrop-blur-md"
                            title="Live Preview"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl bg-slate-900/80 text-white hover:bg-blue-600 transition-colors backdrop-blur-md"
                            title="GitHub Source Code"
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-3">
                      <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs font-medium text-blue-600 dark:text-violet-400">
                        {project.subtitle}
                      </p>

                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-lg text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold text-slate-400">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <Layers className="w-4 h-4" />
                      View Case Study & Architecture
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};
