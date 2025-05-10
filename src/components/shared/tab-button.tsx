import { Colors } from '@/constants/colors';
import { useColorScheme } from '@/hooks/common/useColorScheme';
import Icons, { Icon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { useScrollStore } from '@/stores/useScrollStore';
import * as Haptics from 'expo-haptics';
import { TabTriggerSlotProps } from 'expo-router/ui';
import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
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
  const { colorScheme } = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const containerAnim = useAnimatedStyle(() => ({
    backgroundColor: withTiming(isFocused ? theme.primary : 'transparent'),
    paddingHorizontal: withTiming(isFocused ? 6 : 0),
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
    Haptics.selectionAsync();
    useScrollStore.setState({ isScrollingDown: false });
  }, []);

  return (
    <Animated.View style={containerAnim}>
      <Pressable
        {...props}
        className="flex-row items-center gap-1 px-4"
        onPressIn={handlePressIn}
      >
        <Animated.View style={iconAnim}>
          <Icon
            className={cn(
              'w-4 h-4 shrink-0 ',
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
