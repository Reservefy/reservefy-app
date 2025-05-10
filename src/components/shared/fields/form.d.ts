import { Control, FieldValues, Path } from 'react-hook-form';

export type TOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface BaseFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string | React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  options?: TOption[];
  fieldType: FormFieldType;
  message?: string | React.ReactNode;
}
