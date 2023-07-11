import {InfiniteData} from 'react-query';
import {Location, Locations} from '../../types/location';

export function getDataFromPages(
  list: InfiniteData<Locations> | undefined,
): Location[] {
  if (!list) return [];

  return list.pages.reduce((prev, curr) => {
    return [...prev, ...curr.results];
  }, [] as Location[]);
}
