import { useThemeStore } from '@/stores/useThemeStore';
import { useColorScheme as useNativewindColorScheme } from 'nativewind';
import { useEffect } from 'react';

export function useColorScheme() {
  const { colorScheme, setColorScheme } = useNativewindColorScheme();
  const { theme } = useThemeStore();

  // Sync NativeWind color scheme with theme store
  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  return {
    colorScheme: theme,
    isDarkColorScheme: theme === 'dark',
    setColorScheme,
  };
}
