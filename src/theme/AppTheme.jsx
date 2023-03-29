import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { LightTheme } from './';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ LightTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      
      { children }
    </ThemeProvider>
  )
}