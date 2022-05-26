import { createGlobalStyle } from 'styled-components';

// Aqui fica todos os estilos que serão aplicados globalmente

export default createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     border: 0;
     outline: 0;
     box-sizing: border-box;
     font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Montserrat', sans-serif !important;
  }
  h1 {
    font-weight: bold;
    color: #13552C;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
}
  
`;
