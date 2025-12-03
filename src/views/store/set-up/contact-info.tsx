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
      {/* Header */}
      <View className="border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Text className="text-2xl font-black uppercase tracking-tight">
          03. CONTACT
        </Text>
        <Text className="text-sm font-bold text-gray-600 mt-1">
          How can customers reach you?
        </Text>
      </View>

      <View className="gap-5">
        <View className="border-2 border-black bg-white p-4">
          <FormField
            control={control}
            name="email"
            fieldType={FormFieldType.INPUT}
            label={
              <Text className="text-xs font-black uppercase tracking-wider mb-2">
                Email Address *
              </Text>
            }
            placeholder="your@email.com"
            keyboard="email-address"
            capitalize="none"
            required
            message={
              <View className="mt-2 bg-blue-100 p-2 border-l-4 border-blue-600">
                <Text className="text-xs font-bold text-blue-900">
                  📧 We&apos;ll use this to verify your brand
                </Text>
              </View>
            }
          />
        </View>

        <View className="border-2 border-black bg-white p-4">
          <FormField
            control={control}
            name="phone"
            fieldType={FormFieldType.INPUT}
            label={
              <Text className="text-xs font-black uppercase tracking-wider mb-2">
                Phone Number
              </Text>
            }
            placeholder="+1 (555) 000-0000"
            keyboard="phone-pad"
            message={
              <View className="mt-2 bg-green-100 p-2 border-l-4 border-green-600">
                <Text className="text-xs font-bold text-green-900">
                  📞 Customers will use this to contact you
                </Text>
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}
