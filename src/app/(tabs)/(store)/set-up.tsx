import { Text } from '@/components/ui';
import React from 'react';
import { View } from 'react-native';

interface ISetUpStoreProps {}

const SetUpStore: React.FC<ISetUpStoreProps> = (props) => {
  return (
    <View className="main-area flex-center">
      <Text>SetUpStore</Text>
    </View>
  );
};

export default SetUpStore;
