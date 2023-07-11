import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

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
import {useGetSearchPeople} from '../../hooks/useGetSearchPeople/useGetSearchPeople';
import {PersonCard} from '../../components/PersonCard';

export function SearchPeopleListScreen() {
  const [filterText, setFilterText] = useState('');
  const debouncedFiltertext = useDebounce(filterText, 500);
  const {data, isError, refetch, isRefetching} =
    useGetSearchPeople(debouncedFiltertext);

  // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
        <Header />
        <TextInputContainer>
          <TextInput
            mode={'outlined'}
            label={'Search People'}
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
              <EmptyListText>There's no person with this name</EmptyListText>
            </ListEmptyContainer>
          }
          onRefresh={refetch}
          keyExtractor={item => String(item.person.id)}
          renderItem={({item}) => <PersonCard person={item.person} />}
        />
      </Container>
    );
  }

  return <Container>{renderContent()}</Container>;
}
