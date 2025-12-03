import { Text } from '@/components/ui';
import { Feedback } from '@/lib/haptics';
import {
  Control,
  FieldValues,
  Path,
  UseFormSetValue,
  useWatch,
} from 'react-hook-form';
import { Pressable, View } from 'react-native';

interface WorkingHoursProps<T extends FieldValues> {
  control: Control<T>;
  setValue: UseFormSetValue<T>;
}

const DAYS_OF_WEEK = [
  { label: 'Monday', value: 'monday' },
  { label: 'Tuesday', value: 'tuesday' },
  { label: 'Wednesday', value: 'wednesday' },
  { label: 'Thursday', value: 'thursday' },
  { label: 'Friday', value: 'friday' },
  { label: 'Saturday', value: 'saturday' },
  { label: 'Sunday', value: 'sunday' },
];

interface DaySchedule {
  day: string;
  isOpen: boolean;
  startTime: string;
  endTime: string;
  breakStart?: string;
  breakEnd?: string;
}

export function WorkingHours<T extends FieldValues>({
  control,
  setValue,
}: WorkingHoursProps<T>) {
  const workingDays = (useWatch({
    control,
    name: 'workingDays' as Path<T>,
  }) || []) as DaySchedule[];

  const toggleDay = (dayValue: string) => {
    Feedback.light();
    const currentDays = workingDays;
    const dayExists = currentDays.find((d) => d.day === dayValue);

    if (dayExists) {
      setValue(
        'workingDays' as never,
        currentDays.filter((d) => d.day !== dayValue) as never,
      );
    } else {
      setValue(
        'workingDays' as never,
        [
          ...currentDays,
          {
            day: dayValue,
            isOpen: true,
            startTime: '09:00',
            endTime: '18:00',
          },
        ] as never,
      );
    }
  };

  const isDaySelected = (dayValue: string) => {
    return workingDays.some((d) => d.day === dayValue);
  };

  return (
    <View className="gap-6">
      <View>
        <Text className="text-heading font-bold text-foreground mb-2">
          Working Days
        </Text>
        <Text className="text-body text-muted-foreground">
          Select the days your brand operates
        </Text>
      </View>

      <View className="gap-3">
        {DAYS_OF_WEEK.map((day) => {
          const isSelected = isDaySelected(day.value);
          return (
            <Pressable
              key={day.value}
              onPress={() => toggleDay(day.value)}
              className={`h-14 px-6 rounded-lg border-2 flex-row items-center justify-between ${
                isSelected
                  ? 'bg-primary border-primary'
                  : 'bg-background border-border'
              }`}
            >
              <Text
                className={`text-title font-bold ${
                  isSelected ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {day.label}
              </Text>
              {isSelected && (
                <View className="w-6 h-6 rounded-full bg-primary-foreground items-center justify-center">
                  <Text className="text-primary font-bold">✓</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>

      <View className="bg-muted p-4 rounded-lg">
        <Text className="text-caption text-muted-foreground">
          💡 You can set specific hours for each day after completing the setup
        </Text>
      </View>
    </View>
  );
}
