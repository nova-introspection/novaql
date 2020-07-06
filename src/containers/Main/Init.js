import React, { useState } from 'react';

import Flex from 'components/Flex';
import Input from 'components/Input';
import Button from 'components/Button';

const Init = (props) => {
  const { eg } = props;

  const [loading, setLoading] = useState(false);

  const list = Object.keys(eg).map((key) => {
    // const value = eg[key];
    const onClick = () => console.log(key);
    return <Button key={key} text={key} color="blue" onClick={onClick} />;
  });

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <Flex justify="center" align="center" height="100%">
      <div style={{ width: '600px' }}>
        <Input
          size={25}
          color="pink"
          label="GraphQL Endpoint"
          loading={loading}
          disabled={loading}
          fullWidth
          placeholder="https://pokeapi-graphiql.herokuapp.com/"
          onKeyDown={handleSubmit}
        />
        <Flex justify="space-between" align="center" fullWidth height="200px">
          {list}
        </Flex>
      </div>
    </Flex>
  );
};

export default Init;
