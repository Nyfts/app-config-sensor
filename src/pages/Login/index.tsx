import React, { useRef } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import { StatusBar } from "expo-status-bar";

import LogoImg from "~/assets/sensor1.png";

import Form from "../../components/Form";
import Input from "../../components/Input";

import { Container, Header, Body, Text, LogoContainer, Logo } from "./styles";

interface FormData {
  name: string;
  email: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
  };

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header>
          <LogoContainer>
            <Logo source={LogoImg} />
          </LogoContainer>
        </Header>
        <Body>
          <Form formRef={formRef} onSubmit={handleSubmit} >
            <Input name="username" placeholder="Usuário" />
            <Input name="password" placeholder="Senha" />
          </Form>
        </Body>
      </Container>
    </>
  );
};

export default Login;
