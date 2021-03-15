import React, { useEffect, useRef, useCallback } from "react";
import { TextInputProps, TextInput } from "react-native";
import { useField } from "@unform/core";

import { Label, StyledInput, Error } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  onChangeText?: any;
}

interface InputReference extends TextInput {
  value: string;
}

const Input = ({ name, label, onChangeText, ...rest }: InputProps) => {
  const inputRef = useRef<InputReference>(null);

  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return "";
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: "" });
          inputRef.current.value = "";
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    (value: string) => {
      if (inputRef.current) inputRef.current.value = value;
      if (onChangeText) onChangeText(value);
    },
    [onChangeText]
  );

  return (
    <>
      {label && <Label>{label}</Label>}

      <StyledInput
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
};

export default Input;
