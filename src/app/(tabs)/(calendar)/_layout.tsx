import { Button, Text } from '@/components/ui';
import { useColorScheme } from '@/hooks/common';
import Icons from '@/lib/icons';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import dayjs from 'dayjs';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CalendarRef {
  current: {
    scrollToDay?: (date: string) => void;
  };
}

interface CustomNavigationOptions extends NativeStackNavigationOptions {
  calendarRef?: CalendarRef;
}

export default function CalendarLayout() {
  const { date, month } = useGlobalSearchParams<{
    date: string;
    month: string;
  }>();
  const router = useRouter();
  const { colors } = useColorScheme();
  // Use the month parameter from the URL or calculate it from the date
  const monthName =
    month ||
    (date ? dayjs(date as string).format('MMMM') : dayjs().format('MMMM'));

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'card',
        keyboardHandlingEnabled: true,
      }}
    >
      <Stack.Screen
        name="month"
        options={{
          headerShown: true,
          autoHideHomeIndicator: true,
          header: ({ options }: { options: CustomNavigationOptions }) => {
            const calendarRef = options.calendarRef;
            const title = options?.title ?? dayjs().format('MMMM');
            const year = options?.headerBackTitle ?? dayjs().format('YYYY');

            return (
              <View className="bg-background border-b border-border">
                <SafeAreaView edges={['top']} className="px-6 pt-2">
                  <View className="flex-row justify-between items-center">
                    <View>
                      <Text className="font-caption text-xs text-muted-foreground">
                        {year}
                      </Text>
                      <Text className="text-primary font-heading text-2xl">
                        {title}
                      </Text>
                    </View>
                    <Button
                      size="sm"
                      onPress={() =>
                        calendarRef?.current?.scrollToDay?.(
                          dayjs().format('YYYY-MM-DD'),
                        )
                      }
                    >
                      <Text className="text-primary-foreground font-medium">
                        Today
                      </Text>
                    </Button>
                  </View>
                </SafeAreaView>

                <View className="flex-row justify-between py-2 px-8 gap-1">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                    (day) => (
                      <Text key={day} className="font-caption font-regular">
                        {day}
                      </Text>
                    ),
                  )}
                </View>
              </View>
            );
          },
        }}
      />

      <Stack.Screen
        name="(week)/[date]"
        options={{
          headerShown: true,
          headerBackTitle: month,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitle: () => <Text className="font-subtitle">{monthName}</Text>,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Icons.ChevronLeft size={24} className="text-primary" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Icons.Search size={24} className="text-primary" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
