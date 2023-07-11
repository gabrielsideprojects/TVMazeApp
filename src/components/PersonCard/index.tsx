import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Content, InfoContent, Name, Persona} from './styles';
import {Person} from '../../types/person';

interface PersonCardProps {
  onPersonCardPress: () => void;
  person: Person;
  isFavoriteItem?: boolean;
}

export function PersonCard({person, onPersonCardPress}: PersonCardProps) {
  const {name, image} = person;

  return (
    <Container onPress={onPersonCardPress}>
      {image ? (
        <Persona
          source={{
            uri: image.medium,
          }}
        />
      ) : (
        <Persona
          source={{
            uri: 'https://i.pravatar.cc/150',
          }}
        />
      )}

      <Content>
        <InfoContent>
          <Text>
            <Name>{name}</Name>
          </Text>
        </InfoContent>
      </Content>

      <Icon name="angle-right" size={20} />
    </Container>
  );
}
