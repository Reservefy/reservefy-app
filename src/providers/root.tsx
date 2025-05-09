import { useColorScheme } from '@/hooks/common/useColorScheme';
import { cn } from '@/lib/utils';
import React from 'react';
import { View } from 'react-native';
import ThemeProvider from './theme';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme } = useColorScheme();
  return (
    <View className={cn('flex-1', colorScheme === 'dark' ? 'dark' : '')}>
      <ThemeProvider>{children}</ThemeProvider>
    </View>
  );
};

export default RootProvider;
