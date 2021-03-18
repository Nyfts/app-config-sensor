import React from "react";

import { Modal, Container, ActivityIndicator } from "./styles";

interface LoadingProps {
  show: boolean;
}

const LoadingModal: React.FC<LoadingProps> = ({ show }) => {
  return (
    <Modal visible={show} animationType="fade" transparent>
      <Container>
        <ActivityIndicator size={50} color="#149eda" />
      </Container>
    </Modal>
  );
};

export default LoadingModal;
