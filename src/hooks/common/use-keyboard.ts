import { useEffect, useRef, useState } from 'react';
import {
  EmitterSubscription,
  Keyboard,
  KeyboardEvent,
  Platform,
} from 'react-native';

type SupportedPlatforms = 'ios' | 'android';

export const useKeyboardHeight = (
  platforms: SupportedPlatforms[] = ['ios', 'android'],
) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const showSubscription = useRef<EmitterSubscription | null>(null);
  const hideSubscription = useRef<EmitterSubscription | null>(null);

  useEffect(() => {
    if (isEventRequired(platforms)) {
      showSubscription.current = Keyboard.addListener(
        Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
        keyboardDidShow,
      );
      hideSubscription.current = Keyboard.addListener(
        Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
        keyboardDidHide,
      );

      return () => {
        showSubscription.current?.remove();
        hideSubscription.current?.remove();
      };
    }
    return undefined;
  }, [platforms]);

  const isEventRequired = (platforms: SupportedPlatforms[]): boolean => {
    if (!platforms?.length) return true;
    return platforms.map((p) => p.toLowerCase()).includes(Platform.OS);
  };

  const keyboardDidShow = (event: KeyboardEvent): void => {
    const height = event.endCoordinates.height;
    setKeyboardHeight(height);
  };

  const keyboardDidHide = (): void => {
    setKeyboardHeight(0);
  };

  return keyboardHeight;
};
