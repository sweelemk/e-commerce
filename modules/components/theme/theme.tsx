import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components';
import { theme } from './config';

type ThemeProps = {
  children: React.ReactNode
}

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
