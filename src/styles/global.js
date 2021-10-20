import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: 'Poppins';
        box-sizing: border-box;
    }
    body, html {
        background-color: #F7F7F7;
    }
`;

export default GlobalStyles;
