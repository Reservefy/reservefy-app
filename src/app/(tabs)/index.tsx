import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/shared/ParallaxScrollView';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { t } from '@/locales';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <View className="bg-card gap-y-4 p-4">
        <Text className="font-bold text-xl text-red-500">
          This is test bold text
        </Text>

        <Text className="font-medium text-xl text-green-500">
          {t('common.loading')}
        </Text>
        <Text className="font-regular text-lg text-purple-500">
          {t('common.welcome')}
        </Text>
        <Text className="text-md text-gray-700 mt-10">
          {t('common.test', { name: 'Salah' })}
        </Text>
      </View>
      <Text className="font-heading text-destructive">Heading</Text>
      <Text className="font-title text-destructive">Title</Text>
      <Text className="font-subtitle text-destructive">Subtitle</Text>
      <Text className="font-body text-destructive">Body text</Text>
      <Text className="font-caption text-destructive">Caption</Text>
      <Button variant="secondary">
        <Text>Default</Text>
      </Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
