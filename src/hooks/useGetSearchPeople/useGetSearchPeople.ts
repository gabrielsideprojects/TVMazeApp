import {useQuery, UseQueryResult} from 'react-query';
import {api} from '../../api';

import {PersonSearchResponse} from '../../types/person';

async function getSearchPeople(filterText: string) {
  const result = await api.get(`search/people?q=${filterText}`);

  return result.data;
}

export function useGetSearchPeople(
  filterText: string,
): UseQueryResult<PersonSearchResponse[]> {
  return useQuery(
    ['SearchSerie', filterText],
    async () => await getSearchPeople(filterText),
  );
}
