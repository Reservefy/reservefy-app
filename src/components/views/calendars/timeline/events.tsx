import { Text } from '@/components/ui';
import { cn } from '@/lib/utils';
import dayjs from 'dayjs';
import React, { memo, type FC } from 'react';
import { View } from 'react-native';
import { PackedEvent } from 'react-native-calendars/src/timeline/EventBlock';

const TimelineEvent: FC<PackedEvent> = memo(
  ({ title, start, end, color, summary }) => {
    return (
      <View
        className={cn('p-2 rounded my-0.5', `bg-[${color ?? 'var(--muted)'}]`)}
      >
        <Text className="font-medium">{title}</Text>
        <Text className="text-xs">
          {dayjs(start).format('HH:mm')} - {dayjs(end).format('HH:mm')}
        </Text>
        <Text className="font-caption">{summary}</Text>
      </View>
    );
  },
  (prev, next) =>
    prev.id === next.id &&
    prev.title === next.title &&
    prev.start === next.start &&
    prev.end === next.end &&
    prev.color === next.color &&
    prev.summary === next.summary,
);

TimelineEvent.displayName = 'TimelineEvent';

export { TimelineEvent };
