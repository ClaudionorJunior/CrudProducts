import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

let wscale: number = SCREEN_WIDTH / 375;
let hscale: number = SCREEN_HEIGHT / 812;

if (SCREEN_WIDTH > SCREEN_HEIGHT) {
  wscale = SCREEN_HEIGHT / 812;
  hscale = SCREEN_WIDTH / 375;
}

export const normalizePixel = (
  size: number,
  based: 'width' | 'height' = 'width',
) => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
