import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({theme}) => ` ${theme.colors.background}`};
`;

export const TextInputContainer = styled.View`
  padding-horizontal: 12;
  margin-bottom: 12;
`;

export const ListEmptyContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const EmptyListText = styled.Text`
  font-family: Roboto-Bold;
`;
