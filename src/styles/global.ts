import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.blue};
    color: #000;
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
}
button {
    cursor: pointer;
}
`
