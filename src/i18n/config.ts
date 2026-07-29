import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEn from './locales/en/common.json';
import portfolioEn from './locales/en/portfolio.json';

import commonKh from './locales/kh/common.json';
import portfolioKh from './locales/kh/portfolio.json';

const resources = {
  en: {
    common: commonEn,
    portfolio: portfolioEn,
  },
  kh: {
    common: commonKh,
    portfolio: portfolioKh,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'portfolio'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'portfolio-language',
    },
    interpolation: {
      escapeValue: false, // react handles escaping safely
    },
  });

export default i18n;
