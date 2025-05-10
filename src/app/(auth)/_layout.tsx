import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationDuration: 50,
        presentation: Platform.OS === 'ios' ? 'modal' : 'card',
        animation: 'slide_from_bottom',
        animationTypeForReplace: 'push',
        keyboardHandlingEnabled: true,
      }}
    />
  );
}
