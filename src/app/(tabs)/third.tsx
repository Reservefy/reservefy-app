import { LanguageToggle } from '@/components/shared/language-toggle';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

const Third: React.FC = () => {
  return (
    <SafeAreaView className="safe-area">
      <View className="main-area gap-y-10">
        <ThemeToggle />
        <LanguageToggle />
      </View>
    </SafeAreaView>
  );
};

export default Third;
