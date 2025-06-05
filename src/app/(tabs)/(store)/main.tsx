import { Text } from '@/components/ui';
import React from 'react';
import { View } from 'react-native';

interface IStoreProps {}

const Store: React.FC<IStoreProps> = (props) => {
  return (
    <View className="main-area flex-center">
      <Text>Store</Text>
    </View>
  );
};

export default Store;
