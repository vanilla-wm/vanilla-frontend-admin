import { css } from 'styled-components'

export interface Breakpoints<T> {
  [key: string]: T
}

export const getMediaBreakpoints = (
  mediaBreakpoints: Breakpoints<number>,
  rootSize: number
) =>
  Object.entries(mediaBreakpoints).reduce(
    (acc, [label, size]: [string, any]) => ({
      ...acc,
      [label]: (...args: [any]) => css`
        @media (min-width: ${size / rootSize}em) {
          ${css(...args)};
        }
      `,
    }),
    {}
  )

export const getEmBreakpoints = (
  mediaBreakpoints: Breakpoints<number>,
  rootSize
): Breakpoints<string> =>
  Object.entries(mediaBreakpoints).reduce((acc, [breakpoint, size]) => {
    acc[breakpoint] = `${size / rootSize}em`
    return acc
  }, {})

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
}

export const getMedia = (rootSize) => getMediaBreakpoints(breakpoints, rootSize)

export default (rootSize) => getEmBreakpoints(breakpoints, rootSize)
