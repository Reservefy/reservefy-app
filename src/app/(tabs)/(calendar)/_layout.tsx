import { Text } from '@/components/ui';
import { useColorScheme } from '@/hooks/common';
import Icons from '@/lib/icons';
import dayjs from 'dayjs';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';

export default function CalendarLayout() {
  const { colors } = useColorScheme();
  const { date } = useGlobalSearchParams();
  const router = useRouter();

  const month = date ? dayjs(date as string).format('MMMM') : '';

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        presentation: 'transparentModal',
        keyboardHandlingEnabled: true,
      }}
    >
      <Stack.Screen name="month" />
      <Stack.Screen
        name="(week)/[date]"
        options={{
          headerShown: true,
          headerBackTitle: month,
          headerTitleStyle: { color: colors.text },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Icons.ChevronLeft size={24} className="text-primary" />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text className="font-body">{date}</Text>,
          headerRight: () => (
            <TouchableOpacity>
              <Icons.Search size={24} className="text-primary" />
            </TouchableOpacity>
          ),
          headerShadowVisible: true,
          headerBlurEffect: 'systemChromeMaterialDark',
          headerBackground: () => <View className="bg-background" />,
        }}
      />
    </Stack>
  );
}
