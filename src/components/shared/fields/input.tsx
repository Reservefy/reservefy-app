import React from 'react';

import { Text } from '@/components/ui';
import { Input } from '@/components/ui/input';
import { Controller, FieldValues } from 'react-hook-form';
import { BaseFieldProps } from './form';

export function InputField<T extends FieldValues>(props: BaseFieldProps<T>) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <>
          <Input
            placeholder={props.placeholder}
            value={field.value}
            onChangeText={field.onChange}
            editable={!props.disabled}
            keyboardType={props.keyboard}
            returnKeyType={props.returnKeyType}
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
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <>
          <Input
            secureTextEntry
            placeholder={props.placeholder}
            value={field.value}
            onChangeText={field.onChange}
            editable={!props.disabled}
            keyboardType={props.keyboard}
            returnKeyType={props.returnKeyType}
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
