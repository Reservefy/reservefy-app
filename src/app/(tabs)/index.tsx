import { SafeAreaView, ScrollView, View } from 'react-native';

import { ThemeToggle } from '@/components/shared/theme-toggle';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useYScroll } from '@/hooks/common/useYScoll';
import { t } from '@/locales';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { onScroll } = useYScroll();
  return (
    <SafeAreaView className="bg-background backdrop-blur-3xl blur-3xl">
      <ScrollView
        onScroll={onScroll}
        bounces={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 50 }}
        scrollEventThrottle={16}
        className="bg-background"
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-card gap-y-4 p-4">
          <Text className="font-bold text-xl text-red-500">
            This is test bold text
          </Text>

          <Text className="font-medium text-xl text-green-500">
            {t('common.loading')}
          </Text>
          <Text className="font-regular text-lg text-purple-500">
            {t('common.welcome')}
          </Text>
          <Text className="text-md text-gray-700 mt-10">
            {t('common.test', { name: 'Salah' })}
          </Text>
        </View>
        <Text className="font-heading text-primary">Heading</Text>
        <Text className="font-title text-primary-foreground">Title</Text>
        <Text className="font-subtitle text-secondary">Subtitle</Text>
        <Text className="font-body text-foreground">Body text</Text>
        <Text className="font-caption text-destructive">Caption</Text>
        <Button>
          <Text>Default</Text>
        </Button>
        <Button variant="secondary">
          <Text>secondary</Text>
        </Button>
        <Button variant="ghost">
          <Text>ghost</Text>
        </Button>
        <Button variant="link">
          <Text>Default</Text>
        </Button>
        <Button variant="destructive">
          <Text>destructive</Text>
        </Button>
        <Button variant="outline">
          <Text>outline</Text>
        </Button>
        <View className="h-8 justify-center px-3 rounded bg-background">
          <Text className="text-foreground text-sm">
            background / foreground
          </Text>
        </View>
        <View className="h-8 justify-center px-3 rounded bg-border">
          <Text className="text-foreground text-sm">border</Text>
        </View>
        <View className="h-8 justify-center px-3 rounded bg-input">
          <Text className="text-foreground text-sm">input</Text>
        </View>
        <View className="h-8 justify-center px-3 rounded bg-ring">
          <Text className="text-background text-sm">ring</Text>
        </View>
        <View className="h-8 justify-center px-3 rounded bg-primary">
          <Text className="text-primary-foreground text-sm">primary</Text>
        </View>

        <View className="h-8 justify-center px-3 rounded bg-secondary">
          <Text className="text-secondary-foreground text-sm">secondary</Text>
        </View>

        <View className="h-8 justify-center px-3 rounded bg-destructive">
          <Text className="text-destructive-foreground text-sm">
            destructive
          </Text>
        </View>

        <View className="h-8 justify-center px-3 rounded bg-muted">
          <Text className="text-muted-foreground text-sm">muted</Text>
        </View>

        <View className="h-8 justify-center px-3 rounded bg-accent">
          <Text className="text-accent-foreground text-sm">accent</Text>
        </View>

        <View className="h-8 justify-center px-3 rounded bg-popover">
          <Text className="text-popover-foreground text-sm">popover</Text>
        </View>

        <View className="h-8 justify-center px-3 rounded bg-card">
          <Text className="text-card-foreground text-sm">card</Text>
        </View>
        <ThemeToggle />
      </ScrollView>
    </SafeAreaView>
  );
}
