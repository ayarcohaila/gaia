import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  html, body {
    font-family: Work Sans;
    width: 100vw;
    height: 100vh;
    overflow-y: overlay;
    background-color: #f4f4f6
  }

  #__next { width: 100%; height: 100% }
`;

export { GlobalStyles };
