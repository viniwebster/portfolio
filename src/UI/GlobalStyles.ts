import { createGlobalStyle } from 'styled-components';
import { normalFont, primaryFont } from './variables';

export const GlobalStyles = createGlobalStyle`
  body { 
    font-family: ${primaryFont};
    font-size: ${normalFont};
  }

  * {
      text-decoration: none;
  }
`