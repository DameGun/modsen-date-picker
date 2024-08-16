import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    body {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};

        font-family: "Open Sans", sans-serif;
        font-size: ${(props) => props.theme.font.size.md};
    }
`;

export default GlobalStyles;
