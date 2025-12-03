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
      {/* Header */}
      <View className="border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Text className="text-2xl font-black uppercase tracking-tight">
          02. LOCATION
        </Text>
        <Text className="text-sm font-bold text-gray-600 mt-1">
          Where is your brand located?
        </Text>
      </View>

      <View className="gap-5">
        <View className="border-2 border-black bg-white p-4">
          <FormField
            control={control}
            name="country"
            fieldType={FormFieldType.INPUT}
            label={
              <Text className="text-xs font-black uppercase tracking-wider mb-2">
                Country *
              </Text>
            }
            placeholder="COUNTRY"
            required
          />
        </View>

        <View className="border-2 border-black bg-white p-4">
          <View className="flex-row gap-4">
            <View className="flex-1">
              <FormField
                control={control}
                name="state"
                fieldType={FormFieldType.INPUT}
                label={
                  <Text className="text-xs font-black uppercase tracking-wider mb-2">
                    State
                  </Text>
                }
                placeholder="STATE"
              />
            </View>
            <View className="flex-1">
              <FormField
                control={control}
                name="city"
                fieldType={FormFieldType.INPUT}
                label={
                  <Text className="text-xs font-black uppercase tracking-wider mb-2">
                    City
                  </Text>
                }
                placeholder="CITY"
              />
            </View>
          </View>
        </View>

        <View className="border-2 border-black bg-white p-4">
          <FormField
            control={control}
            name="street"
            fieldType={FormFieldType.INPUT}
            label={
              <Text className="text-xs font-black uppercase tracking-wider mb-2">
                Street Address *
              </Text>
            }
            placeholder="123 MAIN STREET"
            required
          />
        </View>

        <View className="border-2 border-black bg-white p-4">
          <FormField
            control={control}
            name="detailedAddress"
            fieldType={FormFieldType.INPUT}
            label={
              <Text className="text-xs font-black uppercase tracking-wider mb-2">
                Details
              </Text>
            }
            placeholder="Apartment, suite, floor..."
          />
        </View>

        <View className="border-2 border-black bg-white p-4">
          <FormField
            control={control}
            name="postalCode"
            fieldType={FormFieldType.INPUT}
            label={
              <Text className="text-xs font-black uppercase tracking-wider mb-2">
                Postal Code
              </Text>
            }
            placeholder="12345"
            keyboard="number-pad"
          />
        </View>
      </View>
    </View>
  );
}
