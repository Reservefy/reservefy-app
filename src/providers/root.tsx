import { PortalHost } from '@rn-primitives/portal';
import React from 'react';
import { I18nProvider } from './intl';
import { ThemeProvider } from './theme';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nProvider>
      <ThemeProvider>
        {children}
        <PortalHost />
      </ThemeProvider>
    </I18nProvider>
  );
};

export default RootProvider;
