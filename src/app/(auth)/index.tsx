import { FormField, FormFieldType } from '@/components/shared/fields';
import { Button, Text } from '@/components/ui';
import { LoginFormType, loginSchema } from '@/components/views/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

export default function LoginScreen() {
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
    <View className="p-4">
      <FormField
        control={control}
        name="email"
        label="Email"
        placeholder="Enter email"
        message="Please enter your email"
        fieldType={FormFieldType.INPUT}
        required
      />

      <FormField
        control={control}
        name="password"
        label="Password"
        placeholder="Enter password"
        fieldType={FormFieldType.PASSWORD}
        required
      />

      <Button className="mt-4" onPress={handleSubmit(onSubmit)}>
        <Text>Login</Text>
      </Button>
    </View>
  );
}
