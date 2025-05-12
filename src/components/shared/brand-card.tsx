import Icons from '@/lib/icons';
import { Image } from 'expo-image';
import { MotiView } from 'moti';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../ui';

interface BrandCardProps {
  name: string;
  avatar: string;
  subtitle: string;
  rating?: number;
  onPress?: () => void;
  index?: number;
}

export function BrandCard({
  name,
  avatar,
  subtitle,
  rating,
  onPress,
  index = 0,
}: BrandCardProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateX: 120 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: index * 100 }}
    >
      <TouchableOpacity
        onPress={onPress}
        className="w-[300px] mr-4 bg-card overflow-hidden rounded-lg shadow-md border border-border"
      >
        <View className="flex-row h-fit min-h-40">
          <View className="w-1/2 p-4 justify-between">
            <View>
              <Text className="font-body mb-1">{name}</Text>
              <Text
                className="text-muted-foreground font-caption"
                numberOfLines={2}
              >
                {subtitle}
              </Text>
            </View>
            {rating && (
              <View className="flex-row items-center shadow-md self-start px-2 py-1 rounded-full border border-ring/10">
                <Icons.Star
                  size={14}
                  className="fill-primary stroke-1 stroke-primary"
                />
                <Text className="ml-1 text-xs font-medium text-card-foreground">
                  {rating.toFixed(1)}
                </Text>
              </View>
            )}
          </View>
          <View className="w-1/2 relative">
            <Image
              source={{ uri: avatar }}
              className="absolute inset-0"
              contentFit="cover"
              transition={200}
            />
            <View className="absolute inset-0 bg-gradient-to-l from-transparent to-card/20" />
          </View>
        </View>
        <View className="h-1 bg-gradient-to-r from-primary/20 to-primary" />
      </TouchableOpacity>
    </MotiView>
  );
}
