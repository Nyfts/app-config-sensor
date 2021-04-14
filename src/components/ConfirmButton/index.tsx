import React from "react";
import { ButtonProps } from "react-native";

import { Button, Label } from "./styles";

interface ConfirmButtonProps extends ButtonProps {
  label: string;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  label,
  ...props
}: ConfirmButtonProps) => {
  return (
    <Button {...props}>
      <Label>{label}</Label>
    </Button>
  );
};

export default ConfirmButton;
