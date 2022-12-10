export const reset = {
  '*': {
    margin: 0,

    fontFamily: "'Spoqa Han Sans', 'Spoqa Han Sans KR', 'Sans-serif'",
  },

  [`*, *::before, *::after`]: {
    boxSizing: 'border-box',
  },

  [`html, body, #__next`]: {
    height: '100%',
  },

  body: {
    lineHeight: 1.5,
    backgroundColor: '$gray-100',
    '-webkit-font-smoothing': 'antialiased',
  },

  [`img, picture, video, canvas, svg`]: {
    display: 'block',
    maxWidth: '100%',
  },

  [`input, button, textarea, select`]: {
    font: 'inherit',
  },

  [`p, h1, h2, h3, h4, h5, h6`]: {
    overflowWrap: 'break-word',
  },

  ul: {
    listStyleType: 'none',
  },

  [`#root, #__next`]: {
    isolation: 'isolate',
  },

  a: { textDecoration: 'none' },
  'a, button': {
    cursor: 'pointer',
  },
};
