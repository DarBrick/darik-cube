import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enCommon from '../../public/locales/en/common.json';
import enHome from '../../public/locales/en/home.json';
import enPortfolio from '../../public/locales/en/portfolio.json';
import enAbout from '../../public/locales/en/about.json';

import plCommon from '../../public/locales/pl/common.json';
import plHome from '../../public/locales/pl/home.json';
import plPortfolio from '../../public/locales/pl/portfolio.json';
import plAbout from '../../public/locales/pl/about.json';

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pl'],
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    // Translation resources
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        portfolio: enPortfolio,
        about: enAbout,
      },
      pl: {
        common: plCommon,
        home: plHome,
        portfolio: plPortfolio,
        about: plAbout,
      },
    },
    ns: ['common', 'home', 'portfolio', 'about'],
    defaultNS: 'common',
  });

export default i18n;
