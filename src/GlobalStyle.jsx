import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    line-height: 1.6;
    transition: all 0.3s ease;
  }

  h1, h2, h3 {
  font-family: 'Zen Kaku Gothic New', sans-serif;
}

  button, input, select {
    font-family: 'Inter', sans-serif;
  }

  small, em {
  font-family: 'Libre Baskerville', serif;
}
`;

export default GlobalStyle;
