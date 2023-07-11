import {lightTheme, darkTheme} from '../style/theme';

type Theme = typeof light | typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
