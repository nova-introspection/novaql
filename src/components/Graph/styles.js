import styled, { css } from 'styled-components';

export const Wrapper = styled.svg`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `};
`;

export const Rect = styled.rect`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.colors.black};
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.white};
`;
