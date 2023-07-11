import {UseQueryResult, useQuery} from 'react-query';
import {api} from '../../api';
import {Season} from '../../types/season';

async function getSeasons(showId: number) {
  const result = await api.get(`shows/${showId}/seasons`);

  return result.data;
}

export function useGetSeasons(showId: number): UseQueryResult<Season[]> {
  return useQuery(['Seasons', showId], async () => await getSeasons(showId));
}
