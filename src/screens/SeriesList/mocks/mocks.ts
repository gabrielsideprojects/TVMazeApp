import {Serie} from '../../../types/series';

export const serieMock: Serie = {
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

const serieMockedWithDifferentId = {
  ...serieMock,
  id: '452',
};

export const serieListMock = {
  info: {
    count: 0,
    pages: 2,
    next: '3',
    prev: '2',
  },
  results: [serieMock, serieMockedWithDifferentId],
};
