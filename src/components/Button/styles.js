import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border-radius: 5px;
  background: transparent;
  outline: none;
  cursor: pointer;
  min-width: 120px;
  transition: background 0.2s, border 0.2s;
  ${({ theme, color, disabled }) => css`
    border: 1px solid ${theme.colors.white};
    :disabled {
      ${disabled &&
      css`
        cursor: default;
        opacity: 0.5;
      `};
    }
    :hover {
      ${!disabled &&
      css`
        background: ${theme.colors[color]};
        border: 1px solid ${theme.colors[color]};
      `};
    }
  `};
`;
