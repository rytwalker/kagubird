"use-client";

import { createGlobalStyle, css } from "styled-components";

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: unset;
    font-family: "Montserrat";
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img,
  picture,
  svg,
  canvas {
    display: block;
    max-inline-size: 100%;
    block-size: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
