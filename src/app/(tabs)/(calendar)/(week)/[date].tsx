import { Text } from '@/components/ui';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

export default function WeeklyCalendarScreen() {
  const { date } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-foreground text-lg">
        Weekly Calendar Screen {date}
      </Text>
    </View>
  );
}
