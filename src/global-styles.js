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

export const colors = {
  pink: '#ff8396',
  blue: '#5fbf9f',
  black: '#262626',
  darkerBlack: '#202020',
  gray: '#a9a9a9',
  white: '#f5f5f5',
};

export const text = {
  input: subFont,
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
      fontSize: '0.8rem',
      fontFamily: mainFont,
    },
  },
};

export const theme = {
  displays,
  colors,
  text,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: ${colors.black};
  }
`;
