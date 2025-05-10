import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

const KeyboardProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardProvider;
