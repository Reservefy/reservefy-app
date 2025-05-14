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
    dotColor: '#FFC107',
    selectedDotColor: colors.primary,
    textDisabledColor: colors.border,
    weekVerticalMargin: 4,
    monthTextColor: colors.primary,
    textMonthFontWeight: '600',
    textMonthFontSize: 16,
    textMonthFontFamily: 'Montserrat-Bold',
    todayButtonPosition: 'center',
    todayDotColor: '#FFC107',
    todayBackgroundColor: '#C107',
    stylesheet: {
      day: {
        basic: {
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
      },
    },
  };
};
