import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Container, Content, Title} from './styles';

interface HeaderProps {
  isBackVisible?: boolean;

  onBackPress?: () => void;
  onPressFilterIcon?: () => void;
  title?: string;
}

export function Header({
  isBackVisible = false,
  onBackPress,
  title = 'TVMaze',
}: HeaderProps) {
  return (
    <Container>
      {isBackVisible ? (
        <Button
          onPress={onBackPress}
          hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
          <Icon name="angle-left" size={30} color={'#000'} />
        </Button>
      ) : null}
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
