import React, { useState } from 'react';

import Flex from 'components/Flex';
import Input from 'components/Input';
import Button from 'components/Button';

const Init = (props) => {
  const { eg, handleNode } = props;

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setInput(e.target.value);
  const handleError = () => {
    setSelected('');
    setLoading(false);
    setError(true);
  };

  const submit = (val, url) => {
    setError(false);
    setSelected(val);
    setLoading(true);
    handleNode(url || val, handleError);
  };

  const list = Object.keys(eg).map((key) => {
    const value = eg[key];
    const onClick = () => submit(key, value);
    return (
      <Button
        key={key}
        text={key}
        loading={selected === key}
        disabled={loading}
        color="blue"
        onClick={onClick}
      />
    );
  });

  const handleSubmit = (e) => {
    if (e.key === 'Enter') submit(input);
  };

  return (
    <Flex justify="center" align="center" height="100%">
      <div style={{ width: '600px' }}>
        <Input
          size={25}
          value={input}
          onChange={handleChange}
          color="pink"
          label="GraphQL Endpoint"
          loading={input && selected === input}
          disabled={loading}
          error={error}
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
