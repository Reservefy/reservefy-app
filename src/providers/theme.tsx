import { DARK_THEME, LIGHT_THEME } from '@/constants/colors';
import { useThemeStore } from '@/stores/useThemeStore';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useColorScheme as useNativewindColorScheme } from 'nativewind';
import React, { createContext, useContext, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useThemeStore();
  const { setColorScheme } = useNativewindColorScheme();
  const isDark = theme === 'dark';

  // Sync NativeWind theme with our persisted theme
  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  const themeContextValue = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <NavigationThemeProvider value={isDark ? DARK_THEME : LIGHT_THEME}>
        {children}
      </NavigationThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
