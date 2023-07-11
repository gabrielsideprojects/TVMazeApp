import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface BackButtonProps {
  onPress: () => void;
}

export function BackButton({onPress}: BackButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
      <Icon name="angle-left" size={30} color={'#000'} />
    </Pressable>
  );
}
