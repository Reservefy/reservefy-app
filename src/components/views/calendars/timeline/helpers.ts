import { ThemeHex } from '@/styles/themes';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { SearchBarCommands, SearchBarProps } from 'react-native-screens';

interface ISearchBox {
  ref: RefObject<SearchBarCommands>;
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
  colors: ThemeHex;
}

export function searchbox({
  ref,
  showSearch,
  setShowSearch,
}: ISearchBox): SearchBarProps | undefined {
  const hideSearch = () => {
    // Ensure we blur the search field first
    if (ref.current) {
      ref.current.blur();
    }
    // Then set the state to hide it
    setTimeout(() => {
      setShowSearch(false);
    }, 0);
  };

  return showSearch
    ? {
        ref,
        placement: 'stacked',
        shouldShowHintSearchIcon: true,
        inputType: 'text',
        placeholder: 'Search...',
        cancelButtonText: 'Cancel',
        autoFocus: true,
        autoCapitalize: 'none',
        disableBackButtonOverride: false,
        barTintColor: 'primary',
        tintColor: 'primary',
        hideWhenScrolling: true,
        onBlur: hideSearch,
        onCancelButtonPress: hideSearch,
        onSearchButtonPress: () => {
          // This is called when the search button on the keyboard is pressed
          hideSearch();
        },
      }
    : undefined;
}
