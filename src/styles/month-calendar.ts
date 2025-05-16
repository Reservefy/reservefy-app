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
    todayDotColor: colors.primary,
    dotColor: colors.primary,
    selectedDotColor: colors.primary,
    textDisabledColor: colors.border,
    weekVerticalMargin: 4,
    monthTextColor: colors.primary,
    textMonthFontWeight: '600',
    textMonthFontSize: 16,
    textMonthFontFamily: 'Montserrat-Bold',
    todayButtonPosition: 'center',
    line: {
      borderColor: colors.border,
      borderWidth: 0.2,
    },
    verticalLine: {
      borderColor: colors.border,
      borderWidth: 0.2,
    },
    timeLabel: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 12,
      color: colors.text,
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
