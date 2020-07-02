import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  ${({ justify, align, direction, fullWidth, height, gutterBottom }) => css`
    width: ${fullWidth && '100%'};
    height: ${height};
    flex-direction: ${direction || 'row'};
    justify-content: ${justify};
    align-items: ${align};
    margin-bottom: ${gutterBottom && '30px'};
  `};
`;
