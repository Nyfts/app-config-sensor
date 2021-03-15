import styled from "styled-components/native";
import Constants from 'expo-constants'

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  background-color: #149eda;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: ${Constants.statusBarHeight}px;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  background-color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 75%;
  width: 30.5%;
`;

export const Body = styled.View`
  flex: 2;
  background-color: #fff;
  width: 100%;
`;

export const Text = styled.Text``;
