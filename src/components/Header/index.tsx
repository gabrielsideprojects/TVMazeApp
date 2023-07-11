import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Container, Content, Title} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Pressable} from 'react-native';

interface HeaderProps {
  isBackVisible?: boolean;
  isFilterIconVisible?: boolean;
  onBackPress?: () => void;
  onPressFilterIcon?: () => void;
  title?: string;
}

export function Header({
  isBackVisible = false,
  onBackPress,
  title = 'TVMaze',
  isFilterIconVisible,
  onPressFilterIcon,
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

        {isFilterIconVisible ? (
          <Pressable onPress={onPressFilterIcon}>
            <MaterialIcons name="filter-list" size={25} color={'black'} />
          </Pressable>
        ) : null}
      </Content>
    </Container>
  );
}
