import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    color: ${theme.colors.text_primary}
  }
  body {
    background-color: ${theme.colors.background};
    font-size: 16px;
  }
  button {
    cursor: pointer;
    :disabled {
      cursor: default;
    }
  }
`;
