import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,300&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


html {
    /* font-size:  100% to jest 16px
    a font-size: 62.5% rem beda calkowitymi wartosciami np 1 rem ===10px,  */
    font-size: 62.5%;  
    /* tutaj ustalamy wielkosc jednostki rem na 10px */
}
body {
    /* font-size: 1.6rem; tutaj mowimy zeby bazowa wielkoscia fonta w przegladarace bylo 16px, zasada happy rems */
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
}

`;

export default GlobalStyle;
