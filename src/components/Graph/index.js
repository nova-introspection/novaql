import React, { useEffect } from 'react';

import useWindow from 'hooks/useWindow';
import graphSetup from 'utils/graphSetup';

import { Wrapper, Rect, Path } from './styles';

const Graph = (props) => {
  const { data, handleClick, dimension } = props;
  const { sidebar, header } = dimension;
  const { setup } = graphSetup;

  const [width, height] = useWindow();

  useEffect(() => {
    if (data.nodes) {
      data.nodes.forEach((item) => {
        item.radius = item.name.length * 4.4 + 25;
      });
      setup(data, handleClick);
    }
  }, [data]);

  const x = width - sidebar;
  const y = height - header;

  return (
    <Wrapper id="graph" width={x} height={y}>
      <Rect />
      <g className="everything">
        <defs>
          <marker
            id="end-arrow"
            viewBox="0 -5 10 10"
            refX="10"
            refY="0"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <Path d="M0,-5L10,0L0,5" />
          </marker>
        </defs>
      </g>
    </Wrapper>
  );
};

export default Graph;
