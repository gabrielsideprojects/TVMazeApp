import {InfiniteData} from 'react-query';
import {Episode, Episodes} from '../../types/episodes';

export function getDataFromAllEpisodesPages(
  list: InfiniteData<Episodes> | undefined,
): Episode[] {
  if (!list) return [];

  return list.pages.reduce((prev, curr) => {
    return [...prev, ...curr.results];
  }, [] as Episode[]);
}
