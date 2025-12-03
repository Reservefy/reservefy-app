import { FormField, FormFieldType } from '@/components/shared/fields';
import { Text } from '@/components/ui';
import { Control, FieldValues } from 'react-hook-form';
import { View } from 'react-native';

interface ContactInfoProps<T extends FieldValues> {
  control: Control<T>;
}

export function ContactInfo<T extends FieldValues>({
  control,
}: ContactInfoProps<T>) {
  return (
    <View className="gap-6">
      <Text className="text-heading font-bold text-foreground">
        Contact Information
      </Text>

      <FormField
        control={control}
        name="email"
        fieldType={FormFieldType.INPUT}
        label="Email Address"
        placeholder="your@email.com"
        keyboard="email-address"
        capitalize="none"
        required
        message="We'll use this to verify your brand"
      />

      <FormField
        control={control}
        name="phone"
        fieldType={FormFieldType.INPUT}
        label="Phone Number"
        placeholder="+1 (555) 000-0000"
        keyboard="phone-pad"
        message="Customers will use this to contact you"
      />
    </View>
  );
}
