import Icons from '@/lib/icons';
import { cn } from '@/lib/utils';
import { t } from '@/locales';
import { useTheme } from '@/providers/theme';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, Text } from 'react-native';

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { isDark, toggleTheme } = useTheme();

  const rotation = useRef(new Animated.Value(isDark ? 1 : 0)).current;
  const fade = useRef(new Animated.Value(isDark ? 1 : 0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(rotation, {
        toValue: isDark ? 1 : 0,
        duration: 1500, // slower for elegance
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: isDark ? 1 : 0,
        duration: 600,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isDark, rotation, fade]);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '270deg'],
  });

  const Sun = Icons.Sun;
  const Moon = Icons.MoonStar;

  return (
    <Pressable
      onPress={toggleTheme}
      className={cn(
        'flex-row items-center gap-2 px-4 justify-between w-40 py-2 rounded-full border border-border bg-secondary',
        'active:scale-95 transition-transform',
        className,
      )}
      accessibilityLabel="Toggle theme"
    >
      <Animated.View style={{ transform: [{ rotate }] }}>
        <Animated.View
          style={{
            position: 'absolute',
            opacity: fade.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          }}
        >
          <Sun className="text-secondary-foreground w-24 h-24 aspect-square" />
        </Animated.View>
        <Animated.View
          style={{
            opacity: fade,
          }}
        >
          <Moon className="text-secondary-foreground w-24 h-24 aspect-square" />
        </Animated.View>
      </Animated.View>

      <Text className="text-sm text-secondary-foreground">
        {isDark ? t('common.themes.dark') : t('common.themes.light')}
      </Text>
    </Pressable>
  );
};
