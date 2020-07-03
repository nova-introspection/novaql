import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Container from 'components/Container';
import Header from 'components/Header';

import Main from 'containers/Main';
import Sidebar from 'containers/Sidebar';

library.add(fas);

const sidebar = 260;
const header = 40;

const App = () => {
  const headerOptions = [
    { icon: 'home', size: 17 },
    { icon: 'undo-alt', size: 15 },
    { icon: 'ellipsis-h', size: 19 },
  ];

  return (
    <Container sidebar={sidebar} header={header}>
      <Header options={headerOptions} />
      <Sidebar />
      <Main dimension={{ sidebar, header }} />
    </Container>
  );
};

export default App;
