import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Serif', 'Times New Roman', Arial, Helvetica, sans-serif;
    }

    :root {
        --white: #FFF;
        --purple: #75066A;
        --purpleLight: #9B5C86;
        --pink: #EB09FF;
    }

    body {
        background: rgba(220, 177, 227, 0.76);

        &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--purpleLight);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--purple);
    border-radius: 10px;
  }
    }

    button {
        cursor: pointer;
    }
`;
