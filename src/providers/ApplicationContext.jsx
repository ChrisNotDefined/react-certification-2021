import React from 'react';
import { GlobalStyles } from '../globalStyles';
import { AuthProvider } from './AuthContext';
import { SearchProvider } from './SearchContext';
import { DarkThemeProvider } from './ThemeContext';

function ApplicationContext({ children }) {
  return (
    <DarkThemeProvider>
      <GlobalStyles />
      <AuthProvider>
        <SearchProvider>{children}</SearchProvider>
      </AuthProvider>
    </DarkThemeProvider>
  );
}

export default ApplicationContext;
