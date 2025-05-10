import { PortalHost } from '@rn-primitives/portal';
import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { I18nProvider } from './intl';
import { ThemeProvider } from './theme';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <I18nProvider>
          <ThemeProvider>
            {children}
            <PortalHost />
          </ThemeProvider>
        </I18nProvider>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RootProvider;
