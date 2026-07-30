import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  Star, 
  GitFork, 
  Code, 
  ExternalLink, 
  GitCommit, 
  BookOpen 
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTranslation } from 'react-i18next';

const TOP_REPOS = [
  {
    name: "laravel-school-pos-system",
    descKey: "github.repos.repo1.desc",
    defaultDesc: "Full-featured School ERP & Enterprise POS management system built with PHP Laravel and PostgreSQL.",
    stars: 480,
    forks: 92,
    language: "PHP",
    color: "#777BB4",
    url: "https://github.com"
  },
  {
    name: "csharp-inventory-core",
    descKey: "github.repos.repo2.desc",
    defaultDesc: "Desktop Inventory & Sales Management application developed using C# .NET and SQL Server.",
    stars: 350,
    forks: 64,
    language: "C#",
    color: "#512BD4",
    url: "https://github.com"
  },
  {
    name: "python-data-automation",
    descKey: "github.repos.repo3.desc",
    defaultDesc: "Automated Data Processing Engine & Web Scraper built with Python, Pandas, and FastAPI.",
    stars: 290,
    forks: 48,
    language: "Python",
    color: "#3776AB",
    url: "https://github.com"
  }
];

const LANGUAGE_DATA = [
  { name: "PHP / Laravel", value: 45, color: "#777BB4" },
  { name: "C# / .NET", value: 30, color: "#512BD4" },
  { name: "Python", value: 15, color: "#3776AB" },
  { name: "JavaScript / HTML", value: 10, color: "#F7DF1E" }
];

export const GitHubSection: React.FC = () => {
  const { t } = useTranslation(['portfolio', 'common']);

  return (
    <section id="github" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t('github.badge', 'Open Source & GitHub')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t('github.title', 'Building in Public &')}{' '}
            <span className="gradient-text-primary">{t('github.highlight', 'Open Source')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t('github.subtitle', 'Contributing back to the developer ecosystem with public repositories and tools.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Chart Stats */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white flex items-center justify-between">
              <span>{t('github.breakdown', 'Language Breakdown')}</span>
              <span className="text-xs text-slate-400 font-normal">{t('github.publicCodebase', 'Public Codebase')}</span>
            </h3>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={LANGUAGE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {LANGUAGE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      borderRadius: '12px',
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {LANGUAGE_DATA.map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-xs">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{item.name}:</span>
                  <span className="text-slate-400">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Pinned Repos Grid */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
              {t('github.featuredRepos', 'Featured Public Repositories')}
            </h3>

            <div className="space-y-4">
              {TOP_REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 glow-card hover:-translate-y-1 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600 dark:text-violet-400" />
                      <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-colors">
                        {repo.name}
                      </h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {t(repo.descKey, repo.defaultDesc)}
                  </p>

                  <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.color }} />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
