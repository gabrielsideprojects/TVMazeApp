import {useQuery, UseQueryResult} from 'react-query';
import {api} from '../../api';
import {Episode} from '../../types/episodes';

async function getEpisodes(seasonId: number) {
  const result = await api.get(`seasons/${seasonId}/episodes`);

  return result.data;
}

export function useGetEpisodes(seasonId: number): UseQueryResult<Episode[]> {
  return useQuery(
    ['Episodes', seasonId],
    async () => await getEpisodes(seasonId),
    {
      enabled: !!seasonId,
    },
  );
}
