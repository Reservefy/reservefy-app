// hooks/useYScroll.ts
import { useScrollStore } from '@/stores/useScrollStore';
import { useCallback, useRef } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

export function useYScroll(threshold = 1) {
  const lastY = useRef(0);
  const setScrollingDown = useScrollStore((s) => s.setScrollingDown);

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const y = e.nativeEvent.contentOffset.y;
      const diff = y - lastY.current;

      if (diff > threshold) setScrollingDown(true);
      else if (diff < -threshold) setScrollingDown(false);

      lastY.current = y;
    },
    [threshold, setScrollingDown],
  );

  return { onScroll };
}
