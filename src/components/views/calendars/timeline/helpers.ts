import { Dispatch, RefObject, SetStateAction } from 'react';
import { SearchBarCommands, SearchBarProps } from 'react-native-screens';

interface ISearchBox {
  ref: RefObject<SearchBarCommands>;
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
}

export function searchbox({
  ref,
  showSearch,
  setShowSearch,
}: ISearchBox): SearchBarProps | undefined {
  return showSearch
    ? {
        ref,
        placement: 'stacked',
        shouldShowHintSearchIcon: true,
        inputType: 'text',
        placeholder: 'Search...',
        cancelButtonText: 'Cancel',
        autoFocus: true,
        onClose() {
          setShowSearch(false);
        },
        onCancelButtonPress(e) {
          setShowSearch(false);
        },
      }
    : undefined;
}
