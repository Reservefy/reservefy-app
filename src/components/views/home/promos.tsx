import { Text } from '@/components/ui';
import { cn } from '@/lib/utils';
import { MotiView } from 'moti';
import React from 'react';
import { Dimensions, Image, Pressable, ScrollView, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.935;
const CARD_GAP = 16;

const offers = [
  {
    id: '1',
    title: 'Haircut  jkhdfajkl kljasdhkl hasdklh',
    subtitle: 'Limited time offer',
    discount: '50% off',
    dates: 'Feb 14 - Mar 24',
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Makeup',
    subtitle: 'Event special',
    discount: '30% off',
    dates: 'Apr 01 - Apr 20',
    image:
      'https://images.unsplash.com/photo-1592336232088-99c7c7f19cfa?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: '2312',
    title: 'Makeup',
    subtitle: 'Event special',
    discount: '30% off',
    dates: 'Apr 01 - Apr 20',
    image:
      'https://images.unsplash.com/photo-1592336232088-99c7c7f19cfa?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: '23121',
    title: 'Makeup',
    subtitle: 'Event special',
    discount: '30% off',
    dates: 'Apr 01 - Apr 20',
    image:
      'https://images.unsplash.com/photo-1592336232088-99c7c7f19cfa?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: '221313123',
    title: 'Makeup',
    subtitle: 'Event special',
    discount: '30% off',
    dates: 'Apr 01 - Apr 20',
    image:
      'https://images.unsplash.com/photo-1592336232088-99c7c7f19cfa?q=80&w=2074&auto=format&fit=crop',
  },
  // more offers...
];

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function PromoOffers({ className }: { className?: string }) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(0.98) }],
  }));

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 500 }}
      className={cn('mt-12', className)}
    >
      <View className="flex-row items-center">
        <Text className="font-title mb-4 pl-6">Offers / Promotions</Text>
        <Text className="font-subtitle mb-4 ml-2">({offers.length})</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_GAP}
        decelerationRate="fast"
        className="first:pl-4"
      >
        {offers.map((item, index) => (
          <MotiView
            key={item.id}
            from={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              type: 'timing',
              duration: 500,
              delay: index * 100,
            }}
            style={{
              width: CARD_WIDTH,
              marginRight: CARD_GAP,
            }}
          >
            <AnimatedPressable
              style={animatedStyle}
              className="flex-row items-center p-4 bg-card rounded-xl border border-border overflow-hidden h-[190px]"
            >
              <MotiView className="flex-1 pr-4">
                <Text className="font-subtitle line-clamp-1 text-foreground">
                  {item.title}
                </Text>
                <Text className="font-caption line-clamp-1">
                  {item.subtitle}
                </Text>
                <Text className="text-title leading-title font-bold text-primary my-2">
                  {item.discount}
                </Text>
                <Text className="text-caption text-muted-foreground">
                  {item.dates}
                </Text>
                <Pressable className="bg-primary px-4 py-2 rounded-full self-start mt-4">
                  <Text className="text-sm font-medium text-primary-foreground">
                    Get Offer Now
                  </Text>
                </Pressable>
              </MotiView>
              <Image
                source={{ uri: item.image }}
                className="w-28 h-28 rounded-xl"
                resizeMode="cover"
              />
            </AnimatedPressable>
          </MotiView>
        ))}
      </ScrollView>
    </MotiView>
  );
}
