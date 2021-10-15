import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  html, body {
    font-family: Work Sans;
    width: 100%;
    height: 100%;
    overflow-y: overlay;
  }

  #__next { width: 100%; height: 100% }
`;
