import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5px 10px;
`;

export const LabelsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Label = styled.Text`
  font-size: 16px;
`;

interface InputsProps {
  focus: boolean;
  error: string;
}

export const StyledInput = styled.TextInput<InputsProps>`
  border: 1px solid #b0b0b0;
  padding: 13px;
  border-radius: 2px;
  font-size: 18px;
  position: relative;
  background-color: #fff;

  ${props => props.focus && `
    border: 1px solid #606060;
    elevation: 4;
  `}

${props => props.error && `
    border: 1px solid #f00;
  `}
`;

export const Error = styled.Text`
  color: #f00;
  margin-top: 5px;
`;
