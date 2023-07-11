import React from 'react';
import {StyleSheet} from 'react-native';
import {SeriesListScreen} from '../screens/SeriesList';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EpisodeScreen} from '../screens/Episode';
import {FavoritesSeriesScreen} from '../screens/FavoritesSeries';
import {SearchSeriesListScreen} from '../screens/SearchSeriesList';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="SeriesListScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bar,
        tabBarActiveTintColor: '#e89ac7',
        tabBarInactiveTintColor: '#44281d',
      }}>
      <Tab.Screen
        name="SeriesListScreen"
        component={SeriesListScreen}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({color}) => (
            <Icon name="users" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="EpisodeScreen"
        component={EpisodeScreen}
        options={{
          tabBarLabel: 'Episodes',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="movie" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesSeriesScreen"
        component={FavoritesSeriesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="favorite" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchSeriesList"
        component={SearchSeriesListScreen}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="search" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#97ce4c',
  },
});

export default Tabs;
