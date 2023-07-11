import {useInfiniteQuery, UseInfiniteQueryResult} from 'react-query';
import {api} from '../../api';
import {Serie} from '../../types/series';

async function getSeries(pageParam: number) {
  const result = await api.get(`shows?page=${pageParam}`);

  return result.data;
}

export function useGetAllSeries(): UseInfiniteQueryResult<Serie[]> {
  return useInfiniteQuery(
    ['allSeries'],
    async ({pageParam = 1}) => await getSeries(pageParam),
    {
      getNextPageParam: lastPage =>
        lastPage[0].id ? lastPage[0].id : undefined,
    },
  );
}
