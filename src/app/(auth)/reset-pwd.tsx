import { FormField, FormFieldType } from '@/components/shared/fields';
import KeyboardAvoid from '@/components/shared/keyboard-avoid';
import { Button, Text } from '@/components/ui';
import {
  AuthHeader,
  ResetPwdFormType,
  resetPwdSchema,
} from '@/components/views/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export default function ResetPwdScreen() {
  const { t } = useTranslation();
  const router = useRouter();

  const { control, handleSubmit } = useForm<ResetPwdFormType>({
    resolver: zodResolver(resetPwdSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const handleResetPassword = async (data: ResetPwdFormType) => {
    // TODO: Implement reset password logic
    router.push('/(auth)/login');
  };

  return (
    <KeyboardAvoid>
      <View className="main-area">
        <View className="pt-20">
          <AuthHeader
            title={t('auth.resetPwd.title')}
            subtitle={t('auth.resetPwd.subtitle')}
          />
          <View className="gap-y-6 mt-10">
            <FormField
              control={control}
              name="password"
              label={t('auth.password')}
              placeholder={t('auth.newPasswordPlaceholder')}
              fieldType={FormFieldType.PASSWORD}
              returnKeyType="next"
              capitalize="none"
              required
            />

            <FormField
              control={control}
              name="confirmPassword"
              label={t('auth.confirmPassword')}
              placeholder={t('auth.confirmPasswordPlaceholder')}
              fieldType={FormFieldType.PASSWORD}
              returnKeyType="done"
              capitalize="none"
              required
            />
          </View>
        </View>

        <Button className="my-10" onPress={handleSubmit(handleResetPassword)}>
          <Text>{t('auth.resetPwd.submit')}</Text>
        </Button>
      </View>
    </KeyboardAvoid>
  );
}
