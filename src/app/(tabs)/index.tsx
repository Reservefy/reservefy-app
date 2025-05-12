import { BrandCard } from '@/components/shared/brand-card';
import { ServiceCard } from '@/components/shared/service-card';
import {
  CategoryPills,
  Header,
  PromoOffers,
  SearchBar,
  SectionCard,
  mostBookedBrands,
  mostBookedWorkers,
  mostPopularBrands,
} from '@/components/views/home';

import { useYScroll } from '@/hooks/common/useYScoll';
import { useTranslation } from 'react-i18next';
import { Platform, SafeAreaView, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SAMPLE_USER = {
  name: 'Mical Jackson',
  avatar: 'https://i.pravatar.cc/100',
  address: '6591 Elgin St. Celina, Delaware 10299',
};

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { onScroll } = useYScroll();

  const { t } = useTranslation();

  return (
    <SafeAreaView className="safe-area">
      <ScrollView
        onScroll={onScroll}
        bounces={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + (Platform.OS === 'ios' ? 50 : 90),
          paddingTop: Platform.OS === 'android' ? insets.top : 0,
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Header user={SAMPLE_USER} />

        <SearchBar />

        <CategoryPills />

        <PromoOffers />

        {/* Most Booked Brands */}
        <SectionCard title={t('home.mostBookedBrands')} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="first:pl-4"
        >
          {mostBookedBrands.map((brand, index) => (
            <BrandCard key={brand.id} {...brand} index={index} />
          ))}
        </ScrollView>
        {/* Most Booked Workers */}

        <SectionCard title={t('home.mostBookedWorkers')} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="first:pl-4"
        >
          {mostBookedWorkers.map((worker, index) => (
            <ServiceCard key={worker.id} {...worker} />
          ))}
        </ScrollView>
        {/* Most Popular Brands */}

        <SectionCard title={t('home.mostPopularBrands')} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="first:pl-4"
        >
          {mostPopularBrands.map((brand, index) => (
            <BrandCard key={brand.id} {...brand} index={index} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
