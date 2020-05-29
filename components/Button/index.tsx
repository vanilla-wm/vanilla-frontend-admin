import styled from 'styled-components'

export default styled.button`
  margin: 0;
  cursor: pointer;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  border: none;
  padding: 14px 16px;
  transition: background-color 0.3s ease-in-out;

  border-radius: 8px;
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
`
