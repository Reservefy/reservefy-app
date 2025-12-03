import React, { useState } from 'react';

import { Text } from '@/components/ui';
import { Input } from '@/components/ui/input';
import Icons from '@/lib/icons';
import { Controller, FieldValues, Path } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import { BaseFieldProps } from './form';

export function InputField<T extends FieldValues>(props: BaseFieldProps<T>) {
  return (
    <Controller
      control={props.control}
      name={props.name as Path<T>}
      render={({ field, fieldState }) => (
        <>
          <Input
            placeholder={props.placeholder}
            value={field.value}
            onChangeText={field.onChange}
            editable={!props.disabled}
            keyboardType={props.keyboard}
            returnKeyType={props.returnKeyType}
            autoCapitalize={props.capitalize}
          />
          {fieldState.error?.message && (
            <Text className="text-destructive mt-0.5 pl-1 font-caption">
              {fieldState.error.message}
            </Text>
          )}
        </>
      )}
    />
  );
}

export function PasswordField<T extends FieldValues>(props: BaseFieldProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      control={props.control}
      name={props.name as Path<T>}
      render={({ field, fieldState }) => (
        <>
          <View className="relative">
            <Input
              secureTextEntry={!showPassword}
              placeholder={props.placeholder}
              value={field.value}
              onChangeText={field.onChange}
              editable={!props.disabled}
              keyboardType={props.keyboard}
              returnKeyType={props.returnKeyType}
            />
            <TouchableOpacity
              className="absolute right-3 top-0 bottom-0 justify-center"
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Icons.EyeClosed size={20} className="text-muted-foreground" />
              ) : (
                <Icons.Eye size={20} className="text-muted-foreground" />
              )}
            </TouchableOpacity>
          </View>
          {fieldState.error?.message && (
            <Text className="text-destructive mt-0.5 pl-1 font-caption">
              {fieldState.error.message}
            </Text>
          )}
        </>
      )}
    />
  );
}
