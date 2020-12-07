import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';
import 'normalize.css';
import WebFont from 'webfontloader';

if (typeof window !== 'undefined') {
  WebFont.load({
    google: {
      families: [
        'Oswald:200,300,400,600,700',
        'Open sans:300,400,600,700,800',
        'Lato:300,400,700,900',
        'Fira Code:300,400,500,600,700',
        'sans-serif',
      ],
    },
  });
}

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    *,*::after,*::before {
        box-sizing:border-box
    }
    html {
        color:${({ theme }) => theme.colors.dark};
        background-color:#ffffff;
        font-size:62.5%;
        font-weight:${({ theme }) => theme.normal_font};
    }
    body {
        width:100%;
        min-height:100vh;
        user-select: none;
        -moz-user-select:none;
        -ms-user-select:none;
        -webkit-user-select: none;
        font-family:'Lato',sans-serif;
        overflow-x: hidden;
    }
     a{
        font-weight:${({ theme }) => theme.normal_font};
        text-decoration:none;
        font-size:1.6rem;
        font-family:'Lato',sans-serif;
        transition: ${({ theme }) => theme.transition};
        white-space: nowrap;
    }
    a:hover {  
        color: ${({ theme }) => theme.colors.light_secondary};
    }
    a:focus{
        
        color: ${({ theme }) => theme.colors.dark_secondary};
    }
    a:active{
        
        color: ${({ theme }) => theme.colors.dark_secondary};
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight:${({ theme }) => theme.bold_font};
        margin-top:0;
        margin-bottom:2rem;
        text-transform:capitalize;
        font-family:'Open sans',sans-serif;
        line-height:1.6;
        text-align:left;
    }
    h1 {
        font-size:3.2rem;
        text-align:center;
        font-weight:300;
        text-transform:uppercase;
    }
    h2 {
        font-size:2.4rem;
        text-transform:uppercase;
        font-weight:500;
    }
    h3 {
        font-size:2.2rem;
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
