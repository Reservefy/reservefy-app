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
      {/* Header */}
      <View className="border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Text className="text-2xl font-black uppercase tracking-tight">
          04. SCHEDULE
        </Text>
        <Text className="text-sm font-bold text-gray-600 mt-1">
          When is your brand open?
        </Text>
      </View>

      <View className="gap-4">
        {DAYS_OF_WEEK.map((day) => {
          const isSelected = isDaySelected(day.value);
          return (
            <Pressable
              key={day.value}
              onPress={() => toggleDay(day.value)}
              className={`border-2 border-black p-4 flex-row items-center justify-between ${
                isSelected
                  ? 'bg-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white'
              }`}
            >
              <Text
                className={`text-base font-black uppercase tracking-wide ${
                  isSelected ? 'text-primary-foreground' : 'text-black'
                }`}
              >
                {day.label}
              </Text>
              <View
                className={`w-8 h-8 border-2 border-black items-center justify-center ${
                  isSelected ? 'bg-black' : 'bg-white'
                }`}
              >
                {isSelected && (
                  <Text className="text-white font-black text-lg">✓</Text>
                )}
              </View>
            </Pressable>
          );
        })}
      </View>

      <View className="border-2 border-black bg-yellow-50 p-4">
        <Text className="text-xs font-bold text-gray-800">
          ⏰ DEFAULT HOURS: 9:00 AM - 6:00 PM
        </Text>
        <Text className="text-xs font-bold text-gray-600 mt-1">
          You can customize hours for each day later
        </Text>
      </View>
    </View>
  );
}
