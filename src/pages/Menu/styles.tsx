import styled from 'styled-components/native';
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  /* padding-top: ${Constants.statusBarHeight}px; */
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  padding: 5px;
`;

export const Item = styled.TouchableOpacity`
  background-color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  elevation: 2;
  margin: 4px;
`;

export const IconWrapper = styled.View`
  margin-right: 10px;
`;

export const Label = styled.Text`
  flex: 1;
`;