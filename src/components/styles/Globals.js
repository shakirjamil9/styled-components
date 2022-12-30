import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @import url();

 *{
    box-sizing: border-box;
 }

 body{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 }

 img{
    width: 100%;
 }
`;

export default GlobalStyles;
