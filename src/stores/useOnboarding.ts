// CHecks onboarding visited or not
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface OnboardingState {
  visited: boolean;
  setVisited: () => void;
  canVisitAgain: boolean;
  setCanVisitAgain: (canVisitAgain: boolean) => void;
}

export const useOnboarding = create<OnboardingState>()(
  persist<OnboardingState>(
    (set) => ({
      visited: false,
      setVisited: () => set({ visited: true }),
      canVisitAgain: true,
      setCanVisitAgain: (canVisitAgain: boolean) => set({ canVisitAgain }),
    }),
    {
      name: 'onboarding-store', // Key for persistence
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage'
    },
  ),
);
