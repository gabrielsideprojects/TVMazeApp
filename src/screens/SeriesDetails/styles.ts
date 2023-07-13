import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const InfoContainer = styled.View`
  flex-direction: row;
`;

export const InfoContent = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: ${({theme}) => theme.spacing.large}px;
`;

export const Information = styled.Text`
  margin-bottom: ${({theme}) => theme.spacing.medium}px;
  color: ${({theme}) => theme.colors.black};
`;
export const SeeSummaryInfo = styled.Text`
  margin-bottom: ${({theme}) => theme.spacing.medium}px;
  color: ${({theme}) => theme.colors.blue};
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const LogoImage = styled.Image`
  width: 150px;
  height: 150px;
  align-self: flex-end;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
`;

export const SummaryButton = styled.Pressable`
  flex-direction: row;
`;

export const SeasonTitle = styled.Text`
  font-family: Roboto-Bold;
  margin-left: ${({theme}) => theme.spacing.semiLarge}px;
  margin-bottom: ${({theme}) => theme.spacing.semiLarge}px;
`;

export const ListViews = styled.View`
  flex: 1;
`;
export const SeasonListItem = styled.Pressable`
  flex: 1;
  padding: ${({theme}) => theme.spacing.medium}px;
`;

export const ListDivider = styled.View`
  height: 0.3px;
  border-width: 0.4px;
`;

export const ModalScrollView = styled.ScrollView`
  flex: 1;
  margin-vertical: 20px;
`;
export const ModalView = styled.View`
  flex: 1;
  margin-vertical: 20px;
`;

export const EmptyEpisodeListText = styled.Text`
  font-family: Roboto-Medium;
`;

export const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
