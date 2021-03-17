import React, { useRef } from "react";
import { Alert, TouchableNativeFeedback } from "react-native";
import { SubmitHandler, FormHandles } from "@unform/core";
import { StatusBar } from "expo-status-bar";

import LogoImg from "~/assets/sensor.png";

import { useAuth } from "../../contexts/auth";

import Form from "../../components/Form";
import Input from "../../components/Input";

import {
  Container,
  Header,
  Body,
  Text,
  LogoContainer,
  Logo,
  FormContainer,
  Button,
  NativeFeedback,
  ButtonLabel,
  Footer,
} from "./styles";

interface FormData {
  name: string;
  email: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

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
          <Text>Entre com suas credenciais</Text>
          <FormContainer>
            <Form formRef={formRef} onSubmit={handleSubmit}>
              <Input name="username" placeholder="Usuário" />
              <Input name="password" placeholder="Senha" />
              <NativeFeedback
                background={TouchableNativeFeedback.Ripple("#fff", false)}
                onPress={() => signIn()}
              >
                <Button>
                  <ButtonLabel>Entrar</ButtonLabel>
                </Button>
              </NativeFeedback>
            </Form>
          </FormContainer>
        </Body>
        <Footer>Qoobo</Footer>
      </Container>
    </>
  );
};

export default Login;
