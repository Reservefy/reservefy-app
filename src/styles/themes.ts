// theme.config.ts
import { BlurTint } from 'expo-blur';
import { StatusBarStyle } from 'expo-status-bar';
import { vars } from 'nativewind';

export enum THEMES {
  light = 'light',
  dark = 'dark',
}

export type ThemesVariant = (typeof THEMES)[keyof typeof THEMES];

export type StatusBarThemeStyle = {
  [keys in ThemesVariant]: {
    style: StatusBarStyle;
    background: string;
  };
};

export type ThemeColorKeys =
  | '--background'
  | '--foreground'
  | '--muted'
  | '--muted-foreground'
  | '--popover'
  | '--popover-foreground'
  | '--card'
  | '--card-foreground'
  | '--border'
  | '--input'
  | '--primary'
  | '--primary-foreground'
  | '--secondary'
  | '--secondary-foreground'
  | '--accent'
  | '--accent-foreground'
  | '--destructive'
  | '--destructive-foreground'
  | '--ring';

export type ThemeColors = Record<ThemeColorKeys, string>;

export type AllThemes = Record<ThemesVariant, ThemeColors>;

export const THEME_COLORS: AllThemes = {
  light: {
    '--background': '40 20% 97%' /* soft warm white */,
    '--foreground': '240 10% 10%' /* near-black text */,

    '--card': '40 20% 98%',
    '--card-foreground': '240 10% 10%',

    '--popover': '40 20% 98%',
    '--popover-foreground': '240 10% 10%',

    '--primary': '265 60% 85%' /* light purple */,
    '--primary-foreground': '265 60% 25%',

    '--secondary': '220 10% 94%' /* soft gray-blue */,
    '--secondary-foreground': '240 10% 25%',

    '--muted': '220 6% 92%',
    '--muted-foreground': '220 4% 40%',

    '--accent': '220 8% 96%',
    '--accent-foreground': '240 10% 25%',

    '--destructive': '0 85% 72%' /* soft red */,
    '--destructive-foreground': '0 0% 100%',

    '--border': '240 8% 85%',
    '--input': '240 8% 93%',
    '--ring': '265 60% 75%',
  },

  dark: {
    '--background': '240 6% 10%',
    '--foreground': '0 0% 95%',

    '--card': '240 6% 12%',
    '--card-foreground': '0 0% 95%',

    '--popover': '240 6% 12%',
    '--popover-foreground': '0 0% 95%',

    '--primary': '265 60% 75%',
    '--primary-foreground': '0 0% 10%',

    '--secondary': '220 8% 20%',
    '--secondary-foreground': '0 0% 95%',

    '--muted': '220 6% 18%',
    '--muted-foreground': '220 4% 60%',

    '--accent': '220 6% 22%',
    '--accent-foreground': '0 0% 95%',

    '--destructive': '0 72% 60%',
    '--destructive-foreground': '0 0% 100%',

    '--border': '240 6% 22%',
    '--input': '240 6% 18%',
    '--ring': '265 60% 60%',
  },
};

export const Themes = {
  light: vars(THEME_COLORS.light),
  dark: vars(THEME_COLORS.dark),
};

export const StatusBarTheme: StatusBarThemeStyle = {
  light: {
    style: 'dark',
    background: '#fff',
  },
  dark: {
    style: 'light',
    background: '#000',
  },
};

export const TabTints: Record<THEMES, BlurTint> = {
  // Light Themes
  light: 'light',

  // Darker Themes
  dark: 'default',
} as const;
