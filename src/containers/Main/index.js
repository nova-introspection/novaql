import React, { useState, useEffect } from 'react';

import Graph from 'components/Graph';

import postUrl from 'utils/postUrl';

import { Wrapper } from './styles';

const Main = (props) => {
  // const poki = 'https://pokeapi-graphiql.herokuapp.com/';
  const country = 'https://countries.trevorblades.com/';

  const [data, setData] = useState({});
  const [node, setNode] = useState({});

  const callback = (result) => setData(result);

  useEffect(() => {
    postUrl(country, callback);
  }, []);

  const handleClick = (typeName) => {
    console.log(typeName);
  };

  return (
    <Wrapper>
      <Graph data={data} handleClick={handleClick} {...props} />
    </Wrapper>
  );
};

export default Main;
