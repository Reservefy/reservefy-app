import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/shared/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/common/useColorScheme';
import Icons from '@/lib/icons';
import { BlurView } from 'expo-blur';
import { Platform, StyleSheet, View } from 'react-native';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: theme.icon,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0, // Remove any border
          bottom: 0, // Ensure correct positioning
          paddingTop: 5,
          height: 65,

          backgroundColor: 'transparent', // Prevent solid colors
          elevation: 0, // Remove Android shadow
          shadowOpacity: 0.1, // Remove iOS shadow
        },
        tabBarBackground: () =>
          Platform.OS === 'android' ? (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: theme.background, // Glassy fallback
              }}
            />
          ) : (
            <BlurView
              intensity={30}
              tint={colorScheme}
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: 'hidden',
              }}
            />
          ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icons.Home size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
