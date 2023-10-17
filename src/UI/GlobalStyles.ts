import { createGlobalStyle } from "styled-components";
import { darkColor, normalFont, primaryFont, veryDarkColor } from "./variables";

export const GlobalStyles = createGlobalStyle`
  body { 
    font-family: ${primaryFont};
    font-size: ${normalFont};
  }

  * {
      text-decoration: none;
  }

  body::-webkit-scrollbar {
  width: 12px;
}

  body::-webkit-scrollbar-track {
    background: ${veryDarkColor};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${darkColor};
    border-radius: 20px;
  }

`;
