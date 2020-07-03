import React from 'react';

import { text } from 'global-styles';

import { Wrapper } from './styles';

const Text = (props) => {
  const { children, type = 'body', ...rest } = props;

  const as = text[type].type || 'p';

  return (
    <Wrapper type={type} {...rest} as={as}>
      {children}
    </Wrapper>
  );
};

export default Text;
