import { useColorScheme } from '@/hooks/common';
import { getMonthTheme } from '@/styles/month-calendar';
import React, { memo, useCallback, useMemo, useState, type FC } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import {
  CalendarProvider,
  CalendarUtils,
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  TimelineProps,
} from 'react-native-calendars';

type NewEventTime = {
  date?: string;
  hour: number;
  minutes: number;
};

// Replace lodash with native functions
const groupBy = <T,>(array: T[], keyFn: (item: T) => string) =>
  array.reduce(
    (acc, item) => {
      const key = keyFn(item);
      acc[key] = acc[key] || [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );

const filter = <T,>(array: T[] | undefined, predicate: (item: T) => boolean) =>
  array ? array.filter(predicate) : [];

const find = <T,>(array: T[] | undefined, predicate: Partial<T>) =>
  array
    ? array.find((item) =>
        Object.entries(predicate).every(([k, v]) => item[k as keyof T] === v),
      )
    : undefined;

// Mock data
const getDate = (offset = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toISOString().split('T')[0];
};

interface TimeEvent extends TimelineEventProps {
  id: string;
  title: string;
  start: string;
  end: string;
  color?: string;
}

const timelineEvents: TimeEvent[] = [
  {
    id: '1',
    start: `${getDate()} 09:00:00`,
    end: `${getDate()} 10:00:00`,
    title: 'Event 1',
    color: 'lightblue',
  },
  {
    id: '2',
    start: `${getDate()} 11:00:00`,
    end: `${getDate()} 12:00:00`,
    title: 'Event 2',
    color: 'lightgreen',
  },
  {
    id: '3',
    start: `${getDate()} 13:00:00`,
    end: `${getDate()} 14:00:00`,
    title: 'Event 3',
    color: 'lightgreen',
  },
  {
    id: '4',
    start: `${getDate()} 13:30:00`,
    end: `${getDate()} 14:30:00`,
    title: 'Event 4',
    color: 'lightgreen',
  },
];

const INITIAL_TIME = { hour: 9, minutes: 0 };
const EVENTS: TimeEvent[] = timelineEvents;

const TimelineEvent: FC<TimeEvent> = memo(({ title, start, end, color }) => {
  return (
    <View style={[styles.eventContainer, { backgroundColor: color }]}>
      <Text style={styles.eventTitle}>{title}</Text>
      <Text style={styles.eventTime}>
        {new Date(start).toLocaleTimeString()} -{' '}
        {new Date(end).toLocaleTimeString()}
      </Text>
    </View>
  );
});

TimelineEvent.displayName = 'TimelineEvent';

const styles = StyleSheet.create({
  eventContainer: {
    padding: 8,
    borderRadius: 4,
    marginVertical: 2,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 12,
    opacity: 0.8,
  },
});

export default function TimelineCalendarScreen() {
  const { colors } = useColorScheme();
  const [currentDate, setCurrentDate] = useState(getDate());
  const [eventsByDate, setEventsByDate] = useState<Record<string, TimeEvent[]>>(
    () => groupBy(EVENTS, (e) => CalendarUtils.getCalendarDateString(e.start)),
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

  const onDateChanged = useCallback((date: string) => {
    console.log('onDateChanged: ', date);
    setCurrentDate(date);
  }, []);

  const onMonthChange = useCallback((month: any, updateSource: any) => {
    console.log('onMonthChange: ', month, updateSource);
  }, []);

  const createNewEvent = useCallback(
    (timeString: string, timeObject: NewEventTime) => {
      if (!timeObject.date) return;

      const hourString = `${(timeObject.hour + 1).toString().padStart(2, '0')}`;
      const minutesString = `${timeObject.minutes.toString().padStart(2, '0')}`;

      const newEvent: TimeEvent = {
        id: 'draft',
        start: timeString,
        end: `${timeObject.date} ${hourString}:${minutesString}:00`,
        title: 'New Event',
        color: 'white',
      };

      setEventsByDate((prev) => {
        const updated = { ...prev };
        updated[timeObject.date!] = [
          ...(updated[timeObject.date!] || []),
          newEvent,
        ];
        return updated;
      });
    },
    [],
  );

  const approveNewEvent = useCallback(
    (timeString: string, timeObject: NewEventTime) => {
      if (!timeObject.date) return;

      Alert.alert('New Event', 'Enter event title', [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            setEventsByDate((prev) => {
              const updated = { ...prev };
              if (timeObject.date) {
                updated[timeObject.date] = filter(
                  updated[timeObject.date],
                  (e) => e.id !== 'draft',
                );
              }
              return updated;
            });
          },
        },
        {
          text: 'Create',
          style: 'default',
          onPress: () => {
            // Using a prompt for title input is not directly supported in React Native
            // We're simulating it with a default title
            const eventTitle = 'New Event';

            setEventsByDate((prev) => {
              const updated = { ...prev };
              if (timeObject.date) {
                const events = updated[timeObject.date] || [];
                const draft = find(events, { id: 'draft' });
                if (draft) {
                  draft.id = Math.random().toString();
                  draft.title = eventTitle;
                  draft.color = 'lightgreen';
                }
              }
              return updated;
            });
          },
        },
      ]);
    },
    [],
  );

  const timelineProps = useMemo<Partial<TimelineProps>>(
    () => ({
      format24h: true,
      onBackgroundLongPress: createNewEvent,
      onBackgroundLongPressOut: approveNewEvent,
      renderEvent: (props: TimelineEventProps) => (
        <TimelineEvent {...(props as TimeEvent)} />
      ),
      events: eventsByDate[currentDate] || [],
      unavailableHours: [
        { start: 0, end: 6 },
        { start: 20, end: 24 },
      ],
      overlapEventsSpacing: 8,
      rightEdgeSpacing: 24,
    }),
    [eventsByDate, currentDate, createNewEvent, approveNewEvent],
  );

  return (
    <CalendarProvider date={currentDate} onDateChanged={onDateChanged}>
      <ExpandableCalendar
        hideArrows
        renderHeader={() => null}
        firstDay={1}
        markedDates={marked}
        theme={getMonthTheme(colors)}
      />
      <TimelineList
        events={eventsByDate}
        timelineProps={timelineProps}
        showNowIndicator
        scrollToFirst
        initialTime={INITIAL_TIME}
        scrollToNow
      />
    </CalendarProvider>
  );
}
