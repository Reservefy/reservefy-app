import { Text } from '@/components/ui';
import Icons from '@/lib/icons';
import { cn } from '@/lib/utils';
import { Link } from 'expo-router';
import { MotiView } from 'moti';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

interface Props {
  user?: {
    name: string;
    avatar: string;
    address: string;
  };
  className?: string;
}

export function Header({ user, className }: Props) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      className={cn('px-4', className)}
    >
      <View className="flex-row items-start justify-between">
        {user ? (
          <>
            <View className="flex-row items-center flex-1">
              <Image
                source={{ uri: user.avatar }}
                className="w-12 h-12 rounded-full border border-border"
                alt="user avatar"
              />
              <View className="ml-4 flex-1">
                <Text className="font-subtitle text-foreground">
                  Hello, {user.name}
                </Text>
                <View className="flex-row items-center mt-1">
                  <Icons.MapPin
                    size={13}
                    className="text-muted-foreground mr-1"
                  />
                  <Text
                    className="font-caption text-muted-foreground"
                    numberOfLines={1}
                  >
                    {user.address}
                  </Text>
                </View>
              </View>
            </View>

            <Pressable className="p-3 rounded-full bg-card">
              <Icons.Bell size={22} className="text-muted-foreground" />
            </Pressable>
          </>
        ) : (
          <>
            <View className="flex-row items-center">
              <Icons.Scissors className="w-8 h-8 text-primary mr-2" />
              <Text className="font-subtitle text-foreground">Reservefy</Text>
            </View>
            <Link href="/(auth)/register" asChild>
              <Pressable className="bg-primary px-5 py-2.5 rounded-full">
                <Text className="font-caption  text-primary-foreground">
                  Register
                </Text>
              </Pressable>
            </Link>
          </>
        )}
      </View>
    </MotiView>
  );
}
