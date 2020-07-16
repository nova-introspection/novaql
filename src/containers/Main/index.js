import React, { useState } from 'react';

import Graph from 'components/Graph';

import { examples } from 'fixtures';

import Init from './Init';
import { Wrapper } from './styles';

const Main = (props) => {
  const { handleNode, data, ...rest } = props;
  const handleClick = (typeName) => {
    console.log(typeName);
  };

  const GraphComponent = (
    <Graph data={data} handleClick={handleClick} {...rest} />
  );

  return (
    <Wrapper>
      {!data ? <Init eg={examples} handleNode={handleNode} /> : GraphComponent}
    </Wrapper>
  );
};

export default Main;
