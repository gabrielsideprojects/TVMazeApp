import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SeriesDetails} from '../screens/SeriesDetails';
import {EpisodeDetails} from '../screens/EpisodeDetails';

import {Serie} from '../types/series';
import {Episode} from '../types/episodes';

import Tabs from './Tabs';
import {Person} from '../types/person';
import {PersonDetailsScreen} from '../screens/PersonDetails';

export type RootStackParamList = {
  Home: undefined;
  PersonDetails: {data: Person};
  SeriesDetails: {data: Serie};
  EpisodeDetails: {data: Episode};
  SeriesFiltersScreen: undefined;
};

export function AppNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{headerShown: false}}
        />

        <Stack.Screen name="SeriesDetails" component={SeriesDetails} />
        <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} />
        <Stack.Screen name="PersonDetails" component={PersonDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
