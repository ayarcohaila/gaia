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

  .Toastify__toast-container {
    width: unset;
  }

  #__next { width: 100%; height: 100% }

  ol#alpha {
    counter-reset: alphaItem;
    margin-left: 32px
  }

  ol#alpha > li {
    display: table;
    counter-increment: alphaItem;
    margin-bottom: 12px;
  }

  ol#alpha > li:before {
    content: "(" counter(alphaItem, lower-alpha) ") ";
  }

  ol {
    list-style-type: none;
    counter-reset: item;
    margin: 0;
    padding: 0;
  }

  ol > li {
    display: table;
    counter-increment: item;
    margin-bottom: 12px;
  }

  ol > li:before {
    content: counters(item, ".") ". ";
    display: table-cell;
    padding-right: 12px;
  }

  li ol > li {
    margin: 0;
  }

  li ol > li:before {
    content: counters(item, ".") " ";
  }

  ol > p > ol {
    padding-left: 32px;
  }

  ol > p > ol > p > ol {
    padding-left: 64px;
  }

  ol > p > ol > p {
    margin-left: -32px !important;
  }

  ol > p > ol > p > ol > p {
    margin-left: -64px !important;
  }

  ol > ol > ol > ol > p {
    margin-left: -96px !important;
  }

`;

export { GlobalStyles };
