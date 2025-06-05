import { RenderHeader } from '@/components/views/calendars/month/header';
import { useHeaderMonthControls } from '@/hooks/calendar';
import { useColorScheme, useLanguage } from '@/hooks/common';
import { getMonthTheme } from '@/styles/calendar';
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
  const { currentLanguage } = useLanguage();
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
      router.setParams({
        hideTabBarInWeek: 'true',
      });
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
        firstDay={1}
        onDayPress={onDayPress}
        markedDates={marked}
        onVisibleMonthsChange={handleVisibleMonthsChange}
        theme={theme}
        extraData={selected} // only depends on selected
        renderHeader={RenderHeader}
        hideDayNames
        calendarHeight={260}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={10}
        initialNumToRender={10}
        bounces={false}
        scrollEventThrottle={50}
        maintainVisibleContentPosition={{
          minIndexForVisible: 1,
        }}
      />
    </View>
  );
};
export default MonthScreen;
