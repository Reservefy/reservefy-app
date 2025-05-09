// stores/useScrollStore.ts
import { create } from 'zustand';

type ScrollState = {
  isScrollingDown: boolean;
  setScrollingDown: (down: boolean) => void;
};

export const useScrollStore = create<ScrollState>()((set) => ({
  isScrollingDown: false,
  setScrollingDown: (down) => set({ isScrollingDown: down }),
}));
