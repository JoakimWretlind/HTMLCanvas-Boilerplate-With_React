import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  background: #000;
  box-sizing: border-box;
  font-family: "lato", sans-serif;
}

a {
  text-decoration: none;
}

ul, li {
  list-style: none;
}
`