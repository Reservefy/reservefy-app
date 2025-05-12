import { TabButton } from '@/components/shared/tab-button';
import { cn } from '@/lib/utils';
import { useScrollStore } from '@/stores/useScrollStore';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TabLayout() {
  const isScrollingDown = useScrollStore((s) => s.isScrollingDown);
  const { t } = useTranslation();
  return (
    <Tabs>
      <TabSlot />
      <TabList
        className={cn(
          'absolute bg-foreground/10 bottom-9 self-center flex-row justify-evenly blur-3xl backdrop-blur-3xl rounded-full transition-all duration-500 drop-shadow-2xl',
          isScrollingDown ? ' opacity-50' : ' opacity-100',
        )}
      >
        <TabTrigger name="Home" href="/" asChild>
          <TabButton icon="Home">{t('common.tabs.home')}</TabButton>
        </TabTrigger>
        <TabTrigger name="second" href="/calendar" asChild>
          <TabButton icon="Calendar">{t('common.tabs.calendar')}</TabButton>
        </TabTrigger>
        <TabTrigger name="third" href="/third" asChild>
          <TabButton icon="Settings">{t('common.tabs.settings')}</TabButton>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
