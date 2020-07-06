import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper } from './styles';

const Icon = (props) => {
  const { icon, size, color, iconProps, ...rest } = props;
  return (
    <Wrapper size={size} color={color} {...rest}>
      <FontAwesomeIcon icon={['fas', icon]} {...iconProps} />
    </Wrapper>
  );
};

export default Icon;
