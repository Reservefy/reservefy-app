import { Text } from '@/components/ui';
import Icons from '@/lib/icons';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

type FAQItemProps = {
  question: string;
  answer: string;
};

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <View className="mb-4 border-b border-border pb-3">
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        className="flex-row justify-between items-center"
      >
        <Text className="text-base font-medium flex-1 pr-2">{question}</Text>
        {open ? (
          <Icons.ChevronUp size={20} className="text-primary" />
        ) : (
          <Icons.ChevronDown size={20} className="text-primary" />
        )}
      </TouchableOpacity>
      {open && (
        <Text className="text-sm text-muted-foreground mt-2">{answer}</Text>
      )}
    </View>
  );
};
