import {useQuery, UseQueryResult} from 'react-query';
import {api} from '../../api';

import {SearchedSerie} from '../../types/series';

async function getSearchSeries(filterText: string) {
  const result = await api.get(`search/shows?q=${filterText}`);

  return result.data;
}

export function useGetSearchSeries(
  filterText: string,
): UseQueryResult<SearchedSerie[]> {
  return useQuery(
    ['SearchSerie', filterText],
    async () => await getSearchSeries(filterText),
  );
}
