import { platformSelect } from 'nativewind/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        regular: platformSelect({
          ios: 'Montserrat-Regular',
          android: 'Montserrat-Regular',
          default: 'sans-serif',
        }),
        medium: platformSelect({
          ios: 'Montserrat-Medium',
          android: 'Montserrat-Medium',
          default: 'sans-serif',
        }),
        bold: platformSelect({
          ios: 'Montserrat-Bold',
          android: 'Montserrat-Bold',
          default: 'sans-serif',
        }),
      },
      fontSize: {
        heading: 24,
        title: 20,
        subtitle: 18,
        body: 16,
        caption: 12,
      },
      lineHeight: {
        heading: '32px',
        title: '28px',
        subtitle: '26px',
        body: '24px',
        caption: '18px',
      },
      spacing: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
        '2xl': '12px',
        '3xl': '16px',
        '4xl': '20px',
      },
      radius: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
        '2xl': '12px',
        '3xl': '16px',
        '4xl': '20px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-heading': {
          fontSize: 24,
          lineHeight: '32px',
          fontFamily: 'Montserrat-Bold',
          fontWeight: 'bold',
        },
        '.font-title': {
          fontSize: 20,
          lineHeight: '28px',
          fontFamily: 'Montserrat-Bold',
          fontWeight: 'bold',
        },
        '.font-subtitle': {
          fontSize: 18,
          lineHeight: '26px',
          fontFamily: 'Montserrat-Medium',
          fontWeight: 'medium',
        },
        '.font-body': {
          fontSize: 16,
          lineHeight: '24px',
          fontFamily: 'Montserrat-Regular',
          fontWeight: 'regular',
        },
        '.font-caption': {
          fontSize: 12,
          lineHeight: '18px',
          fontFamily: 'Montserrat-Regular',
          fontWeight: 'regular',
        },
      });
    },
  ],
};
