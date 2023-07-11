import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

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
  margin-left: ${({theme}) => theme.spacing.large}px;
`;
export const IdNumber = styled.Text`
  font-family: Roboto-Bold;
  color: ${({theme}) => theme.colors.black};
`;
export const Tag = styled.View`
  margin-top: ${({theme}) => theme.spacing.medium}px;
  padding: ${({theme}) => theme.spacing.medium}px;
  border-radius: ${({theme}) => theme.borderRadius.medium}px;
  margin-right: ${({theme}) => theme.spacing.medium}px;
  background-color: ${({theme}) => theme.colors.yellow};
`;

export const FavoriteContainer = styled.TouchableOpacity`
  margin-top: ${({theme}) => theme.spacing.medium}px;
  padding: ${({theme}) => theme.spacing.medium}px;
  margin-right: ${({theme}) => theme.spacing.medium}px;
`;

export const Name = styled.Text`
  margin-left: ${({theme}) => theme.spacing.medium}px;
  font-family: Roboto-Medium;
  color: ${({theme}) => theme.colors.black};
`;

export const StatusText = styled.Text`
  font-family: Roboto-Medium;
  color: ${({theme}) => theme.colors.black};
`;

export const SpecieText = styled.Text`
  font-family: Roboto-Medium;
  color: ${({theme}) => theme.colors.black};
`;

export const Persona = styled(FastImage)`
  width: 60px;
  height: 60px;
  border-radius: ${({theme}) => theme.borderRadius.extraLarge}px;
  z-index: 1;
`;
