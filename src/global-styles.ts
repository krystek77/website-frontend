import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';
import 'normalize.css';
import WebFont from 'webfontloader';

if (typeof window !== 'undefined') {
  WebFont.load({
    google: {
      families: ['Oswald', 'Open sans', 'sans-serif'],
    },
  });
}

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    *,*::after,*::before {
        box-sizing:border-box
    }
    html {
        color:${({ theme }) => theme.colors.dark};
        background-color:${({ theme }) => theme.colors.light};
        font-size:62.5%;
        font-weight:${({ theme }) => theme.normal_font};
        font-family:'Open sans',sans-serif;
    }
    body {
        width:100%;
        min-height:100vh;
        user-select: none;
        -moz-user-select:none;
        -ms-user-select:none;
        -webkit-user-select: none;
    }
     a{
        text-decoration:none;
        font-size:1.6rem;
        font-family:'Oswald',sans-serif;
        transform: ${({ theme }) => theme.transform};
    }
    a:hover {
        
    }
    a:focus{

    }
    a:active{

    }

    h1,h2,h3,h4,h5,h6 {
        font-weight:${({ theme }) => theme.bold_font};
        margin-top:0;
        margin-bottom:0;
        text-transform:capitalize;
        font-family:'Oswald',sans-serif;
        line-height:1.6;
    }
    h1 {
        font-size:3.2rem;
    }
    h2 {
        font-size:2.8rem;
    }
    h3 {
        font-size:2.4rem;
    }
    h4 {
        font-size:2rem;
    }
    h5 {
        font-size:1.6rem;
    }
    h6 {
        font-size:1.4rem;
    }
    p{
        margin-top:0;
        margin-bottom:0;
        font-size:1.6rem;
        line-height:1.3;
    }
    ul {
        padding-left:0;
        margin-top:0;
        margin-bottom:0;
        list-style-type:none;
    }
    ul > li {
        font-size:1.6rem;
    }
    
   
`;
