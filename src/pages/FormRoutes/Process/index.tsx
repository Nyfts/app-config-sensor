import React, { useRef } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

import ProcessInterface from "../../../interfaces/ProcessInterface";

import Form from "../../../components/Form";
import Input from "../../../components/Input";
import ConfirmButton from "../../../components/ConfirmButton";

import { Container } from "./styles";

const Process: React.FC = () => {
  const formRef = useRef<FormHandles>();
  const navigation = useNavigation();

  const handleSubmit: SubmitHandler<ProcessInterface> = async (
    data: ProcessInterface
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
      navigation.navigate("Acionamento");
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
        <Input name="area" required label="Area" />
        <Input name="sector" required label="Setor" />
        <Input name="group" required label="Conjunto" />
        <Input name="equipment" required label="Equipamento" />
        <Input name="tag" label="Tag" />
        <ConfirmButton
          label="Próximo"
          title="SubmitForm"
          onPress={() => formRef.current.submitForm()}
        />
      </Form>
    </Container>
  );
};

export default Process;
