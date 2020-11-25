import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#3d4e6f',
    dark_primary: '#2a364d',
    light_primary: '#63718b',
    secondary: '#cc0800',
    dark_secondary: '#8e0500',
    light_secondary: '#d63933',
    dark: '#2e2e2e',
    light: '#f7f7f7',
    medium: '#e2e2e2',
    warnning: '#dfc614',
    green: '#008e6e',
    gray: '#393838',
    gray_lighter: '#424242',
  },
  padding: '0.5rem',
  margin: '0.5rem',
  normal_font: '200',
  bold_font: '400',
  transform: 'all .3s ease-out',
};

export type ThemeType = typeof theme;
export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
