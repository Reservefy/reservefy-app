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
      {/* Header */}
      <View className="border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Text className="text-2xl font-black uppercase tracking-tight">
          01. BASIC INFO
        </Text>
        <Text className="text-sm font-bold text-gray-600 mt-1">
          Tell us about your brand
        </Text>
      </View>

      {/* Form Fields */}
      <View className="gap-5">
        <View className="border-2 border-black bg-white p-4">
          <FormField
            control={control}
            name="brandName"
            fieldType={FormFieldType.INPUT}
            label={
              <Text className="text-xs font-black uppercase tracking-wider mb-2">
                Brand Name *
              </Text>
            }
            placeholder="YOUR BRAND NAME"
            required
          />
        </View>

        <View className="border-2 border-black bg-white p-4">
          <FormField
            control={control}
            name="description"
            fieldType={FormFieldType.INPUT}
            label={
              <Text className="text-xs font-black uppercase tracking-wider mb-2">
                Description
              </Text>
            }
            placeholder="Describe your brand..."
            message={
              <View className="mt-2 bg-gray-100 p-2 border-l-4 border-black">
                <Text className="text-xs font-bold text-gray-700">
                  💡 What makes your brand unique?
                </Text>
              </View>
            }
          />
        </View>

        <View className="border-2 border-black bg-white p-4">
          <FormField
            control={control}
            name="workingFields"
            fieldType={FormFieldType.INPUT}
            label={
              <Text className="text-xs font-black uppercase tracking-wider mb-2">
                Working Fields *
              </Text>
            }
            placeholder="Hair Salon, Barbershop, Spa"
            required
            message={
              <View className="mt-2 bg-yellow-100 p-2 border-l-4 border-yellow-600">
                <Text className="text-xs font-bold text-yellow-900">
                  ⚠️ Enter 3-5 keywords, separated by commas
                </Text>
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}
