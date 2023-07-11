/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {useColorScheme} from 'react-native';

import {QueryClient, QueryClientProvider} from 'react-query';
import {ThemeProvider} from 'styled-components';
import {AppNavigator} from './src/navigation';
import {darkTheme, lightTheme} from './src/style/theme';
import {FavoriteSeriesProvider} from './src/contexts/FavoritesSeries';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <QueryClientProvider client={queryClient}>
        <FavoriteSeriesProvider>
          <AppNavigator />
        </FavoriteSeriesProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
