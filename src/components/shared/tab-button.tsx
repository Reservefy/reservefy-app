import { useColorScheme } from '@/hooks/common/use-color-scheme';
import Icons, { Icon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { useScrollStore } from '@/stores/use-scroll-store';

import * as Haptics from 'expo-haptics';
import { TabTriggerSlotProps } from 'expo-router/ui';
import React, { useCallback } from 'react';
import { Platform, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

type Props = TabTriggerSlotProps & {
  icon: Icon;
};

export function TabButton({ isFocused, icon, children, ...props }: Props) {
  const { colors } = useColorScheme();

  const containerAnim = useAnimatedStyle(() => ({
    backgroundColor: withTiming(isFocused ? colors.primary : 'transparent', {
      duration: 400,
    }),
    paddingHorizontal: withTiming(isFocused ? 6 : 0, {
      duration: 400,
    }),
    paddingVertical: 10,
    borderRadius: 999,
  }));

  const textAnim = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(isFocused ? 0 : 20, {
          duration: 120,
        }),
      },
    ],
    opacity: withTiming(isFocused ? 1 : 0, { duration: 120 }),
  }));

  const iconAnim = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withDelay(
          130,
          isFocused
            ? withSequence(
                withTiming(1.2, { duration: 150 }),
                withTiming(0.9, { duration: 150 }),
                withTiming(1.1, { duration: 150 }),
                withTiming(1, { duration: 100 }),
              )
            : withTiming(1, { duration: 0 }),
        ),
      },
    ],
  }));

  const Icon = Icons[icon];

  const handlePressIn = useCallback(() => {
    try {
      if (Platform.OS === 'ios') {
        Haptics.selectionAsync();
      } else {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    } catch (error) {
      console.warn('Haptics not available:', error);
    }
    useScrollStore.setState({ isScrollingDown: false });
  }, []);

  return (
    <Animated.View style={containerAnim}>
      <Pressable
        {...props}
        className="flex-row items-center gap-2 px-3"
        onPressIn={handlePressIn}
      >
        <Animated.View style={iconAnim}>
          <Icon
            className={cn(
              'w-3 h-3 shrink-0 ',
              isFocused
                ? 'text-secondary stroke-2'
                : 'text-muted-foreground stroke-1',
            )}
          />
        </Animated.View>
        {isFocused && (
          <Animated.Text
            style={textAnim}
            className={cn(
              'text-body leading-body text-secondary',
              isFocused ? 'font-bold' : 'font-medium',
            )}
          >
            {children}
          </Animated.Text>
        )}
      </Pressable>
    </Animated.View>
  );
}
