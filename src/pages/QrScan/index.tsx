import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import { Alert, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import scanner from "../../assets/qr-sensor.png";

import { useLoading } from "../../contexts/loading";

import {
  Container,
  ModalContainer,
  Text,
  Image,
  Header,
  Footer,
  Button,
  MessageContainer,
  Message,
} from "./styles";

const QrScan: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState(false);
  const loading = useLoading();
  const navigation = useNavigation();

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
        flashMode={
          flash
            ? Camera.Constants.FlashMode.torch
            : Camera.Constants.FlashMode.off
        }
      />
      <ModalContainer>
        <Header>
          <MessageContainer>
            <Message>Escaneie um código QR</Message>
          </MessageContainer>
        </Header>
        <Image source={scanner} />
        <Footer>
          <Button active={flash} onPress={() => setFlash(!flash)}>
            <Ionicons
              name="flashlight"
              size={32}
              color={flash ? "#000" : "#fff"}
            />
          </Button>
          <Button onPress={() => navigation.navigate("Start")}>
            <Ionicons name="close" size={42} color="#fff" />
          </Button>
        </Footer>
      </ModalContainer>
    </Container>
  );
};

export default QrScan;
