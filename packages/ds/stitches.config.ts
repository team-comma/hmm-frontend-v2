/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  createStitches,
  VariantProps,
  PropertyValue,
  CSS,
  ScaleValue,
} from '@stitches/react';

// eslint-disable-next-line import/no-unresolved
import { colors, sizes, utils, media, reset } from '@/foundation';

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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
