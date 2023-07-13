import React from 'react';

import {SeriesDetails} from '..';

import {render} from '../../../utils/testUtils';
import {useGetEpisodes} from '../../../hooks/useGetEpisodes/useGetEpisodes';

import {serieDetailMock, episodeListMock} from '../mocks/mocks';

const mockedUseGetEpisodesQuery = useGetEpisodes as jest.Mock<any>;

// Mock the hook module
jest.mock('../../../hooks/useGetEpisodes/useGetEpisodes');

function renderCard() {
  const navigation = {navigation: jest.fn()} as any;

  return render(
    <SeriesDetails
      route={{
        key: '123',
        name: 'SeriesDetails',
        params: {
          data: serieDetailMock,
        },
      }}
      navigation={navigation}
    />,
  );
}

describe('when the component is rendered', () => {
  beforeAll(() => {
    mockedUseGetEpisodesQuery.mockImplementation(() => ({
      status: 'success',
      data: episodeListMock,
    }));
  });

  it('should show the name', () => {
    const {getByText} = renderCard();
    const name = getByText('Name:\nRicky');
    expect(name).toBeTruthy();
  });
  it('should show the species text', () => {
    const {getByText} = renderCard();
    const name = getByText('Species:\nspecie');
    expect(name).toBeTruthy();
  });
  it('should show the episode section title', () => {
    const {getByText} = renderCard();
    const episodeSectionTitle = getByText('Episodes');
    expect(episodeSectionTitle).toBeTruthy();
  });
  it('should show the episode section list first item', () => {
    const {getByText} = renderCard();
    const episodeSectionListFirstItem = getByText('Humberto');
    expect(episodeSectionListFirstItem).toBeTruthy();
  });
});
