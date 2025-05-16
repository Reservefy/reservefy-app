import type { TimelineEventProps } from 'react-native-calendars';

export type NewEventTime = {
  date?: string;
  hour: number;
  minutes: number;
};

export interface TimeEvent extends TimelineEventProps {
  id: string;
  title: string;
  start: string;
  end: string;
  color?: string;
  description?: string;
}
