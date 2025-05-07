import { DarkTheme, DefaultTheme } from '@react-navigation/native';

const tintColorLight = 'hsl(265 60% 75%)'; // soft purple
const tintColorDark = 'hsl(265 60% 75%)';

const Colors = {
  light: {
    text: 'hsl(240 10% 10%)', // foreground
    background: 'hsl(40 20% 97%)', // background
    primary: tintColorLight,
    card: 'hsl(40 20% 97%)',
    border: 'hsl(240 10% 90%)',
    notification: tintColorLight,
    tint: tintColorLight, // used in links/buttons
    icon: 'hsl(240 10% 25%)', // neutral soft
    tabIconDefault: 'hsl(240 10% 60%)', // muted
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: 'hsl(0 0% 95%)', // foreground
    background: 'hsl(240 6% 10%)', // background
    primary: tintColorDark,
    card: 'hsl(240 6% 10%)',
    border: 'hsl(240 6% 15%)',
    notification: tintColorDark,
    tint: tintColorDark,
    icon: 'hsl(240 6% 65%)',
    tabIconDefault: 'hsl(240 6% 40%)',
    tabIconSelected: tintColorDark,
  },
};

const LIGHT_THEME = { ...DefaultTheme, colors: Colors.light };
const DARK_THEME = { ...DarkTheme, colors: Colors.dark };

export { Colors, DARK_THEME, LIGHT_THEME };
