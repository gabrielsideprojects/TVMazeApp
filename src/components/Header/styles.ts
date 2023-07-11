import {Pressable} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${({theme}) => theme.spacing.large}px;
  padding: 0 ${({theme}) => theme.spacing.large}px;
`;

export const Button = styled(Pressable)`
  margin-right: ${({theme}) => theme.spacing.large}px;
  color: ${({theme}) => theme.colors.black};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 30px;
  width: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: Roboto-Bold;
  color: ${({theme}) => theme.colors.gray};
`;
