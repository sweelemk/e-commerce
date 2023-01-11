import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.fontFamily.Avenir};
    font-size: ${(props) => props.theme.font.fontSize.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.theme.colors.primaryText};
    font-weight: 200;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
  *, *:after, *:before {
    box-sizing: border-box;
  }

  .title {
    font-size: ${(props) => props.theme.font.fontSize.l};
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.units.unit3};
  }
`;
