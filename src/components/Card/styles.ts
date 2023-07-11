import {Pressable} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Pressable)`
  background-color: ${({theme}) => theme.colors.pink};
  border-radius: ${({theme}) => theme.borderRadius.large}px;
  padding: ${({theme}) => theme.spacing.medium}px;
  flex-direction: row;
  align-items: center;
  margin: 0 ${({theme}) => theme.spacing.medium}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const InfoContent = styled.View`
  flex-direction: row;
`;

export const IdText = styled.Text`
  margin-left: ${({theme}) => theme.spacing.medium}px;
  color: ${({theme}) => theme.colors.black};
  font-family: Roboto-Bold;
`;

export const Name = styled.Text`
  margin-left: ${({theme}) => theme.spacing.medium}px;
  color: ${({theme}) => theme.colors.black};
  font-family: Roboto-Medium;
`;
