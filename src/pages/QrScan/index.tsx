import React, { useState } from "react";
import Modal from "react-native-modal";
import { Camera } from "expo-camera";
import { Alert, StyleSheet, Dimensions, Platform } from "react-native";

import { Container, ModalContainer, Text } from "./styles";

const QrScan: React.FC = () => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      "QR Code Scanned",
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
  };

  return (
    <Container>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ratio="16:9"
        style={StyleSheet.absoluteFillObject}
      />
      <Modal
        isVisible={true}
        backdropOpacity={0}
      >
        <ModalContainer>
          <Text>I am the modal content!</Text>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default QrScan;
