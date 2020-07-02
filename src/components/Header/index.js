import React from 'react';

import Flex from 'components/Flex';
import Icon from 'components/Icon';

import { Wrapper } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Flex justify="space-between" align="center" height="100%">
        <Flex justify="space-between" align="center">
          <Icon
            icon="caret-square-right"
            size={20}
            asButton
            hoverColor="pink"
            color="white"
          />
          <Icon icon="link" size={15} color="white" />
        </Flex>
        <Flex align="center">
          <Icon
            icon="undo-alt"
            size={15}
            color="white"
            asButton
            hoverColor="pink"
            left
          />
          <Icon
            icon="ellipsis-h"
            size={20}
            color="white"
            asButton
            hoverColor="pink"
            left
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Header;
