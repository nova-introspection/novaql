import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper } from './styles';

const Icon = (props) => {
  const { icon, size, color, ...rest } = props;
  return (
    <Wrapper size={size} color={color} {...rest}>
      <FontAwesomeIcon icon={['fas', icon]} />
    </Wrapper>
  );
};

export default Icon;
