import React from 'react';

import Flex from 'components/Flex';
import Text from 'components/Text';
import Icon from 'components/Icon';

import { Wrapper, InputWrapper } from './styles';

const Input = (props) => {
  const {
    fullWidth,
    color,
    error,
    loading,
    width,
    size = 16,
    label,
    ...rest
  } = props;

  const Spinner = (
    <Icon
      left
      size={22}
      color="white"
      icon="spinner"
      iconProps={{ spin: true }}
    />
  );

  const ErrorIcon = <Icon left size={22} color="red" icon="times" />;

  return (
    <Wrapper fullWidth={fullWidth} width={width} color={color}>
      {label && (
        <Text type="subscript" color="white">
          {label}
        </Text>
      )}
      <Flex align="center" justify="center" fullWidth>
        <InputWrapper size={size} {...rest} />
        {loading && Spinner}
        {error && ErrorIcon}
      </Flex>
    </Wrapper>
  );
};

export default Input;
