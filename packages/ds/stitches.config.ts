import { createStitches } from '@stitches/react';

import { colors, sizes, utils, media, reset } from './foundation';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    ...colors,
    ...sizes,
  },
  ...media,
  ...utils,
});

export const globalStyles = globalCss({
  ...reset,
});
