import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";

import { useAuth } from "../../contexts/auth";

import { Container } from "./styles";

const Loading: React.FC = () => {
  const {signIn} = useAuth();

  useEffect(() => {
    setTimeout(() => {
      signIn();
    }, 2000);
  }, []);

  return (
    <Container>
      <ActivityIndicator size={50} color="#149eda" />
    </Container>
  );
};

export default Loading;
