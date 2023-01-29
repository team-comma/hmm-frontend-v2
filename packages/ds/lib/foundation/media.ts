const SCREEN_SIZES = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1040,
  xl: 1920,
};

export const media = {
  bp1: `(min-width: ${SCREEN_SIZES.xs}px)`,
  bp2: `(min-width: ${SCREEN_SIZES.md}px)`,
  bp3: `(min-width: ${SCREEN_SIZES.lg}px)`,
  bp4: `(min-width: ${SCREEN_SIZES.xl}px)`,
};
