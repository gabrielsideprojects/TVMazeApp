import {InfiniteData} from 'react-query';
import {Serie} from '../../types/series';

export function getDataFromAllSeriesPages(
  list: InfiniteData<Serie[]> | undefined,
): Serie[] {
  if (!list) {
    return [];
  }
  return list.pages.reduce((prev, curr) => {
    return [...prev, ...curr];
  }, [] as Serie[]);
}
