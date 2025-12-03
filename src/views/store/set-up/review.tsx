import { Text } from '@/components/ui';
import { Control, FieldValues, useWatch } from 'react-hook-form';
import { View } from 'react-native';

interface ReviewProps<T extends FieldValues> {
  control: Control<T>;
}

interface DaySchedule {
  day: string;
  isOpen: boolean;
  startTime: string;
  endTime: string;
}

export function Review<T extends FieldValues>({ control }: ReviewProps<T>) {
  const formData = useWatch({ control });

  const workingDaysText =
    formData.workingDays
      ?.map((d: DaySchedule) => d.day.charAt(0).toUpperCase() + d.day.slice(1))
      .join(', ') || 'Not set';

  return (
    <View className="gap-6">
      {/* Header */}
      <View className="border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Text className="text-2xl font-black uppercase tracking-tight">
          05. REVIEW
        </Text>
        <Text className="text-sm font-bold text-gray-600 mt-1">
          Double-check everything before submitting
        </Text>
      </View>

      <View className="gap-5">
        {/* Basic Info Card */}
        <View className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Text className="text-sm font-black uppercase tracking-wider mb-3 border-b-2 border-black pb-2">
            📝 Basic Information
          </Text>

          <View className="gap-2">
            <View className="flex-row">
              <Text className="text-xs font-bold text-gray-500 w-24">
                NAME:
              </Text>
              <Text className="text-xs font-black flex-1">
                {formData.brandName || 'Not provided'}
              </Text>
            </View>

            {formData.description && (
              <View className="flex-row">
                <Text className="text-xs font-bold text-gray-500 w-24">
                  INFO:
                </Text>
                <Text className="text-xs font-bold flex-1">
                  {formData.description}
                </Text>
              </View>
            )}

            {formData.workingFields && (
              <View className="flex-row">
                <Text className="text-xs font-bold text-gray-500 w-24">
                  FIELDS:
                </Text>
                <Text className="text-xs font-bold flex-1">
                  {formData.workingFields}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Location Card */}
        <View className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Text className="text-sm font-black uppercase tracking-wider mb-3 border-b-2 border-black pb-2">
            📍 Location
          </Text>

          <View className="gap-1">
            <Text className="text-xs font-black">
              {formData.street || 'Street not provided'}
            </Text>
            {formData.detailedAddress && (
              <Text className="text-xs font-bold text-gray-600">
                {formData.detailedAddress}
              </Text>
            )}
            <Text className="text-xs font-bold">
              {[formData.city, formData.state, formData.postalCode]
                .filter(Boolean)
                .join(', ') || 'City/State not provided'}
            </Text>
            <Text className="text-xs font-black uppercase">
              {formData.country || 'Country not provided'}
            </Text>
          </View>
        </View>

        {/* Contact Card */}
        <View className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Text className="text-sm font-black uppercase tracking-wider mb-3 border-b-2 border-black pb-2">
            📞 Contact
          </Text>

          <View className="gap-2">
            <View className="flex-row">
              <Text className="text-xs font-bold text-gray-500 w-20">
                EMAIL:
              </Text>
              <Text className="text-xs font-black flex-1">
                {formData.email || 'Not provided'}
              </Text>
            </View>

            {formData.phone && (
              <View className="flex-row">
                <Text className="text-xs font-bold text-gray-500 w-20">
                  PHONE:
                </Text>
                <Text className="text-xs font-black flex-1">
                  {formData.phone}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Working Days Card */}
        <View className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Text className="text-sm font-black uppercase tracking-wider mb-3 border-b-2 border-black pb-2">
            📅 Schedule
          </Text>

          <View>
            <Text className="text-xs font-black">{workingDaysText}</Text>
            <Text className="text-xs font-bold text-gray-600 mt-1">
              9:00 AM - 6:00 PM (Default)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
