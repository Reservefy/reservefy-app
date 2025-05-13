import { Theme } from 'react-native-calendars/src/types';
import { ThemeHex } from './themes';

export const getMonthTheme = (colors: ThemeHex['dark']['colors']): Theme => {
  return {
    calendarBackground: colors.background,
    textSectionTitleColor: colors.text,
    dayTextColor: colors.text,
    todayTextColor: colors.primary,
    selectedDayTextColor: colors.text,
    selectedDayBackgroundColor: colors.primary,
    dotColor: colors.notification,
    selectedDotColor: colors.primary,
    textDisabledColor: colors.border,
    textDayFontFamily: 'Montserrat-Regular',
    textDayHeaderFontFamily: 'Montserrat-Bold',
    textDayHeaderFontWeight: '600',
    textMonthFontFamily: 'Montserrat-Bold',
    textDayFontWeight: '400',
    textMonthFontWeight: '700',
    textDayFontSize: 14,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 12,
    'stylesheet.day.basic': {
      today: {
        borderRadius: 999,
        borderWidth: 1,
        borderColor: colors.border,
      },
      todayText: {
        fontWeight: '600',
        fontFamily: 'Montserrat-Bold',
        color: colors.primary,
      },
    },
  };
};
