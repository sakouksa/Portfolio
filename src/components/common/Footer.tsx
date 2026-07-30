import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { DEVELOPER_PROFILE } from '../../lib/constants';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer: React.FC = () => {
  const { t } = useTranslation(['common']);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white pt-16 pb-24 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold font-heading text-lg shadow-lg">
                SO
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                {t('devName', DEVELOPER_PROFILE.name)}
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t('footer.available')}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base uppercase tracking-wider text-slate-900 dark:text-slate-200">
              {t('footer.quickNav')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.about')}</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.skills')}</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.projects')}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.services')}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.contact')}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-base uppercase tracking-wider text-slate-900 dark:text-slate-200">
              {t('footer.stayConnected')}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
              {t('footer.subscribeText')}
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shrink-0">
                {t('footer.join')}
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-3">
                <a href={DEVELOPER_PROFILE.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href={DEVELOPER_PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href={DEVELOPER_PROFILE.twitter} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors">
                  <FaXTwitter className="w-4 h-4" />
                </a>
              </div>
              <LanguageSwitcher />
            </div>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} {t('devName', DEVELOPER_PROFILE.name)}. {t('footer.rights')}</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
          >
            <span>{t('buttons.backToTop')}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
