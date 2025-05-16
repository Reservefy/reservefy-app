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
    dotColor: colors.primary,
    selectedDotColor: colors.primary,
    textDisabledColor: colors.border,
    weekVerticalMargin: 4,
    monthTextColor: colors.primary,
    textMonthFontWeight: '600',
    textMonthFontSize: 16,
    textMonthFontFamily: 'Montserrat-Bold',
    todayButtonPosition: 'center',

    stylesheet: {
      calendar: {
        header: {
          week: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 10,
            marginBottom: 10,
          },
        },
      },
      day: {
        basic: {
          base: {
            width: 32,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center',
          },
          text: {
            color: colors.text,
            fontFamily: 'Montserrat-Regular',
          },
        },
      },
      dot: {
        dot: {
          width: 5,
          height: 5,
          borderRadius: 3,
          marginTop: 1,
        },
      },
    },
  };
};
