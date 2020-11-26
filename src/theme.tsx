import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    secondary: '#009fe3',
    dark_secondary: '#006f9e',
    light_secondary: '#33b2e8',
    primary: '#cc0800',
    dark_primary: '#8e0500',
    light_primary: '#d63933',
    dark: '#2e2e2e',
    light: '#f7f7f7',
    medium: '#e2e2e2',
    warnning: '#dfc614',
    green: '#008e6e',
    gray: '#393838',
    gray_lighter: '#424242',
  },
  padding: '0.5',
  margin: '0.5',
  normal_font: '300',
  bold_font: '700',
  transition: 'all .3s ease-out',
  breakpoint_small: '576px',
  breakpoint_medium: '768px',
  breakpoint_large: '992px',
  breakpoint_xlarge: '1200px',
};

export type ThemeType = typeof theme;
export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
