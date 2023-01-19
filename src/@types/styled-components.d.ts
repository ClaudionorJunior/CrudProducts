import { Colors } from './index';

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {}
}
