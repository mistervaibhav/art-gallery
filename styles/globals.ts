import * as styled from "styled-components";

const GlobalStyles = styled.createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: light) {
    html {
      color-scheme: light;
    }
    body {
      color: black;
      background: white;
    }
  }
`;

export default GlobalStyles;
