import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {Header} from '../../components/Header';

import {RootStackParamList} from '../../navigation';
import {
  Container,
  InfoContainer,
  InfoContent,
  Information,
  LogoImage,
} from './styles';

import {ScrollView} from 'react-native';
type Props = NativeStackScreenProps<RootStackParamList, 'PersonDetails'>;

export function PersonDetailsScreen({route, navigation}: Props) {
  const {name, image} = route.params.data;

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          isBackVisible
          onBackPress={navigation.goBack}
          title={'Person Details'}
        />
        <InfoContainer>
          <InfoContent>
            <Information>Name: {name}</Information>
          </InfoContent>
          {image ? (
            <LogoImage
              source={{
                uri: image?.medium,
              }}
            />
          ) : null}
        </InfoContainer>
      </ScrollView>
    </Container>
  );
}
