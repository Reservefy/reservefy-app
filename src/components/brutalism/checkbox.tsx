import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Pressable, View } from 'react-native';

export interface BrutalCheckboxProps {
  checked: boolean;
  onPress: () => void;
  label: string;
  className?: string;
}

const BrutalCheckbox = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  BrutalCheckboxProps
>(({ checked, onPress, label, className }, ref) => {
  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      className={cn(
        checked ? 'brutal-checkbox-active' : 'brutal-checkbox',
        className,
      )}
    >
      <Text
        className={cn(
          'text-base font-black uppercase tracking-wide',
          checked ? 'text-primary-foreground' : 'text-black',
        )}
      >
        {label}
      </Text>
      <View
        className={cn(
          'brutal-checkbox-indicator',
          checked ? 'bg-black' : 'bg-white',
        )}
      >
        {checked && <Text className="text-white font-black text-lg">✓</Text>}
      </View>
    </Pressable>
  );
});

BrutalCheckbox.displayName = 'BrutalCheckbox';

export { BrutalCheckbox };
