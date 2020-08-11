import Styled, { createGlobalStyle, css } from "styled-components";

const Reset = css`
  * {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

const GlobalStyled = createGlobalStyle`
  ${Reset}
`;

export default GlobalStyled;
