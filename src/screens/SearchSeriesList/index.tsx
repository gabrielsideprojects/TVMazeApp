import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {SerieCard} from '../../components/SerieCard';
import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';

import {RootStackParamList} from '../../navigation';
import {
  Container,
  EmptyListText,
  ListEmptyContainer,
  TextInputContainer,
} from './styles';
import {TextInput} from 'react-native-paper';
import {ListError} from '../../components/ListError';
import {useDebounce} from '../../hooks/useDebounce/useDebounce';
import {useGetSearchSeries} from '../../hooks/useGetSearchSeries/useGetSearchSeries';

export function SearchSeriesListScreen() {
  const [filterText, setFilterText] = useState('');
  const debouncedFiltertext = useDebounce(filterText, 500);
  const {data, isError, refetch, isRefetching} =
    useGetSearchSeries(debouncedFiltertext);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function renderContent() {
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
          onPressFilterIcon={() => navigation.navigate('SeriesFiltersScreen')}
        />
        <TextInputContainer>
          <TextInput
            mode={'outlined'}
            label={'Search Serie'}
            placeholder="Search"
            value={filterText}
            onChangeText={text => setFilterText(text)}
          />
        </TextInputContainer>
        <FlatList
          ItemSeparatorComponent={Divider}
          showsVerticalScrollIndicator={false}
          data={data}
          refreshing={isRefetching}
          ListEmptyComponent={
            <ListEmptyContainer>
              <EmptyListText>There's no series with this name</EmptyListText>
            </ListEmptyContainer>
          }
          onRefresh={refetch}
          keyExtractor={item => String(item.show.id)}
          renderItem={({item}) => (
            <SerieCard
              serie={item.show}
              onSeriePress={() => {
                navigation.navigate('SeriesDetails', {data: item.show});
              }}
            />
          )}
        />
      </Container>
    );
  }

  return <Container>{renderContent()}</Container>;
}
