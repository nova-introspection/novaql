import React from 'react';

import Flex from 'components/Flex';
import Icon from 'components/Icon';

import { Wrapper } from './styles';

const Header = (props) => {
  const { options } = props;

  const list = options.map((item) => {
    const { icon, ...rest } = item;
    return (
      <Icon
        left
        key={icon}
        icon={icon}
        color="white"
        asButton
        hoverColor="pink"
        {...rest}
      />
    );
  });

  return (
    <Wrapper>
      <Flex justify="space-between" align="center" height="100%">
        <Flex justify="space-between" align="center">
          <Icon icon="link" right size={15} color="white" />
        </Flex>
        <Flex align="center">{list}</Flex>
      </Flex>
    </Wrapper>
  );
};

export default Header;
