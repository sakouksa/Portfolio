import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Award,
  ChevronDown,
  FileText
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { DEVELOPER_PROFILE } from '../../lib/constants';
import { fadeIn, staggerContainer } from '../../lib/framer-variants';

export const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation(['portfolio', 'common']);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-slate-50 dark:bg-slate-950 bg-grid-pattern text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      
      {/* Background Gradient Mesh Balls */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-violet-600/15 to-cyan-400/15 dark:from-blue-600/20 dark:via-violet-600/20 dark:to-cyan-400/20 rounded-full blur-3xl pointer-events-none animate-aurora" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <motion.div variants={fadeIn('up', 0.1)} className="inline-flex items-center gap-2 max-w-full">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm whitespace-nowrap">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t('hero.status')}</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={fadeIn('up', 0.2)}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.2]"
            >
              {t('hero.greeting')}{' '}
              <span className="gradient-text-primary">
                {t('common:devName', DEVELOPER_PROFILE.name)}
              </span>
            </motion.h1>

            {/* Animated Typing Subhead */}
            <motion.div 
              variants={fadeIn('up', 0.3)}
              className="text-base sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 min-h-[4rem] sm:min-h-[3.5rem] flex items-center justify-center lg:justify-start gap-2"
            >
              <Sparkles className="w-5 h-5 text-violet-500 shrink-0 hidden sm:inline" />
              <TypeAnimation
                key={i18n.language}
                sequence={[
                  t('hero.role1'),
                  2000,
                  t('hero.role2'),
                  2000,
                  t('hero.role3'),
                  2000,
                  t('hero.role4'),
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-600 dark:text-violet-400 font-bold"
              />
            </motion.div>

            {/* Subtitle Bio */}
            <motion.p 
              variants={fadeIn('up', 0.4)}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero.tagline')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeIn('up', 0.5)}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-2xl shadow-xl shadow-blue-500/25 flex items-center gap-2 group transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>{t('common:buttons.viewProjects', 'View Projects')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <a
                href={DEVELOPER_PROFILE.resumeUrl !== '#' ? DEVELOPER_PROFILE.resumeUrl : '/Mr._SAKOUSA_CV.pdf'}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 text-base font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-md flex items-center gap-2 transition-all hover:scale-[1.02] whitespace-nowrap"
              >
                <FileText className="w-5 h-5 text-blue-600 dark:text-violet-400 shrink-0" />
                <span>{t('common:buttons.viewCv', 'View CV (PDF)')}</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 text-base font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-md flex items-center gap-2 transition-all hover:scale-[1.02] whitespace-nowrap"
              >
                <Download className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{t('common:buttons.contactMe', 'Contact Me')}</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={fadeIn('up', 0.6)}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-600 dark:text-slate-400"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap">{t('hero.connect')}</span>
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-violet-400 transition-colors shadow-sm"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={DEVELOPER_PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-violet-400 transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={DEVELOPER_PROFILE.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-violet-400 transition-colors shadow-sm"
                aria-label="Twitter Profile"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-violet-400 transition-colors shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column Profile Card & Floating Badges */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-72 sm:w-80 lg:w-96">
              
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 rounded-3xl blur-xl opacity-75 animate-pulse" />

              {/* Profile Card Box */}
              <div className="relative glass-card p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group bg-white/80 dark:bg-slate-900/80">
                <img
                  src={DEVELOPER_PROFILE.avatarUrl}
                  alt={DEVELOPER_PROFILE.name}
                  className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 inset-x-8 p-3.5 rounded-xl glass-card bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md flex items-center justify-between shadow-xl">
                  <div>
                    <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white whitespace-nowrap">
                      {t('hero.location')}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium whitespace-nowrap">
                      {t('hero.timeZone')}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
                </div>
              </div>

              {/* Floating Badge 1: Experience */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 glass-card bg-white/95 dark:bg-slate-900/95 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white whitespace-nowrap">
                    {DEVELOPER_PROFILE.yearsExperience}+ {t('hero.yearsExp')}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium whitespace-nowrap">
                    {t('hero.seniorExp')}
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Completed Projects */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-6 glass-card bg-white/95 dark:bg-slate-900/95 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white whitespace-nowrap">
                    {DEVELOPER_PROFILE.completedProjects}+ {t('hero.completedProjects')}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium whitespace-nowrap">
                    {t('hero.shippedProduction')}
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Scroll Down Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-violet-400 transition-colors group whitespace-nowrap"
          >
            <span>{t('hero.scrollDown')}</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
