import { Control, FieldValues } from 'react-hook-form';
import { KeyboardType, ReturnKeyType } from 'react-native';

export type TOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface BaseFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  options?: TOption[];
  fieldType: FormFieldType;
  message?: string | React.ReactNode;
  keyboard?: KeyboardType;
  returnKeyType?: ReturnKeyType;
  className?: string;
  capitalize?: 'none' | 'sentences' | 'words' | 'characters';
}
