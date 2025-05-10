import { Select, SelectItem } from '@/components/ui/select';
import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { BaseFieldProps } from './form';

export function SelectField<T extends FieldValues>(props: BaseFieldProps<T>) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          {props.options?.map((opt) => (
            <SelectItem
              key={opt.value}
              value={opt.value}
              label={opt.label}
              disabled={opt.disabled}
            />
          ))}
        </Select>
      )}
    />
  );
}
