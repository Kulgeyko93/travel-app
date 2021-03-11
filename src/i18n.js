import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './assets/locales/en/translation.json';
import translationRU from './assets/locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  supportedLngs: ['en', 'ru', 'be'],
});

export default i18n;
