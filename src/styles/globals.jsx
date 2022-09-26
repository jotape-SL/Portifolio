import { createGlobalStyle } from "styled-components";

// export const GlobalStyle = {

// };

const GlobalStyle = createGlobalStyle`
  breakpoints: {
    "Breakpoints.xs": 0,
    "Breakpoints.sm": 480,
    "Breakpoints.md": 768,
    "Breakpoints.lg": 992,
    "Breakpoints.xl": 1200,
  },
  colors: {
    primary: {
       //yet to fill
    },
  },
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
