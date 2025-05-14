import { Text } from '@/components/ui';
import { useHeaderMonthControls } from '@/components/views/calendars/month/visible-month';
import { useColorScheme } from '@/hooks/common';
import { getMonthTheme } from '@/styles/month-calendar';
import dayjs from 'dayjs';
import { useRouter } from 'expo-router';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { CalendarList, DateData } from 'react-native-calendars';

const RANGE = 120;
const initialDate = dayjs().format('YYYY-MM-DD');

// fake dynamic dates (replace with backend later)
const dynamicEvents = [
  dayjs().add(1, 'week').format('YYYY-MM-DD'),
  dayjs().add(3, 'week').format('YYYY-MM-DD'),
  dayjs().add(3, 'week').format('YYYY-MM-DD'),
  dayjs().add(3, 'week').format('YYYY-MM-DD'),
  dayjs().add(1, 'month').format('YYYY-MM-DD'),
];

const MonthScreen = () => {
  const router = useRouter();
  const calendarRef = useRef(null);
  const { colors } = useColorScheme();
  const handleVisibleMonthsChange = useHeaderMonthControls(calendarRef);

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

  const onDayPress = useCallback(
    (day: DateData) => {
      setSelected(day.dateString);
      router.push(`/(calendar)/(week)/${day.dateString}`);
    },
    [router],
  );

  return (
    <View className="safe-area">
      <CalendarList
        id="month-calendar"
        ref={calendarRef}
        current={initialDate}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
        firstDay={1}
        onDayPress={onDayPress}
        markedDates={marked}
        onVisibleMonthsChange={handleVisibleMonthsChange}
        theme={getMonthTheme(colors)}
        extraData={getMonthTheme(colors)}
        renderHeader={renderHeader}
        hideDayNames
        calendarHeight={260}
      />
    </View>
  );
};

const renderHeader = (date: Date) => {
  const d = dayjs(date);
  return (
    <View className="flex-row items-start w-full">
      <Text className="font-subtitle">{d.format('MMMM')}</Text>
    </View>
  );
};

export default MonthScreen;
