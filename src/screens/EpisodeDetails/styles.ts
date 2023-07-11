import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Information = styled.Text`
  margin-bottom: ${({theme}) => theme.spacing.medium}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: ${({theme}) => theme.spacing.large}px;
`;

export const LogoImage = styled.Image`
  width: 150px;
  height: 150px;
  align-self: flex-end;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
`;

export const InfoContent = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: ${({theme}) => theme.spacing.large}px;
`;

export const SummaryTitleText = styled.Text`
  font-family: Roboto-Bold;
  margin-bottom: ${({theme}) => theme.spacing.medium}px;
`;

export const SummaryContainer = styled.View`
  padding: ${({theme}) => theme.spacing.semiLarge}px;
`;
