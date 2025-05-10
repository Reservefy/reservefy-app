import { FormField, FormFieldType } from '@/components/shared/fields';
import KeyboardAvoid from '@/components/shared/keyboard-avoid';
import { Button, Text } from '@/components/ui';
import {
  AuthHeader,
  ForgotPwdEmailFormType,
  forgotPwdCodeSchema,
  forgotPwdEmailSchema,
} from '@/components/views/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';

export default function ForgotPwdScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const [codeSent, setCodeSent] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const { control, handleSubmit, watch } = useForm<ForgotPwdEmailFormType>({
    resolver: zodResolver(
      codeSent ? forgotPwdCodeSchema : forgotPwdEmailSchema,
    ),
    defaultValues: {
      email: '',
      code: '',
    },
  });

  const code = watch('code');
  const isCodeValid = code?.length === 6;

  const handleSendCode = async (data: ForgotPwdEmailFormType) => {
    // TODO: Implement send code logic
    setCodeSent(true);
  };

  const handleResendCode = async () => {
    setIsResending(true);
    // TODO: Implement resend code logic
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    setIsResending(false);
  };

  const handleVerifyCode = async (data: ForgotPwdEmailFormType) => {
    // TODO: Implement verify code logic
    router.push('/(auth)/reset-pwd');
  };

  return (
    <KeyboardAvoid>
      <View className="main-area">
        <View className="pt-20">
          <AuthHeader
            title={t('auth.forgotPwd.title')}
            subtitle={t('auth.forgotPwd.subtitle')}
          />
          <View className="gap-y-6 mt-10">
            <FormField
              control={control}
              name="email"
              label={t('auth.email')}
              placeholder={t('auth.emailPlaceholder')}
              fieldType={FormFieldType.INPUT}
              keyboard="email-address"
              returnKeyType="done"
              capitalize="none"
              required
              disabled={codeSent}
            />

            {codeSent && (
              <FormField
                control={control}
                name="code"
                label={t('auth.verificationCode')}
                placeholder={t('auth.codePlaceholder')}
                fieldType={FormFieldType.INPUT}
                keyboard="number-pad"
                returnKeyType="done"
                required
              />
            )}
          </View>
        </View>

        {!codeSent ? (
          <Button className="my-10" onPress={handleSubmit(handleSendCode)}>
            <Text>{t('auth.forgotPwd.sendCode')}</Text>
          </Button>
        ) : (
          <>
            <Button
              variant="outline"
              className="mt-5"
              onPress={handleResendCode}
              disabled={isResending || watch('code')?.length === 6}
            >
              <Text>
                {isResending
                  ? t('auth.forgotPwd.resending')
                  : t('auth.forgotPwd.resend')}
              </Text>
            </Button>
            <Button
              className="my-5"
              onPress={handleSubmit(handleVerifyCode)}
              disabled={!isCodeValid}
            >
              <Text>{t('auth.forgotPwd.verify')}</Text>
            </Button>
          </>
        )}

        <View className="justify-center items-center">
          <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
            <Text className="font-primary underline text-sm">
              {t('auth.forgotPwd.backToLogin')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoid>
  );
}
