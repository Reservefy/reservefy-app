import { SafeAreaView, ScrollView } from 'react-native';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useYScroll } from '@/hooks/common/useYScoll';
import { useOnboarding } from '@/stores/useOnboarding';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { onScroll } = useYScroll();
  const { t } = useTranslation();
  const { setCanVisitAgain } = useOnboarding();
  return (
    <SafeAreaView className="bg-background">
      <ScrollView
        onScroll={onScroll}
        bounces={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 50 }}
        scrollEventThrottle={16}
        className="bg-background"
        showsVerticalScrollIndicator={false}
      >
        <Link href="/(auth)/login" asChild>
          <Button>
            <Text>Navigate to auth</Text>
          </Button>
        </Link>
        <Link href="/(auth)/success" asChild>
          <Button>
            <Text>Navigate to success</Text>
          </Button>
        </Link>
        <Button variant="secondary" onPress={() => setCanVisitAgain(true)}>
          <Text>revist</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
