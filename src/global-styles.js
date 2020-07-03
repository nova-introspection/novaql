import { createGlobalStyle } from 'styled-components';

// set up personal fonts
// https://google-webfonts-helper.herokuapp.com/fonts

const mainFont = 'Rubik';
const subFont = 'Karla';

const displays = {
  desktop: 960,
  tablet: 600,
  phone: 480,
};

const colors = {
  pink: '#ff8396',
  black: '#262626',
  darkerBlack: '#202020',
  gray: '#808080',
  white: '#f5f5f5',
};

export const text = {
  title: {
    type: 'p',
    style: {
      fontSize: '1.5rem',
      fontFamily: mainFont,
    },
  },
  subtitle: {
    type: 'p',
    style: {
      fontSize: '1.1rem',
      fontFamily: mainFont,
    },
  },
  body: {
    type: 'p',
    style: {
      fontSize: '0.9rem',
      fontFamily: subFont,
    },
  },
  subscript: {
    type: 'span',
    style: {
      fontSize: '0.7rem',
      fontFamily: subFont,
    },
  },
};

export const theme = {
  displays,
  colors,
  text,
};

export const GlobalStyle = createGlobalStyle`
  /* rubik-regular - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: local('Rubik'), local('Rubik-Regular'),
      url('../fonts/rubik-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('../fonts/rubik-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  
  /* karla-regular - latin */
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    src: local('Karla'), local('Karla-Regular'),
      url('../fonts/karla-v13-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('../fonts/karla-v13-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: ${colors.black};
  }
`;
