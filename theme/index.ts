import getBreakpoints, { getMedia } from './breakpoints'

const rootSize = 16

export default {
  rootSize,
  breakpoints: getBreakpoints(rootSize),
  media: getMedia(rootSize),
  spacing: [
    0,
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    16,
    18,
    20,
    22,
    24,
    26,
    28,
    30,
    32,
    34,
    36,
    38,
    40,
  ],
  fontFamily: {
    base: `
      'Work Sans',
      sans-serif
    `,
    secondary: `
      'Space Mono',
      sans-serif
    `,
  },
  color: {
    transparent: 'transparent',
    white: {
      '300': '#AEAEB2',
    },
    black: {
      '100': '#2C2D2E',
      '400': '#636366',
    },
    primary: {
      base: '#FEB611',
      medium: 'rgba(254, 182, 17, 0.4)',
      light: 'rgba(254, 182, 17, 0.2)',
    },
  },
}
