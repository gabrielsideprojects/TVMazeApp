import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CloseButtonProps {
  onPress: () => void;
}

export function CloseButton({onPress}: CloseButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
      <Icon name="close" size={20} color={'#000'} />
    </Pressable>
  );
}
