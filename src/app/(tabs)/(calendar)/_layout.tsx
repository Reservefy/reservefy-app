import { Text } from '@/components/ui';
import { searchbox, StackHeader } from '@/components/views/calendars';
import { useColorScheme } from '@/hooks/common';
import Icons from '@/lib/icons';
import { formatMonth } from '@/utils/date';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { SearchBarCommands } from 'react-native-screens';

export default function CalendarLayout() {
  const { date, month } = useGlobalSearchParams<{
    date: string;
    month: string;
  }>();
  const router = useRouter();
  const { colors } = useColorScheme();
  const [showSearch, setShowSearch] = useState(false);
  // Use the month parameter from the URL or calculate it from the date
  const monthName = month || formatMonth(date);

  const ref = useRef<SearchBarCommands>();
  console.log(` ref:`, ref);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'card',
        keyboardHandlingEnabled: true,
        headerSearchBarOptions: searchbox({
          ref,
          showSearch,
          setShowSearch,
        }),
      }}
    >
      <Stack.Screen
        name="month"
        options={{
          headerShown: true,
          autoHideHomeIndicator: true,
          header: ({ options }) => <StackHeader options={options} />,
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
            <TouchableOpacity
              onPress={() => {
                setShowSearch(!showSearch);
                ref.current?.focus();
              }}
            >
              {!showSearch ? (
                <Icons.Search size={24} className="text-primary" />
              ) : (
                <Icons.X size={24} className="text-accent-foreground" />
              )}
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
