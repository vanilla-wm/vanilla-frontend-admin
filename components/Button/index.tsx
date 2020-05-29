import styled, { css } from 'styled-components'

export const BaseButton: any = styled.button`
  margin: 0;
  cursor: pointer;
  appearance: none;
  background: transparent;
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

  ${({ tertiary, isActive, theme: { color } }) =>
    tertiary &&
    css`
      &,
      &:hover {
        padding: 0;
        margin: 14px 16px;
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
`
