import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './assets/locales/en/translation.json';
import translationRU from './assets/locales/ru/translation.json';
import translationUZ from './assets/locales/uz/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    // lng: JSON.parse(localStorage.getItem('settings') || '{}').lang || 'en',
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'ru', 'uz'],
  });

export default i18n;
