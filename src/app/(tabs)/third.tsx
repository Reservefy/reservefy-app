import { LanguageToggle } from '@/components/shared/language-toggle';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { Badge, Text } from '@/components/ui';
import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Third: React.FC = () => {
  return (
    <SafeAreaView className="safe-area">
      <View className="main-area gap-y-10 items-center">
        <ThemeToggle />
        <LanguageToggle />
        <Link href="/(auth)/login" className="text-center">
          <Text className="text-pretty text-purple-600">Go to Auth</Text>
        </Link>
        <Link href="/(store)/set-up" className="text-center">
          <Text className="text-pretty text-purple-600">Go to Set Up</Text>
        </Link>

        <Badge size="sm">
          <Text>Default sm</Text>
        </Badge>
        <Badge variant="success" size="md">
          <Text>Success md</Text>
        </Badge>
        <Badge variant="destructive" size="lg">
          <Text>Destructive lg</Text>
        </Badge>
        <Badge variant="info">
          <Text>Info sm</Text>
        </Badge>
      </View>
    </SafeAreaView>
  );
};

export default Third;
