import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  width: 100%;
  height: 100%;
  ${({ sidebar, header }) => css`
    grid-template-rows: ${header}px auto;
    grid-template-columns: ${sidebar}px auto;
  `};
  grid-template-areas:
    'menu   header'
    'menu   main';
`;
