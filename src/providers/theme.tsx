import { useThemeStore } from '@/stores/useThemeStore';
import { StatusBarTheme, Themes, THEMES, ThemesVariant } from '@/styles/themes';
import clsx from 'clsx';
import { StatusBar } from 'expo-status-bar';
import { createContext, useCallback, useContext } from 'react';
import { View, ViewProps } from 'react-native';

type ThemeContextValues = {
  theme: ThemesVariant;
};

const ThemeProviderValues = createContext<ThemeContextValues>({
  theme: THEMES.light,
});

export function useThemeContextValues() {
  return useContext(ThemeProviderValues);
}

type ThemeContextActions = {
  handleThemeSwitch: (newTheme: ThemesVariant) => void;
};

const ThemeProviderActions = createContext<ThemeContextActions>(
  {} as ThemeContextActions,
);

export function useThemeContextActions() {
  return useContext(ThemeProviderActions);
}

type ThemeProps = ViewProps;

export function ThemeProvider(props: ThemeProps) {
  const { currentTheme, changeTheme } = useThemeStore();

  const handleThemeSwitch = useCallback(
    (newTheme: ThemesVariant) => {
      changeTheme(newTheme);
    },
    [changeTheme],
  );

  return (
    <View
      style={[Themes[currentTheme], { direction: 'ltr' }]}
      className={clsx('flex-1', props.className)}
    >
      <ThemeProviderValues.Provider value={{ theme: currentTheme }}>
        <ThemeProviderActions.Provider value={{ handleThemeSwitch }}>
          <StatusBar
            style={StatusBarTheme[currentTheme]?.style}
            backgroundColor={StatusBarTheme[currentTheme]?.background}
          />
          {props.children}
        </ThemeProviderActions.Provider>
      </ThemeProviderValues.Provider>
    </View>
  );
}
