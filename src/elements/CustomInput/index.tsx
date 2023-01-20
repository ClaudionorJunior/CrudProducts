import React, { useCallback, useMemo, useState, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInput, TextInputProps } from 'react-native';
import { ErrorMessage } from '@hookform/error-message';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import {
  Container,
  CustomTextInput,
  RightContainerActioned,
  ErrorField,
  ErrorTypograph,
  LabelTypograph,
} from './styles';

interface CustomInputProps extends TextInputProps {
  label?: string;
  name: string;
  isSecurity?: boolean;
  onChangeText?: (text: string) => void;
}

const CustomInput = React.forwardRef<TextInput, CustomInputProps>(
  (props, ref) => {
    const { control } = useFormContext();
    return (
      <Controller
        control={control}
        name={props.name}
        render={({ field: { onChange, value } }) => (
          <Input
            ref={ref}
            {...props}
            value={value}
            onChangeText={(text: string) => {
              onChange(text);
              props.onChangeText && props.onChangeText(text);
            }}
          />
        )}
      />
    );
  },
);

const Input = React.forwardRef<TextInput, CustomInputProps>(
  ({ label, name, value, isSecurity, onChangeText, ...restProps }, ref) => {
    const [isPasswordViewed, setIsPasswordViewed] = useState(!!isSecurity);
    const [errorMessage, setErrorMessage] = useState<string>();
    const {
      formState: { errors },
      clearErrors,
    } = useFormContext();
    const [isFocused, setIsFocused] = useState(false);
    const { colors } = useTheme();

    const hasErrors = useMemo(
      () => (errors ? !!errors[name] : false),
      [errors[name]],
    );

    const handleFocus = useCallback(
      e => {
        setIsFocused(!!value || true);
        restProps?.onFocus?.(e);
        errorMessage === 'Bad Request' && clearErrors(name);
      },
      [isFocused, errorMessage],
    );

    const handleBlur = useCallback(
      e => {
        setIsFocused(false);
        restProps?.onBlur?.(e);
      },
      [isFocused],
    );

    const onPressRightAction = useCallback(() => {
      if (isSecurity) {
        setIsPasswordViewed(!isPasswordViewed);
      }
    }, [isPasswordViewed]);

    return (
      <>
        {!!label && <LabelTypograph>{label}</LabelTypograph>}
        <Container isErrored={hasErrors} isFilled={!!value}>
          <CustomTextInput
            ref={ref}
            {...restProps}
            onChangeText={onChangeText}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            blurOnSubmit
            secureTextEntry={!!isPasswordViewed}
          />
          <RightContainerActioned onPress={onPressRightAction}>
            {isSecurity &&
              (isPasswordViewed ? (
                <Feather
                  name="eye-off"
                  size={24}
                  color={hasErrors ? colors.danger : colors.neutral}
                />
              ) : (
                <Feather
                  name="eye"
                  size={24}
                  color={hasErrors ? colors.danger : colors.neutral}
                />
              ))}
          </RightContainerActioned>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              setErrorMessage(message);
              return message !== 'Bad Request' ? (
                <ErrorField>
                  <ErrorTypograph>{message}</ErrorTypograph>
                </ErrorField>
              ) : (
                <></>
              );
            }}
          />
        </Container>
      </>
    );
  },
);

export default memo(CustomInput);
