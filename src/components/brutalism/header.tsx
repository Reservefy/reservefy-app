import { Text } from '@/components/ui/text';
import * as React from 'react';
import { View } from 'react-native';
import { BrutalCard } from './card';

export interface BrutalHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const BrutalHeader = React.forwardRef<
  React.ElementRef<typeof View>,
  BrutalHeaderProps
>(({ number, title, subtitle, className }, ref) => {
  return (
    <BrutalCard ref={ref} shadow="lg" border="thick" className={className}>
      <Text className="brutal-heading">
        {number}. {title}
      </Text>
      {subtitle && (
        <Text className="brutal-subheading text-gray-600 mt-1">{subtitle}</Text>
      )}
    </BrutalCard>
  );
});

BrutalHeader.displayName = 'BrutalHeader';

export { BrutalHeader };
