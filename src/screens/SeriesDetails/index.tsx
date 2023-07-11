import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Card} from '../../components/Card';

import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';
import {useGetEpisodes} from '../../hooks/useGetEpisodes/useGetEpisodes';
import {RootStackParamList} from '../../navigation';
import Modal from 'react-native-modal';

import {
  CenteredView,
  Container,
  EmptyEpisodeListText,
  InfoContainer,
  InfoContent,
  Information,
  ListViews,
  LogoImage,
  ModalView,
  SeasonTitle,
  SeeSummaryInfo,
  SummaryButton,
  Title,
} from './styles';
import {ActivityIndicator} from 'react-native-paper';

import RenderHtml from 'react-native-render-html';
import {useGetSeasons} from '../../hooks/useGetSeasons/useGetSeasons';
import {CloseButton} from '../../components/CloseButton';

type Props = NativeStackScreenProps<RootStackParamList, 'SeriesDetails'>;

export function SeriesDetails({route, navigation}: Props) {
  const {id, name, image, genres, schedule, summary} = route.params.data;
  const [isSummaryModalVisible, setIsSummaryModalVisible] = useState(false);
  const [isSeasonModalVisible, setIsSeasonModalVisible] = useState(false);
  const [seasonId, setSeasonId] = useState(0);
  const [seasonNumber, setSeasonNumber] = useState(0);
  const {data, isLoading: isLoadingSeasonList} = useGetSeasons(id);
  const {data: episodesListOfThatSeason, isLoading: isLoadingEpisodesList} =
    useGetEpisodes(seasonId!);

  function renderContent() {
    if (isLoadingEpisodesList) {
      return <ActivityIndicator />;
    }

    return (
      <ListViews>
        {episodesListOfThatSeason ? (
          <SeasonTitle>{`Season: ${seasonNumber}`}</SeasonTitle>
        ) : null}

        <FlatList
          data={episodesListOfThatSeason}
          ListEmptyComponent={
            <CenteredView>
              <EmptyEpisodeListText>
                Select the season to see its episodes
              </EmptyEpisodeListText>
            </CenteredView>
          }
          renderItem={({item}) => (
            <Card
              name={item.name}
              onCardPress={() =>
                navigation.navigate('EpisodeDetails', {
                  data: item,
                })
              }
            />
          )}
          ItemSeparatorComponent={Divider}
        />
      </ListViews>
    );
  }

  function renderSeasonModalList() {
    if (isLoadingSeasonList) {
      return <ActivityIndicator />;
    }

    return (
      <ListViews>
        <FlatList
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={({item}) => {
            return (
              <Card
                key={item.id}
                iconName="angle-down"
                name={`Season: ${String(item.number)}`}
                onCardPress={() => {
                  setIsSeasonModalVisible(false);
                  setSeasonId(item.id);
                  setSeasonNumber(item.number);
                }}
              />
            );
          }}
        />
      </ListViews>
    );
  }

  return (
    <Container>
      <Header
        isBackVisible
        onBackPress={navigation.goBack}
        title="Series Details"
      />
      <InfoContainer>
        <InfoContent>
          <Information>Name: {name}</Information>
          <Information>Genres: {genres.join(',')}</Information>
          <Information>
            Schedule:{' '}
            {`time: ${schedule.time}\nDays:\n${schedule.days.join(',')}`}
          </Information>
          <SummaryButton onPress={() => setIsSummaryModalVisible(true)}>
            <Information>Summary:</Information>
            <SeeSummaryInfo>See summary</SeeSummaryInfo>
          </SummaryButton>
          <SummaryButton onPress={() => setIsSeasonModalVisible(true)}>
            <Information>Seasons: </Information>
            <SeeSummaryInfo>Select season</SeeSummaryInfo>
          </SummaryButton>
        </InfoContent>
        <LogoImage
          source={{
            uri: image?.medium,
          }}
        />
      </InfoContainer>
      <Title>Episodes</Title>
      {renderContent()}

      <View>
        <Modal
          hasBackdrop
          backdropOpacity={1}
          isVisible={isSummaryModalVisible}
          backdropColor={'white'}>
          <ModalView>
            <CloseButton onPress={() => setIsSummaryModalVisible(false)} />
            <RenderHtml contentWidth={200} source={{html: summary}} />
          </ModalView>
        </Modal>
        <Modal
          hasBackdrop
          backdropOpacity={1}
          isVisible={isSeasonModalVisible}
          backdropColor={'white'}>
          <ModalView>
            <CloseButton onPress={() => setIsSeasonModalVisible(false)} />
            {renderSeasonModalList()}
          </ModalView>
        </Modal>
      </View>
    </Container>
  );
}
