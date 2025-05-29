import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

export const sheet = new ServerStyleSheet();

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`; 