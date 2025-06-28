import { useColorScheme } from '@/hooks/common';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBarCommands } from 'react-native-screens';

export default function SearchLayout() {
  const { t } = useTranslation();
  const router = useRouter();
  const { colors } = useColorScheme();
  const { query, type } = useGlobalSearchParams<{
    query: string;
    type: string;
  }>();
  const [searchText, setSearchText] = useState(query || '');
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
  }, [router, searchText]);

  // Update search text when URL params change
  useEffect(() => {
    if (query) {
      setSearchText(query);
      // Focus the search bar after a short delay to ensure it's mounted
      setTimeout(() => {
        if (ref.current) {
          ref.current.focus();
        }
      }, 150);
    }
  }, [query]);

  return (
    <Stack
      screenOptions={{
        headerTitle: type ? t(`search.${type}`) : t('search.title'),
        headerSearchBarOptions: {
          ref,
          placement: 'stacked',
          shouldShowHintSearchIcon: true,
          inputType: 'text',
          placeholder: t('common.labels.search'),
          cancelButtonText: t('common.labels.cancel'),
          autoFocus: true,
          autoCapitalize: 'none',
          disableBackButtonOverride: false,
          tintColor: colors.primary,
          hideWhenScrolling: false,
          onChangeText: handleSearchChange,
          onSearchButtonPress: handleSearchSubmit,
        },
      }}
    />
  );
}
