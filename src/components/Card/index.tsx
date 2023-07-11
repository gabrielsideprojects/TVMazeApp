import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content, IdText, InfoContent, Name} from './styles';

interface CardProps {
  name: string;
  id: string;
  onCardPress: () => void;
}

export function Card({name, id, onCardPress}: CardProps) {
  return (
    <Container onPress={onCardPress}>
      <Content>
        <InfoContent>
          <Text numberOfLines={1}>
            <IdText>{`#0${id}  `}</IdText>
            <Name>{name}</Name>
          </Text>
        </InfoContent>
      </Content>

      <Icon name="angle-right" size={20} />
    </Container>
  );
}
