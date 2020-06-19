import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F0F0F5;
    color: #A49E9B;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
