export const reset = {
  '*': {
    fontFamily:
      "'Pretendard', 'Spoqa Han Sans Neo', 'Noto Sans KR', 'sans-serif'",
  },

  [`*, *::before, *::after`]: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  [`html, body, #__next`]: {
    height: '100%',
  },

  body: {
    lineHeight: 1.5,
    backgroundColor: '$basic-gray',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  button: {
    margin: 0,
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    cursor: 'pointer',
    padding: 0,
    background: 'inherit',
    overflow: 'visible',
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
