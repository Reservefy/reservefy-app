import { Stack } from 'expo-router';

export default function ProfessionalsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        keyboardHandlingEnabled: true,
      }}
    />
  );
}
