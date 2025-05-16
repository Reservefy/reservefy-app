import { Text } from '@/components/ui';
import { useHeaderMonthControls } from '@/hooks/calendar';
import { useColorScheme } from '@/hooks/common';
import { getMonthTheme } from '@/styles/month-calendar';
import dayjs from 'dayjs';
import { useRouter } from 'expo-router';
import { debounce } from 'lodash';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { CalendarList, DateData } from 'react-native-calendars';

const initialDate = dayjs().format('YYYY-MM-DD');

type MarkedDateProps = {
  marked: boolean;
  dotColor: string;
  selected: boolean;
  selectedTextColor: string;
  disableTouchEvent?: boolean;
  selectedColor?: string;
};

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
  const { colors, isDarkColorScheme } = useColorScheme();
  const theme = useMemo(() => getMonthTheme(colors), [colors]);
  const monthControlsCallback = useHeaderMonthControls(calendarRef);

  const handleVisibleMonthsChange = useMemo(
    () => debounce(monthControlsCallback, 100),
    [monthControlsCallback],
  );

  const [selected, setSelected] = useState(initialDate);

  const marked = useMemo(() => {
    const entries: Record<string, MarkedDateProps> = {};
    for (const date of dynamicEvents) {
      entries[date] = {
        marked: true,
        dotColor: colors.primary,
        selected: selected === date,
        selectedTextColor: colors.text,
      };
    }

    entries[selected] = {
      ...(entries[selected] || {}),
      selected: true,
      disableTouchEvent: true,
      selectedColor: colors.primary,
      selectedTextColor: colors.text,
    };

    return entries;
  }, [selected, colors.primary, colors.text]);

  const onDayPress = useCallback(
    (day: DateData) => {
      setSelected(day.dateString);
      router.push(`/(calendar)/(week)/${day.dateString}`);
    },
    [router],
  );

  return (
    <View
      className="safe-area"
      key={isDarkColorScheme ? 'dark' : 'light'}
      style={{ backgroundColor: colors.background }}
    >
      <CalendarList
        ref={calendarRef}
        id="month-calendar"
        testID="month-calendar"
        current={initialDate}
        futureScrollRange={12}
        pastScrollRange={16}
        bounces={false}
        firstDay={1}
        onDayPress={onDayPress}
        markedDates={marked}
        onVisibleMonthsChange={handleVisibleMonthsChange}
        theme={getMonthTheme(colors)}
        extraData={selected} // only depends on selected
        renderHeader={renderHeader}
        hideDayNames
        calendarHeight={260}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={10}
        initialNumToRender={10}
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
