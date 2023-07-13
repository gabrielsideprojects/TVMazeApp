import React, {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme, lightTheme} from '../style/theme';
import {useColorScheme} from 'react-native';

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
