import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { View } from 'react-native';

const brutalInfoBoxVariants = cva('mt-2', {
  variants: {
    variant: {
      default: 'brutal-info',
      info: 'brutal-info-blue',
      warning: 'brutal-info-yellow',
      success: 'brutal-info-green',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const brutalInfoBoxTextVariants = cva('brutal-body', {
  variants: {
    variant: {
      default: 'text-gray-700',
      info: 'text-blue-900',
      warning: 'text-yellow-900',
      success: 'text-green-900',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BrutalInfoBoxProps
  extends
    React.ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof brutalInfoBoxVariants> {
  children: React.ReactNode;
}

const BrutalInfoBox = React.forwardRef<
  React.ElementRef<typeof View>,
  BrutalInfoBoxProps
>(({ className, variant, children, ...props }, ref) => {
  return (
    <View
      ref={ref}
      className={cn(brutalInfoBoxVariants({ variant, className }))}
      {...props}
    >
      <Text className={brutalInfoBoxTextVariants({ variant })}>{children}</Text>
    </View>
  );
});

BrutalInfoBox.displayName = 'BrutalInfoBox';

export { BrutalInfoBox, brutalInfoBoxVariants };
