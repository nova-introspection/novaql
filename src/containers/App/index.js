import React, { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import normalizeUrl from 'normalize-url';

import Header from 'components/Header';

library.add(fas);

const App = () => {
  // const poki = 'https://pokeapi-graphiql.herokuapp.com/';
  const country = 'https://countries.trevorblades.com/';

  const getSchema = (url) => {
    const uri = normalizeUrl(url, { forceHttps: true });
    const postBody = { uri };
    fetch('http://localhost:3000/api/schema', {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    // getSchema(country);
  }, []);

  return (
    <main>
      <Header />
    </main>
  );
};

export default App;
