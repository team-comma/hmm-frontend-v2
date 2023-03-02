import { styled } from '../../stitches.config';

const globalTypoStyles = (
  initialSizes: Record<string, string | number> = {}
) => ({
  ...initialSizes,
  color: 'inherit',
  display: 'inline',
  position: 'relative',
  variants: {
    fontAlign: {
      right: {
        textAlign: 'right',
      },
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
    },
    fontWeight: {
      '700': {
        fontWeight: 700,
      },
      '600': {
        fontWeight: 600,
      },
      '500': {
        fontWeight: 500,
      },
      '400': {
        fontWeight: 400,
      },
      '300': {
        fontWeight: 300,
      },
      '200': {
        fontWeight: 200,
      },
      '100': {
        fontWeight: 100,
      },
    },
    paragraph: {
      true: {
        display: 'block',
      },
    },
  },
});

export const TypoElement = styled('div', globalTypoStyles());

const H1Initial = {
  fontSize: '2.6rem',
  lineHeight: '54px',
  fontWeight: 700,
};

const H2Initial = {
  fontSize: '2.4rem',
  lineHeight: '42px',
  fontWeight: 700,
};

const H3Initial = {
  fontSize: '2.2rem',
  lineHeight: '32px',
  fontWeight: 600,
};

const H4Initial = {
  fontSize: '2rem',
  lineHeight: '32px',
  fontWeight: 600,
};

const H5Initial = {
  fontSize: '1.8rem',
  lineHeight: '30px',
  fontWeight: 500,
};

const H6Initial = {
  fontSize: '1.6rem',
  lineHeight: '28px',
  fontWeight: 400,
};

const Body1Initial = {
  fontSize: '1.4rem',
  lineHeight: '24px',
  fontWeight: 400,
};

const Body2Initial = {
  fontSize: '1.2rem',
  lineHeight: '32px',
  fontWeight: 300,
};

const DetailInitial = {
  fontSize: '1rem',
  lineHeight: '20px',
  fontWeight: 300,
};

export const H1Element = styled('h1', globalTypoStyles(H1Initial));
export const H2Element = styled('h2', globalTypoStyles(H2Initial));
export const H3Element = styled('h3', globalTypoStyles(H3Initial));
export const H4Element = styled('h4', globalTypoStyles(H4Initial));
export const H5Element = styled('h5', globalTypoStyles(H5Initial));
export const H6Element = styled('h6', globalTypoStyles(H6Initial));

export const Body1Element = styled('p', globalTypoStyles(Body1Initial));
export const Body2Element = styled('p', globalTypoStyles(Body2Initial));

export const DetailElement = styled('p', globalTypoStyles(DetailInitial));
