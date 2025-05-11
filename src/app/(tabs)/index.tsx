import {
  CategoryPills,
  Header,
  PromoOffers,
  SearchBar,
} from '@/components/views/home';
import { useYScroll } from '@/hooks/common/useYScoll';
import { SafeAreaView, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SAMPLE_USER = {
  name: 'Mical Jackson',
  avatar: 'https://i.pravatar.cc/100',
  address: '6591 Elgin St. Celina, Delaware 10299',
};

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { onScroll } = useYScroll();

  return (
    <SafeAreaView className="safe-area">
      <ScrollView
        onScroll={onScroll}
        bounces={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 50 }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Header user={SAMPLE_USER} />

        <SearchBar />

        <CategoryPills />

        <PromoOffers />
      </ScrollView>
    </SafeAreaView>
  );
}
