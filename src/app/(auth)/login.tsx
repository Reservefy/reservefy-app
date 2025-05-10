import { FormField, FormFieldType } from '@/components/shared/fields';
import KeyboardAvoid from '@/components/shared/keyboard-avoid';
import { Button, Text } from '@/components/ui';
import {
  AuthHeader,
  LoginFormType,
  loginSchema,
} from '@/components/views/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { control, handleSubmit } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormType) => {
    console.log('Login:', data);
  };

  return (
    <KeyboardAvoid>
      <View className="main-area">
        <View className="pt-20">
          <AuthHeader
            title={t('auth.login.title')}
            subtitle={t('auth.login.subtitle')}
          />
          <View className="gap-y-6 mt-10">
            <FormField
              control={control}
              name="email"
              label={t('auth.email')}
              placeholder={t('auth.emailPlaceholder')}
              fieldType={FormFieldType.INPUT}
              keyboard="email-address"
              returnKeyType="next"
              required
            />

            <FormField
              control={control}
              name="password"
              label={t('auth.password')}
              placeholder={t('auth.passwordPlaceholder')}
              fieldType={FormFieldType.PASSWORD}
              returnKeyType="done"
              required
            />
          </View>
        </View>

        <Button className="my-10" onPress={handleSubmit(onSubmit)}>
          <Text>{t('common.buttons.login')}</Text>
        </Button>

        <View className="flex flex-row justify-center items-center">
          <Text className="text-sm text-muted-foreground text-center">
            {t('auth.login.noAccount')}
          </Text>
          <Button
            variant="link"
            onPress={() => router.push('/(auth)/register')}
          >
            <Text className="font-primary">{t('auth.login.register')}</Text>
          </Button>
        </View>

        <View className="justify-center items-center">
          <TouchableOpacity onPress={() => router.push('/(auth)/forgot-pwd')}>
            <Text className="font-primary underline text-sm">
              {t('auth.login.forgotPassword')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoid>
  );
}
