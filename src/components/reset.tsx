import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-weight: 700;
  }
`;

export default GlobalStyle;
