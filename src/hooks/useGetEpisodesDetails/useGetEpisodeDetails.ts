import {useQuery, UseQueryResult} from 'react-query';
import {api} from '../../api';
import {Episode} from '../../types/episodes';

async function getEpideDetails(
  showId: number,
  seasonNumber: number,
  episodeNumber: number,
) {
  const result = await api.get(
    `shows/${showId}/episodebynumber?season=${seasonNumber}&number&${episodeNumber}`,
  );

  return result.data;
}

export function useGetEpisodeDetails(
  showId: number,
  seasonNumber: number,
  episodeNumber: number,
): UseQueryResult<Episode[]> {
  return useQuery(
    ['EpisodeDetails', episodeNumber],
    async () => await getEpideDetails(showId, seasonNumber, episodeNumber),
  );
}
