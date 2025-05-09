import { TabButton } from '@/components/shared/tab-button';
import { cn } from '@/lib/utils';
import { useScrollStore } from '@/stores/useScrollStore';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import React from 'react';

export default function TabLayout() {
  const isScrollingDown = useScrollStore((s) => s.isScrollingDown);
  return (
    <Tabs>
      <TabSlot />
      <TabList
        className={cn(
          'absolute bottom-9 self-center flex-row justify-evenly blur-3xl backdrop-blur-3xl rounded-full shadow-2xl p-0.5 transition-all duration-500',
          isScrollingDown
            ? 'bg-foreground/5 opacity-30'
            : 'bg-foreground/15 opacity-100',
        )}
      >
        <TabTrigger name="third" href="/third" asChild>
          <TabButton icon="Settings">Settings</TabButton>
        </TabTrigger>
        <TabTrigger name="second" href="/second" asChild>
          <TabButton icon="Calendar">Calendar</TabButton>
        </TabTrigger>
        <TabTrigger name="Home" href="/" asChild>
          <TabButton icon="Home">Home</TabButton>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
