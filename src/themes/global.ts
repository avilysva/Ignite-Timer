import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors['green-500']};
  }

  body {
    color: ${props => props.theme.colors['gray-300']};
    background: ${props => props.theme.colors['gray-900']};
  }

  body, button, textarea, input {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`