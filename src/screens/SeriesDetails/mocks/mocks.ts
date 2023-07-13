import {Serie} from '../../../types/series';

export const serieDetailMock: Serie = {
  id: 0,
  name: 'Serie',
  image: {
    medium: 'https://doe.com',
    original: 'https://doe.com',
  },
  genres: ['Drama'],
  schedule: {time: '9:00', days: ['Monday']},
  summary: 'Summary',
};

export const episodeListMock = [
  {
    id: '123',
    name: 'Humberto',
    air_date: 'date',
    episode: '44',
    characters: ['Morty'],
    url: 'https://fakeUrl.com',
    created: 'created',
  },
];
