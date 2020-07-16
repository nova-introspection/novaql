import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Container from 'components/Container';
import Header from 'components/Header';

import Main from 'containers/Main';
import Sidebar from 'containers/Sidebar';

import graphSetup from 'utils/graphSetup';
import postUrl from 'utils/postUrl';

library.add(fas);

const sidebar = 260;
const header = 40;

const App = () => {
  const [node, setNode] = useState();
  const [nodeData, setNodeData] = useState();

  const headerOptions = [
    { icon: 'undo-alt', size: 15, onClick: graphSetup.reset },
    { icon: 'ellipsis-h', size: 19 },
  ];

  const home = () => {
    setNode();
    setNodeData();
  };

  const callback = ({ uri, data }) => {
    setNode(uri);
    setNodeData(data);
  };

  const nodeClicked = (item, handleError) => {
    postUrl(item, callback, handleError);
  };

  return (
    <Container sidebar={sidebar} header={header}>
      <Header options={headerOptions} selected={node} reset={home} />
      <Sidebar />
      <Main
        dimension={{ sidebar, header }}
        data={nodeData}
        handleNode={nodeClicked}
      />
    </Container>
  );
};

export default App;
