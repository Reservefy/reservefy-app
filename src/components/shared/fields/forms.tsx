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
    <View>
      {props.label && (
        <Label className="pl-1 mb-2" required={props.required}>
          {props.label}
        </Label>
      )}
      {renderField()}
      {props.message &&
        (typeof props.message === 'string' ? (
          <Text className="text-popover-foreground mt-1.5 pl-1 text-caption font-regular">
            {props.message}
          </Text>
        ) : (
          <View className="mt-2">{props.message}</View>
        ))}
    </View>
  );
}
