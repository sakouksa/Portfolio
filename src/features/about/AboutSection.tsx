import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Code2, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  Award,
  Globe2
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '../../lib/constants';
import { fadeIn, staggerContainer } from '../../lib/framer-variants';

const CORE_VALUES = [
  {
    icon: Code2,
    title: 'Clean & Scalable Code',
    description: 'Adhering strictly to SOLID, DRY, and modular architectural principles with strict TypeScript typings.'
  },
  {
    icon: Zap,
    title: '100/100 Performance',
    description: 'Optimized asset pipelines, code splitting, memoization, and dynamic lazy loading for sub-second speeds.'
  },
  {
    icon: ShieldCheck,
    title: 'WCAG AA Accessibility',
    description: 'Building fully accessible interfaces with complete ARIA support and fluid keyboard navigation.'
  },
  {
    icon: Sparkles,
    title: 'Apple & Vercel Aesthetics',
    description: 'Crafting pixel-perfect layouts with smooth Framer Motion gestures, glassmorphism, and micro-interactions.'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-violet-400 border border-blue-600/20">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Architecting the Future of{' '}
            <span className="gradient-text-primary">Digital Experiences</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A passionate engineer dedicated to building modern software that combines powerful backend architecture with beautiful, accessible interfaces.
          </p>
        </div>

        {/* Story & Statistics Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20"
        >
          {/* Left Text Narrative */}
          <motion.div variants={fadeIn('right', 0.2)} className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
              Passionate Software Architect with {DEVELOPER_PROFILE.yearsExperience}+ Years of Field Mastery
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {DEVELOPER_PROFILE.bio}
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              Throughout my career, I've had the privilege of collaborating with high-growth startups and global enterprises. From engineering real-time generative AI workbenches to building high-throughput microservices, my focus is always on delivering measurable business impact and user delight.
            </p>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
                <span className="block text-xs text-slate-400 font-semibold uppercase">Location</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {DEVELOPER_PROFILE.location}
                </span>
              </div>
              <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
                <span className="block text-xs text-slate-400 font-semibold uppercase">Degree</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  B.S. CS & HCI (UC Berkeley)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Statistics Counter Card */}
          <motion.div variants={fadeIn('left', 0.3)} className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 gradient-border">
              <h4 className="font-heading font-bold text-xl text-slate-900 dark:text-white pb-4 border-b border-slate-200 dark:border-slate-800">
                Key Performance Metrics
              </h4>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-600 dark:text-violet-400">
                    {DEVELOPER_PROFILE.yearsExperience}+
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                    Years Experience
                  </span>
                </div>

                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-violet-600 dark:text-cyan-400">
                    {DEVELOPER_PROFILE.completedProjects}+
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                    Completed Projects
                  </span>
                </div>

                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-cyan-500 dark:text-emerald-400">
                    {DEVELOPER_PROFILE.happyClients}+
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                    Satisfied Clients
                  </span>
                </div>

                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-500 dark:text-blue-400">
                    {DEVELOPER_PROFILE.githubStars}+
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                    GitHub Stars
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Engineering Values Cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-8 text-center">
            Core Engineering Principles
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 glow-card hover:-translate-y-2 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600/10 to-violet-600/10 text-blue-600 dark:text-violet-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
