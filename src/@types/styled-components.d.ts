import { GlobalStyles } from '~/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends GlobalStyles {}
}
