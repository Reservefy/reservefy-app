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
      <View>
        <Text className="text-heading font-bold text-foreground mb-2">
          Review Your Information
        </Text>
        <Text className="text-body text-muted-foreground">
          Please verify all details before submitting
        </Text>
      </View>

      <View className="gap-4">
        {/* Basic Info Card */}
        <View className="bg-card p-6 rounded-xl border-2 border-border">
          <Text className="text-title font-bold text-foreground mb-4">
            Basic Information
          </Text>

          <View className="gap-3">
            <View>
              <Text className="text-caption text-muted-foreground mb-1">
                Brand Name
              </Text>
              <Text className="text-body font-bold text-foreground">
                {formData.brandName || 'Not provided'}
              </Text>
            </View>

            {formData.description && (
              <View>
                <Text className="text-caption text-muted-foreground mb-1">
                  Description
                </Text>
                <Text className="text-body text-foreground">
                  {formData.description}
                </Text>
              </View>
            )}

            {formData.workingFields && (
              <View>
                <Text className="text-caption text-muted-foreground mb-1">
                  Working Fields
                </Text>
                <Text className="text-body text-foreground">
                  {formData.workingFields}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Location Card */}
        <View className="bg-card p-6 rounded-xl border-2 border-border">
          <Text className="text-title font-bold text-foreground mb-4">
            Location
          </Text>

          <View className="gap-2">
            <Text className="text-body text-foreground">
              {formData.street || 'Street not provided'}
            </Text>
            {formData.detailedAddress && (
              <Text className="text-body text-foreground">
                {formData.detailedAddress}
              </Text>
            )}
            <Text className="text-body text-foreground">
              {[formData.city, formData.state, formData.postalCode]
                .filter(Boolean)
                .join(', ') || 'City/State not provided'}
            </Text>
            <Text className="text-body font-bold text-foreground">
              {formData.country || 'Country not provided'}
            </Text>
          </View>
        </View>

        {/* Contact Card */}
        <View className="bg-card p-6 rounded-xl border-2 border-border">
          <Text className="text-title font-bold text-foreground mb-4">
            Contact
          </Text>

          <View className="gap-3">
            <View>
              <Text className="text-caption text-muted-foreground mb-1">
                Email
              </Text>
              <Text className="text-body text-foreground">
                {formData.email || 'Not provided'}
              </Text>
            </View>

            {formData.phone && (
              <View>
                <Text className="text-caption text-muted-foreground mb-1">
                  Phone
                </Text>
                <Text className="text-body text-foreground">
                  {formData.phone}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Working Days Card */}
        <View className="bg-card p-6 rounded-xl border-2 border-border">
          <Text className="text-title font-bold text-foreground mb-4">
            Working Schedule
          </Text>

          <View>
            <Text className="text-caption text-muted-foreground mb-1">
              Operating Days
            </Text>
            <Text className="text-body text-foreground">{workingDaysText}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
