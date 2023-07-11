import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {Card} from '../../components/Card';
import {CardLoad} from '../../components/Card/load';
import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';
import {useGetAllEpisodes} from '../../hooks/useGetAllEpisodes/useGetAllEpisodes';
import {getDataFromAllEpisodesPages} from '../../hooks/useGetAllEpisodes/utils';
import {RootStackParamList} from '../../navigation';
import {Container} from './styles';
import {ListError} from '../../components/ListError';

export function EpisodeScreen() {
  const {
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
    refetch,
  } = useGetAllEpisodes();

  const episodesList = getDataFromAllEpisodesPages(data);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isError) {
    return (
      <ListError
        onPressTryAgain={() => {
          refetch();
        }}
      />
    );
  }
  return (
    <Container>
      <Header />
      <FlatList
        ItemSeparatorComponent={Divider}
        data={episodesList}
        keyExtractor={item => item?.id}
        renderItem={({item}) => (
          <Card
            name={item.name}
            id={item.id}
            onCardPress={() =>
              navigation.navigate('EpisodeDetails', {data: item})
            }
          />
        )}
        onEndReached={() =>
          !isFetchingNextPage && hasNextPage && fetchNextPage()
        }
        onEndReachedThreshold={0.5}
        ListFooterComponent={isFetchingNextPage ? <CardLoad /> : null}
      />
    </Container>
  );
}
