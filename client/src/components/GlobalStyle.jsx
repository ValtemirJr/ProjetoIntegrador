import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    html, body, #root, .App {
        position: relative;
        min-height: 100vh;
        max-width: 100vw;
        width: 100vw;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 0;
        background: transparent;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export default GlobalStyle;
