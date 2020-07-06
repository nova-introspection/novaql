import React from 'react';

import Text from 'components/Text';
import Icon from 'components/Icon';

import { Wrapper } from './styles';

const Button = (props) => {
  const { text, color = 'white', loading, ...rest } = props;

  const Loader = (
    <Icon icon="spinner" color="white" size={20} iconProps={{ spin: true }} />
  );

  return (
    <Wrapper color={color} {...rest}>
      {loading ? Loader : <Text color="white">{text}</Text>}
    </Wrapper>
  );
};

export default Button;
