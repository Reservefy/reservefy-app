import React from 'react';

import { Input } from '@/components/ui/input';
import { Controller, FieldValues } from 'react-hook-form';
import { BaseFieldProps } from './form';

export function InputField<T extends FieldValues>(props: BaseFieldProps<T>) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <Input
          placeholder={props.placeholder}
          value={field.value}
          onChangeText={field.onChange}
          editable={!props.disabled}
        />
      )}
    />
  );
}

export function PasswordField<T extends FieldValues>(props: BaseFieldProps<T>) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <Input
          secureTextEntry
          placeholder={props.placeholder}
          value={field.value}
          onChangeText={field.onChange}
          editable={!props.disabled}
        />
      )}
    />
  );
}
