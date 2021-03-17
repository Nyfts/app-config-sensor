import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Header = styled.View``;

export const LogoContainer = styled.View`
  background-color: #fff;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 75%;
  width: 65.41%;
`;

export const Body = styled.View`
  flex: 1;
  margin-top: 20px;
  background-color: #fff;
  width: 100%;
  padding: 0 20px;
`;

export const Text = styled.Text`
  font-size: 22px;
  margin-bottom: 20px;
  color: #707070;
  font-weight: 700;
  text-align: center;
`;

export const FormContainer = styled.View`
  margin-top: 0;
`;

export const NativeFeedback = styled.TouchableNativeFeedback``;

export const Button = styled.View`
  padding: 15px;
  border-radius: 5px;
  background-color: #149eda;
  justify-content: center;
  elevation: 5;
  margin: 10px;
`;

export const ButtonLabel = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const Footer = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  color: #909090;
  font-weight: 700;
  text-align: center;
`;