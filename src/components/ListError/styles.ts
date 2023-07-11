import styled from 'styled-components/native';

export const ErrorContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const TryAgainText = styled.Text`
  color: ${({theme}) => ` ${theme.colors.pink}`};
`;
