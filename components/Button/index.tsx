import styled, { css } from 'styled-components'

export const BaseButton: any = styled.button`
  margin: 0;
  cursor: pointer;
  appearance: none;
  background: transparent;
  text-decoration: none;
  border-radius: 0;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  border: none;
  transition: background-color 0.2s ease-in-out, fill 0.2s ease-in-out,
    color 0.2s ease-in-out;
`
export default styled(BaseButton)`
  padding: 14px 16px;
  border-radius: 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary.base};

  background-color: ${({
    theme: {
      color: { primary },
    },
  }) => primary.light};

  &:hover {
    background-color: ${({
      theme: {
        color: { primary },
      },
    }) => primary.medium};
  }

  ${({ secondary }: any) =>
    secondary &&
    css`
      &,
      &:hover {
        padding: 0;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        background-color: transparent;
      }

      &:hover {
        color: ${({
          theme: {
            color: { primary },
          },
        }) => primary.medium};
      }
    `}

  ${({ tertiary, isActive, noMargin, theme: { color } }) =>
    tertiary &&
    css`
      & {
        padding: 0;
        border-radius: 0;
        ${!noMargin ? `margin: 14px 16px;` : `margin:0;`}
      }

      &,
      &:hover {
        background: none;
        color: white;
      }

      ${isActive &&
      css`
        & {
          color: ${color.primary.base};
        }
      `}

      &:hover {
        color: ${color.primary.base};
      }
    `}
  
  
  ${({ orange, theme: { color } }) =>
    orange &&
    css`
      &,
      &:hover {
        padding: 0;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        background-color: transparent;
      }

      &:hover {
        color: ${color.orange.medium};
      }

      & {
        color: ${color.orange.base};
      }
    `}

    ${({ inversed, theme: { color } }) =>
      inversed &&
      css`
        &,
        &:hover {
          font-family: ${({ theme: { fontFamily } }) => fontFamily.secondary};
          padding: 14px 34px;
          font-weight: bold;
          font-size: 16px;
          line-height: 140%;
          background-color: black;
        }

        &:hover {
          background-color: ${color.black[100]};
        }

        & {
          color: ${color.primary.base};
        }
      `}

      ${({ normal }) =>
        normal &&
        css`
          &,
          &:hover {
            font-weight: normal;
          }
        `}
      
      ${({ medium }) =>
        medium &&
        css`
          &,
          &:hover {
            font-weight: 500;
          }
        `}
 
`
