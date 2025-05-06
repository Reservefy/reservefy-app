import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Suspense, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import MontserratBold from '@/assets/fonts/Montserrat-Bold.ttf';
import MontserratLight from '@/assets/fonts/Montserrat-Light.ttf';
import MontserratMedium from '@/assets/fonts/Montserrat-Medium.ttf';
import MontserratRegular from '@/assets/fonts/Montserrat-Regular.ttf';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    light: MontserratLight,
    regular: MontserratRegular,
    medium: MontserratMedium,
    bold: MontserratBold,
  });

  // Hide the splash screen once fonts are loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Suspense fallback={<ActivityIndicator className="text-primary size-14" />}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </Suspense>
  );
}
