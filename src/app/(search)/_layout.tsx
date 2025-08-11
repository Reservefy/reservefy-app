import { useColorScheme } from '@/hooks/common';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBarCommands } from 'react-native-screens';

export default function SearchLayout() {
  const { t } = useTranslation();
  const router = useRouter();

  const { colors } = useColorScheme();
  const { type } = useGlobalSearchParams<{
    type: string;
  }>();

  const [searchText, setSearchText] = useState('');
  // Use non-null assertion to satisfy the type constraint
  const ref = useRef<SearchBarCommands>(
    null,
  ) as React.RefObject<SearchBarCommands>;

  // Handle search text change
  const handleSearchChange = useCallback(
    (event: { nativeEvent: { text: string } }) => {
      setSearchText(event.nativeEvent.text);
    },
    [],
  );

  // Handle search submission
  const handleSearchSubmit = useCallback(() => {
    // Update URL params with current search text
    router.setParams({ query: searchText });
    console.log('pressed');
  }, [router, searchText]);

  useEffect(() => {
    setTimeout(() => {
      if (type) {
        ref.current.focus();
        console.log('did render');
      }
    }, 550);
  }, [type]);

  return (
    <Stack
      screenOptions={{
        headerTitle: t('common.labels.search'),
        headerBackButtonMenuEnabled: true,
        headerBackButtonDisplayMode: 'generic',
        headerSearchBarOptions: {
          ref,
          placement: 'stacked',
          shouldShowHintSearchIcon: true,
          inputType: 'text',
          placeholder: t('common.labels.search'),
          cancelButtonText: t('common.buttons.back'),
          autoFocus: true,
          autoCapitalize: 'none',
          disableBackButtonOverride: false,
          tintColor: colors.primary,
          hideWhenScrolling: false,
          onChangeText: handleSearchChange,
          onSearchButtonPress: handleSearchSubmit,
          onCancelButtonPress: () => router.back(),
        },
      }}
    />
  );
}
