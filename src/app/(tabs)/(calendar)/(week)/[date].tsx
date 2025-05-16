import { TimeEvent, TimelineEvent } from '@/components/views/calendars';
import { useColorScheme } from '@/hooks/common';
import { getTimelineTheme } from '@/styles/month-calendar';
import { getDate, groupBy } from '@/utils/helpers';
import dayjs from 'dayjs';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import {
  CalendarProvider,
  DateData,
  ExpandableCalendar,
  TimelineList,
  TimelineProps,
} from 'react-native-calendars';
import { UpdateSources } from 'react-native-calendars/src/expandableCalendar/commons';
import { PackedEvent } from 'react-native-calendars/src/timeline/EventBlock';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const timelineEvents: TimeEvent[] = [
  {
    id: '1',
    start: `${getDate()} 09:00:00`,
    end: `${getDate()} 10:00:00`,
    title: 'Event 1',
    color: 'lightblue',
    summary: 'summary 1',
  },
  {
    id: '2',
    start: `${getDate()} 11:00:00`,
    end: `${getDate()} 12:00:00`,
    title: 'Event 2',
    color: 'red',
    summary: 'summary 2',
  },
  {
    id: '3',
    start: `${getDate()} 13:00:00`,
    end: `${getDate()} 14:00:00`,
    title: 'Event 3',
    color: 'purple',
    summary: 'summary 3',
  },
  {
    id: '4',
    start: `${getDate()} 13:30:00`,
    end: `${getDate()} 14:30:00`,
    title: 'Event 4',
    summary: 'summary 4',
    color: 'yellow',
  },
];

const EVENTS: TimeEvent[] = timelineEvents;

export default function TimelineCalendarScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { date } = useLocalSearchParams();
  const { colors, isDarkColorScheme } = useColorScheme();
  const [eventsByDate, setEventsByDate] = useState<Record<string, TimeEvent[]>>(
    () => groupBy(EVENTS, (e) => dayjs(e.start).format('YYYY-MM-DD')),
  );

  const marked = useMemo(
    () => ({
      [`${getDate(-1)}`]: { marked: true },
      [`${getDate()}`]: { marked: true },
      [`${getDate(1)}`]: { marked: true },
      [`${getDate(2)}`]: { marked: true },
      [`${getDate(4)}`]: { marked: true },
    }),
    [],
  );

  // Memoized renderEvent WITHOUT key
  const renderEvent = useCallback(
    (event: PackedEvent) => <TimelineEvent {...event} key={event.index} />,
    [],
  );

  // Memoize the events for the current date to prevent unnecessary re-renders
  const currentEvents = useMemo(
    () => eventsByDate[date as string] || [],
    [eventsByDate, date],
  );

  // Memoize the timeline props to prevent unnecessary re-renders
  const timelineProps = useMemo<Partial<TimelineProps>>(
    () => ({
      format24h: true,
      renderEvent,
      onEventPress: (event) => {
        console.log('Event pressed:', event);
      },
      events: currentEvents,
      overlapEventsSpacing: 4,
      rightEdgeSpacing: 6,
      start: 0,
      end: 24,
      theme: getTimelineTheme(colors),
      // Add these props to improve VirtualizedList performance
      maxVisibleItems: 15, // Limit the number of visible items
      initialNumToRender: 10, // Reduce initial render batch size
    }),
    [renderEvent, currentEvents, colors],
  );

  // Handle month changes in the calendar
  const onMonthChange = useCallback(
    (date: DateData, updateSource: UpdateSources) => {
      const monthName = dayjs(date.dateString).format('MMMM');
      // Update the URL params to reflect the current month
      router.setParams({
        month: monthName,
      });
    },
    [router],
  );

  // Optimize the TimelineList by memoizing it
  const timelineList = useMemo(
    () => (
      <TimelineList
        showNowIndicator
        scrollToFirst={false}
        events={eventsByDate}
        timelineProps={timelineProps}
      />
    ),
    [eventsByDate, timelineProps],
  );

  return (
    <CalendarProvider date={date as string} onMonthChange={onMonthChange}>
      <View
        key={isDarkColorScheme ? 'dark' : 'light'}
        style={{ backgroundColor: colors.background }}
      >
        <ExpandableCalendar
          hideArrows
          firstDay={1}
          markedDates={marked}
          renderHeader={() => null}
          theme={getTimelineTheme(colors)}
          style={{
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
          }}
        />
        {timelineList}
      </View>
    </CalendarProvider>
  );
}
