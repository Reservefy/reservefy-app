import { Button, Text } from '@/components/ui';
import { FAQItem, FeatureItem, PlanCard } from '@/components/views/website';
import {
  faqs,
  features,
  plans,
  useCases,
} from '@/components/views/website/data';
import Icons, { Icon } from '@/lib/icons';
import { useOnboarding } from '@/stores/useOnboarding';
import { useRouter } from 'expo-router';
import { MotiView } from 'moti';
import React, { useCallback } from 'react';
import { Dimensions, Image, ScrollView, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function WebsiteScreen() {
  const router = useRouter();
  const { setVisited, setCanVisitAgain } = useOnboarding();

  const handleGetStarted = useCallback(() => {
    setVisited();
    setCanVisitAgain(false);
    router.replace('/(auth)/register');
  }, [router, setVisited, setCanVisitAgain]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerClassName="pb-28">
        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          className="px-6 pt-12"
        >
          <Text className="text-4xl font-bold mb-4">
            Streamline Your Service Bookings
          </Text>
          <Text className="text-base text-muted-foreground mb-8">
            The all-in-one platform for service providers and customers.
          </Text>
          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'timing', duration: 1000 }}
          >
            <Image
              source={require('@/assets/images/icon.png')}
              className="w-full h-64 rounded-3xl"
              resizeMode="cover"
            />
          </MotiView>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(800).springify()}>
          <Button
            className="py-4 rounded-full w-1/2 self-center mb-10 mt-5"
            onPress={handleGetStarted}
            variant="outline"
          >
            <Text>Create an Account</Text>
          </Button>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(400).springify()}
          className="px-6 py-12 bg-card"
        >
          <Text className="text-2xl font-bold mb-6">Key Features</Text>
          <View className="gap-6">
            {features.map(({ id, title, description, icon }) => (
              <FeatureItem
                key={id}
                title={title}
                description={description}
                icon={icon as Icon}
              />
            ))}
          </View>
        </Animated.View>

        <View className="px-2 py-12">
          <Animated.View
            entering={FadeInDown.delay(600).springify()}
            className="pl-3"
          >
            <Text className="text-2xl font-bold mb-2">Simple Pricing</Text>
            <Text className="text-sm text-muted-foreground mb-6">
              Choose the plan that works best for your goals
            </Text>
          </Animated.View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width - width * 0.2}
            decelerationRate="fast"
          >
            {plans.map((plan, index) => (
              <Animated.View
                key={plan.id}
                entering={FadeInDown.delay(index * 200)}
                className="flex-row flex gap-x-4"
              >
                <PlanCard plan={plan} />
              </Animated.View>
            ))}
          </ScrollView>
        </View>

        <View className="px-6 py-12 bg-muted/10">
          <Text className="text-2xl font-bold mb-6">Use Cases</Text>
          <View className="gap-4">
            {useCases.map(({ id, title, description, icon }) => {
              const Icon = Icons[icon as Icon];
              return (
                <View
                  key={id}
                  className="p-4 bg-card rounded-2xl flex-row items-start gap-4"
                >
                  <Icon size={24} className="text-primary mt-1" />
                  <View className="flex-1">
                    <Text className="text-lg font-semibold mb-1">{title}</Text>
                    <Text className="text-sm text-muted-foreground">
                      {description}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View className="px-6 py-12">
          <Text className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </Text>
          {faqs.map(({ id, question, answer }) => (
            <FAQItem key={id} question={question} answer={answer} />
          ))}
        </View>
      </ScrollView>

      <Animated.View
        entering={FadeInUp.delay(800).springify()}
        className="absolute bottom-6 left-4 right-4"
      >
        <Button className="py-4" onPress={handleGetStarted}>
          <Text className="text-primary-foreground font-semibold text-center">
            Get Started Now
          </Text>
        </Button>
      </Animated.View>
    </SafeAreaView>
  );
}
