import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const Text = styled.Text`
  background-color: #fff;
`;

export const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
  padding: 30px 10px 10px;
`;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
`;

export const Header = styled.View`
  width: 100%;
  height: 80px;
  justify-content: flex-end;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  display: flex;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
`;
interface ButtonProps {
  active?: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props => props.active ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const MessageContainer = styled.View`
  background-color: rgba(25, 25, 25, 0.7);
  border-radius: 20px;
  padding: 25px 30px;
  margin-bottom: -30px;
`;

export const Message = styled.Text`
  color: #fff;
  font-size: 18px;
`;
