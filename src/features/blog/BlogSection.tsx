import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../lib/constants';
import { usePortfolioStore } from '../../store/usePortfolioStore';

export const BlogSection: React.FC = () => {
  const setSelectedBlog = usePortfolioStore((state) => state.setSelectedBlog);

  return (
    <section id="blog" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-600/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Latest Architectural <span className="gradient-text-primary">Articles</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Thoughts on React 19, web performance, UI aesthetics, and generative AI.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 glow-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white border border-white/20 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedBlog(post)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-blue-600 dark:text-violet-400 bg-blue-50 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
