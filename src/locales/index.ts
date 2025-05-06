import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import en from './en.json';
import ru from './ru.json';
import uz from './uz.json';

const i18n = new I18n({
  en,
  ru,
  uz,
});

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
i18n.defaultLocale = 'en';

export const setLocale = (locale: string) => {
  i18n.locale = locale;
};

export const getCurrentLocale = () => i18n.locale;

export const t = (scope: string, options?: object) => {
  return i18n.t(scope, options);
};

export default i18n;
