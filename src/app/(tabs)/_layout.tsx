import { TabButton } from '@/components/shared/tab-button';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList className="absolute bottom-9 self-center flex-row justify-evenly bg-foreground/5 blur-3xl backdrop-blur-3xl rounded-full shadow-2xl p-0.5">
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
