import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-touch-callout: none; 
    -webkit-user-select: none;  
    -khtml-user-select: none;    
    -moz-user-select: none;      
    -ms-user-select: none;       
     user-select: none; 
    margin: 0;
    padding: 0;
    background-color: #fff;
    background-image: url(https://i.pinimg.com/originals/64/05/31/6405318ac146473a95bfbdcec2b32943.gif);
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: #fff;
    font-family: 'Arvo', serif;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  h1 {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
