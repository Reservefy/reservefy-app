import { Text } from '@/components/ui';
import { useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

interface ISearchProps {}

const Search: React.FC<ISearchProps> = (props) => {
  const params = useGlobalSearchParams();
  console.log(params);
  return (
    <View className="main-area flex-center">
      <Text>Search</Text>
    </View>
  );
};

export default Search;
