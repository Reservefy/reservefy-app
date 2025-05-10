import { FormField, FormFieldType } from '@/components/shared/fields';
import KeyboardAvoid from '@/components/shared/keyboard-avoid';
import { Button, Text } from '@/components/ui';
import {
  AuthHeader,
  LoginFormType,
  loginSchema,
} from '@/components/views/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

export default function LoginScreen() {
  const { control, handleSubmit, formState } = useForm<LoginFormType>({
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
            title="Log in"
            subtitle="Please enter your credentials to continue"
          />
          <View className="gap-y-6 mt-10">
            <FormField
              control={control}
              name="email"
              label="Email"
              placeholder="Enter email"
              message="Please enter your email"
              fieldType={FormFieldType.INPUT}
              keyboard="email-address"
              returnKeyType="next"
              required
            />

            <FormField
              control={control}
              name="password"
              label="Password"
              placeholder="Enter password"
              fieldType={FormFieldType.PASSWORD}
              returnKeyType="done"
              required
            />
          </View>
        </View>

        <Button className="my-10" onPress={handleSubmit(onSubmit)}>
          <Text>Login</Text>
        </Button>
      </View>
    </KeyboardAvoid>
  );
}
