import React from 'react';

import { LanguageProvider } from '@/context/LanguageContext';
import ThemeProvider from './theme';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LanguageProvider>
  );
};

export default RootProvider;
