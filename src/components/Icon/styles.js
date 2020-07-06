import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  -webkit-app-region: no-drag;
  margin-right: ${({ right }) => right && '15px'};
  margin-left: ${({ left }) => left && '15px'};
  & > svg {
    ${({ theme, asButton, color, size, hoverColor }) => css`
      font-size: ${size}px;
      color: ${theme.colors[color]};
      cursor: ${asButton && 'pointer'};
      transition: color 0.2s;
      :hover {
        color: ${theme.colors[hoverColor]};
      }
    `};
  }
`;
