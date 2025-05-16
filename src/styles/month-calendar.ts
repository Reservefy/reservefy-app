import { Theme } from 'react-native-calendars/src/types';
import { ThemeHex } from './themes';

export const getMonthTheme = (colors: ThemeHex['dark']['colors']): Theme => {
  return {
    calendarBackground: colors.background,
    contentStyle: {
      backgroundColor: colors.background,
      paddingBottom: 100,
    },
    textSectionTitleColor: colors.text,
    dayTextColor: colors.text,
    todayTextColor: colors.primary,
    selectedDayTextColor: colors.text,
    selectedDayBackgroundColor: colors.primary,
    dotColor: colors.primary,
    selectedDotColor: colors.primary,
    textDisabledColor: colors.border,
    monthTextColor: colors.primary,
    textMonthFontWeight: '600',
    textMonthFontSize: 14,
    textMonthFontFamily: 'Montserrat-Bold',
    textDayFontFamily: 'Montserrat-Regular',
    todayButtonFontFamily: 'Montserrat-Regular',
    todayButtonFontWeight: '600',
    todayButtonFontSize: 14,
    todayButtonPosition: 'center',
    textDayStyle: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
    },
    stylesheet: {
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

export const getTimelineTheme = (colors: ThemeHex['dark']['colors']): Theme => {
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

export const TIMELINE_MARK_COLORS = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  yellow: '#FFFF00',
  orange: '#FFA500',
  purple: '#800080',
  pink: '#FFC0CB',
  gray: '#808080',
  black: '#000000',
  white: '#FFFFFF',
};
