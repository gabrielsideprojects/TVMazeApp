const characterMocked = {
    id: '789',
    name: 'Ricky',
    status: 'Morty',
    species: 'Alien',
    image: 'https://url.com',
    type: 'Human',
    gender: 'M',
    origin: {
      name: 'Name',
      url: 'url'
    },
    location: {
      name: 'Location',
      url: 'url'
    },
    episode: ['555', 'episode'],
    url: 'url',
    created: 'date'
}
const characterMockedWithDifferentId = {
  ...characterMocked,
  id: '452',
}

export const characterMock = {
    info: {
        count: 0,
        pages: 2,
        next: '3',
        prev: '2',
      },
      results: [characterMocked,characterMockedWithDifferentId]
}

