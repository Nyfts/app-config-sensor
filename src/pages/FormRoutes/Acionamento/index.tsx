import React, { useRef } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import * as Yup from "yup";

import AcionamentoInterface from "../../../interfaces/AcionamentoInterface";

import Form from "../../../components/Form";
import Input from "../../../components/Input";
import ConfirmButton from "../../../components/ConfirmButton";

import { Container } from "./styles";

const Acionamento: React.FC = () => {
  const formRef = useRef<FormHandles>();

  const handleSubmit: SubmitHandler<AcionamentoInterface> = async (
    data: AcionamentoInterface
  ) => {
    try {
      const schema = Yup.object().shape({
        area: Yup.string().required(),
        sector: Yup.string().required(),
        group: Yup.string().required(),
        equipment: Yup.string().required(),
        tag: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      console.log(data);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} formRef={formRef}>
        <Input name="description" required label="Descrição" />
        <Input name="motorInducao" required label="Motor Indução" />
        <Input name="motorSincrono" required label="Motor Síncrono" />
        <Input name="geradorEnergia" required label="Gerador de Energia" />
        <Input name="servoMotor" label="ServoMotor" />
        <ConfirmButton
          label="Próximo"
          title="SubmitForm"
          onPress={() => formRef.current.submitForm()}
        />
      </Form>
    </Container>
  );
};

export default Acionamento;
