import Icons from '@/lib/icons';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../ui';

interface ServiceCardProps {
  name: string;
  avatar: string;
  subtitle: string;
  rating?: number;
  onPress?: () => void;
  index?: number;
}

export function ServiceCard({
  name,
  avatar,
  subtitle,
  rating,
  onPress,
  index = 0,
}: ServiceCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-[180px] aspect-[3/4] bg-popover border border-ring/10 relative overflow-hidden rounded-2xl mr-4"
    >
      <Image
        source={{ uri: avatar }}
        className="absolute w-full h-full"
        contentFit="cover"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)']}
        className="absolute inset-0"
      />

      {/* Content Overlay */}
      <View className="absolute inset-0 justify-between p-3">
        {/* Top Section */}
        {rating && (
          <View className="self-end">
            <BlurView
              intensity={80}
              className="rounded-full border border-border overflow-hidden"
            >
              <View className="flex-row items-center px-2.5 py-1 bg-accent">
                <Icons.Star
                  size={12}
                  className="fill-primary stroke-primary stroke-1"
                />
                <Text className="ml-1 text-xs font-regular">
                  {rating.toFixed(1)}
                </Text>
              </View>
            </BlurView>
          </View>
        )}

        {/* Bottom Section */}
        <View>
          <Text className="font-title text-popover-foreground text-base mb-1 drop-shadow-sm">
            {name}
          </Text>
          <Text
            className="text-popover-foreground/90 text-sm drop-shadow-sm"
            numberOfLines={2}
          >
            {subtitle}
          </Text>

          {/* Accent Line */}
          <View className="h-0.5 w-12 bg-primary mt-2 rounded-full" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
