import React, { createContext, useCallback, useContext, useState } from 'react';
import { getCurrentLocale, setLocale as setI18nLocale } from '../locales';

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: getCurrentLocale(),
  setLocale: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState(getCurrentLocale());

  const setLocale = useCallback((newLocale: string) => {
    setI18nLocale(newLocale);
    setLocaleState(newLocale);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
