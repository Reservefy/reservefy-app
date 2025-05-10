import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform } from 'react-native';

import enLocalization from '@/locales/en.json';
import ruLocalization from '@/locales/ru.json';
import uzLocalization from '@/locales/uz.json';

const resources = {
  'en-US': { translation: enLocalization },
  'ru-RU': { translation: ruLocalization },
  'uz-UZ': { translation: uzLocalization },
};

export const initI18n = async () => {
  let savedLanguage = 'en-US';

  try {
    const localeCode = Localization.getLocales()[0]?.languageCode;
    if (Platform.OS !== 'web') {
      const stored = await AsyncStorage.getItem('language');
      savedLanguage = stored || localeCode || 'en-US';
    } else {
      savedLanguage = localeCode || 'en-US';
    }
  } catch (e) {
    console.warn('Error loading language:', e);
  }

  await i18next.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    lng: savedLanguage,
    fallbackLng: 'en-US',
    resources,
    interpolation: { escapeValue: false },
  });

  return i18next;
};

initI18n();

export default i18next;
