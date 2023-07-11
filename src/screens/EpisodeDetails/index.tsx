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
  SummaryContainer,
  SummaryTitleText,
} from './styles';
import RenderHtml from 'react-native-render-html';
import {ScrollView} from 'react-native';
type Props = NativeStackScreenProps<RootStackParamList, 'EpisodeDetails'>;

export function EpisodeDetails({route, navigation}: Props) {
  const {name, season, number, image, summary} = route.params.data;

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          isBackVisible
          onBackPress={navigation.goBack}
          title={'Episode Details'}
        />
        <InfoContainer>
          <InfoContent>
            <Information>Name: {name}</Information>
            <Information>Number: {number}</Information>
            <Information>Season: {season}</Information>
          </InfoContent>
          {image ? (
            <LogoImage
              source={{
                uri: image?.medium,
              }}
            />
          ) : null}
        </InfoContainer>
        {summary ? (
          <SummaryContainer>
            <SummaryTitleText>Summary:</SummaryTitleText>
            <RenderHtml contentWidth={200} source={{html: summary}} />
          </SummaryContainer>
        ) : null}
      </ScrollView>
    </Container>
  );
}
