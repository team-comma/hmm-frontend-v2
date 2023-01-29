import {
  createStitches,
  VariantProps,
  PropertyValue,
  CSS,
  ScaleValue,
} from '@stitches/react';

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

export type { VariantProps, PropertyValue, CSS, ScaleValue };
