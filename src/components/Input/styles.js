import styled from 'styled-components';

import { colors } from 'global-styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme, color }) => theme.colors[color]};
  width: ${({ fullWidth, width }) => (fullWidth ? '100%' : `${width}px`)};
`;

export const InputWrapper = styled.input`
  font-family: ${({ theme }) => theme.text.input};
  font-size: ${({ size }) => size}px;
  padding: 5px 0;
  border: none;
  outline: none;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  color: ${colors.white};
  :placeholder {
    color: ${colors.gray};
  }
`;
