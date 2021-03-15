import React from "react";
import { SubmitHandler, FormHandles } from '@unform/core'
import { Container } from "./styles";

interface FormProps {
  children: React.ReactNode
  formRef: React.Ref<FormHandles>
  onSubmit: SubmitHandler
}

const Form = ({ children, formRef, onSubmit }: FormProps) => {
  return (
    <Container ref={formRef} onSubmit={onSubmit}>
      {children}
    </Container>
  );
};

export default Form;
