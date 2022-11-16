'use client';
import { createGlobalStyle } from "styled-components";

export { default as StyleRegistry } from "./StyleRegistry";

export const GlobalStyles = createGlobalStyle`
  /* General styles */
  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
  }
  :root {
    /* --primary-color: ; */
    /* --secondary-color: ; */
    /* --accent-color: ; */
    /* --success-color: ; */
    /* --error-color: ; */
    /* --warning-color: ; */
    /* --primary-font: ; */
    /* --secondary-font: ; */
  }
  html {
    font-size: 62.5%;
    /* font-family: var(--primary-font); */
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  body {
    font-size: 1.6rem;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  select,
  textarea,
  button {
    background-color: transparent;
    border: 0;
  }
  button {
    cursor: pointer;
    transition: all 0.1s linear;
  }
  button:active {
    transform: translateY(4px);
  }
  #modal-root,
  #loader-root {
    position: absolute;
  }
  #modal-root {
    z-index: 5;
  }
  #loader-root {
    z-index: 10;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`;
