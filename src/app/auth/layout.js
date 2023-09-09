'use client';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import './app-layout.css';

const AuthLayout = ({ children }) => {
  const authStyle = {
    backgroundImage: 'linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)',
    backgroundImage: `url(https://media.npr.org/assets/img/2020/04/23/gettyimages-656544055-fe4c8329eb06318947affe3906b7ca4f0a1252c6.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
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
          ...authStyle,
        }}
        className="cw-shadow-for-auth-layout"
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default AuthLayout;
