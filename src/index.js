import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css';

import App from 'containers/App';

import { GlobalStyle, theme } from './global-styles';

const render = Component =>
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <Component />
      <GlobalStyle />
    </ThemeProvider>,
    document.querySelector('#root'),
  );

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
