import { FormField, FormFieldType } from '@/components/shared/fields';
import { Text } from '@/components/ui';
import { Control, FieldValues } from 'react-hook-form';
import { View } from 'react-native';

interface LocationDetailsProps<T extends FieldValues> {
  control: Control<T>;
}

export function LocationDetails<T extends FieldValues>({
  control,
}: LocationDetailsProps<T>) {
  return (
    <View className="gap-6">
      <Text className="text-heading font-bold text-foreground">
        Location Details
      </Text>

      <FormField
        control={control}
        name="country"
        fieldType={FormFieldType.INPUT}
        label="Country"
        placeholder="Enter country"
        required
      />

      <View className="flex-row gap-4">
        <View className="flex-1">
          <FormField
            control={control}
            name="state"
            fieldType={FormFieldType.INPUT}
            label="State / Province"
            placeholder="State"
          />
        </View>
        <View className="flex-1">
          <FormField
            control={control}
            name="city"
            fieldType={FormFieldType.INPUT}
            label="City"
            placeholder="City"
          />
        </View>
      </View>

      <FormField
        control={control}
        name="street"
        fieldType={FormFieldType.INPUT}
        label="Street Address"
        placeholder="Street address"
        required
      />

      <FormField
        control={control}
        name="detailedAddress"
        fieldType={FormFieldType.INPUT}
        label="Detailed Address"
        placeholder="Apartment, suite, floor, etc."
      />

      <FormField
        control={control}
        name="postalCode"
        fieldType={FormFieldType.INPUT}
        label="Postal Code"
        placeholder="Postal code"
        keyboard="number-pad"
      />
    </View>
  );
}
