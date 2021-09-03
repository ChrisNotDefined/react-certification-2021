import React from 'react';
import { GlobalStyles } from '../globalStyles';
import { AuthProvider } from './AuthContext';
import { FavoritesProvider } from './FavoritesContext';
import { SearchProvider } from './SearchContext';
import { DarkThemeProvider } from './ThemeContext';

function ApplicationContext({ children }) {
  return (
    <DarkThemeProvider>
      <GlobalStyles />
      <AuthProvider>
        <FavoritesProvider>
          <SearchProvider>{children}</SearchProvider>
        </FavoritesProvider>
      </AuthProvider>
    </DarkThemeProvider>
  );
}

export default ApplicationContext;
