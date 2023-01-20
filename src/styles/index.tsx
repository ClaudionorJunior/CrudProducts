import { css } from 'styled-components/native';

export type Colors = typeof colors;
export type GlobalStyles = typeof globalStyles;
export type mapColors = keyof Colors;

const fonts = {
  regular: (size: number, lineHeight: number, colors: mapColors) => {
    return css`
      font-family: 'Roboto_400Regular';
      font-size: ${size}px;
      line-height: ${lineHeight}px;
      color: ${colors};
    `;
  },
  medium: (size: number, lineHeight: number, colors: mapColors) => {
    return css`
      font-family: 'Roboto_500Medium';
      font-size: ${size}px;
      line-height: ${lineHeight}px;
      color: ${colors};
    `;
  },
  bold: (size: number, lineHeight: number, colors: mapColors) => {
    return css`
      font-family: 'Roboto_700Bold';
      font-size: ${size}px;
      line-height: ${lineHeight}px;
      color: ${colors};
    `;
  },
};

const colors = {
  primary: '#5185C1',
  primary1: '#5185C1',
  primary2: '#084B99',
  secondary1: '#FFC359',
  secondary2: '#E6A739',
  secondary3: '#996A17',
  borderColor: '#9ea3a1',
  neutral: '#9ea3a1',
  textColor: '#403E3E',
  warning: '#FFAE40',
  danger: '#CC1F1F',
  success: '#60AE31',
  backgroudColor: '#E5E5E5',
  white: '#fff',
};

const globalStyles = {
  colors,
  fonts,
};

export default globalStyles;
