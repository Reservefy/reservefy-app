import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { View } from 'react-native';

const brutalCardVariants = cva('bg-white p-4', {
  variants: {
    border: {
      thin: 'brutal-border-thin',
      medium: 'brutal-border',
      thick: 'brutal-border-thick',
    },
    shadow: {
      none: '',
      sm: 'brutal-shadow-sm',
      md: 'brutal-shadow',
      lg: 'brutal-shadow-lg',
      xl: 'brutal-shadow-xl',
    },
  },
  defaultVariants: {
    border: 'medium',
    shadow: 'md',
  },
});

export interface BrutalCardProps
  extends
    React.ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof brutalCardVariants> {}

const BrutalCard = React.forwardRef<
  React.ElementRef<typeof View>,
  BrutalCardProps
>(({ className, border, shadow, ...props }, ref) => {
  return (
    <View
      ref={ref}
      className={cn(brutalCardVariants({ border, shadow, className }))}
      {...props}
    />
  );
});

BrutalCard.displayName = 'BrutalCard';

export { BrutalCard, brutalCardVariants };
