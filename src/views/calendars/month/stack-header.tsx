import { Button, Text } from '@/components/ui';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CalendarRef {
  current: {
    scrollToDay?: (date: string) => void;
  };
}

interface CustomNavigationOptions extends NativeStackNavigationOptions {
  calendarRef?: CalendarRef;
}

interface IStackHeaderProps {
  options: CustomNavigationOptions;
}

export const StackHeader: React.FC<IStackHeaderProps> = ({ options }) => {
  const { t } = useTranslation();
  const calendarRef = options.calendarRef;
  const title = options?.title ?? dayjs().format('MMMM');
  const year = options?.headerBackTitle ?? dayjs().format('YYYY');

  return (
    <View className="bg-background border-b border-border">
      <SafeAreaView edges={['top']} className="px-6 pt-2">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="font-caption text-xs text-muted-foreground">
              {year}
            </Text>
            <Text className="text-primary font-heading text-2xl">{title}</Text>
          </View>
          <Button
            size="sm"
            onPress={() =>
              calendarRef?.current?.scrollToDay?.(dayjs().format('YYYY-MM-DD'))
            }
          >
            <Text className="text-primary-foreground font-medium">
              {t('common.labels.today')}
            </Text>
          </Button>
        </View>
      </SafeAreaView>

      <View className="flex-row justify-between py-2 px-8 gap-1">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <Text key={day} className="font-caption font-regular">
            {day}
          </Text>
        ))}
      </View>
    </View>
  );
};
