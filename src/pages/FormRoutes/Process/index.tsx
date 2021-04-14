import React, { useRef } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";

import ProcessInterface from '../../../interfaces/ProcessInterface';

import Form from '../../../components/Form';
import Input from '../../../components/Input';

import { Container } from "./styles";

const Process: React.FC = () => {
  const formRef = useRef<FormHandles>();

  const handleSubmit: SubmitHandler<ProcessInterface> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} formRef={formRef} >
        <Input name="area" placeholder="Area" />
        <Input name="sector" placeholder="Setor" />
        <Input name="group" placeholder="Conjunto" />
        <Input name="equipment" placeholder="Equipamento" />
        <Input name="tag" placeholder="Tag" />
      </Form>
    </Container>
  );
};

export default Process;
