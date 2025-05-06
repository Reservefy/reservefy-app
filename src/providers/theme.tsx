import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as ThemeProviderComponent,
} from '@react-navigation/native';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProviderComponent
      value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {children}
    </ThemeProviderComponent>
  );
};

export default ThemeProvider;
