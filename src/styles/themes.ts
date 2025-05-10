// theme.config.ts
import { StatusBarStyle } from 'expo-status-bar';
import { vars } from 'nativewind';

export type ThemeName = 'light' | 'dark';

export type ThemeColors = Record<keyof typeof vars, string>;
export type ThemeColorMap = Record<ThemeName, ThemeColors>;
export type ThemeHex = Record<
  ThemeName,
  {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
    };
  }
>;

// 1. Raw HSL values (no rgb(...) wrapper)
export const THEME_COLORS: ThemeColorMap = {
  light: vars({
    '--background': '40 20% 97%',
    '--foreground': '240 10% 10%',

    '--card': '42 30% 95%',
    '--card-foreground': '240 8% 20%',

    '--popover': '45 30% 94%',
    '--popover-foreground': '240 8% 20%',

    '--primary': '265 60% 85%',
    '--primary-foreground': '265 60% 25%',

    '--secondary': '220 10% 94%',
    '--secondary-foreground': '240 10% 25%',

    '--muted': '220 12% 90%',
    '--muted-foreground': '220 8% 35%',

    '--accent': '220 8% 96%',
    '--accent-foreground': '240 10% 25%',

    '--destructive': '0 85% 72%',
    '--destructive-foreground': '0 0% 100%',

    '--border': '240 8% 85%',
    '--input': '240 8% 93%',
    '--ring': '265 60% 75%',
  }),
  dark: vars({
    '--background': '240 6% 10%',
    '--foreground': '0 0% 95%',

    '--card': '240 8% 14%',
    '--card-foreground': '0 0% 90%',

    '--popover': '240 8% 13%',
    '--popover-foreground': '0 0% 90%',

    '--primary': '265 60% 75%',
    '--primary-foreground': '0 0% 10%',

    '--secondary': '220 8% 20%',
    '--secondary-foreground': '0 0% 95%',

    '--muted': '220 10% 24%',
    '--muted-foreground': '220 6% 65%',

    '--accent': '220 6% 22%',
    '--accent-foreground': '0 0% 95%',

    '--destructive': '0 72% 60%',
    '--destructive-foreground': '0 0% 100%',

    '--border': '240 6% 22%',
    '--input': '240 6% 18%',
    '--ring': '265 60% 60%',
  }),
};

// 2. Status bar styles
export const STATUSBAR_COLORS: Record<
  ThemeName,
  { style: StatusBarStyle; background: string }
> = {
  light: {
    style: 'dark',
    background: '#f5f5f5',
  },
  dark: {
    style: 'light',
    background: '#454545',
  },
};

//3. HEX Theme Colors
export const THEMES_HEX: ThemeHex = {
  light: {
    dark: false,
    colors: {
      primary: '#d9c2f0', // hsl(265 60% 85%)
      background: '#f7f5ec', // hsl(40 20% 97%)
      card: '#f9f5e8', // hsl(42 30% 95%)
      text: '#1c1c1f', // hsl(240 10% 10%)
      border: '#d6d7e3', // hsl(240 8% 85%)
      notification: '#f39191', // hsl(0 85% 72%)
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: '#bf99e6', // hsl(265 60% 75%)
      background: '#1c1c1f', // hsl(240 6% 10%)
      card: '#24242a', // hsl(240 8% 14%)
      text: '#f2f2f2', // hsl(0 0% 95%)
      border: '#31313f', // hsl(240 6% 22%)
      notification: '#db5757', // hsl(0 72% 60%)
    },
  },
};
