import { PortalHost } from '@rn-primitives/portal';
import React from 'react';
import { I18nProvider } from './intl';
import KeyboardProvider from './keyboard';
import { ThemeProvider } from './theme';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <KeyboardProvider>
      <I18nProvider>
        <ThemeProvider>
          {children}
          <PortalHost />
        </ThemeProvider>
      </I18nProvider>
    </KeyboardProvider>
  );
};

export default RootProvider;
