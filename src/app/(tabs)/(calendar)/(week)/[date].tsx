import { TimeEvent, TimelineEvent } from '@/components/views/calendars';
import { useColorScheme } from '@/hooks/common';
import { getTimelineTheme } from '@/styles/calendar';
import { formatMonth } from '@/utils/date';
import { getDate } from '@/utils/helpers';

import dayjs from 'dayjs';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { groupBy } from 'lodash';
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

const timelineEvents: TimeEvent[] = [
  {
    id: '14323242',
    start: `${getDate()} 00:00:00`,
    end: `${getDate()} 00:10:00`,
    title: 'Event 1',
    color: 'lightblue',
    summary: 'summary 1',
  },
  {
    id: '4252',
    start: `${getDate()} 00:11:00`,
    end: `${getDate()} 00:39:00`,
    title: 'Event 1',
    color: 'yellow',
    summary: 'summary 1',
  },
  {
    id: '424352',
    start: `${getDate()} 00:11:00`,
    end: `${getDate()} 00:58:00`,
    title: 'Event 1',
    color: 'blue',
    summary: 'summary 1',
  },
  {
    id: 'ufs9fs',
    start: `${getDate()} 00:40:00`,
    end: `${getDate()} 00:54:00`,
    title: 'Event 1',
    color: 'red',
    summary: 'summary 1',
  },
  {
    id: 'f543l',
    start: `${getDate()} 00:55:00`,
    end: `${getDate()} 01:05:00`,
    title: 'Event 1',
    color: 'purple',
    summary: 'summary 1',
  },
  {
    id: '1',
    start: `${getDate()} 09:00:00`,
    end: `${getDate()} 10:00:00`,
    title: 'Event 1',
    color: 'gray',
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

  const { date } = useLocalSearchParams();
  const { colors, isDarkColorScheme } = useColorScheme();
  const theme = useMemo(() => getTimelineTheme(colors), [colors]);
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
    (event: PackedEvent) => <TimelineEvent {...event} />,
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
      overlapEventsSpacing: 2,
      rightEdgeSpacing: 8,
      start: 0,
      end: 24,
      theme,
      // Add these props to improve VirtualizedList performance
      maxVisibleItems: 15, // Limit the number of visible items
      initialNumToRender: 10, // Reduce initial render batch size

      // initial time
      initialTime: {
        hour: 0,
        minutes: 0,
      },
    }),
    [renderEvent, currentEvents, theme],
  );

  // Handle month changes in the calendar
  const onMonthChange = useCallback(
    (date: DateData, updateSource: UpdateSources) => {
      const monthName = formatMonth(date.dateString);
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
        scrollToNow={false}
        scrollToFirst={false}
        events={eventsByDate}
        timelineProps={timelineProps}
        initialTime={{
          hour: 0,
          minutes: 0,
        }}
      />
    ),
    [eventsByDate, timelineProps],
  );

  return (
    <CalendarProvider
      date={date as string}
      onMonthChange={onMonthChange}
      theme={theme}
    >
      <View
        key={isDarkColorScheme ? 'dark' : 'light'}
        style={{ backgroundColor: colors.background }}
      >
        <ExpandableCalendar
          initialDate={date as string}
          hideArrows
          firstDay={1}
          markedDates={marked}
          renderHeader={() => null}
          theme={theme}
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
