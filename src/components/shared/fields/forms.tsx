import { Label } from '@/components/ui';
import { FieldValues } from 'react-hook-form';
import { Text, View } from 'react-native';
import { BaseFieldProps } from './form';
import { InputField, PasswordField } from './input';
import { SelectField } from './select';

export enum FormFieldType {
  INPUT = 'input',
  PASSWORD = 'password',
  SELECT = 'select',
}

export function FormField<T extends FieldValues>(props: BaseFieldProps<T>) {
  const renderField = () => {
    switch (props.fieldType) {
      case FormFieldType.INPUT:
        return <InputField {...props} />;
      case FormFieldType.PASSWORD:
        return <PasswordField {...props} />;
      case FormFieldType.SELECT:
        return <SelectField {...props} />;
      default:
        return null;
    }
  };

  return (
    <View className="mb-4">
      {props.label && <Label>{props.label}</Label>}
      {renderField()}
      {props.message &&
        (typeof props.message === 'string' ? (
          <Text className="text-muted-foreground mt-1 font-caption">
            {props.message}
          </Text>
        ) : (
          <View className="mt-2">{props.message}</View>
        ))}
    </View>
  );
}
