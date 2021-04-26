import React from 'react';
import { Router } from './components/router/router';
import { CssBaseline, ThemeProvider, theme } from './theme';
import { AuthContextProvider } from './context';
import axios from 'axios';

axios.defaults.withCredentials = true;

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <CssBaseline />
        <Router />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
