import React, { useState, useEffect } from 'react';

import Graph from 'components/Graph';
import Flex from 'components/Flex';

import postUrl from 'utils/postUrl';

import Init from './Init';
import { Wrapper } from './styles';

const examples = {
  pokemon: 'https://pokeapi-graphiql.herokuapp.com/',
  countries: 'https://countries.trevorblades.com/',
  swapi: 'https://swapi.apis.guru',
  catalysis: 'http://api.catalysis-hub.org/graphql',
};

const Main = (props) => {
  const [data, setData] = useState({});
  const [node, setNode] = useState({});

  const callback = (result) => setData(result);

  // useEffect(() => {
  // postUrl(country, callback);
  // }, []);

  const handleClick = (typeName) => {
    console.log(typeName);
  };

  const GraphComponent = (
    <Graph data={data} handleClick={handleClick} {...props} />
  );

  return (
    <Wrapper>
      <Init eg={examples} />
    </Wrapper>
  );
};

export default Main;
