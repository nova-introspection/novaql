import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  ${({
    justify,
    align,
    direction,
    fullWidth,
    width,
    height,
    gutterBottom,
  }) => css`
    width: ${fullWidth ? '100%' : width};
    height: ${height};
    flex-direction: ${direction || 'row'};
    justify-content: ${justify};
    align-items: ${align};
    margin-bottom: ${gutterBottom && '30px'};
  `};
`;
