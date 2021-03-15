import React from "react";
import { StatusBar } from "expo-status-bar";

import LogoImg from '~/assets/sensor1.png';

import { Container, Header, Body, Text, LogoContainer, Logo } from "./styles";

const Login: React.FC = () => {
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
          <Text>Eae</Text>
        </Body>
      </Container>
    </>
  );
};

export default Login;
