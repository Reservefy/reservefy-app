import RootProvider from '@/providers/root';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';

export default function App() {
  // const [loaded] = useFonts({
  //   SpaceMono: spaceMono,
  // });

  // // Hide the splash screen once fonts are loaded
  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <Suspense fallback={<ActivityIndicator className="text-primary size-14" />}>
      <RootProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </RootProvider>
    </Suspense>
  );
}
