import {useInfiniteQuery, UseInfiniteQueryResult} from 'react-query';
import {api} from '../../api';
import {Location, Locations} from '../../types/location';

async function getLocation(pageParam: number) {
  const result = await api.get(`location/?page=${pageParam}`);

  const resultsNormalized = result.data.results.map((location: Location) => ({
    ...location,
    residents: location.residents.map((ep: string) => ep.split('/').pop()),
  }));

  return {...result.data, results: resultsNormalized};
}

export function useGetLocations(): UseInfiniteQueryResult<Locations> {
  return useInfiniteQuery(
    ['Locations'],
    async ({pageParam = 1}) => await getLocation(pageParam),
    {
      getNextPageParam: lastPage =>
        lastPage.info.next ? lastPage.info.next.split('page=')[1] : undefined,
    },
  );
}
