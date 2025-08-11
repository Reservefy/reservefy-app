import { Input } from '@/components/ui';
import { Major } from '@/constants/enum';
import Icons from '@/lib/icons';
import { cn } from '@/lib/utils';
import { useRouter } from 'expo-router';
import { MotiView } from 'moti';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';
import {
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  className?: string;
}

const MAJORS = Object.values(Major);

export function SearchBar({ className }: Props) {
  const router = useRouter();
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const trigger = useSharedValue(0);

  const handleSearch = () =>
    router.push({
      pathname: '/(search)',
      params: {
        type: 'search',
      },
    });

  useEffect(() => {
    trigger.value = withRepeat(
      withDelay(3000, withTiming(trigger.value + 1, { duration: 300 })),
      -1,
      false,
    );
  }, [trigger]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % MAJORS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentType = MAJORS[index];

  return (
    <MotiView
      from={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 500 }}
      className={cn('px-4 mt-10', className)}
    >
      <Pressable
        onPress={handleSearch}
        className="flex-row items-center px-4 bg-card/50 rounded-full border border-border"
      >
        <Input
          placeholder={t('common.labels.searchFor', {
            type: t(`major.${currentType}`),
          })}
          className="flex-1 border-0 h-auto bg-transparent font-body"
          returnKeyLabel={t('common.labels.search')}
          editable={false}
          onPress={handleSearch}
        />
        <Icons.Search size={22} className=" text-muted-foreground" />
      </Pressable>
    </MotiView>
  );
}
