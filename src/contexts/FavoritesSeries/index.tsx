import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {FavoritesSeriesData} from './interfaces';
import {Serie} from '../../types/series';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesSeriesContext = createContext<FavoritesSeriesData>(
  {} as FavoritesSeriesData,
);

export function FavoriteSeriesProvider({children}: PropsWithChildren) {
  const [favoriteSeries, setFavoriteSeries] = useState<Serie[]>([] as Serie[]);

  async function getFavoriteSeries() {
    const favChars = await AsyncStorage.getItem('favoriteSeries');
    if (favChars) {
      setFavoriteSeries(JSON.parse(favChars));
    }
  }

  useEffect(() => {
    getFavoriteSeries();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('favoriteSeries', JSON.stringify(favoriteSeries));
  }, [favoriteSeries, favoriteSeries.length]);

  return (
    <FavoritesSeriesContext.Provider
      value={{
        favoriteSeries,
        setFavoriteSeries,
      }}>
      {children}
    </FavoritesSeriesContext.Provider>
  );
}

export function useFavoriteSeries(): FavoritesSeriesData {
  const context = useContext(FavoritesSeriesContext);

  if (!context) {
    throw new Error(
      'usePromotionalBanner must be used within an PromotionalBannerProvider',
    );
  }

  return context;
}
