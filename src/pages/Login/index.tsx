import React, { useRef } from "react";
import { Alert, TouchableNativeFeedback } from "react-native";
import { SubmitHandler, FormHandles } from "@unform/core";

import LogoImg from "~/assets/sensor.png";

import { useAuth } from "../../contexts/auth";
import { useLoading } from "../../contexts/loading";

import Form from "../../components/Form";
import LoginInput from "../../components/LoginInput";

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
  const loading = useLoading();

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      loading.show();

      await signIn({ username: "", password: "" });
    } catch (error) {
      loading.hide();
      Alert.alert("Erro", "Houve um erro ao completar sua requisição");
    }
  };

  return (
    <>
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
              <LoginInput name="username" placeholder="Usuário" />
              <LoginInput name="password" placeholder="Senha" />
              <NativeFeedback
                background={TouchableNativeFeedback.Ripple("#fff", false)}
                onPress={() => formRef.current.submitForm()}
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
