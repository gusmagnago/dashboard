import * as styled from 'styled-components';

export default styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body,
  #root {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    position: relative;
  }

  body {
    overflow-x: hidden;
    max-width: 100%;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    min-height: 100%;
    width: 100%;
  }

  main {
    flex-grow: 1;
  }

  *,
  button,
  input {
    border: 0;
    outline: 0;
  }

  button {
    font: inherit;
    border: none;
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: 1.8rem;
  }
`;
