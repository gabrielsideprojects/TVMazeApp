import React from 'react';
import {CharacterScreen} from '..';
import {useGetAllCharacters} from '../../../hooks/useGetAllSeries/useGetAllSeries';
import {characterMock} from '../mocks/mocks';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../../../style/theme';
// import { render } from '../../../utils/testUtils';

const mockedUseUsersQuery = useGetAllCharacters as jest.Mock<any>;

// Mock the hook module
jest.mock('../../../hooks/useGetAllCharacters/useGetAllCharacters');

describe('Character snapshot testing', () => {
  beforeEach(() => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: 'success',
      data: {
        pages: [characterMock],
      },
    }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should match snapshot', () => {
    const tree = render(
      <ThemeProvider theme={theme}>
        {' '}
        <CharacterScreen />{' '}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
