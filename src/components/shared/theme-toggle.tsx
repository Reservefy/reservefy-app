import { useTheme } from '@/providers/theme';
import React from 'react';
import { Pressable } from 'react-native';

import Icons from '@/lib/icons';
import { cn } from '@/lib/utils'; // optional for merging classes

interface ThemeToggleProps {
  size?: number;
}

export const ThemeToggle = ({ size = 24 }: ThemeToggleProps) => {
  const { isDark, toggleTheme } = useTheme();

  const Icon = isDark ? Icons.MoonStar : Icons.Sun;

  return (
    <Pressable
      onPress={toggleTheme}
      className={cn(
        'p-2 rounded-full bg-muted/60 border border-border',
        'active:scale-95 transition-transform',
      )}
      accessibilityLabel="Toggle theme"
    >
      <Icon className="text-muted-foreground" size={size} />
    </Pressable>
  );
};
