import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content, InfoContent, Name} from './styles';

interface CardProps {
  name: string;

  iconName?: string;
  onCardPress: () => void;
}

export function Card({
  name,

  onCardPress,
  iconName = 'angle-right',
}: CardProps) {
  return (
    <Container onPress={onCardPress}>
      <Content>
        <InfoContent>
          <Text numberOfLines={1}>
            <Name>{name}</Name>
          </Text>
        </InfoContent>
      </Content>

      <Icon name={iconName} size={20} />
    </Container>
  );
}
