import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { useAuth } from "../../contexts/auth";

import { Container, ScrollView, Item, IconWrapper, Label } from "./styles";
import { Alert } from "react-native";

const Menu: React.FC = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  return (
    <Container>
      <ScrollView>
        <Item onPress={() => navigation.navigate("QrScan")}>
          <IconWrapper>
            <Ionicons name="add-circle-outline" size={26} color={"#000"} />
          </IconWrapper>
          <Label>Cadastrar novo sensor</Label>
          <Ionicons name="arrow-forward" size={18} color={"#a0a0a0"} />
        </Item>
        <Item
          onPress={() =>
            Alert.alert(
              "Encerrar sessão",
              "Deseja realmente sair?",
              [
                {
                  text: "Cancelar",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "Sim", onPress: () => signOut() },
              ],
              { cancelable: true }
            )
          }
        >
          <IconWrapper>
            <Ionicons name="log-out-outline" size={26} color={"#000"} />
          </IconWrapper>
          <Label>Sair</Label>
          <Ionicons name="arrow-forward" size={18} color={"#a0a0a0"} />
        </Item>
      </ScrollView>
    </Container>
  );
};

export default Menu;
