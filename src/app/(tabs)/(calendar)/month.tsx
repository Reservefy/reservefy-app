import { useColorScheme, useYMonthScroll } from '@/hooks/common';
import { getMonthTheme } from '@/styles/month-calendar';
import dayjs from 'dayjs';
import { useRouter } from 'expo-router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { CalendarList, DateData } from 'react-native-calendars';
import testIDs from './constants';

const RANGE = 24;
const initialDate = dayjs().format('YYYY-MM-DD');

// fake dynamic dates (replace with backend later)
const dynamicEvents = [
  dayjs().add(1, 'week').format('YYYY-MM-DD'),
  dayjs().add(3, 'week').format('YYYY-MM-DD'),
  dayjs().add(1, 'month').format('YYYY-MM-DD'),
];

const MonthScreen = () => {
  const router = useRouter();
  const { colors } = useColorScheme();
  const { onVisibleMonthsChange } = useYMonthScroll();
  const [selected, setSelected] = useState(initialDate);

  const marked = useMemo(() => {
    const entries = dynamicEvents.reduce((acc, date) => {
      acc[date] = {
        marked: true,
        dotColor: colors.primary,
        selected: selected === date,
        selectedTextColor: colors.text,
      };
      return acc;
    }, {} as any);

    entries[selected] = {
      ...(entries[selected] || {}),
      selected: true,
      disableTouchEvent: true,
      selectedColor: colors.primary,
      selectedTextColor: colors.text,
    };

    return entries;
  }, [selected, colors]);

  const theme = useCallback(() => getMonthTheme(colors), [colors]);

  const onDayPress = useCallback(
    (day: DateData) => {
      setSelected(day.dateString);
      router.push(`/(calendar)/(week)/${day.dateString}`);
    },
    [router],
  );

  useEffect(() => {
    theme();
  }, [theme]);

  return (
    <View className="safe-area" style={{ paddingBottom: 0 }}>
      <CalendarList
        testID={testIDs.calendarList.CONTAINER}
        current={initialDate}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
        firstDay={1}
        onDayPress={onDayPress}
        markedDates={marked}
        onVisibleMonthsChange={onVisibleMonthsChange}
        renderHeader={renderCustomHeader}
        theme={theme()}
      />
    </View>
  );
};

function renderCustomHeader(date: any) {
  const [year, month] = dayjs(date.toString()).format('YYYY MMMM').split(' ');

  return (
    <View className="flex-row justify-between items-center w-full pr-2">
      <Text className="text-primary text-lg font-semibold">{month}</Text>
      <Text className="text-primary text-lg font-semibold">{year}</Text>
    </View>
  );
}

export default MonthScreen;
