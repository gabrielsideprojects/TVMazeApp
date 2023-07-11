import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  padding-bottom: ${({theme}) => ` ${theme.spacing.extraLarge}px`};
  background: ${({theme}) => ` ${theme.colors.background}`};
`;
