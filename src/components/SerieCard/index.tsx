import React from 'react';
import {Alert, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Serie} from '../../types/series';
import {
  Container,
  Content,
  IconContainer,
  InfoContent,
  Name,
  Persona,
} from './styles';
import {useFavoriteSeries} from '../../contexts/FavoritesSeries';

interface SerieCardProps {
  onSeriePress: () => void;
  serie: Serie;
  isFavoriteItem?: boolean;
}

export function SerieCard({
  serie,
  onSeriePress,
  isFavoriteItem,
}: SerieCardProps) {
  const {name, image, id} = serie;
  const {addSeries, deleteSeriesFromFavorite} = useFavoriteSeries();
  return (
    <Container onPress={onSeriePress}>
      {image ? (
        <Persona
          source={{
            uri: image.medium,
          }}
        />
      ) : null}

      <Content>
        <InfoContent>
          <Text>
            <Name>{name}</Name>
          </Text>
        </InfoContent>

        <InfoContent>
          {isFavoriteItem ? (
            <IconContainer>
              <Icon
                onPress={() => {
                  deleteSeriesFromFavorite(id);
                  Alert.alert('Serie removed to your favorite list');
                }}
                name="trash"
                size={20}
              />
            </IconContainer>
          ) : (
            <IconContainer>
              <Icon
                onPress={() => {
                  addSeries(serie);
                  Alert.alert('Serie added to your favorite list');
                }}
                name="heart"
                size={20}
              />
            </IconContainer>
          )}
        </InfoContent>
      </Content>

      <Icon name="angle-right" size={20} />
    </Container>
  );
}
