import { LanguageToggle } from '@/components/shared/language-toggle';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { Text } from '@/components/ui';
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

const Third: React.FC = () => {
  return (
    <SafeAreaView className="safe-area">
      <View className="main-area gap-y-10">
        <ThemeToggle />
        <LanguageToggle />
        <Link href="/(auth)/login">
          <Text className="text-pretty text-purple-600">Go to Auth</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Third;
