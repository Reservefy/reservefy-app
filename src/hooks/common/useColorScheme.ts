import { useThemeStore } from '@/stores/useThemeStore';
import { useColorScheme as useNativewindColorScheme } from 'nativewind';
import { useEffect } from 'react';

export function useColorScheme() {
  const { colorScheme, setColorScheme } = useNativewindColorScheme();
  const { currentTheme } = useThemeStore();

  // Sync NativeWind color scheme with theme store
  useEffect(() => {
    setColorScheme(currentTheme);
  }, [currentTheme, setColorScheme]);

  return {
    colorScheme,
    isDarkColorScheme: colorScheme === 'dark',
    setColorScheme,
  };
}
