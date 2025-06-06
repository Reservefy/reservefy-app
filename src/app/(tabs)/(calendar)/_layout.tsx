import { Text } from '@/components/ui';
import { searchbox, StackHeader } from '@/components/views/calendars';
import { useColorScheme } from '@/hooks/common';
import Icons from '@/lib/icons';
import { THEMES_HEX } from '@/styles/themes';
import { formatMonth } from '@/utils/date';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useRef, useState } from 'react';
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
  console.log(`file: _layout.tsx:19 ~ showSearch:`, showSearch);
  // Use the month parameter from the URL or calculate it from the date
  const monthName = month || formatMonth(date);

  const ref = useRef<SearchBarCommands>(null);

  const hadleSearch = useCallback(() => {
    if (showSearch) {
      // When search is already showing, blur and hide it
      ref.current?.blur();
      setShowSearch(false);
    } else {
      // When search is not showing, show it and focus after a short delay
      setShowSearch(true);
      // Use setTimeout to ensure the search bar is rendered before trying to focus
      setTimeout(() => {
        if (ref.current) {
          ref.current.focus();
        }
      }, 150); // Slightly longer delay for more reliability
    }
  }, [setShowSearch, showSearch, ref]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'card',
        keyboardHandlingEnabled: true,
        headerSearchBarOptions: searchbox({
          ref: ref as React.RefObject<SearchBarCommands>,
          colors: THEMES_HEX,
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
            <TouchableOpacity onPress={hadleSearch}>
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
