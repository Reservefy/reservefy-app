import { Text } from '@/components/ui';
import dayjs from 'dayjs';
import { View } from 'react-native';

export const RenderHeader = (date: Date) => {
  const d = dayjs(date);
  return (
    <View className="flex-row items-start w-full">
      <Text className="font-subtitle">{d.format('MMMM')}</Text>
    </View>
  );
};
