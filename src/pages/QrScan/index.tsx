import React, { useEffect, useState } from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';
import Modal from "react-native-modal";
import { Camera } from "expo-camera";
import { Alert, StyleSheet } from "react-native";

import scanner from '../../assets/qr-sensor.png';

import { useLoading } from "../../contexts/loading";

import { Container, ModalContainer, Text, Image } from "./styles";

const QrScan: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const loading = useLoading();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      "QR Code Scanned",
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
  };

  if (hasPermission === null) {
    return <Text>not loaded yet</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ratio="16:9"
        style={StyleSheet.absoluteFillObject}
        onCameraReady={() => loading.hide()}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
      
      />
      <Modal isVisible={true} backdropOpacity={0}>
        <ModalContainer>
          <Image source={scanner} />
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default QrScan;
