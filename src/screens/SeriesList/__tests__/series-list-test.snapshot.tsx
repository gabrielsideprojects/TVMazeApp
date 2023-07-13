import React from 'react';
import {SeriesListScreen} from '..';
import {useGetAllSeries} from '../../../hooks/useGetAllSeries/useGetAllSeries';
import {serieListMock} from '../mocks/mocks';

import {render} from '../../../utils/testUtils';
// import { render } from '../../../utils/testUtils';

const mockedUseUsersQuery = useGetAllSeries as jest.Mock<any>;

// Mock the hook module
jest.mock('../../../hooks/useGetAllSeries/useGetAllSeries');

describe('Series List snapshot testing', () => {
  beforeEach(() => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: 'success',
      data: {
        pages: [serieListMock],
      },
    }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should match snapshot', () => {
    const tree = render(<SeriesListScreen />);
    expect(tree).toMatchSnapshot();
  });
});
