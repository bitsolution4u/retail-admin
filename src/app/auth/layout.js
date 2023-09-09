'use client';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const AuthLayout = ({ children }) => {
  const themeColor = createTheme({
    // Define your breakpoints here
    palette: {
      primary: {
        main: '#7367F0',
      },
    },
  });
  return (
    <ThemeProvider theme={themeColor}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100vh',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default AuthLayout;
