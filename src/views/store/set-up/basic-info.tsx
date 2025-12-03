import { FormField, FormFieldType } from '@/components/shared/fields';
import { Text } from '@/components/ui';
import { Control, FieldValues } from 'react-hook-form';
import { View } from 'react-native';

interface BasicInfoProps<T extends FieldValues> {
  control: Control<T>;
}

export function BasicInfo<T extends FieldValues>({
  control,
}: BasicInfoProps<T>) {
  return (
    <View className="gap-6">
      <Text className="text-heading font-bold text-foreground">
        Basic Information
      </Text>

      <FormField
        control={control}
        name="brandName"
        fieldType={FormFieldType.INPUT}
        label="Brand Name"
        placeholder="Enter your brand name"
        required
      />

      <FormField
        control={control}
        name="description"
        fieldType={FormFieldType.INPUT}
        label="Description"
        placeholder="Describe your brand and services"
        message="Tell customers what makes your brand unique"
      />

      <FormField
        control={control}
        name="workingFields"
        fieldType={FormFieldType.INPUT}
        label="Working Fields"
        placeholder="e.g., Hair Salon, Barbershop, Spa"
        required
        message="Enter 3-5 keywords separated by commas"
      />
    </View>
  );
}
