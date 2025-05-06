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
    },
  },
  plugins: [],
};
