import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Noto Sans Thai', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
`;

export default GlobalStyle;