import Styled, { createGlobalStyle, css } from 'styled-components';

// reset css
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

// 모달팝업 css
const ModalStyle = css`
  .confirm-popup {
    width: 400px;
    height: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ddd;
    &:focus {
      outline: none;
    }
  }
`;

const GlobalStyled = createGlobalStyle`
  ${Reset}
  ${ModalStyle}
`;

export default GlobalStyled;
