import {padStart} from 'lodash';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Serie} from '../../types/series';
import {
  Container,
  Content,
  FavoriteContainer,
  IdNumber,
  InfoContent,
  Name,
  Persona,
} from './styles';
import {useFavoriteSeries} from '../../contexts/FavoritesSeries';

interface SerieCardProps {
  onSeriePress: () => void;
  serie: Serie;
}

export function SerieCard({serie, onSeriePress}: SerieCardProps) {
  const {name, image, id} = serie;
  const {setFavoriteSeries} = useFavoriteSeries();
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
            <IdNumber>#{padStart(id, 3, '0')} </IdNumber>
            <Name>{name}</Name>
          </Text>
        </InfoContent>

        <InfoContent>
          <FavoriteContainer>
            <Icon
              onPress={() => {
                setFavoriteSeries(prevFavSeries => [...prevFavSeries, serie]);
              }}
              name="heart"
              size={20}
            />
          </FavoriteContainer>
        </InfoContent>
      </Content>

      <Icon name="angle-right" size={20} />
    </Container>
  );
}
