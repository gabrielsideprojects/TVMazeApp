import {Dispatch, SetStateAction} from 'react';
import {Serie} from '../../types/series';

export interface FavoritesSeriesData {
  favoriteSeries: Serie[];
  setFavoriteSeries: Dispatch<SetStateAction<Serie[]>>;
}
