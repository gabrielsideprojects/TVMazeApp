import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList} from 'react-native';
import {SerieCard} from '../../components/SerieCard';
import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';
import {useGetAllSeries} from '../../hooks/useGetAllSeries/useGetAllSeries';
import {getDataFromAllSeriesPages} from '../../hooks/useGetAllSeries/utils';
import {RootStackParamList} from '../../navigation';
import {Container} from './styles';
import {ActivityIndicator} from 'react-native-paper';
import {ListError} from '../../components/ListError';

export function SeriesListScreen() {
  const {
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    refetch,
    isRefetching,
  } = useGetAllSeries();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const series = getDataFromAllSeriesPages(data);

  function renderContent() {
    console.log('isLoading', isLoading);
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
        <Header
          isFilterIconVisible
          onPressFilterIcon={() => navigation.navigate('SeriesFiltersScreen')}
        />

        <FlatList
          ItemSeparatorComponent={Divider}
          showsVerticalScrollIndicator={false}
          data={series}
          refreshing={isRefetching}
          onRefresh={refetch}
          keyExtractor={item => item?.id}
          renderItem={({item}) => (
            <SerieCard
              serie={item}
              onSeriePress={() => {
                navigation.navigate('SeriesDetails', {data: item});
              }}
            />
          )}
          onEndReached={() =>
            !isFetchingNextPage && hasNextPage && fetchNextPage()
          }
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingNextPage ? <ActivityIndicator /> : null
          }
        />
      </Container>
    );
  }

  return <Container>{renderContent()}</Container>;
}
