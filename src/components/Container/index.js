import React from 'react';

import { Wrapper } from './styles';

const Container = (props) => {
  const { children, ...rest } = props;
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Container;
