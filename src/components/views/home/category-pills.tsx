import { Major } from '@/constants/enum';
import { cn } from '@/lib/utils';
import { MotiView } from 'moti';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const emojiMap = ['💇‍♂️', '🧖‍♀️', '🦷', '🏋️', '🧘‍♂️', '🎨', '👨‍⚕️', '🧪'];

const MAJOR_CATEGORIES = Object.values(Major)
  .slice(0, 8)
  .map((id, index) => ({
    id,
    emoji: emojiMap[index],
  }));

interface Props {
  className?: string;
}

export function CategoryPills({ className }: Props) {
  const { t } = useTranslation();

  return (
    <View className={cn('mt-7 px-4', className)}>
      <View className="flex-row flex-wrap items-center justify-between gap-x-2 gap-y-3">
        {MAJOR_CATEGORIES.map((category, index) => (
          <MotiView
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 150 + index * 100 }}
            key={category.id}
            className="w-[22%]"
          >
            <Pressable className="aspect-square items-center justify-center bg-card/50 rounded-xl border border-border">
              <Animated.View
                entering={FadeIn.delay(150 + index * 100)}
                className="items-center"
              >
                <Text className="text-2xl mb-2">{category.emoji}</Text>
                <Text className="font-caption line-clamp-1 px-2 text-muted-foreground text-center">
                  {t(`major.${category.id}`)}
                </Text>
              </Animated.View>
            </Pressable>
          </MotiView>
        ))}
      </View>

      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 750 }}
      >
        <Pressable className="py-3 mt-4 items-center justify-center bg-card/50 rounded-xl border border-border">
          <Text className="font-caption text-sm text-primary">
            {t('categories.seeAll')}
          </Text>
        </Pressable>
      </MotiView>
    </View>
  );
}
