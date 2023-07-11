import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {SerieCard} from '../../components/SerieCard';
import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';
import {RootStackParamList} from '../../navigation';
import {useFavoriteSeries} from '../../contexts/FavoritesSeries';

export function FavoritesSeriesScreen() {
  const {favoriteSeries} = useFavoriteSeries();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView>
      <Header />
      <FlatList
        ItemSeparatorComponent={Divider}
        data={favoriteSeries}
        keyExtractor={item => String(item?.id)}
        renderItem={({item}) => (
          <SerieCard
            serie={item}
            isFavoriteItem
            onSeriePress={() => {
              navigation.navigate('SeriesDetails', {data: item});
            }}
          />
        )}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
}
